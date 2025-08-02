import fs from 'fs'

export default async function blog(req, res) {
  // console.log(req.body);

  if (req.method === "POST" && req.body) {
  // POST http://localhost:3000/api/blog
  //   {
  //     "name": "asdfaf",
  //     "email": "asdf@ss.ss",
  //     "title": "asdf",
  //     "shortDescription": "asdf",
  //     "description": "asdf"
  // }

    try {
        let data = JSON.parse(req.body);
        const totalBlog = await fs.promises.readdir("src/pages/blogdata");
        let currentIndex = totalBlog.length+1;
        data['slug'] = "blog_"+currentIndex;
        const addBlog = await fs.promises.writeFile(`src/pages/blogdata/blog_${currentIndex}.json`, JSON.stringify(data));
        return res.status(200).json({ message: `Blog has been saved successfully` });
      } catch (err) {
        return res.status(500).json({ message: `Something went wrong`,e:err });
      }

  } else if (req.method === "GET") {
    // console.log(req.query.slug);
    // GET http://localhost:3000/api/blog
    // GET http://localhost:3000/api/blog/?slug=blog_1
    let response = [];
    try {
      if(req.query.slug) {

        let slug = req.query.slug;
        let blogContent = await fs.promises.readFile(`src/pages/blogdata/${slug}.json`, 'utf-8');
        response.push(JSON.parse(blogContent));

      } else {

        let blogs = await fs.promises.readdir("src/pages/blogdata");
        for(let index in blogs) {
          let data = blogs[index];
          let blogContent = await fs.promises.readFile(`src/pages/blogdata/${data}`, 'utf-8');
          response.push(JSON.parse(blogContent));
        }

      }
    } catch (err) {
          
    }
    return res.status(200).json(response);
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
