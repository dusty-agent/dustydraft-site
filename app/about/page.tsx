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
      "독립 서비스 운영",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Observe",
    korean: "발견",
    description: "실제 업무와 운영 과정에서 반복되는 문제를 발견합니다.",
  },
  {
    number: "02",
    title: "Structure",
    korean: "구조화",
    description: "문제와 데이터, 작업의 흐름을 명확한 구조로 정리합니다.",
  },
  {
    number: "03",
    title: "Build",
    korean: "개발",
    description: "아이디어에 머무르지 않고 실제로 작동하는 도구를 만듭니다.",
  },
  {
    number: "04",
    title: "Use & Refine",
    korean: "사용과 개선",
    description: "직접 사용하고 검증하며 더 나은 형태로 지속해서 개선합니다.",
  },
];

const internalBrands = [
  {
    name: "Dustie",
    description:
      "AI-assisted workspace for documents, knowledge, research, and professional workflows.",
    tags: ["AI Workspace", "Knowledge", "Workflow"],
    href: "https://dustie.xyz",
    isPublic: true,
  },
  {
    name: "Exotic Ordinary",
    description:
      "An independent lifestyle and creative brand exploring design, music, content, and digital experiences.",
    tags: ["Lifestyle", "Design", "Music", "Content"],
    href: "https://exoticordinary.com",
    isPublic: true,
  },
  {
    name: "Private Brand",
    description:
      "An internal brand currently under incubation and development.",
    tags: ["Brand Incubation", "In Development"],
    href: "",
    isPublic: false,
  },
];

