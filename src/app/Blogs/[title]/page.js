export default function ShowBlog({params}) {
    return (
        <div className="flex flex-col items-center text-center my-32 justify-center">
        <h1 className="text-2xl font-semibold underline">Blog Detail</h1>  
        <h1 className="text-2xl font-semibold underline">{params.title}</h1>  
      </div>
    )
}