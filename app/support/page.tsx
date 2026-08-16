import Link from "next/link";

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-10">
          <Link
            href="/"
            className="text-sm font-medium tracking-tight transition hover:opacity-60"
          >
            DustyDraft
          </Link>

          <Link
            href="/api"
            className="text-sm text-white/60 transition hover:text-white"
          >
            Public API
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-24 md:px-10 md:pb-28 md:pt-32">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.24em] text-emerald-400">
            Support DustyDraft
          </p>

          <h1 className="text-4xl font-medium leading-[1.08] tracking-[-0.04em] md:text-6xl">
            작은 실험이
            <br />
            계속 이어질 수 있도록.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/55 md:text-lg">
            DustyDraft는 작은 아이디어를 직접 만들고, 공개하고,
            검증하면서 다음 가능성을 탐색합니다.
            <br className="hidden md:block" />
            공개 API와 오픈소스 프로젝트 역시 그 과정의 일부입니다.
          </p>
        </div>
      </section>

      {/* Support */}
      <section className="border-t border-white/10">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[0.8fr_1.2fr] md:px-10 md:py-28">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-white/35">
              01 / Support
            </p>

            <h2 className="mt-5 text-2xl font-medium tracking-tight md:text-3xl">
              커피 한 잔으로
              <br />
              프로젝트를 응원해주세요.
            </h2>
          </div>

          <div className="max-w-2xl">
            <p className="text-base leading-8 text-white/60">
              서버 운영, 데이터 정리, 문서화, 새로운 기능을 실험하는 데에는
              작지만 지속적인 비용이 발생합니다.
            </p>

            <p className="mt-5 text-base leading-8 text-white/60">
              DustyDraft의 공개 프로젝트가 흥미롭거나 계속 이어졌으면 한다면,
              커피 한 잔 정도의 가벼운 응원으로 함께해 주세요.
            </p>

            <p className="mt-5 text-sm leading-7 text-white/35">
              후원 여부와 관계없이 공개 API와 공개 프로젝트는 각 프로젝트의
              공개 정책에 따라 운영됩니다.
            </p>

            <div className="mt-10">
              {/*
                TODO:
                후원/결제 페이지가 준비되면 href를 실제 URL로 변경하세요.
              */}
              <a
                href="#support-method"
                className="inline-flex items-center rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition hover:bg-white/85"
              >
                ☕ 커피 한 잔 보내기
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What support helps */}
      <section className="border-t border-white/10 bg-[#131313]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <p className="text-xs uppercase tracking-[0.22em] text-white/35">
            02 / Where it goes
          </p>

          <h2 className="mt-5 text-2xl font-medium tracking-tight md:text-3xl">
            응원은 이런 작업을 이어가는 데 사용됩니다.
          </h2>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
            <div className="bg-[#131313] p-7 md:p-9">
              <span className="text-xs text-white/30">01</span>
              <h3 className="mt-6 text-lg font-medium">Public APIs</h3>
              <p className="mt-3 text-sm leading-7 text-white/45">
                공개 데이터 API의 서버 운영, 유지보수와 새로운 데이터 구조
                실험을 지원합니다.
              </p>
            </div>

            <div className="bg-[#131313] p-7 md:p-9">
              <span className="text-xs text-white/30">02</span>
              <h3 className="mt-6 text-lg font-medium">Open Source</h3>
              <p className="mt-3 text-sm leading-7 text-white/45">
                재사용할 수 있는 코드, 도구와 작은 실험을 공개하고 유지하는
                데 사용됩니다.
              </p>
            </div>

            <div className="bg-[#131313] p-7 md:p-9">
              <span className="text-xs text-white/30">03</span>
              <h3 className="mt-6 text-lg font-medium">
                Research &amp; Data
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/45">
                공개 자료를 찾고 구조화하며 출처와 기록을 연결하는 작업을
                이어갑니다.
              </p>
            </div>

            <div className="bg-[#131313] p-7 md:p-9">
              <span className="text-xs text-white/30">04</span>
              <h3 className="mt-6 text-lg font-medium">
                Experiments
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/45">
                아직 제품이 되지 않은 아이디어도 작은 프로토타입으로 만들고
                검증해봅니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current open project */}
      <section className="border-t border-white/10">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[0.8fr_1.2fr] md:px-10 md:py-28">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-white/35">
              03 / Open Project
            </p>

            <h2 className="mt-5 text-2xl font-medium tracking-tight md:text-3xl">
              지금 공개되어 있는
              <br />
              프로젝트를 살펴보세요.
            </h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-7 md:p-9">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-xl font-medium">
                Asset Provenance API
              </h3>

              <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[10px] uppercase tracking-wider text-emerald-400">
                Beta
              </span>
            </div>

            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/30">
              South Korea
            </p>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/50">
              개별 자산에 흩어진 공개 기록과 출처를 시간의 흐름에 따라
              구조화하고, 기록과 증거의 연결 관계를 추적할 수 있도록
              실험하고 있습니다.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/api/get-started"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/85"
              >
                Get Started →
              </Link>

              <a
                href="https://provenance.open.dustydraft.com/api/docs"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 px-6 py-3 text-sm text-white/70 transition hover:border-white/30 hover:text-white"
              >
                Documentation ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback */}
      <section
        id="support-method"
        className="border-t border-white/10 bg-white text-black"
      >
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.22em] text-black/35">
              04 / Feedback &amp; Contact
            </p>

            <h2 className="mt-5 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
              꼭 후원이 아니어도 좋습니다.
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-black/55">
              프로젝트에 대한 의견, API 피드백, 데이터 오류 제보,
              수정 요청이나 협업 아이디어도 DustyDraft에 큰 도움이 됩니다.
            </p>

            <a
              href="mailto:dustydraft.help@gmail.com"
              className="mt-9 inline-block border-b border-black pb-1 text-lg font-medium transition hover:opacity-50 md:text-xl"
            >
              dustydraft.help@gmail.com ↗
            </a>

            <p className="mt-4 text-xs leading-6 text-black/35">
              API feedback · Data corrections · General inquiries
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-black">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 border-t border-black/10 px-6 py-8 text-xs text-black/45 md:flex-row md:items-center md:justify-between md:px-10">
          <p>© 2026 DustyDraft</p>

          <div className="flex flex-wrap gap-5">
            <Link href="/" className="transition hover:text-black">
              DustyDraft
            </Link>

            <Link href="/api" className="transition hover:text-black">
              Public API
            </Link>

            <a
              href="mailto:dustydraft.help@gmail.com"
              className="transition hover:text-black"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}