import Link from "next/link";

const datasets = [
  {
    number: "01",
    name: "Seoul Housing Finance",
    type: "Real Estate · Interest Rate · Housing Market",
    description:
      "2008년 이후 서울 주택시장과 주담대 금리 흐름을 함께 살펴보기 위해 공개 자료를 수집하고 비교 가능한 형태로 정리한 데이터셋입니다.",
    period: "2008–2026",
    status: "Available",
    href: "/data/seoul-housing-finance",
  },
];

const principles = [
  {
    number: "01",
    title: "Source-Aware",
    korean: "출처와 함께",
    description:
      "숫자만 제공하지 않고 데이터가 어디에서 왔는지 확인할 수 있도록 출처와 방법론을 함께 기록합니다.",
  },
  {
    number: "02",
    title: "Transparent",
    korean: "검증 가능하게",
    description:
      "확인할 수 없는 값은 임의로 추정하지 않고 공란으로 남기며 데이터의 한계도 함께 공개합니다.",
  },
  {
    number: "03",
    title: "Structured",
    korean: "활용할 수 있게",
    description:
      "서로 다른 공개 자료를 비교하고 분석할 수 있도록 일관된 구조로 정리합니다.",
  },
  {
    number: "04",
    title: "Open",
    korean: "공개를 기본으로",
    description:
      "가능한 데이터부터 공개하고, 누구나 연구와 리서치에 활용할 수 있는 형태로 쌓아갑니다.",
  },
];

