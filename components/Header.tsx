"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/70 backdrop-blur-xl">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" onClick={closeMenu}>
          <img
            src="/images/dd.png"
            alt="DustyDraft"
            width={32}
            height={32}
            className="rounded-full"
          />
        </Link>

        {/* Main Navigation */}
        <nav className="flex items-center gap-5 md:gap-7 text-sm">

          <Link
            href="/brands"
            className="hidden sm:inline hover:opacity-50 transition"
          >
            브랜드
          </Link>

          <Link
            href="/api"
            className="hidden sm:inline hover:opacity-50 transition"
          >
            API
          </Link>

          <Link
            href="/workspace"
            className="hidden sm:inline hover:opacity-50 transition"
          >
            워크스페이스
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="메뉴 열기"
            aria-expanded={menuOpen}
            className="text-xl leading-none hover:opacity-50 transition"
          >
            ☰
          </button>

        </nav>
      </div>

      {/* Dropdown */}
      {menuOpen && (
        <>
          {/* outside click layer */}
          <button
            type="button"
            aria-label="메뉴 닫기"
            onClick={closeMenu}
            className="fixed inset-0 z-40 cursor-default"
          />

          <div className="absolute right-6 top-16 z-50 w-56 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-xl">

            <div className="p-3">

              <p className="px-3 pt-2 pb-2 text-[10px] tracking-[0.22em] uppercase text-neutral-400">
                Explore
              </p>

              <Link
                href="/brands"
                onClick={closeMenu}
                className="block px-3 py-2.5 rounded-lg hover:bg-neutral-100 transition"
              >
                브랜드
              </Link>

              <Link
                href="/workspace"
                onClick={closeMenu}
                className="block px-3 py-2.5 rounded-lg hover:bg-neutral-100 transition"
              >
                워크스페이스
              </Link>

              <Link
                href="/library"
                onClick={closeMenu}
                className="block px-3 py-2.5 rounded-lg hover:bg-neutral-100 transition"
              >
                라이브러리
              </Link>

              <Link
                href="/insights"
                onClick={closeMenu}
                className="block px-3 py-2.5 rounded-lg hover:bg-neutral-100 transition"
              >
                인사이트
              </Link>

              <div className="my-2 border-t border-black/10" />

              <p className="px-3 pt-2 pb-2 text-[10px] tracking-[0.22em] uppercase text-neutral-400">
                Build
              </p>

              <Link
                href="/api"
                onClick={closeMenu}
                className="block px-3 py-2.5 rounded-lg hover:bg-neutral-100 transition"
              >
                Public API
              </Link>

              <Link
                href="/open-source"
                onClick={closeMenu}
                className="block px-3 py-2.5 rounded-lg hover:bg-neutral-100 transition"
              >
                오픈소스
              </Link>

              <div className="my-2 border-t border-black/10" />

              <Link
                href="/about"
                onClick={closeMenu}
                className="block px-3 py-2.5 rounded-lg hover:bg-neutral-100 transition"
              >
                About DustyDraft
              </Link>

              <Link
                href="/company"
                onClick={closeMenu}
                className="block px-3 py-2.5 rounded-lg hover:bg-neutral-100 transition"
              >
                About Draft
              </Link>

            </div>
          </div>
        </>
      )}

    </header>
  );
}