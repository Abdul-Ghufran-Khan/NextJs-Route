import Link from "next/link";


export const metadata = {
  title: 'HOME NEXT JS'
}
 
export default function Home() {
  return (
    <div className="flex flex-col items-center text-center my-32 justify-center">
      <h1 className="text-2xl font-semibold underline">Home Page</h1>
      <Link href={"/aboutus"}><button className="bg-slate-800 py-2 px-3 my-4 rounded-md">About Us</button></Link>
      <Link href={"/contactus"}><button className="bg-slate-800 py-2 px-3 my-4 rounded-md">Contact Us</button></Link>
      <Link href={"/Dashboard"}><button className="bg-slate-800 py-2 px-3 my-4 rounded-md">Dashboard</button></Link>
      <Link href={"/Blogs"}><button className="bg-slate-800 py-2 px-3 my-4 rounded-md">Blogs</button></Link>
    </div>
  );
}
