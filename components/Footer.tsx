import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 py-16">

        {/* Brand */}
        <Link
          href="/"
          className="text-2xl font-semibold tracking-wide hover:opacity-80 transition"
        >
          DUSTYDRAFT®
        </Link>

        <p className="mt-4 leading-7 text-neutral-400 max-w-2xl">
          AI와 기술을 활용해 아이디어를 제품, 서비스와 브랜드로 발전시킵니다.
          <br />

          <span className="text-neutral-500">
            Technology, products, services and brand incubation by draft.
          </span>
        </p>


        {/* Explore */}
        <div className="mt-12">

          <p className="text-xs tracking-[0.25em] text-neutral-500 uppercase">
            Explore
          </p>

          <div className="mt-5 flex flex-wrap gap-x-8 gap-y-4 text-sm">

            <Link
              href="/brands"
              className="text-neutral-300 hover:text-white transition"
            >
              Brands →
            </Link>

            <Link
              href="/workspace"
              className="text-neutral-300 hover:text-white transition"
            >
              Workspace →
            </Link>

            <Link
              href="/library"
              className="text-neutral-300 hover:text-white transition"
            >
              Library →
            </Link>

            <Link
              href="/insights"
              className="text-neutral-300 hover:text-white transition"
            >
              Insights →
            </Link>

            <Link
              href="/about"
              className="text-neutral-300 hover:text-white transition"
            >
              About →
            </Link>

          </div>

        </div>


        {/* Brands & Products */}
        <div className="mt-10">

          <p className="text-xs tracking-[0.25em] text-neutral-500 uppercase">
            Brands & Products
          </p>

          <div className="mt-5 flex flex-wrap gap-x-8 gap-y-4 text-sm">

            <Link
              href="/brands/dustie"
              className="text-neutral-300 hover:text-white transition"
            >
              Dustie →
            </Link>

            <Link
              href="/brands/assetpicker"
              className="text-neutral-300 hover:text-white transition"
            >
              AssetPicker →
            </Link>

            <Link
              href="/brands/exotic-ordinary"
              className="text-neutral-300 hover:text-white transition"
            >
              EXOTIC ORDINARY® →
            </Link>

            <Link
              href="/brands/voutiq"
              className="text-neutral-300 hover:text-white transition"
            >
              Voutiq →
            </Link>

            <Link
              href="/brands/the-exotic-voutique"
              className="text-neutral-300 hover:text-white transition"
            >
              The Exotic Voutique™ →
            </Link>

            <Link
              href="/brands/the-exotic-boutique"
              className="text-neutral-300 hover:text-white transition"
            >
              The Exotic Boutique →
            </Link>

          </div>

        </div>


        {/* Channels / Media */}
        <div className="mt-10">

          <p className="text-xs tracking-[0.25em] text-neutral-500 uppercase">
            Channels / Media
          </p>

          <div className="mt-5 flex flex-wrap gap-x-8 gap-y-4 text-sm">

            <a
              href="https://www.youtube.com/@dustydraft"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white transition"
            >
              DustyDraft YouTube ↗
            </a>

            <a
              href="https://www.youtube.com/@assetpicker"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white transition"
            >
              AssetPicker YouTube ↗
            </a>

            <a
              href="https://www.youtube.com/@draftambient"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white transition"
            >
              DraftAmbient ↗
            </a>

            <a
              href="https://instagram.com/moodarchives.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white transition"
            >
              Mood Archives ↗
            </a>

            <a
              href="https://instagram.com/exoticordinary_official"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white transition"
            >
              Exotic Ordinary Instagram ↗
            </a>

            <a
              href="https://instagram.com/dustiebuddy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white transition"
            >
              Dustie Buddy ↗
            </a>

          </div>

        </div>


        {/* Build */}
        <div className="mt-10">

          <p className="text-xs tracking-[0.25em] text-neutral-500 uppercase">
            Build
          </p>

          <div className="mt-5 flex flex-wrap gap-x-8 gap-y-4 text-sm">

            <Link
              href="/api"
              className="text-neutral-300 hover:text-white transition"
            >
              Public API →
            </Link>

            <Link
              href="/open-source"
              className="text-neutral-300 hover:text-white transition"
            >
              Open Source →
            </Link>

            <Link
              href="/workspace/real-estate-toolkit"
              className="text-neutral-300 hover:text-white transition"
            >
              Real Estate Toolkit →
            </Link>

            <Link
              href="/workspace/assist"
              className="text-neutral-300 hover:text-white transition"
            >
              ASSIST →
            </Link>

            <a
              href="https://www.dustie.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white transition"
            >
              Dustie Alpha ↗
            </a>

          </div>

        </div>


        {/* Network */}
        <div className="mt-10">

          <p className="text-xs tracking-[0.25em] text-neutral-500 uppercase">
            Network
          </p>

          <div className="mt-5 flex flex-wrap gap-x-8 gap-y-4 text-sm">

            <a
              href="https://draft.best"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition"
            >
              draft.best ↗
            </a>

            <a
              href="https://exoticordinary.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition"
            >
              exoticordinary.com ↗
            </a>

            <a
              href="https://www.dustie.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition"
            >
              dustie.xyz ↗
            </a>

          </div>

        </div>


        {/* Policy */}
        <div className="mt-12 pt-8 border-t border-white/10">

          <p className="text-xs tracking-[0.25em] text-neutral-500 uppercase">
            Policy
          </p>

          <div className="mt-5 flex flex-wrap gap-8 text-sm">

            <Link
              href="/terms"
              className="text-neutral-300 hover:text-white transition"
            >
              이용약관
              <span className="ml-2 text-neutral-500">
                Terms of Service
              </span>
            </Link>

            <Link
              href="/privacy"
              className="text-neutral-300 hover:text-white transition"
            >
              개인정보처리방침
              <span className="ml-2 text-neutral-500">
                Privacy Policy
              </span>
            </Link>

            <Link
              href="/ai-policy"
              className="text-neutral-300 hover:text-white transition"
            >
              AI 정책
              <span className="ml-2 text-neutral-500">
                AI Policy
              </span>
            </Link>

          </div>

        </div>


        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10">

          <p className="text-sm text-neutral-400">
            © 2019–2026 DUSTYDRAFT®. All Rights Reserved.
          </p>

          <p className="mt-2 text-sm text-neutral-500">
            DUSTYDRAFT®는 드래프트(draft)의 등록상표입니다.
            <br />

            <span className="text-neutral-600">
              DUSTYDRAFT® is a registered trademark of draft.
            </span>
          </p>

        </div>


        {/* Legal */}
        <div className="mt-12 pt-8 border-t border-white/10 space-y-7">

          <p className="text-xs leading-7 text-neutral-500">
            본 웹사이트의 디자인, 데이터셋, 소스코드 및 기타 콘텐츠의
            저작권은 드래프트(draft) 또는 정당한 권리자에게 있습니다.
            <br />

            <span className="text-neutral-600">
              Software, datasets, source code, documentation and other
              contents are protected by applicable copyright and trademark laws.
            </span>
          </p>

          <p className="text-xs leading-7 text-neutral-500">
            일부 프로젝트는 오픈소스로 공개되며,
            각 저장소의 LICENSE에 따라 사용할 수 있습니다.
            DUSTYDRAFT® 브랜드와 상표는 해당 오픈소스 라이선스에
            포함되지 않습니다.
            <br />

            <span className="text-neutral-600">
              Some projects are released as open source under their respective
              licenses. The DUSTYDRAFT® name, trademark, logo and brand identity
              are not licensed as part of those projects.
            </span>
          </p>

          <p className="text-xs leading-7 text-neutral-600">
            The DUSTYDRAFT® name, logo and brand identity may not be used
            without prior written permission.
          </p>

        </div>

      </div>
    </footer>
  );
}