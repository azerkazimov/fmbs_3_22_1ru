import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function App() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-screen w-full gap-3 ">
      <Image
        src="https://indogamers.com/_next/image?url=https%3A%2F%2Fassets.indogamers.com%2Fmedia%2Fimages%2F2024%2F05%2F30%2Fdesain_tanpa_judul_45.webp&w=3840&q=75"
        alt="logo"
        width={150}
        height={150}
      />
      <Button>
        <Link href="/">Main page</Link>
      </Button>
    </div>
  );
}
