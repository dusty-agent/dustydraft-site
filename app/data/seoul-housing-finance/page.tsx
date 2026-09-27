import Link from "next/link";

const files = [
  {
    number: "01",
    name: "housing_finance_core_2008_2025.csv",
    description:
      "기준금리, 서울 전체 주택 거래량, 서울 아파트 거래량, 서울 아파트 평균 실거래금액을 포함한 핵심 분석 계열입니다.",
  },
  {
    number: "02",
    name: "seoul_apartment_price_index_2008_2024.csv",
    description:
      "한국부동산원 아파트 매매가격지수(2021-06=100)를 기준으로 구성한 서울 아파트 가격지수 계열입니다.",
  },
  {
    number: "03",
    name: "current_snapshot_2026.csv",
    description:
      "2026년 현재 확인 가능한 최신 값을 장기 연간 계열과 분리하여 기록합니다.",
  },
  {
    number: "04",
    name: "sources.csv",
    description:
      "각 데이터의 출처와 수집·가공 방법을 기록한 메타데이터 파일입니다.",
  },
];

const metrics = [
  ["01", "Base Rate", "한국은행 기준금리"],
  ["02", "Transactions", "서울 주택 및 아파트 거래"],
  ["03", "Average Price", "서울 아파트 평균 실거래금액"],
  ["04", "Price Index", "아파트 매매가격지수"],
];

