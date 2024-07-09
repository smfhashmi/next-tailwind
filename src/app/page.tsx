import {VideoCard} from "@/components/VideoCard";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex justify-between"> 
      <h1>welcome to nextjs practo</h1>
      <Link href="/dashboard">go to dashboard</Link>
      <VideoCard />
    </div>
  );
}
