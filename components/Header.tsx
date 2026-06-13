"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-[#ede4da]/90 backdrop-blur border-b border-black/10 z-50">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link href="/">
          <img
            src="/images/dd.png"
            alt="Dusty Draft"
            width={32}
            height={32}
            className="rounded-full"
          />
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <Link href="/insights">인사이트</Link>

          <Link 
            href="/products/real-estate-toolkit/investment-analysis"
            target="_blank"
            rel="noopener noreferrer"
          >
            투자분석계산
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-xl"
          >
            ☰
          </button>
        </nav>

      </div>

      {menuOpen && (
        <div className="absolute right-6 top-16 bg-white border rounded-xl shadow-lg p-4">
          <div className="flex flex-col gap-3">
            <Link href="/services">Services</Link>
            <Link href="/products">Products</Link>
            <Link href="/studio">Studio</Link>
            <Link href="/content">Content</Link>
            <Link href="/company">Company</Link>
          </div>
        </div>
      )}

    </header>
  );
}
