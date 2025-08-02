export default async function  BlogPost({params}) {
    const params1 = await params;
    return <h1>Blog Post: {params1.slug}</h1>;
}