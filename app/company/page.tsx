import Link from "next/link";

const history = [
  {
    year: "2019",
    title: "Exotic Ordinary 시작",
    description: "브랜드와 커머스 프로젝트를 시작했습니다.",
  },
  {
    year: "2021",
    title: "창고 운영 시작",
    description: "제품과 커머스 운영을 위한 실제 운영 경험을 확장했습니다.",
  },
  {
    year: "2022",
    title: "The Exotic Boutique 시작",
    description: "오프라인 공간을 기반으로 제품과 큐레이션을 운영하기 시작했습니다.",
  },
  {
    year: "2023",
    title: "주얼리 공예 및 제품 개발",
    description: "주얼리 제작과 제품 개발 경험을 확장했습니다.",
  },
  {
    year: "2024",
    title: "맞춤 장신구 기술 연구 및 특허 출원",
    description: "맞춤 디자인과 디지털 경험을 연결하는 기술 개발을 시작했습니다.",
  },
  {
    year: "2025",
    title: "DUSTYDRAFT® 및 The Exotic Voutique™",
    description: "기술 개발과 브랜드 인큐베이팅을 위한 프로젝트 구조를 확장했습니다.",
  },
  {
    year: "2026",
    title: "Workspace · Library · Public API",
    description: "제품, 도구, 기록과 데이터 인프라를 공개하기 시작했습니다.",
  },
];

