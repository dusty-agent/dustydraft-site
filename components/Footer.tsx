import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">

      <div className="max-w-5xl mx-auto px-6 py-16">

        <Link
          href="/"
          className="
            text-2xl
            font-semibold
            tracking-wide
            hover:opacity-80
            transition
          "
        >
          DUSTYDRAFT®
        </Link>

        <p className="mt-4 leading-7 text-neutral-400 max-w-2xl">
          AI 도구, 개발 유틸리티, 데이터셋, 프로토타입 및 연구 프로젝트를
          개발합니다.
          <br />
          <span className="text-neutral-500">
            AI tools, developer utilities, datasets,
            prototypes and research projects by draft.
          </span>
        </p>

        {/* NETWORK */}

        <div className="mt-10">

          <p className="text-xs tracking-[0.25em] text-neutral-500 uppercase">
            Network
          </p>

          <div className="mt-5 flex flex-wrap gap-8 text-sm">

            <a
              href="https://draft.best"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white transition"
            >
              draft →
            </a>

            <a
              href="https://exoticordinary.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white transition"
            >
              EXOTIC ORDINARY® →
            </a>

            <a
              href="https://blog.naver.com/assetpicker"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white transition"
            >
              ASSETPICKER →
            </a>

            <a
              href="https://theplaceyoung.wordpress.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white transition"
            >
              Rala's Tech Notes →
            </a>

          </div>

        </div>

        {/* POLICY */}

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

          </div>

        </div>

        {/* COPYRIGHT */}

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

          <div className="space-y-8">

          {/* Block 1 */}

          <div className="mt-12 pt-8 border-t border-white/10">

            <p className="text-xs leading-7 text-neutral-500">
              본 웹사이트의 디자인, 데이터셋, 소스코드 및 기타 모든 콘텐츠의
              저작권은 드래프트(draft) 또는 정당한 권리자에게 있습니다.
              <br />
              <span className="text-neutral-600">
              All software, datasets, source code, documentation and other contents
              are protected by copyright and trademark laws.
            </span>
            </p>

          </div>

          {/* Block 2 */}

          <div>

            <p className="text-xs leading-7 text-neutral-500">
              일부 프로젝트는 오픈소스로 공개되며,
              각 저장소의 LICENSE 파일을 준수하여 사용할 수 있습니다.
              DUSTYDRAFT® 브랜드는 라이선스 대상이 아닙니다.
              <br />
              <span className="text-neutral-600">
              Some projects are released as open source under their own LICENSE.
              The DUSTYDRAFT® trademark, logo and brand identity are not licensed. </span>
            </p>

          </div>

        </div>
        <span className="text-neutral-600">
              <br /><br />

              The DUSTYDRAFT® name,
              logo and brand identity
              may not be used without
              prior written permission. </span>

        </div>  </div>

    </footer>
  );
}