export default function DataPage() {
  return (
    <main className="min-h-screen bg-dd-black text-dd-white">
      {/* ==================================================
          HERO
      ================================================== */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-20 md:px-10 md:pb-28 md:pt-28">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm uppercase tracking-[0.22em] text-white/40">
            DustyDraft / Data
          </p>

          <h1 className="text-4xl font-semibold leading-[0.98] tracking-[-0.045em] md:text-7xl">
            Data with
            <br />
            context.
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/70 md:text-2xl">
            숫자만 모으는 것이 아니라,
            <br />
            그 숫자가 어디에서 왔는지 함께 기록합니다.
          </p>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/40">
            DustyDraft Data는 공개된 자료를 수집하고 구조화하여
            누구나 살펴보고 활용할 수 있는 데이터셋으로 제공합니다.
            각 데이터에는 가능한 범위에서 출처와 수집·가공 방법을 함께 남깁니다.
          </p>
        </div>
      </section>

      {/* ==================================================
          FEATURED DATASET
      ================================================== */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-14 md:grid-cols-12 md:items-center">
            {/* Visual */}
            <div className="md:col-span-5">
              <div className="relative min-h-[480px] overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.02] p-7">
                <p className="text-[10px] uppercase tracking-[0.24em] text-white/30">
                  Featured Dataset
                </p>

                <p className="mt-3 text-xl font-medium text-white/80">
                  Seoul Housing Finance
                </p>

                <div className="relative mt-14 pl-8">
                  <div className="absolute bottom-2 left-[6px] top-2 w-px bg-white/10" />

                  {[
                    ["2008", "Interest Rate", "Base Rate"],
                    ["2016", "Housing Market", "Transactions"],
                    ["2021", "Price Index", "2021-06 = 100"],
                    ["2026", "Current", "Snapshot"],
                  ].map(([year, title, source], index) => (
                    <div
                      key={year}
                      className={
                        index === 3
                          ? "relative"
                          : "relative pb-12"
                      }
                    >
                      <span className="absolute -left-[30px] top-1 h-3 w-3 rounded-full border border-white/30 bg-[#111111]" />

                      <p className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                        {year}
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
                    <span>Source</span>
                    <span>→</span>
                    <span>Data</span>
                    <span>→</span>
                    <span>Context</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Copy */}
            <div className="md:col-span-7">
              <p className="text-sm uppercase tracking-[0.22em] text-emerald-300/60">
                Featured / Available
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
                Seoul Housing Finance
              </h2>

              <p className="mt-3 text-sm uppercase tracking-[0.18em] text-white/35">
                2008–2026
              </p>

              <p className="mt-6 max-w-2xl text-xl leading-relaxed text-white/70">
                금리와 주택시장의 흐름을,
                <br />
                하나의 데이터셋에서 봅니다.
              </p>

              <p className="mt-6 max-w-2xl leading-7 text-white/45">
                기준금리, 서울 주택 거래량, 서울 아파트 거래량,
                아파트 평균 실거래금액과 가격지수 등을
                공개 출처를 바탕으로 정리한 데이터셋입니다.
                장기 계열과 최신 확인치를 구분하여 제공합니다.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/data/seoul-housing-finance"
                  className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/85"
                >
                  View Data →
                </Link>

                <a
                  href="https://github.com/soyoung-eng/seoul-housing-finance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/15 px-6 py-3 text-sm text-white/70 transition hover:bg-white/10"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          PRINCIPLES
      ================================================== */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <p className="text-sm uppercase tracking-[0.2em] text-white/35">
          Data Principles
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
          데이터를 만들 때,
          <br />
          출처도 함께 남깁니다.
        </h2>

        <div className="mt-12 grid border-l border-t border-white/10 md:grid-cols-4">
          {principles.map((item) => (
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
      </section>

      {/* ==================================================
          HOW DATA IS PRESENTED
      ================================================== */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="text-sm uppercase tracking-[0.2em] text-white/35">
                Data Access
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
                데이터와
                <br />
                맥락을 함께 제공합니다.
              </h2>

              <p className="mt-6 max-w-md leading-7 text-white/45">
                각 데이터셋은 가능한 범위에서 원출처와 방법론을
                함께 공개합니다. 필요한 경우 원본 자료를 직접
                확인할 수 있도록 연결합니다.
              </p>
            </div>

            <div className="md:col-span-7">
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ["01", "Dataset", "구조화된 데이터"],
                  ["02", "Sources", "원출처와 참고자료"],
                  ["03", "Methodology", "수집·가공 방법"],
                  ["04", "Updates", "업데이트 기록"],
                ].map(([number, title, description]) => (
                  <article
                    key={number}
                    className="rounded-2xl border border-white/10 bg-black p-6"
                  >
                    <p className="text-xs text-white/25">
                      {number}
                    </p>

                    <h3 className="mt-8 text-xl font-medium">
                      {title}
                    </h3>

                    <p className="mt-3 text-sm text-white/40">
                      {description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          DATASETS
      ================================================== */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <p className="text-sm uppercase tracking-[0.2em] text-white/35">
          Datasets
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight">
          공개 데이터
        </h2>

        <div className="mt-10 grid gap-5">
          {datasets.map((item) => (
            <article
              key={item.name}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-white/20 hover:bg-white/[0.05] md:p-9"
            >
              <div className="flex flex-col gap-7 md:flex-row md:items-start md:justify-between">
                <div className="flex max-w-3xl gap-6">
                  <span className="pt-1 text-sm text-white/25">
                    {item.number}
                  </span>

                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-2xl font-medium tracking-tight">
                        {item.name}
                      </h3>

                      <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                        {item.status}
                      </span>
                    </div>

                    <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/30">
                      {item.type}
                    </p>

                    <p className="mt-4 max-w-2xl leading-7 text-white/50">
                      {item.description}
                    </p>

                    <p className="mt-5 text-xs uppercase tracking-[0.16em] text-white/25">
                      Data Period · {item.period}
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 gap-3 md:pl-6">
                  <Link
                    href={item.href}
                    className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-white/85"
                  >
                    데이터 보기 →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ==================================================
          FOOTER
      ================================================== */}
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="border-t border-white/10 py-7">
          <div className="flex flex-col justify-between gap-3 text-sm text-white/30 md:flex-row">
            <p>DustyDraft Data</p>

            <p>Data · Source · Methodology · Context</p>
          </div>
        </div>
      </div>
    </main>
  );
}