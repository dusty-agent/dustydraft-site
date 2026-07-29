"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white/50 backdrop-blur border-b border-black/10 z-50">
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
            href="/services"
            target="_blank"
            rel="noopener noreferrer"
          >
            서비스
          </Link>
          
          <Link 
            href="/workspace/real-estate-toolkit/investment-analysis"
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
  <div className="absolute right-6 top-16 w-48 bg-white rounded-2xl border border-black/10 shadow-xl p-4">

    <div className="flex flex-col">

      <Link
        href="/workspace"
        className="px-3 py-2 rounded-lg hover:bg-neutral-100"
      >
        Workspace
      </Link>

      <Link
        href="/library"
        className="px-3 py-2 rounded-lg hover:bg-neutral-100"
      >
        Library
      </Link>

      <Link
        href="/about"
        className="px-3 py-2 rounded-lg hover:bg-neutral-100"
      >
        About
      </Link>

    </div>

  </div>
)}

    </header>
  );
}
