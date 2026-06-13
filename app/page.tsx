import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#ede4da] text-neutral-900">

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-12">

        <h1 className="text-5xl md:text-7xl font-bold">
          DUSTY DRAFT®
        </h1>

        <p className="mt-6 text-xl text-neutral-700">
          개발 스튜디오 & 인텔리전스 랩
        </p>

        <p className="mt-2 text-neutral-500">
          Development Studio & Intelligence Lab
        </p>

        <p className="mt-10 text-lg text-neutral-800 max-w-2xl">
          아이디어, 비즈니스 그리고 부동산이
          가능성에서 현실로 나아갈 수 있도록
          진단, 분석 그리고 실행을 지원합니다.
        </p>

        <p className="mt-10 text-lg text-neutral-800 max-w-2xl">
          현재를 이해하고,
          가능성을 발견하며,
          앞으로 나아갈 방향을 설계합니다.
        </p>
        <img
            src="/images/hero.png"
            alt="Dusty Draft"
            className="rounded-3xl mt-10 w-full"
          />

        <p className="mt-10 text-lg text-neutral-800 max-w-2xl">
          We assess what exists, identify what is possible,
          and design a path forward.
        </p>
      </section>

      {/* What We Do */}
      <section className="max-w-5xl mx-auto px-6 py-16">

      <h2 className="text-4xl font-bold">
        우리가 하는 일
      </h2>

      <p className="mt-2 text-neutral-500">
        What We Do
      </p>

        <div className="grid md:grid-cols-4 gap-6">

          {/* <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
            <h3 className="text-xl font-semibold">
              Software Development
            </h3>

            <p className="mt-3 text-neutral-600">
              Web applications, automation and custom solutions.
            </p>
          </div>

          <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
            <h3 className="text-xl font-semibold">
              AI Services
            </h3>

            <p className="mt-3 text-neutral-600">
              Datasets, AI workflows and intelligent assistants.
            </p>
          </div>

          <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
            <h3 className="text-xl font-semibold">
              Digital Products
            </h3>

            <p className="mt-3 text-neutral-600">
              Experimental tools, platforms and independent products.
            </p>
          </div> */}

          <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
          <h3 className="text-xl font-semibold">
            빌딩 인텔리전스
          </h3>

          <p className="text-sm text-neutral-500 mt-1">
            Building Intelligence
          </p>

          <p className="mt-3 text-neutral-600">
            건물, 시설 및 운영 환경을
            진단하고 분석합니다.
          </p>
          </div>

          <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
          <h3 className="text-xl font-semibold">
            데이터 인텔리전스
          </h3>

          <p className="text-sm text-neutral-500 mt-1">
            Data Intelligence
          </p>

          <p className="mt-3 text-neutral-600">
            데이터를 분석하여
            실행 가능한 인사이트를 제공합니다.
          </p>
          </div>

          <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
          <h3 className="text-xl font-semibold">
            AI & 자동화
          </h3>

          <p className="text-sm text-neutral-500 mt-1">
            AI & Automation
          </p>

          <p className="mt-3 text-neutral-600">
            AI 워크플로우,
            지능형 어시스턴트 및
            자동화 시스템을 구축합니다.
          </p>
          </div>

          <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
          <h3 className="text-xl font-semibold">
            디지털 제품
          </h3>

          <p className="text-sm text-neutral-500 mt-1">
            Digital Products
          </p>

          <p className="mt-3 text-neutral-600">
            실험적인 도구와
            독립적인 소프트웨어 제품을 개발합니다.
          </p>
          </div>
        </div>

      </section>

      {/* Explore */}
      <section className="max-w-5xl mx-auto px-6 py-16">

      <h2 className="text-4xl font-bold">
        둘러보기
      </h2>

      <p className="mt-2 text-neutral-500">
        Explore
      </p>

        <div className="grid md:grid-cols-2 gap-6">
          <Link
            href="/insights"
            className="border border-black/10 rounded-2xl p-8 bg-white/30 hover:bg-white/50 transition"
          >
            <h3 className="text-2xl font-semibold">
              인사이트
            </h3>

            <p className="text-sm text-neutral-500 mt-1">
              Insights
            </p>

            <p className="mt-3 text-neutral-600">
              진단, 분석 및 인텔리전스 프레임워크.
            </p>
          </Link>
          <Link
            href="/studio"
            className="border border-black/10 rounded-2xl p-8 bg-white/30 hover:bg-white/50 transition"
          >
            <h3 className="text-2xl font-semibold">
              스튜디오
            </h3>

            <p className="text-sm text-neutral-500 mt-1">
              Studio
            </p>

            <p className="mt-3 text-neutral-600">
              개발, 연구, 오픈소스 및 기술 문서.
            </p>
          </Link>

          <Link
            href="/products"
            className="border border-black/10 rounded-2xl p-8 bg-white/30 hover:bg-white/50 transition"
          >
            <h3 className="text-2xl font-semibold">
              제품
            </h3>

            <p className="text-sm text-neutral-500 mt-1">
              Products
            </p>

            <p className="mt-3 text-neutral-600">
              실험적인 도구와 진행 중인 프로젝트.
            </p>
          </Link>

          <Link
            href="/content"
            className="border border-black/10 rounded-2xl p-8 bg-white/30 hover:bg-white/50 transition"
          >
            <h3 className="text-2xl font-semibold">
              콘텐츠
            </h3>

            <p className="text-sm text-neutral-500 mt-1">
              Content
            </p>

            <p className="mt-3 text-neutral-600">
              영상, 아티클, 문서 및 업데이트.
            </p>
          </Link>

          {/* <Link
            href="/company"
            className="border border-black/10 rounded-2xl p-8 bg-white/30 hover:bg-white/50 transition"
          >
            <h3 className="text-2xl font-semibold">
              Company
            </h3>

            <p className="mt-3 text-neutral-600">
              About, contact information and business details.
            </p>
          </Link> */}

          <Link
            href="/products/real-estate-toolkit/investment-analysis"
            className="border border-black/10 rounded-2xl p-8 bg-white/30 hover:bg-white/50 transition"
          >
            <h3 className="text-2xl font-semibold">
              투자분석계산
            </h3>

            <p className="text-sm text-neutral-500 mt-1">
              Investment Analysis
            </p>

            <p className="mt-3 text-neutral-600">
              부동산 투자 분석을 위한
              계산 도구 모음.
            </p>
          </Link>

        </div>

      </section>

    </main>
  );
}