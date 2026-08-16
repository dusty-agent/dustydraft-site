import Link from "next/link";

const apiItems = [
  {
    name: "Asset Provenance API (South Korea)",
    type: "Asset · History · Public Record · Provenance",
    description:
      "개별 자산에 흩어진 공개 기록과 출처를 시간의 흐름에 따라 구조화하여 확인하고 활용할 수 있도록 제공합니다.",
    status: "Beta",
    href: "https://provenance.open.dustydraft.com/api",
    docsHref: "https://provenance.open.dustydraft.com/api/docs",
  },
  {
    name: "AssetPicker Data API",
    type: "Real Estate · Policy · Market Information",
    description:
      "부동산·도시·정책·시장 정보를 구조화하여 리서치와 서비스 개발에 활용하기 위한 데이터 API입니다.",
    status: "Planned",
    href: "#",
    docsHref: "#",
  },
  {
    name: "MarketReader Data API",
    type: "Exchange Rate · Interest Rate · Market Data",
    description:
      "환율, 금리와 주요 시장 지표를 애플리케이션과 서비스에서 활용할 수 있도록 구조화하여 제공할 예정입니다.",
    status: "Planned",
    href: "#",
    docsHref: "#",
  },
];

const benefits = [
  {
    number: "01",
    title: "Asset-Centric",
    korean: "자산 중심",
    description:
      "사람이나 포트폴리오가 아니라 하나의 개별 자산을 중심으로 정보를 연결합니다.",
  },
  {
    number: "02",
    title: "History",
    korean: "변화의 흐름",
    description:
      "현재 값 하나만 보여주기보다 확인 가능한 기록을 시간의 흐름에 따라 살펴봅니다.",
  },
  {
    number: "03",
    title: "Source-Aware",
    korean: "출처 연결",
    description:
      "각 정보가 어떤 공개 출처에서 확인되었는지 참조 정보를 함께 연결합니다.",
  },
  {
    number: "04",
    title: "Developer Ready",
    korean: "바로 활용",
    description:
      "흩어진 정보를 다시 찾고 정리하는 반복을 줄이고 일관된 구조로 사용할 수 있게 합니다.",
  },
];

const flow = [
  {
    number: "01",
    title: "Asset",
    korean: "개별 자산",
    description: "조회하고자 하는 하나의 자산에서 시작합니다.",
  },
  {
    number: "02",
    title: "Records",
    korean: "공개 기록",
    description: "해당 자산과 연결되는 공개 기록을 확인합니다.",
  },
  {
    number: "03",
    title: "Timeline",
    korean: "시간의 흐름",
    description: "확인된 기록과 변화를 시간 순서로 구조화합니다.",
  },
  {
    number: "04",
    title: "Provenance",
    korean: "출처와 맥락",
    description: "각 기록의 원본 출처와 참조 관계를 함께 제공합니다.",
  },
];

