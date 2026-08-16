import Link from "next/link";

export default function DustiePage() {
  return (
    <main className="min-h-screen bg-[#e7f7f4] text-[#111111]">

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-14">

        <p className="text-sm tracking-[0.22em] uppercase text-[#258f84]">
          DustyDraft / AI Product
        </p>

        <div className="mt-6 flex items-center gap-3">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Dustie
          </h1>

          <span className="rounded-full border border-[#73cfc4] bg-white/50 px-3 py-1 text-xs text-[#258f84]">
            ALPHA
          </span>
        </div>

        <p className="mt-6 text-xl md:text-2xl text-neutral-700">
          A quiet companion for unfinished thoughts.
        </p>

        <p className="mt-10 max-w-3xl text-lg leading-relaxed text-neutral-700">
          Dustie는 완성되지 않은 생각과 말을 함께 정리하는
          작은 대화형 AI에서 시작했습니다.
        </p>

        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-neutral-700">
          대화, 언어와 표현을 탐색하던 초기 실험은
          이후 정보 탐색, 문서 이해, 분석과 의사결정을 돕는
          다양한 Dustie 경험으로 확장되고 있습니다.
        </p>

      </section>


      {/* Original Dustie */}
      <section className="max-w-5xl mx-auto px-6 py-12">

        <div className="rounded-[28px] border border-[#91d9d1] bg-[#c9f0eb] p-8 md:p-10">

          <div className="flex flex-wrap items-center gap-3">
            <p className="text-sm tracking-[0.18em] uppercase text-[#237f76]">
              Original Dustie
            </p>

            <span className="rounded-full bg-white/60 px-3 py-1 text-xs text-[#237f76]">
              In Development
            </span>
          </div>

          <h2 className="mt-5 text-3xl md:text-4xl font-bold">
            생각을 정리하는 작은 대화 상대
          </h2>

          <p className="mt-3 text-lg text-neutral-700">
            Language Dictionary · Conversation · Draft Generation
          </p>

          <p className="mt-7 max-w-3xl leading-relaxed text-neutral-700">
            초기 Dustie는 사용자의 완성되지 않은 생각을
            대화를 통해 이어가고, 표현을 모으고,
            하나의 draft로 정리하는 작은 AI 프로젝트입니다.
          </p>

          <p className="mt-4 max-w-3xl leading-relaxed text-neutral-700">
            언어사전과 대화 기록, draft 생성 기능을 중심으로
            계속 개발하고 있습니다.
          </p>

          <div className="mt-8">
            <a
              href="https://dusty-agent.github.io/dustie"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-[#111111] px-6 py-3 text-sm font-medium text-white hover:opacity-80 transition"
            >
              Original Dustie 열기 ↗
            </a>
          </div>

        </div>

      </section>


      {/* Evolution */}
      <section className="max-w-5xl mx-auto px-6 py-14">

        <p className="text-sm tracking-[0.18em] uppercase text-[#258f84]">
          Evolution
        </p>

        <h2 className="mt-4 text-3xl md:text-4xl font-bold">
          Dustie는 계속 확장되고 있습니다.
        </h2>

        <div className="mt-10 grid md:grid-cols-3 gap-5">

          <div className="rounded-2xl border border-[#abdcd6] bg-white/45 p-6">
            <p className="text-sm text-[#258f84]">
              01
            </p>

            <h3 className="mt-3 text-xl font-semibold">
              Conversation
            </h3>

            <p className="mt-3 text-neutral-600 leading-relaxed">
              완성되지 않은 생각을 대화로 이어갑니다.
            </p>
          </div>

          <div className="rounded-2xl border border-[#abdcd6] bg-white/45 p-6">
            <p className="text-sm text-[#258f84]">
              02
            </p>

            <h3 className="mt-3 text-xl font-semibold">
              Language & Draft
            </h3>

            <p className="mt-3 text-neutral-600 leading-relaxed">
              표현을 모으고 생각을 하나의 draft로 정리합니다.
            </p>
          </div>

          <div className="rounded-2xl border border-[#abdcd6] bg-white/45 p-6">
            <p className="text-sm text-[#258f84]">
              03
            </p>

            <h3 className="mt-3 text-xl font-semibold">
              Intelligence
            </h3>

            <p className="mt-3 text-neutral-600 leading-relaxed">
              데이터와 문서를 연결해 탐색과 의사결정을 지원합니다.
            </p>
          </div>

        </div>

      </section>


      {/* Dustie Alpha */}
      <section className="max-w-5xl mx-auto px-6 py-14">

        <div className="border-t border-[#9fd8d1] pt-14">

          <div className="flex flex-wrap items-center gap-3">

            <p className="text-sm tracking-[0.18em] uppercase text-[#258f84]">
              Current Product
            </p>

            <span className="rounded-full border border-[#8dd5cc] px-3 py-1 text-xs text-[#258f84]">
              ALPHA
            </span>

          </div>

          <h2 className="mt-5 text-4xl font-bold">
            Dustie Alpha
          </h2>

          <p className="mt-3 text-xl text-neutral-600">
            Real Estate Intelligence
          </p>

          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-neutral-700">
            현재 Dustie Alpha는 부동산을 찾고, 살펴보고,
            계산하고 질문하는 과정을 하나의 환경으로 연결합니다.
          </p>

          <p className="mt-4 max-w-3xl text-neutral-600 leading-relaxed">
            경매 정보 탐색부터 투자 분석, 금융 시뮬레이션,
            문서 활용과 AI 질의까지 부동산 의사결정에 필요한
            여러 작업을 연결하고 있습니다.
          </p>


          {/* Main CTA */}
          <div className="mt-9">

            <a
              href="https://www.dustie.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-[#20b9aa] px-7 py-3.5 font-semibold text-white hover:opacity-85 transition"
            >
              Dustie Alpha 시작하기 ↗
            </a>

          </div>


          {/* Features */}
          <div className="mt-12 grid md:grid-cols-2 gap-5">

            <a
              href="https://www.dustie.xyz/discover/finder"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-[#abdcd6] bg-white/45 p-6 hover:bg-white/70 transition"
            >
              <h3 className="text-xl font-semibold">
                Finder
              </h3>

              <p className="mt-3 text-neutral-600">
                오늘의 경매와 부동산 정보를 탐색합니다.
              </p>
            </a>


            <a
              href="https://www.dustie.xyz/ai/askdustie"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-[#abdcd6] bg-white/45 p-6 hover:bg-white/70 transition"
            >
              <h3 className="text-xl font-semibold">
                Ask Dustie
              </h3>

              <p className="mt-3 text-neutral-600">
                부동산과 문서를 기반으로 Dustie에게 질문합니다.
              </p>
            </a>


            <a
              href="https://www.dustie.xyz/intelligence/finance"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-[#abdcd6] bg-white/45 p-6 hover:bg-white/70 transition"
            >
              <h3 className="text-xl font-semibold">
                Finance
              </h3>

              <p className="mt-3 text-neutral-600">
                현금흐름과 금융 시나리오를 계산하고 살펴봅니다.
              </p>
            </a>


            <div className="rounded-2xl border border-[#abdcd6] bg-white/30 p-6">

              <h3 className="text-xl font-semibold">
                Documents & Analysis
              </h3>

              <p className="mt-3 text-neutral-600">
                문서와 데이터를 활용해 투자 판단에 필요한 정보를 분석합니다.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* Relationship */}
      <section className="max-w-5xl mx-auto px-6 pt-10 pb-20">

        <div className="border-t border-[#9fd8d1] pt-10">

          <p className="text-sm text-neutral-500">
            Developed by
          </p>

          <Link
            href="/about"
            className="inline-block mt-2 text-lg font-semibold hover:opacity-60 transition"
          >
            DustyDraft →
          </Link>

        </div>

      </section>

    </main>
  );
}