import Link from "next/link";

const Blog = [
    {
        id: 1,
        title: "Blog1",
        content: "This is the content of blog 1"
    },
    {
        id: 2,
        title: "Blog2",
        content: "This is the content of blog 2"
    },
    {
        id: 3,
        title: "Blog3",
        content: "This is the content of blog 3"
    }
];


export const metadata = {
    title: 'Blogs'
  }
  
export default function Blogs() {
    return (
        <div className="flex flex-col items-center text-center my-32 justify-center">
        <h1 className="text-2xl font-semibold underline">Blogs</h1>  
        {
            Blog.map((data) => (
                <div key={data.id} className="my-4">
                    <Link href={`/Blogs/${data.title}`}><h2 className="text-xl font-semibold">{data.title}</h2>
                    <p>{data.content}</p></Link>
                </div>
            ))
        }
      </div>
    )
}