export default function ApiPage() {
  return (
    <main className="min-h-screen bg-dd-black text-dd-white">
      {/* ==================================================
          HERO
      ================================================== */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-20 md:px-10 md:pb-28 md:pt-28">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm uppercase tracking-[0.22em] text-white/40">
            DustyDraft / Public API
          </p>

          <h1 className="text-4xl font-semibold leading-[0.98] tracking-[-0.045em] md:text-7xl">
            Trace the history
            <br />
            of an asset.
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/70 md:text-2xl">
            개별 자산에 흩어진 공개 기록을
            <br />
            하나의 흐름으로.
          </p>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/40">
            Asset Provenance API는 자산의 소유 포트폴리오를 관리하거나
            개인의 자산 규모를 분석하는 서비스가 아닙니다.
            하나의 자산을 중심으로 확인 가능한 공개 기록과 출처를 연결하고,
            그 자산이 어떤 정보와 변화를 거쳐왔는지 살펴보기 위한
            데이터 인터페이스입니다.
          </p>
        </div>
      </section>

      {/* ==================================================
          FEATURED API / VISUAL
      ================================================== */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-14 md:grid-cols-12 md:items-center">
            {/* Visual */}
            <div className="md:col-span-5">
              <div
                className="
                  relative
                  min-h-[560px]
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white/[0.02]
                  p-7
                "
              >
                <p className="text-[10px] uppercase tracking-[0.24em] text-white/30">
                  Asset Provenance
                </p>

                <p className="mt-3 text-xl font-medium text-white/80">
                  One Asset
                </p>

                {/* Timeline */}
                <div className="relative mt-14 pl-8">
                  <div className="absolute bottom-2 left-[6px] top-2 w-px bg-white/10" />

                  {[
                    ["PAST", "Public Record A", "Source / Reference"],
                    ["CHANGE", "Public Record B", "Source / Reference"],
                    ["CURRENT", "Current Record", "Source / Reference"],
                  ].map(([time, title, source], index) => (
                    <div
                      key={time}
                      className={index === 2 ? "relative" : "relative pb-16"}
                    >
                      <span
                        className="
                          absolute
                          -left-[30px]
                          top-1
                          h-3
                          w-3
                          rounded-full
                          border
                          border-white/30
                          bg-[#111111]
                        "
                      />

                      <p className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                        {time}
                      </p>

                      <p className="mt-3 text-lg text-white/75">
                        {title}
                      </p>

                      <p className="mt-2 text-xs text-white/30">
                        {source}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="absolute bottom-7 left-7 right-7 border-t border-white/10 pt-5">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-white/25">
                    <span>Asset</span>
                    <span>→</span>
                    <span>Records</span>
                    <span>→</span>
                    <span>History</span>
                    <span>→</span>
                    <span>Source</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Copy */}
            <div className="md:col-span-7">
              <p className="text-sm uppercase tracking-[0.22em] text-emerald-300/60">
                Featured / Beta
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
                Asset Provenance API
              </h2>

              <p className="mt-3 text-sm uppercase tracking-[0.18em] text-white/35">
                South Korea
              </p>

              <p className="mt-6 max-w-2xl text-xl leading-relaxed text-white/70">
                현재 상태만이 아니라,
                <br />
                그 상태에 이른 기록을 봅니다.
              </p>

              <p className="mt-6 max-w-2xl leading-7 text-white/45">
                여러 공개 출처를 직접 찾아다니며
                같은 자산의 정보를 반복해서 확인하는 과정을 줄이고,
                해당 자산과 연결된 기록과 출처를
                일관된 방식으로 활용할 수 있도록 만드는 것이 목표입니다.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/api/get-started"
                  className="
                    rounded-full
                    bg-white
                    px-6 py-3
                    text-sm
                    font-medium
                    text-black
                    transition
                    hover:bg-white/85
                  "
                >
                  Get Started →
                </Link>

                <a
                  href="https://provenance.open.dustydraft.com/api/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    rounded-full
                    border
                    border-white/15
                    px-6 py-3
                    text-sm
                    text-white/70
                    transition
                    hover:bg-white/10
                  "
                >
                  Documentation ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          WHAT IT IS / IS NOT
      ================================================== */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <p className="text-sm uppercase tracking-[0.2em] text-white/35">
          Scope
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
          무엇을 보고,
          <br />
          무엇을 보지 않는가.
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {/* We focus on */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-9">
            <p className="text-xs uppercase tracking-[0.18em] text-emerald-300/55">
              We Focus On
            </p>

            <h3 className="mt-4 text-2xl font-medium">
              개별 자산의 Provenance
            </h3>

            <div className="mt-7 space-y-4 text-sm leading-7 text-white/50">
              <p>· 하나의 자산을 중심으로 한 공개 기록</p>
              <p>· 시간에 따른 정보와 상태의 변화</p>
              <p>· 기록별 원본 출처와 참조 관계</p>
              <p>· 애플리케이션에서 활용할 수 있는 구조화된 응답</p>
            </div>
          </div>

          {/* Not */}
          <div className="rounded-3xl border border-white/10 p-7 md:p-9">
            <p className="text-xs uppercase tracking-[0.18em] text-white/25">
              Not Designed For
            </p>

            <h3 className="mt-4 text-2xl font-medium text-white/65">
              개인 자산관리
            </h3>

            <div className="mt-7 space-y-4 text-sm leading-7 text-white/35">
              <p>· 특정인의 전체 부동산 보유 현황 관리</p>
              <p>· 임대인·임차인 계약 또는 임대료 관리</p>
              <p>· 개인별 자산 포트폴리오 계산</p>
              <p>· 총자산 또는 순자산 관리</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          WHAT YOU GET
      ================================================== */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <p className="text-sm uppercase tracking-[0.2em] text-white/35">
            What You Get
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
            자산을 중심으로,
            <br />
            기록과 출처를 연결합니다.
          </h2>

          <div className="mt-12 grid border-l border-t border-white/10 md:grid-cols-4">
            {benefits.map((item) => (
              <article
                key={item.number}
                className="min-h-72 border-b border-r border-white/10 p-6"
              >
                <p className="text-sm text-white/20">
                  {item.number}
                </p>

                <div className="mt-14">
                  <p className="text-xs text-white/30">
                    {item.korean}
                  </p>

                  <h3 className="mt-2 text-xl font-medium">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-sm leading-6 text-white/45">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          DATA FLOW
      ================================================== */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <p className="text-sm uppercase tracking-[0.2em] text-white/35">
          Provenance Flow
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
          하나의 자산에서
          <br />
          기록의 흐름으로.
        </h2>

        <div className="mt-12 grid border-l border-t border-white/10 sm:grid-cols-2 md:grid-cols-4">
          {flow.map((item) => (
            <article
              key={item.number}
              className="min-h-64 border-b border-r border-white/10 p-6"
            >
              <p className="text-sm text-white/20">
                {item.number}
              </p>

              <div className="mt-14">
                <p className="text-sm text-white/30">
                  {item.korean}
                </p>

                <h3 className="mt-2 text-xl font-medium">
                  {item.title}
                </h3>

                <p className="mt-5 text-sm leading-6 text-white/45">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ==================================================
          EXAMPLE RESPONSE
      ================================================== */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="text-sm uppercase tracking-[0.2em] text-white/35">
                Example Structure
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em]">
                Asset.
                <br />
                Record.
                <br />
                Source.
              </h2>

              <p className="mt-6 max-w-md leading-7 text-white/45">
                아래 예시는 API의 방향을 설명하기 위한 구조 예시입니다.
                실제 응답 필드는 엔드포인트와 제공 데이터에 따라 달라질 수 있습니다.
              </p>
            </div>

            <div className="md:col-span-7">
              <div className="overflow-x-auto rounded-2xl border border-white/10 bg-black p-6">
                <p className="mb-5 text-xs uppercase tracking-[0.18em] text-white/25">
                  JSON
                </p>

                <pre className="text-sm leading-7 text-white/65">
{`{
  "asset": {
    "asset_id": "example_asset"
  },
  "records": [
    {
      "observed_at": "YYYY-MM-DD",
      "category": "public_record",
      "value": "Example record",
      "source": {
        "provider": "Public Institution",
        "reference": "https://..."
      }
    }
  ]
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          AVAILABLE APIs
      ================================================== */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <p className="text-sm uppercase tracking-[0.2em] text-white/35">
          APIs
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight">
          공개 및 개발 중인 API
        </h2>

        <div className="mt-10 grid gap-5">
          {apiItems.map((item, index) => (
            <article
              key={item.name}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-7
                transition
                hover:border-white/20
                hover:bg-white/[0.05]
                md:p-9
              "
            >
              <div className="flex flex-col gap-7 md:flex-row md:items-start md:justify-between">
                <div className="flex max-w-3xl gap-6">
                  <span className="pt-1 text-sm text-white/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-2xl font-medium tracking-tight">
                        {item.name}
                      </h3>

                      <span
                        className={`rounded-full border px-3 py-1 text-xs ${
                          item.status === "Beta"
                            ? "border-emerald-400/25 bg-emerald-400/10 text-emerald-300"
                            : "border-white/10 bg-white/5 text-white/40"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>

                    <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/30">
                      {item.type}
                    </p>

                    <p className="mt-4 max-w-2xl leading-7 text-white/50">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 gap-3 md:pl-6">
                  {item.docsHref !== "#" && (
                    <a
                      href={item.docsHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/75 transition hover:bg-white/10"
                    >
                      문서 보기
                    </a>
                  )}

                  {item.href !== "#" && (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-white/85"
                    >
                      API 열기 ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ==================================================
          GET STARTED
      ================================================== */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <p className="text-sm uppercase tracking-[0.2em] text-white/35">
            Get Started
          </p>

          <div className="mt-5 grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                필요한 자산을
                <br />
                바로 조회하세요.
              </h2>

              <p className="mt-6 max-w-md leading-7 text-white/50">
                현재 공개된 Beta API는 별도의 API Key 없이
                문서와 엔드포인트를 바로 확인할 수 있습니다.
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
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/15 px-6 py-3 text-sm text-white/70 transition hover:bg-white/10"
                >
                  Documentation ↗
                </a>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-xs uppercase tracking-[0.18em] text-white/30">
                  First Request
                </p>

                <pre className="mt-5 overflow-x-auto text-sm leading-7 text-white/70">
{`curl "https://provenance.open.dustydraft.com/api/v1/parcels/parcel-demo-001/lineage"`}
                </pre>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  ["01", "문서 확인"],
                  ["02", "엔드포인트 선택"],
                  ["03", "첫 요청 보내기"],
                ].map(([number, text]) => (
                  <div
                    key={number}
                    className="rounded-xl border border-white/10 bg-white/[0.02] p-4"
                  >
                    <p className="text-xs text-white/25">
                      {number}
                    </p>

                    <p className="mt-3 text-sm text-white/60">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SUPPORT
      ================================================== */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <p className="text-xs uppercase tracking-[0.22em] text-white/30">
            Support this project
          </p>

          <div className="mt-5 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <h2 className="text-2xl font-semibold">
                유용했다면, 작은 응원을 보내주세요.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/45">
                Asset Provenance API는 공개된 기록을
                더 쉽게 찾고 활용할 수 있도록 만드는 프로젝트입니다.
                구독과 작은 후원은 서비스 운영과 개선에 도움이 됩니다.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.youtube.com/@assetpicker"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 px-5 py-3 text-sm text-white/70 transition hover:bg-white/10"
              >
                AssetPicker 구독 ↗
              </a>

              <Link
                href="/support"
                className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/85"
              >
                ☕ 커피 한 잔 보내기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="border-t border-white/10 py-7">
          <div className="flex flex-col justify-between gap-3 text-sm text-white/30 md:flex-row">
            <p>
              DustyDraft API
            </p>

            <p>
              Asset · History · Source · Provenance
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}