export default function CompanyPage() {
  return (
    <main className="min-h-screen bg-dd-ivory text-dd-ink">

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-10 md:pt-16">

      <div
        className="
          relative
          min-h-[560px]
          md:min-h-[680px]
          overflow-hidden
          rounded-[32px]
          bg-cover
          bg-center
        "
        style={{
          backgroundImage: "url('/images/company-hero.png')",
        }}
      >

        {/* 아주 약한 밝은 오버레이 */}
        <div className="absolute inset-0 bg-white/10" />

        {/* Copy */}
        <div className="
          relative z-10
          flex min-h-[560px] md:min-h-[680px]
          flex-col justify-between
          p-8 md:p-14
        ">

          <p className="text-xs tracking-[0.24em] uppercase text-black/55">
            draft · Since 2019
          </p>

          <div className="max-w-3xl">

            <h1 className="
              text-5xl
              md:text-7xl
              font-semibold
              tracking-[-0.05em]
              leading-[0.95]
              text-[#171512]
            ">
              Explore.
              <br />
              Build.
              <br />
              Operate.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-black/65">
              자산, 비즈니스 그리고 기술을 탐구하고,
              아이디어를 브랜드, 제품과 서비스로 발전시킵니다.
            </p>

          </div>

        </div>

      </div>

      </section>


      {/* Philosophy */}
      <section className="max-w-5xl mx-auto px-6 py-12">

        <p className="text-sm tracking-[0.18em] text-neutral-500 uppercase">
          Philosophy
        </p>

        <h2 className="mt-5 text-3xl md:text-4xl font-semibold leading-tight tracking-[-0.03em]">
          탐구하고,
          <br />
          만들고,
          <br />
          운영합니다.
        </h2>

        <p className="mt-6 text-lg leading-relaxed text-neutral-500">
          Explore. Build. Operate.
        </p>

        <p className="mt-8 max-w-2xl leading-relaxed text-neutral-700">
          Technology, craftsmanship and creativity.
          <br />
          서로 다른 영역의 경험과 기술을 연결해
          실제로 사용할 수 있는 결과물을 만듭니다.
        </p>

      </section>


      {/* Timeline */}
      <section className="max-w-5xl mx-auto px-6 py-16">

        <div className="border-t border-black/10 pt-8">

          <p className="text-sm tracking-[0.18em] text-neutral-500 uppercase">
            Timeline
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            타임라인
          </h2>

          <div className="mt-10 border-t border-black/10">

            {history.map((item) => (
              <div
                key={item.year}
                className="
                  grid gap-4
                  border-b border-black/10
                  py-7
                  md:grid-cols-12
                "
              >

                <p className="text-xl font-semibold md:col-span-2">
                  {item.year}
                </p>

                <div className="md:col-span-10">

                  <h3 className="text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-600">
                    {item.description}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* Ecosystem */}
      <section className="max-w-5xl mx-auto px-6 py-16">

        <p className="text-sm tracking-[0.18em] text-neutral-500 uppercase">
          Ecosystem
        </p>

        <h2 className="mt-4 text-3xl font-bold">
          생태계
        </h2>

        <p className="mt-5 max-w-2xl leading-relaxed text-neutral-600">
          드래프트에서 시작된 프로젝트는 각각의 목적에 따라
          브랜드, 제품, 서비스와 디지털 플랫폼으로 발전하고 있습니다.
        </p>


        <div className="mt-10 grid gap-5 md:grid-cols-2">

          <Link
            href="/about"
            className="rounded-2xl border border-black/10 bg-white/30 p-6 transition hover:bg-white/60"
          >
            <p className="text-xs tracking-[0.15em] text-neutral-500 uppercase">
              Technology & Incubation
            </p>

            <h3 className="mt-3 text-2xl font-semibold">
              DUSTYDRAFT®
            </h3>

            <p className="mt-3 text-neutral-600">
              기술 개발, 제품 실험과 브랜드 인큐베이팅.
            </p>
          </Link>


          <Link
            href="/brands/exotic-ordinary"
            className="rounded-2xl border border-black/10 bg-white/30 p-6 transition hover:bg-white/60"
          >
            <p className="text-xs tracking-[0.15em] text-neutral-500 uppercase">
              Lifestyle & Creative
            </p>

            <h3 className="mt-3 text-2xl font-semibold">
              Exotic Ordinary®
            </h3>

            <p className="mt-3 text-neutral-600">
              라이프스타일, 제품, 큐레이션과 창작.
            </p>
          </Link>


          <Link
            href="/brands/dustie"
            className="rounded-2xl border border-black/10 bg-white/30 p-6 transition hover:bg-white/60"
          >
            <p className="text-xs tracking-[0.15em] text-neutral-500 uppercase">
              AI Product
            </p>

            <h3 className="mt-3 text-2xl font-semibold">
              Dustie
            </h3>

            <p className="mt-3 text-neutral-600">
              AI와 데이터를 활용한 정보 탐색 및 의사결정 지원.
            </p>
          </Link>


          <Link
            href="/brands/assetpicker"
            className="rounded-2xl border border-black/10 bg-white/30 p-6 transition hover:bg-white/60"
          >
            <p className="text-xs tracking-[0.15em] text-neutral-500 uppercase">
              Real Estate Information
            </p>

            <h3 className="mt-3 text-2xl font-semibold">
              AssetPicker
            </h3>

            <p className="mt-3 text-neutral-600">
              부동산과 자산에 관한 정보, 데이터와 콘텐츠.
            </p>
          </Link>

        </div>

        <Link
          href="/brands"
          className="inline-block mt-7 text-sm text-neutral-600 hover:text-black transition"
        >
          전체 브랜드 보기 →
        </Link>

      </section>


      {/* Network */}
      <section className="max-w-5xl mx-auto px-6 py-16">

        <div className="border-t border-black/10 pt-8">

          <p className="text-sm tracking-[0.18em] text-neutral-500 uppercase">
            Network
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            네트워크
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">

            <a
              href="https://dustydraft.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-black/10 py-5 hover:opacity-60 transition"
            >
              <p className="font-semibold">
                dustydraft.com ↗
              </p>

              <p className="mt-2 text-sm text-neutral-500">
                Technology & Incubation
              </p>
            </a>


            <a
              href="https://draft.best"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-black/10 py-5 hover:opacity-60 transition"
            >
              <p className="font-semibold">
                draft.best ↗
              </p>

              <p className="mt-2 text-sm text-neutral-500">
                DRAFT House
              </p>
            </a>


            <a
              href="https://exoticordinary.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-black/10 py-5 hover:opacity-60 transition"
            >
              <p className="font-semibold">
                exoticordinary.com ↗
              </p>

              <p className="mt-2 text-sm text-neutral-500">
                Exotic Ordinary®
              </p>
            </a>

          </div>

        </div>

      </section>


      {/* Business Information */}
      <section className="max-w-5xl mx-auto px-6 pt-12 pb-20">

        <div className="border-t border-black/10 pt-8">

          <p className="text-sm tracking-[0.18em] text-neutral-500 uppercase">
            Business Information
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            사업자 정보
          </h2>


          <div className="mt-8 text-sm leading-8 text-neutral-600">

            <p>
              상호 : 드래프트 (draft)
            </p>

            <p>
              사업자등록번호 : 756-66-00303
            </p>

            <p>
              통신판매업신고번호 : 2020-서울양천-0014
            </p>

            <p className="mt-5">
              Email :{" "}
              <a
                href="mailto:soyoung@draft.best"
                className="text-neutral-900 hover:opacity-60 transition"
              >
                soyoung@draft.best
              </a>
            </p>

          </div>


          <p className="mt-10 text-xs text-neutral-500">
            © 2019–2026 draft. All rights reserved.
          </p>

        </div>

      </section>

    </main>
  );
}