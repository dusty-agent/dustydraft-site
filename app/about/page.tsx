import Link from "next/link";

const areas = [
  {
    number: "01",
    title: "AI & Data Systems",
    description:
      "정보를 수집하고 구조화하여 검색·분석·검증 가능한 데이터와 AI 시스템을 설계합니다.",
    details: [
      "데이터 수집 및 구조화",
      "문서 기반 검색과 분석",
      "AI 의사결정 지원",
    ],
  },
  {
    number: "02",
    title: "Workflow Automation",
    description:
      "반복적으로 수행되는 업무를 재사용 가능한 프로그램과 효율적인 워크플로우로 전환합니다.",
    details: [
      "업무 프로세스 자동화",
      "리서치 및 문서화",
      "데이터 변환과 출력",
    ],
  },
  {
    number: "03",
    title: "Creative Technology",
    description:
      "영상, 음악, 이미지와 콘텐츠 제작 과정에서 반복되는 기술 작업을 줄이는 도구를 만듭니다.",
    details: [
      "영상 제작 자동화",
      "오디오 비주얼라이제이션",
      "콘텐츠 렌더링",
    ],
  },
  {
    number: "04",
    title: "Independent Products",
    description:
      "직접 사용하며 검증한 도구와 아이디어를 독립적인 디지털 제품과 서비스로 발전시킵니다.",
    details: [
      "프로토타입 개발",
      "실사용 기반 검증",
      "브랜드 및 서비스 인큐베이팅",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Observe",
    korean: "발견",
    description:
      "실제 업무와 운영 과정에서 반복되는 문제와 새로운 가능성을 발견합니다.",
  },
  {
    number: "02",
    title: "Structure",
    korean: "구조화",
    description:
      "문제와 데이터, 작업의 흐름을 이해하고 사용할 수 있는 구조로 정리합니다.",
  },
  {
    number: "03",
    title: "Build",
    korean: "개발",
    description:
      "아이디어에 머무르지 않고 실제로 작동하는 도구와 서비스를 만듭니다.",
  },
  {
    number: "04",
    title: "Use & Refine",
    korean: "사용과 개선",
    description:
      "직접 사용하고 운영하며 더 나은 형태로 지속해서 개선합니다.",
  },
];

const currentWork = [
  {
    number: "01",
    eyebrow: "Brands & Ventures",
    title: "브랜드와 프로젝트",
    description:
      "Dustie, AssetPicker, Exotic Ordinary 등 직접 기획하거나 개발하고 인큐베이팅하는 브랜드와 프로젝트를 소개합니다.",
    href: "/brands",
    label: "브랜드 보기",
  },
  {
    number: "02",
    eyebrow: "Workspace",
    title: "도구와 제품",
    description:
      "실제로 만들고 운영하는 제품, 분석 도구와 현재 개발 중인 프로젝트를 한곳에서 확인할 수 있습니다.",
    href: "/workspace",
    label: "워크스페이스 보기",
  },
  {
    number: "03",
    eyebrow: "Public API",
    title: "데이터와 인터페이스",
    description:
      "공개 데이터와 구조화된 데이터를 서비스와 애플리케이션에서 활용할 수 있도록 API 형태로 연결합니다.",
    href: "/api",
    label: "API 보기",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-dd-ivory text-dd-ink">

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-12 md:pb-28 md:pt-20">
        <div className="border-t border-black/15 pt-6">

          <p className="text-sm uppercase tracking-[0.24em] text-[#756F68]">
            About DustyDraft
          </p>

          <h1 className="mt-10 max-w-5xl text-4xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
            Technology for
            <br />
            Less Repetition.
          </h1>

          <div className="mt-12 grid gap-8 border-t border-black/15 pt-8 md:grid-cols-12">

            <div className="md:col-span-4">
              <p className="text-sm uppercase tracking-[0.2em] text-[#756F68]">
                반복을 줄이는 기술
              </p>

              <h2 className="mt-4 max-w-sm text-2xl font-semibold leading-snug tracking-[-0.025em] md:text-3xl">
                더 적은 반복,
                <br />
                더 많은 판단과 창작.
              </h2>
            </div>

            <div className="max-w-2xl space-y-5 md:col-span-8">
              <p className="text-xl leading-relaxed tracking-[-0.015em] md:text-2xl">
                반복되는 작업을 구조화하고 자동화하여,
                <br className="hidden md:block" />
                사람이 판단과 창작에 더 집중할 수 있도록 돕습니다.
              </p>

              <p className="max-w-xl leading-relaxed text-[#69635C]">
                DustyDraft는 AI, 데이터와 웹 기술을 활용해
                실제 업무와 콘텐츠 제작 과정에서 발견한 문제를
                실용적인 디지털 도구와 워크플로우로 전환하는
                독립 기술 스튜디오입니다.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 md:py-20">
        <div className="overflow-hidden rounded-[28px]">
          <img
            src="/images/dustydraft-hero.jpg"
            alt="DustyDraft"
            className="
              w-full
              h-[320px]
              md:h-[400px]
              object-cover
            "
          />
        </div>

        <div className="mt-5 flex justify-between gap-6 text-xs tracking-[0.16em] uppercase text-black/45">
          <span>DustyDraft®</span>
          <span>Ideas · Technology · Ventures</span>
        </div>
      </section>


      {/* Who We Are */}
      <section className="border-y border-black/10 bg-[#EAE4DC]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-12 md:py-24">

          <div className="md:col-span-4">
            <p className="text-sm uppercase tracking-[0.22em] text-[#756F68]">
              Who We Are
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
              우리가 만드는 것
            </h2>
          </div>

          <div className="md:col-span-8">
            <p className="max-w-3xl text-2xl leading-relaxed tracking-[-0.02em] md:text-4xl md:leading-snug">
              기술을 보여주기 위한 기술보다,
              <br />
              실제로 쓰이고 다시 사용할 수 있는 것을 만듭니다.
            </p>

            <div className="mt-10 max-w-2xl space-y-5 leading-relaxed text-[#69635C]">
              <p>
                자산, 비즈니스, 데이터와 콘텐츠가 만나는 지점에서
                반복되는 문제와 새로운 가능성을 발견합니다.
              </p>

              <p>
                문제를 구조화하고 작동하는 도구를 만든 뒤,
                직접 사용하고 운영하면서 개선합니다.
                기술은 목적이 아니라 더 나은 작업 방식과 경험을 만들기 위한
                수단입니다.
              </p>

              <p>
                필요하다면 하나의 아이디어를 제품이나 브랜드로 발전시키고,
                독립적으로 성장할 수 있도록 인큐베이팅합니다.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* Areas */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">

        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-[#756F68]">
              What We Build
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
              기술이 실제로 쓰이는 방식
            </h2>
          </div>

          <p className="max-w-md leading-relaxed text-[#69635C]">
            데이터, 자동화와 콘텐츠 제작을
            서로 분리하기보다 연결된 작업 흐름으로 설계합니다.
          </p>

        </div>

        <div className="mt-14 grid border-l border-t border-black/10 md:grid-cols-2">

          {areas.map((area) => (
            <article
              key={area.title}
              className="group border-b border-r border-black/10 p-7 transition-colors hover:bg-white/50 md:p-10"
            >
              <div className="flex items-start justify-between gap-6">

                <p className="text-sm text-[#9B938A]">
                  {area.number}
                </p>

                <span className="text-lg text-[#756F68] transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>

              </div>

              <h3 className="mt-10 text-2xl font-semibold tracking-[-0.025em] md:text-3xl">
                {area.title}
              </h3>

              <p className="mt-5 max-w-lg leading-relaxed text-[#69635C]">
                {area.description}
              </p>

              <ul className="mt-8 space-y-2 border-t border-black/10 pt-5 text-sm text-[#756F68]">

                {area.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex items-center gap-3"
                  >
                    <span className="h-px w-4 bg-black/30" />
                    {detail}
                  </li>
                ))}

              </ul>
            </article>
          ))}

        </div>
      </section>


      {/* API */}
      <section className="bg-[#171717] text-[#F4F0EA]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">

          <div className="grid gap-12 md:grid-cols-12 md:items-end">

            <div className="md:col-span-5">
              <p className="text-sm uppercase tracking-[0.22em] text-white/40">
                Public API
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.035em] md:text-5xl">
                데이터를 연결하고,
                <br />
                다시 사용할 수 있게.
              </h2>
            </div>

            <div className="md:col-span-7">

              <p className="max-w-2xl text-xl leading-relaxed tracking-[-0.015em] text-white/80 md:text-2xl">
                구조화한 데이터를
                <br className="hidden md:block" />
                서비스와 애플리케이션이 활용할 수 있도록 연결합니다.
              </p>

              <p className="mt-6 max-w-xl leading-relaxed text-white/45">
                공개 데이터와 구조화된 정보를 활용할 수 있는
                인터페이스를 만들고, 일부 API를 순차적으로 공개합니다.
              </p>

            </div>
          </div>

          <Link
            href="/api"
            className="group mt-14 block border-y border-white/15 py-8 transition-colors hover:bg-white/[0.04] md:px-4"
          >
            <div className="grid gap-6 md:grid-cols-12 md:items-center">

              <div className="md:col-span-1">
                <span className="text-sm text-white/30">
                  01
                </span>
              </div>

              <div className="md:col-span-4">
                <p className="text-xs uppercase tracking-[0.16em] text-white/35">
                  DustyDraft API
                </p>

                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.025em] md:text-3xl">
                  Public APIs
                </h3>
              </div>

              <div className="md:col-span-5">
                <p className="max-w-lg leading-relaxed text-white/50">
                  데이터 출처와 분류,
                  부동산 및 시장 데이터를 활용할 수 있는
                  API를 순차적으로 공개합니다.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">

                  {["Data", "Real Estate", "Open API"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-white/45"
                    >
                      {tag}
                    </span>
                  ))}

                </div>
              </div>

              <div className="flex justify-end md:col-span-2">
                <span className="text-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </div>

            </div>
          </Link>

        </div>
      </section>


      {/* Process */}
      <section className="bg-[#E3DDD5] text-[#171512]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">

          <p className="text-sm uppercase tracking-[0.22em] text-[#756F68]">
            How We Work
          </p>

          <div className="mt-5 flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <h2 className="max-w-3xl text-3xl font-semibold leading-[1.15] tracking-[-0.035em] sm:text-4xl md:text-5xl">
              발견하고, 구조화하고,
              <br className="hidden sm:block" />
              만들고, 개선합니다.
            </h2>

            <p className="max-w-md leading-relaxed text-[#69635C]">
              추상적인 기술 시연보다
              실제로 사용하고 개선할 수 있는 결과물을 중요하게 생각합니다.
            </p>

          </div>

          <div className="mt-16 grid border-l border-t border-black/10 md:grid-cols-4">

            {process.map((item) => (
              <article
                key={item.title}
                className="min-h-72 border-b border-r border-black/10 p-6 md:p-7"
              >
                <p className="text-sm text-[#9B938A]">
                  {item.number}
                </p>

                <div className="mt-16">
                  <p className="text-sm text-[#756F68]">
                    {item.korean}
                  </p>

                  <h3 className="mt-2 text-2xl font-medium tracking-[-0.02em]">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-relaxed text-[#69635C]">
                    {item.description}
                  </p>
                </div>

              </article>
            ))}

          </div>
        </div>
      </section>


      {/* Current Work */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">

        <p className="text-sm uppercase tracking-[0.22em] text-[#756F68]">
          Current Work
        </p>

        <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <h2 className="text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
            지금 만들고 있는 것
          </h2>

          <p className="max-w-md leading-relaxed text-[#69635C]">
            브랜드, 제품, 도구와 데이터 인프라를
            각각의 목적에 맞게 운영하고 있습니다.
          </p>

        </div>

        <div className="mt-14 border-t border-black/15">

          {currentWork.map((item) => (
            <Link
              key={item.number}
              href={item.href}
              className="group grid gap-5 border-b border-black/15 py-9 transition-colors hover:bg-white/45 md:grid-cols-12 md:items-center md:px-4"
            >
              <span className="text-sm text-[#9B938A] md:col-span-1">
                {item.number}
              </span>

              <div className="md:col-span-4">
                <p className="text-xs uppercase tracking-[0.16em] text-[#8A8279]">
                  {item.eyebrow}
                </p>

                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.025em]">
                  {item.title}
                </h3>
              </div>

              <p className="max-w-xl leading-relaxed text-[#69635C] md:col-span-5">
                {item.description}
              </p>

              <div className="flex justify-end md:col-span-2">
                <span className="hidden text-sm text-[#756F68] lg:inline">
                  {item.label}
                </span>

                <span className="ml-4 text-xl transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>

            </Link>
          ))}

        </div>
      </section>


      {/* Founder */}
      <section className="border-y border-black/10 bg-[#EAE4DC]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-12 md:py-28">

          <div className="md:col-span-4">
            <p className="text-sm uppercase tracking-[0.22em] text-[#756F68]">
              Founder
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em]">
              Jang So Young
            </h2>

            <p className="mt-3 text-[#756F68]">
              Founder & Independent Builder
            </p>
          </div>

          <div className="md:col-span-8">

            <p className="max-w-3xl text-2xl leading-relaxed tracking-[-0.02em] md:text-3xl">
              AI 개발과 컨설팅 경험을 바탕으로,
              <br className="hidden md:block" />
              기술과 실제 산업을 연결하는 도구를 만듭니다.
            </p>

            <div className="mt-9 max-w-2xl space-y-5 leading-relaxed text-[#69635C]">

              <p>
                전기전자공학을 전공하고 AI 개발과 컨설팅 업무를 수행해
                왔습니다. 현재는 AI, 데이터와 자동화 기술을 활용한
                디지털 도구를 개발하고 다양한 독립 프로젝트를 운영합니다.
              </p>

              <p>
                서로 달라 보이는 분야에서도 반복되는 문제와 연결점을 찾고,
                이를 구조화하여 실제로 사용할 수 있는 시스템과 브랜드로
                발전시키는 데 관심을 두고 있습니다.
              </p>

            </div>

            <div className="mt-10 flex flex-wrap gap-3">

              {[
                "AI Development",
                "Workflow Automation",
                "Real Estate",
                "Data Systems",
                "Creative Technology",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-black/15 px-4 py-2 text-sm text-[#69635C]"
                >
                  {item}
                </span>
              ))}

            </div>

          </div>
        </div>
      </section>


      {/* Overview & Contact */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">

        <div className="grid gap-16 md:grid-cols-2">

          {/* Overview */}
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-[#756F68]">
              Overview
            </p>

            <div className="mt-8 border-t border-black/15">

              {[
                ["Founded", "2019"],
                ["Location", "Seoul, South Korea"],
                [
                  "Focus",
                  "AI, Automation, Data, Products & Creative Technology",
                ],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="grid grid-cols-3 gap-4 border-b border-black/15 py-5"
                >
                  <p className="text-sm text-[#756F68]">
                    {label}
                  </p>

                  <p className="col-span-2">
                    {value}
                  </p>
                </div>
              ))}

            </div>
          </div>


          {/* Contact */}
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-[#756F68]">
              Contact
            </p>

            <h2 className="mt-8 max-w-lg text-4xl font-semibold leading-tight tracking-[-0.035em]">
              새로운 아이디어와
              <br />
              실용적인 협업을 기다립니다.
            </h2>

            <a
              href="mailto:soyoung@draft.best"
              className="group mt-10 inline-flex items-center gap-4 border-b border-black pb-2 text-lg"
            >
              soyoung@draft.best

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </div>

        </div>
      </section>


      {/* Closing */}
      <section className="px-6 pb-6">

        <div className="mx-auto flex min-h-[55vh] max-w-6xl items-end rounded-3xl bg-[#171717] p-7 text-[#F4F0EA] md:p-12">

          <div className="w-full">

            <p className="text-sm uppercase tracking-[0.22em] text-white/35">
              DustyDraft
            </p>

            <p className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] md:text-7xl">
              Less repetition.
              <br />
              More room to create.
            </p>

            <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/15 pt-5 text-sm text-white/40 md:flex-row">
              <p>Independent Technology Studio</p>
              <p>Seoul, South Korea</p>
            </div>

          </div>
        </div>

      </section>

    </main>
  );
}