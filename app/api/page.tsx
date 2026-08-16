import Link from "next/link";

const apiItems = [
  {
    name: "Korea Provenance API",
    description:
      "한국 관련 데이터의 출처, 분류, 참조 정보를 구조화하여 제공하는 API입니다.",
    status: "Beta",
    href: "https://YOUR_API_URL",
    docsHref: "https://YOUR_DOCS_URL",
  },
  {
    name: "AssetPicker Real Estate API",
    description:
      "부동산 리서치와 분석, 서비스 개발을 위한 데이터 API입니다.",
    status: "준비 중",
    href: "#",
    docsHref: "#",
  },
  {
    name: "Market Data API",
    description:
      "시장 및 금융 데이터를 다양한 서비스에서 활용할 수 있도록 제공하는 API입니다.",
    status: "준비 중",
    href: "#",
    docsHref: "#",
  },
];

export default function ApiPage() {
  return (
    <main className="min-h-screen bg-dd-black text-dd-white">
      <section className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.22em] text-white/45">
            DustyDraft / API
          </p>

          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Public APIs
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-white/70 md:text-2xl">
            데이터를 연결하고,
            <br />
            다시 사용할 수 있게 만듭니다.
          </p>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/45">
            DustyDraft는 공개 데이터와 구조화된 데이터를
            개발자와 서비스가 활용할 수 있는 인터페이스로 제공합니다.
          </p>
        </div>

        <div className="mt-20 border-t border-white/10 pt-6">
          <p className="text-sm uppercase tracking-[0.2em] text-white/35">
            Available APIs
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight">
            공개 API
          </h2>
        </div>

        <div className="mt-10 grid gap-5">
          {apiItems.map((item, index) => (
            <article
              key={item.name}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-white/20 hover:bg-white/[0.05] md:p-9"
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

                    <p className="mt-4 max-w-2xl leading-7 text-white/50">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 gap-3 md:pl-6">
                  {item.docsHref !== "#" && (
                    <Link
                      href={item.docsHref}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/75 transition hover:bg-white/10"
                    >
                      문서 보기
                    </Link>
                  )}

                  {item.href !== "#" && (
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-white/85"
                    >
                      API 열기 ↗
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-28 border-y border-white/10 py-16 md:py-20">
          <p className="text-sm uppercase tracking-[0.2em] text-white/35">
            How It Works
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            데이터를 수집하고,
            <br />
            구조화하고, 연결합니다.
          </h2>

          <div className="mt-12 grid border-l border-t border-white/10 sm:grid-cols-2 md:grid-cols-4">
            {[
              ["01", "Collect", "수집", "활용 가능한 데이터를 수집합니다."],
              ["02", "Structure", "구조화", "데이터를 일관된 형태로 정리합니다."],
              ["03", "Verify", "검증", "출처와 데이터 구조를 확인합니다."],
              ["04", "Deliver", "제공", "API를 통해 활용 가능한 형태로 제공합니다."],
            ].map(([number, english, korean, description]) => (
              <article
                key={number}
                className="min-h-64 border-b border-r border-white/10 p-6"
              >
                <p className="text-sm text-white/25">{number}</p>

                <div className="mt-14">
                  <p className="text-sm text-white/35">{korean}</p>

                  <h3 className="mt-2 text-xl font-medium">
                    {english}
                  </h3>

                  <p className="mt-5 text-sm leading-6 text-white/45">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="py-20 md:py-28">
          <p className="text-sm uppercase tracking-[0.2em] text-white/35">
            Get Started
          </p>

          <div className="mt-5 grid gap-10 md:grid-cols-12">
            <h2 className="text-4xl font-semibold tracking-tight md:col-span-6 md:text-5xl">
              API를
              <br />
              사용해보세요.
            </h2>

            <div className="md:col-span-6">
              <p className="max-w-lg leading-7 text-white/50">
                현재 공개된 API의 엔드포인트, 요청 방식과 응답 구조는
                각 API 문서에서 확인할 수 있습니다.
              </p>

              <p className="mt-5 max-w-lg text-sm leading-6 text-white/30">
                API별 제공 범위와 이용 정책은 데이터 원천 및 서비스 운영
                정책에 따라 달라질 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        <div className="border-t border-white/10 py-7">
          <div className="flex flex-col justify-between gap-3 text-sm text-white/30 md:flex-row">
            <p>DustyDraft API</p>
            <p>Data Infrastructure for Practical Intelligence</p>
          </div>
        </div>
      </section>
    </main>
  );
}