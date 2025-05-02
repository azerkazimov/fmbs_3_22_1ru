import Link from "next/link";

export default function About() {
  return (
    <div className="container mx-4">
      <div>About</div>
      <div className="flex gap-2 ">
        <button className="bg-white text-black p-2 border rounded-xl">
          <Link href="/">Main page</Link>
        </button>
        <button className="bg-white text-black p-2 border rounded-xl">
          <Link href="/contacs">Contacs</Link>
        </button>
      </div>
    </div>
  );
}
