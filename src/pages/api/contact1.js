let submissions = []; // In-memory storage (you can replace this with a DB)
//POST http://localhost:3001/api/contact1
//{   "name":"asdf" }
export default function handler1(req, res) {
  console.log(req);
  if (req.method === "POST") {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Name is required." });
    }

    submissions.push({ name, timestamp: new Date() });
    return res.status(200).json({ message: `Hello, ${name}! Submission saved.` });
  } else if (req.method === "GET") {
    return res.status(200).json(submissions);
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