const confidentialProjects = [
  {
    number: "01",
    title: "Commercial AI Decision Support",
    type: "System Architecture",
    status: "In Development",
  },
  {
    number: "02",
    title: "Knowledge Architecture",
    type: "Research & System Design",
    status: "Research",
  },
  {
    number: "03",
    title: "Workflow Automation Platform",
    type: "Architecture Design",
    status: "Confidential",
  },
  {
    number: "04",
    title: "Multimodal Intelligence",
    type: "Private Research",
    status: "Prototype",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#ede4da] text-neutral-900">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-12 md:pb-28 md:pt-20">
        <div className="border-t border-black/15 pt-6">
          <p className="text-sm uppercase tracking-[0.24em] text-neutral-500">
            About DustyDraft
          </p>

          <h1 className="mt-10 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
            Technology for
            <br />
            Less Repetition.
          </h1>

          <div className="mt-12 grid gap-8 border-t border-black/15 pt-8 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
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

              <p className="max-w-xl leading-relaxed text-neutral-600">
                DustyDraft는 AI, 데이터와 웹 기술을 활용해 실제 업무와 콘텐츠
                제작 과정에서 발견한 비효율을 실용적인 디지털 도구와
                워크플로우로 전환하는 독립 스튜디오입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-y border-black/10 bg-white/20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-4">
            <p className="text-sm uppercase tracking-[0.22em] text-neutral-500">
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
              실제 문제를 줄이고 반복해서 사용할 수 있는 도구를 만듭니다.
            </p>

            <div className="mt-10 max-w-2xl space-y-5 leading-relaxed text-neutral-600">
              <p>
                우리는 자산, 비즈니스, 데이터와 콘텐츠가 만나는 지점에서
                반복되는 문제를 발견합니다.
              </p>

              <p>
                문제의 흐름을 구조화하고, 작동하는 도구를 만든 뒤 직접
                사용하며 개선합니다. 기술은 목적이 아니라 더 나은
                워크플로우를 만들기 위한 수단입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-neutral-500">
              What We Build
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
              기술이 실제로 쓰이는 방식
            </h2>
          </div>

          <p className="mt-6">
            데이터, 자동화, 콘텐츠 제작을 서로 분리하기보다
            연결된 작업 흐름으로 설계합니다.
          </p>
        </div>

        <div className="mt-14 grid border-l border-t border-black/10 md:grid-cols-2">
          {areas.map((area) => (
            <article
              key={area.title}
              className="group border-b border-r border-black/10 p-7 transition-colors hover:bg-white/35 md:p-10"
            >
              <div className="flex items-start justify-between gap-6">
                <p className="text-sm text-neutral-400">{area.number}</p>

                <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </div>

              <h3 className="mt-10 text-2xl font-semibold tracking-[-0.025em] md:text-3xl">
                {area.title}
              </h3>

              <p className="mt-5 max-w-lg leading-relaxed text-neutral-600">
                {area.description}
              </p>

              <ul className="mt-8 space-y-2 border-t border-black/10 pt-5 text-sm text-neutral-500">
                {area.details.map((detail) => (
                  <li key={detail} className="flex items-center gap-3">
                    <span className="h-px w-4 bg-black/30" />
                    {detail}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-neutral-900 text-[#ede4da]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-sm uppercase tracking-[0.22em] text-white/45">
            How We Work
          </p>

          <div className="mt-5 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 className="max-w-3xl text-3xl font-semibold leading-[1.15] tracking-[-0.035em] sm:text-4xl md:text-5xl">
              발견하고, 구조화하고,
              <br className="hidden sm:block" />
              만들고, 개선합니다.
            </h2>

            <p className="mt-6">
              추상적인 기술 시연보다 실제로 사용하고 개선할 수 있는
              결과물을 중요하게 생각합니다.
            </p>
          </div>

          <div className="mt-16 grid border-l border-t border-white/15 md:grid-cols-4">
            {process.map((item) => (
              <article
                key={item.title}
                className="min-h-72 border-b border-r border-white/15 p-6 md:p-7"
              >
                <p className="text-sm text-white/35">{item.number}</p>

                <div className="mt-16">
                  <p className="text-sm text-white/45">{item.korean}</p>

                  <h3 className="mt-2 text-2xl font-medium tracking-[-0.02em]">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-relaxed text-white/55">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-neutral-500">
            Selected Projects
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
            프로젝트
          </h2>
        </div>

        {/* Internal Brands */}
        <div className="mt-14">
          <div className="grid gap-6 border-b border-black/15 pb-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-5">
              <p className="text-sm uppercase tracking-[0.22em] text-neutral-500">
                Internal Brands
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] md:text-3xl">
                자체 개발 브랜드
              </h3>
            </div>

            <p className="text-sm leading-7 text-neutral-600 md:col-span-7">
              DustyDraft가 직접 기획하고 개발하며 운영하는 브랜드와 서비스입니다.
            </p>
          </div>

          <div>
            {internalBrands.map((brand, index) => {
              const content = (
                <>
                  <span className="text-sm text-neutral-400 md:col-span-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="md:col-span-3">
                    <h4 className="text-xl font-semibold tracking-[-0.025em] md:text-2xl">
                      {brand.name}
                    </h4>

                    <p className="mt-2 text-xs uppercase tracking-[0.14em] text-neutral-400">
                      {brand.isPublic ? "Public Brand" : "Private Brand"}
                    </p>
                  </div>

                  <div className="md:col-span-6">
                    <p className="max-w-xl leading-relaxed text-neutral-600">
                      {brand.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                      {brand.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs uppercase tracking-[0.12em] text-neutral-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end md:col-span-2">
                    {brand.isPublic ? (
                      <span className="text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                        ↗
                      </span>
                    ) : (
                      <span className="rounded-full border border-black/15 px-3 py-2 text-[10px] uppercase tracking-[0.16em] text-neutral-500">
                        Private
                      </span>
                    )}
                  </div>
                </>
              );

              return brand.isPublic ? (
                <a
                  key={brand.name}
                  href={brand.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group grid gap-5 border-b border-black/15 py-8 transition-colors hover:bg-white/20 md:grid-cols-12 md:items-start md:gap-8 md:px-4"
                >
                  {content}
                </a>
              ) : (
                <article
                  key={brand.name}
                  className="grid gap-5 border-b border-black/15 py-8 md:grid-cols-12 md:items-start md:gap-8 md:px-4"
                >
                  {content}
                </article>
              );
            })}
          </div>
        </div>

        {/* Confidential Projects */}
        <div className="mt-24">
          <div className="flex items-end justify-between border-b border-black/15 pb-8">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-neutral-500">
                Confidential Projects
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] md:text-3xl">
                비공개 프로젝트
              </h3>
            </div>

            <p className="text-sm leading-7 text-neutral-600 whitespace-nowrap">
              세부 기능과 구현 방식은 공개하지 않고 시스템 설계와 아키텍처
              범위만 소개합니다.
            </p>
          </div>

          <div className="mt-8 border-t border-black/15">
            {confidentialProjects.map((project) => (
              <article
                key={project.number}
                className="grid gap-5 border-b border-black/15 py-8 md:grid-cols-12 md:items-center md:gap-8 md:px-4"
              >
                <span className="text-sm text-neutral-400 md:col-span-1">
                  {project.number}
                </span>

                <div className="md:col-span-5">
                  <h4 className="text-xl font-semibold tracking-[-0.02em] md:text-2xl">
                    {project.title}
                  </h4>

                  <p className="mt-2 text-sm text-neutral-500">
                    {project.type}
                  </p>
                </div>

                <div className="md:col-span-4">
                  <div className="flex items-center gap-3 text-sm text-neutral-500">
                    <span>Input</span>
                    <span>→</span>
                    <span>Structure</span>
                    <span>→</span>
                    <span>Output</span>
                  </div>
                </div>

                <div className="md:col-span-2 md:text-right">
                  <span className="inline-flex rounded-full border border-black/15 px-4 py-2 text-xs uppercase tracking-[0.14em] text-neutral-500">
                    {project.status}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>  

      {/* Founder */}
      <section className="border-y border-black/10 bg-white/20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-4">
            <p className="text-sm uppercase tracking-[0.22em] text-neutral-500">
              Founder
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em]">
              Jang So Young
            </h2>

            <p className="mt-3 text-neutral-500">
              Founder & Independent Builder
            </p>
          </div>

          <div className="md:col-span-8">
            <p className="max-w-3xl text-2xl leading-relaxed tracking-[-0.02em] md:text-3xl">
              AI 개발과 컨설팅 경험을 바탕으로,
              <br className="hidden md:block" />
              기술과 실제 산업을 연결하는 도구를 만듭니다.
            </p>

            <div className="mt-9 max-w-2xl space-y-5 leading-relaxed text-neutral-600">
              <p>
                전기전자공학을 전공하고 AI 개발과 컨설팅 업무를 수행해
                왔습니다. 현재는 AI, 데이터와 자동화 기술을 활용한 디지털
                도구를 개발하며 부동산 실무와 독립 브랜드 및 콘텐츠
                사업을 함께 운영하고 있습니다.
              </p>

              <p>
                서로 달라 보이는 분야에서도 반복되는 문제를 발견하고,
                이를 구조화하여 실제로 사용할 수 있는 시스템으로 만드는
                데 집중합니다.
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
                  className="rounded-full border border-black/15 px-4 py-2 text-sm text-neutral-600"
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
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-neutral-500">
              Overview
            </p>

            <div className="mt-8 border-t border-black/15">
              {[
                ["Founded", "2019"],
                ["Location", "Seoul, South Korea"],
                ["Focus", "AI, Automation, Data & Creative Technology"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="grid grid-cols-3 gap-4 border-b border-black/15 py-5"
                >
                  <p className="text-sm text-neutral-500">{label}</p>
                  <p className="col-span-2">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-neutral-500">
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
        <div className="mx-auto flex min-h-[55vh] max-w-6xl items-end rounded-3xl bg-neutral-900 p-7 text-[#ede4da] md:p-12">
          <div className="w-full">
            <p className="text-sm uppercase tracking-[0.22em] text-white/40">
              DustyDraft
            </p>

            <p className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] md:text-7xl">
              Less repetition.
              <br />
              More room to create.
            </p>

            <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/15 pt-5 text-sm text-white/45 md:flex-row">
              <p>Independent Technology Studio</p>
              <p>Seoul, South Korea</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}