export default function SeoulHousingFinancePage() {
  return (
    <main className="min-h-screen bg-dd-black text-dd-white">
      {/* ==================================================
          HERO
      ================================================== */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-20 md:px-10 md:pb-28 md:pt-28">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm uppercase tracking-[0.22em] text-white/40">
            DustyDraft / Data / Seoul Housing Finance
          </p>

          <h1 className="text-4xl font-semibold leading-[0.98] tracking-[-0.045em] md:text-7xl">
            Seoul Housing
            <br />
            Finance.
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/70 md:text-2xl">
            금리와 주택시장의 흐름을,
            <br />
            하나의 데이터셋에서 봅니다.
          </p>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/40">
            2008년 이후 서울 주택시장과 주담대 금리 흐름을 함께
            살펴보기 위해 공개 자료를 수집하고 비교 가능한 형태로
            정리한 데이터셋입니다.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://github.com/soyoung-eng/seoul-housing-finance"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/85"
            >
              View Dataset ↗
            </a>

            <Link
              href="/data"
              className="rounded-full border border-white/15 px-6 py-3 text-sm text-white/70 transition hover:bg-white/10"
            >
              ← All Data
            </Link>
          </div>
        </div>
      </section>

      {/* ==================================================
          SNAPSHOT
      ================================================== */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="text-sm uppercase tracking-[0.2em] text-white/35">
                Dataset Snapshot
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
                2008
                <br />
                → 2026
              </h2>

              <p className="mt-6 max-w-md leading-7 text-white/45">
                장기 비교가 가능한 연간 계열과 2026년 현재 확인치를
                구분하여 제공합니다.
              </p>
            </div>

            <div className="md:col-span-7">
              <div className="grid gap-3 sm:grid-cols-2">
                {metrics.map(([number, title, description]) => (
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

                    <p className="mt-3 text-sm leading-6 text-white/40">
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
          ABOUT
      ================================================== */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <p className="text-sm uppercase tracking-[0.2em] text-white/35">
          About the Dataset
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
          서로 다른 공개 자료를
          <br />
          하나의 흐름으로.
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-9">
            <p className="text-xs uppercase tracking-[0.18em] text-emerald-300/55">
              What It Includes
            </p>

            <h3 className="mt-4 text-2xl font-medium">
              주요 데이터
            </h3>

            <div className="mt-7 space-y-4 text-sm leading-7 text-white/50">
              <p>· 한국은행 기준금리</p>
              <p>· 서울 전체 주택 거래량</p>
              <p>· 서울 아파트 거래량</p>
              <p>· 서울 아파트 평균 실거래금액</p>
              <p>· 서울 아파트 매매가격지수</p>
              <p>· 2026년 현재 확인치</p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 p-7 md:p-9">
            <p className="text-xs uppercase tracking-[0.18em] text-white/25">
              Important Notes
            </p>

            <h3 className="mt-4 text-2xl font-medium text-white/65">
              데이터의 한계
            </h3>

            <div className="mt-7 space-y-4 text-sm leading-7 text-white/35">
              <p>
                · 확인할 수 없는 값은 임의 추정하지 않았습니다.
              </p>
              <p>
                · 서로 다른 집계 기준은 가능한 경우 별도 계열로 구분했습니다.
              </p>
              <p>
                · 평균 실거래금액과 가격지수는 동일한 개념이 아닙니다.
              </p>
              <p>
                · 원자료의 정의와 이용 조건을 함께 확인해야 합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          FILES
      ================================================== */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <p className="text-sm uppercase tracking-[0.2em] text-white/35">
            Files
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
            데이터 파일
          </h2>

          <div className="mt-12 grid border-l border-t border-white/10">
            {files.map((file) => (
              <article
                key={file.name}
                className="border-b border-r border-white/10 p-6 md:p-7"
              >
                <div className="flex gap-6">
                  <span className="pt-1 text-sm text-white/20">
                    {file.number}
                  </span>

                  <div>
                    <h3 className="break-all text-lg font-medium text-white/80">
                      {file.name}
                    </h3>

                    <p className="mt-4 max-w-3xl text-sm leading-7 text-white/40">
                      {file.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8">
            <a
              href="https://github.com/soyoung-eng/seoul-housing-finance"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-white/15 px-5 py-3 text-sm text-white/70 transition hover:bg-white/10"
            >
              Open repository ↗
            </a>
          </div>
        </div>
      </section>

      {/* ==================================================
          SOURCES
      ================================================== */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-sm uppercase tracking-[0.2em] text-white/35">
              Sources
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
              데이터보다
              <br />
              출처를 먼저 봅니다.
            </h2>

            <p className="mt-6 max-w-md leading-7 text-white/45">
              각 자료의 원출처와 수집·가공 방법은
              저장소의 `sources.csv`에 기록되어 있습니다.
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
              <p className="text-xs uppercase tracking-[0.18em] text-white/25">
                Source & Methodology
              </p>

              <div className="mt-7 space-y-5 text-sm leading-7 text-white/45">
                <p>
                  서울 아파트 거래량의 2008~2024 비교계열은
                  한국도시연구소 실거래 DB의 비교계열을 사용했습니다.
                </p>

                <p>
                  서울 전체 주택 거래량은 2016년 이전 연간값을
                  검증 가능한 동일 표에서 확보하지 못해 공란으로
                  남겼습니다.
                </p>

                <p>
                  평균 실거래금액은 거래 물량의 구성 변화 영향을
                  받으므로 가격지수와 동일한 개념이 아닙니다.
                </p>

                <p>
                  2025년 서울 아파트 연간 거래건수는 서로 다른
                  집계 기준이 확인되어 core 파일에는 넣지 않았습니다.
                </p>
              </div>

              <a
                href="https://github.com/soyoung-eng/seoul-housing-finance/blob/main/sources.csv"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/85"
              >
                View Sources ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          METHODOLOGY
      ================================================== */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <p className="text-sm uppercase tracking-[0.2em] text-white/35">
            Methodology
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
            임의로 채우기보다,
            <br />
            확인 가능한 값을 남깁니다.
          </h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            {[
              ["01", "Source First", "원자료의 기간과 정의를 우선합니다."],
              ["02", "No Guessing", "확인할 수 없는 값은 추정하지 않습니다."],
              ["03", "Separate", "서로 다른 집계 기준은 구분합니다."],
              ["04", "Document", "출처와 가공 방법을 함께 기록합니다."],
            ].map(([number, title, description]) => (
              <article
                key={number}
                className="min-h-56 rounded-2xl border border-white/10 bg-black p-6"
              >
                <p className="text-sm text-white/20">
                  {number}
                </p>

                <h3 className="mt-12 text-lg font-medium">
                  {title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-white/40">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          CTA
      ================================================== */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/35">
                Open Data
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
                데이터를 직접
                <br />
                확인해보세요.
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-white/45">
                원본 파일과 출처, 방법론은 GitHub 저장소에서
                함께 확인할 수 있습니다.
              </p>
            </div>

            <a
              href="https://github.com/soyoung-eng/seoul-housing-finance"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/85"
            >
              GitHub Repository ↗
            </a>
          </div>
        </div>
      </section>

      {/* ==================================================
          FOOTER
      ================================================== */}
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="border-t border-white/10 py-7">
          <div className="flex flex-col justify-between gap-3 text-sm text-white/30 md:flex-row">
            <p>DustyDraft Data</p>

            <p>Seoul Housing Finance · 2008–2026</p>
          </div>
        </div>
      </div>
    </main>
  );
}