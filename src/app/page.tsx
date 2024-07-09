import Link from "next/link";
export default async function Home() {
  const res = await fetch("http://localhost:3002/api/get");
  const data = await res.json();

  return (
    <div className="flex justify-between"> 
      <h1>welcome to nextjs practo</h1>
      <Link href="/dashboard">go to dashboard</Link>
      {JSON.stringify(data)}
    </div>
  );
}
