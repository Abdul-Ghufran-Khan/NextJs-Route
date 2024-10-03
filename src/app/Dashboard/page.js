import Link from "next/link";

export default function Dashboard(){
    return(
        <div className="flex flex-col items-center text-center my-32 justify-center">
      <h1 className="text-2xl font-semibold underline">Dashboard</h1>
      <Link href={"/Dashboard/settings"}><button className="bg-slate-800 py-2 px-3 my-9 rounded-md">Settings</button></Link>
      <Link href={"/Dashboard/profile"}><button className="bg-slate-800 py-2 px-3 my-4 rounded-md">Profile</button></Link>
      <Link href={"/"}><button className="bg-slate-800 py-2 px-3 my-4 rounded-md">Home</button></Link>
    </div>
    );
}