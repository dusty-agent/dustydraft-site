import Link from "next/link";

export default function WorkspacePage() {
  return (
    <main className="min-h-screen bg-dd-gray text-dd-ink">

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <p className="text-sm tracking-[0.18em] text-[#777777] uppercase">
          Workspace
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          워크스페이스
        </h1>

        <p className="mt-8 text-lg md:text-xl text-[#555555] max-w-3xl leading-relaxed">
          기술과 아이디어를 실제 제품과 서비스로 발전시킵니다.
          <br />
          만들고, 운영하고, 검증하며 다음 가능성을 탐구합니다.
        </p>
      </section>


      {/* Public API */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold">
              퍼블릭 API
            </h2>

            <p className="mt-2 text-[#777777]">
              Public API
            </p>
          </div>

          <span className="text-xs tracking-wider border border-black/20 rounded-full px-3 py-1 text-[#555555]">
            BETA
          </span>
        </div>

        <Link
          href="/api"
          className="
            block
            border border-black/10
            rounded-2xl
            p-7 md:p-8
            bg-[#F5F5F5]
            hover:bg-white
            transition
          "
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold">
                DustyDraft API
              </h3>

              <p className="mt-3 text-sm text-[#777777]">
                Data Infrastructure · Developer API
              </p>

              <p className="mt-6 text-[#505050] leading-relaxed max-w-2xl">
                공개 데이터와 구조화된 데이터를
                서비스와 애플리케이션에서 활용할 수 있도록
                API 형태로 제공합니다.
              </p>
            </div>

            <span className="text-sm text-[#555555] whitespace-nowrap">
              API 살펴보기 →
            </span>
          </div>
        </Link>
      </section>


      {/* Products */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold">
          제품과 프로젝트
        </h2>

        <p className="mt-2 mb-8 text-[#777777]">
          Products & Projects
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Dustie */}
          <a
            href="https://dustie.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="
              border border-black/10
              rounded-2xl
              p-7
              bg-[#F2F2F2]
              hover:bg-white
              transition
            "
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold">
                  Dustie
                </h3>

                <p className="mt-2 text-sm text-[#777777]">
                  Real Estate Intelligence
                </p>
              </div>

              <span className="text-xs tracking-wider border border-black/20 rounded-full px-3 py-1 text-[#555555]">
                ALPHA
              </span>
            </div>

            <p className="mt-5 text-[#505050] leading-relaxed">
              부동산 탐색과 분석, 금융 시뮬레이션,
              문서 활용과 AI 질의를 하나의 환경에서 연결합니다.
            </p>

            <p className="mt-4 text-sm text-[#666666]">
              오늘의 경매 · Finder · Ask Dustie · Analysis · Finance
            </p>

            <p className="mt-6 text-sm text-[#555555]">
              Dustie 열기 ↗
            </p>
          </a>


          {/* Real Estate Toolkit */}
          <Link
            href="/workspace/real-estate-toolkit"
            className="
              border border-black/10
              rounded-2xl
              p-7
              bg-[#F2F2F2]
              hover:bg-white
              transition
            "
          >
            <h3 className="text-2xl font-semibold">
              Real Estate Toolkit
            </h3>

            <p className="mt-2 text-sm text-[#777777]">
              Real Estate Analysis Tools
            </p>

            <p className="mt-5 text-[#505050] leading-relaxed">
              부동산 투자와 의사결정을 위한
              계산기와 실무 분석 도구를 개발합니다.
            </p>

            <p className="mt-4 text-sm text-[#666666]">
              NOI · Cap Rate · Equity · Leverage · ROE · Loan
            </p>

            <p className="mt-6 text-sm text-[#555555]">
              도구 살펴보기 →
            </p>
          </Link>


          {/* AssetPicker */}
          <Link
            href="/brands/assetpicker"
            className="
              border border-black/10
              rounded-2xl
              p-7
              bg-[#F2F2F2]
              hover:bg-white
              transition
            "
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold">
                  AssetPicker
                </h3>

                <p className="mt-2 text-sm text-[#777777]">
                  Real Estate Information
                </p>
              </div>

              <div className="flex flex-wrap justify-end gap-2">
                <span className="text-xs tracking-wider border border-black/20 rounded-full px-3 py-1 whitespace-nowrap text-[#555555]">
                  TRADEMARK PENDING
                </span>
              </div>
            </div>

            <p className="mt-5 text-[#505050] leading-relaxed">
              지역과 공간의 가치를 관찰하고,
              부동산·도시·정책·시장에 관한 정보를
              콘텐츠와 데이터로 정리합니다.
            </p>

            <p className="mt-4 text-sm text-[#666666]">
              AP Daily · 현장 기록 · 도시 · 부동산
            </p>

            <p className="mt-6 text-sm text-[#555555]">
              AssetPicker 살펴보기 →
            </p>
          </Link>


          {/* Exotic Voutique */}
          <Link
            href="/brands/the-exotic-voutique"
            className="
              border border-black/10
              rounded-2xl
              p-7
              bg-[#F2F2F2]
              hover:bg-white
              transition
            "
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold">
                  The Exotic Voutique™
                </h3>

                <p className="mt-2 text-sm text-[#777777]">
                  Bespoke Jewelry & Digital Experience
                </p>
              </div>

              <span className="text-xs tracking-wider border border-black/20 rounded-full px-3 py-1 whitespace-nowrap text-[#555555]">
                PATENT PENDING
              </span>
            </div>

            <p className="mt-5 text-[#505050] leading-relaxed">
              맞춤 주얼리 구성과 큐레이션,
              디지털 경험을 연결하는
              컨셉 플랫폼을 운영합니다.
            </p>

            <p className="mt-4 text-sm text-[#666666]">
              Curation · Customization · Digital Experience
            </p>

            <p className="mt-6 text-sm text-[#555555]">
              Voutique 살펴보기 →
            </p>
          </Link>

        </div>
      </section>


      {/* Tools */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold">
          도구
        </h2>

        <p className="mt-2 mb-8 text-[#777777]">
          Tools
        </p>

        <Link
          href="/workspace/assist"
          className="
            block
            border border-black/10
            rounded-2xl
            p-7
            bg-[#F2F2F2]
            hover:bg-white
            transition
          "
        >
          <h3 className="text-2xl font-semibold">
            ASSIST
          </h3>

          <p className="mt-2 text-sm text-[#777777]">
            AI & Productivity Tools
          </p>

          <p className="mt-5 text-[#505050] leading-relaxed max-w-2xl">
            AI 어시스턴트와 업무 생산성을 위한
            도구와 애플리케이션을 개발합니다.
          </p>

          <p className="mt-6 text-sm text-[#555555]">
            살펴보기 →
          </p>
        </Link>
      </section>


      {/* In Development */}
      <section className="max-w-5xl mx-auto px-6 pt-12 pb-20">
        <h2 className="text-3xl font-bold">
          개발 중
        </h2>

        <p className="mt-2 mb-8 text-[#777777]">
          In Development
        </p>

        <div className="border border-dashed border-black/25 rounded-2xl p-7 bg-[#E4E4E4]">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">

            <div>
              <h3 className="text-2xl font-semibold">
                Building Intelligence
              </h3>

              <p className="mt-2 text-sm text-[#777777]">
                Building & Operational Intelligence
              </p>
            </div>

            <span className="self-start text-xs tracking-wider border border-black/20 rounded-full px-3 py-1 text-[#555555]">
              TO DO
            </span>

          </div>

          <p className="mt-5 text-[#505050] leading-relaxed max-w-2xl">
            건물과 시설의 상태, 운영 환경과 데이터를 바탕으로
            현재 상태와 개선 가능성을 이해하고 분석하는
            방법과 도구를 연구·개발하고 있습니다.
          </p>
        </div>
      </section>

    </main>
  );
}