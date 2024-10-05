import Link from "next/link";


export const metadata = {
  title: 'HOME NEXT JS'
}
 
export default function Home() {
  return (
    <div className="flex flex-col items-center text-center my-32 justify-center">
      <h1 className="text-2xl font-semibold underline">Home Page</h1>
    </div>
  );
}
