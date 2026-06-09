import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 bg-[#ede4da]/90 backdrop-blur border-b border-black/10 z-50">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

      <Link href="/">
        <Image
        src="/images/dd.png"
        alt="Dusty Draft"
        width={32}
        height={32}
        className="rounded-full"
        />
    </Link>

        <nav className="flex gap-6 text-sm">
          <Link href="/studio">Studio</Link>
          <Link href="/products">Products</Link>
          <Link href="/content">Content</Link>
          <Link href="/resource">Resources</Link>
          <Link href="/company">Company</Link>
        </nav>

      </div>
    </header>
  );
}