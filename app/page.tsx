import Link from "next/link";

export default function WorkspacePage() {
  return (
    <main className="min-h-screen bg-[#ede4da] text-neutral-900">

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-8 md:py-10">
        <h1 className="text-5xl font-bold">
          워크스페이스
        </h1>

        <p className="mt-4 text-xl text-neutral-500">
          Workspace
        </p>

        <p className="mt-8 text-lg text-neutral-800 max-w-3xl leading-relaxed">
          자산, 비즈니스 그리고 기술을 탐구하고,
          도구와 서비스를 만들며 실제 사례를 운영합니다.
        </p>
      </section>

      {/* Intelligence */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-2">
          인텔리전스
        </h2>

        <p className="text-neutral-500 mb-8">
          Intelligence
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          <Link
            href="/workspace/building-intelligence"
            className="border border-black/10 rounded-2xl p-6 bg-white/30 hover:bg-white/50 transition"
          >
            <h3 className="text-2xl font-semibold">
              빌딩 인텔리전스
            </h3>

            <p className="mt-2 text-neutral-500">
              Building Intelligence
            </p>

            <p className="mt-4 text-neutral-700 leading-relaxed">
              건물, 시설 및 운영 환경의 현재 상태와 개선 가능성을 분석합니다.
            </p>
          </Link>

          <Link
            href="/workspace/business-intelligence"
            className="border border-black/10 rounded-2xl p-6 bg-white/30 hover:bg-white/50 transition"
          >
            <h3 className="text-2xl font-semibold">
              비즈니스 인텔리전스
            </h3>

            <p className="mt-2 text-neutral-500">
              Business Intelligence
            </p>

            <p className="mt-4 text-neutral-700 leading-relaxed">
              비즈니스 모델, 운영 구조 및 실행 가능성을 진단합니다.
            </p>
          </Link>

          <Link
            href="/workspace/ai-readiness"
            className="border border-black/10 rounded-2xl p-6 bg-white/30 hover:bg-white/50 transition"
          >
            <h3 className="text-2xl font-semibold">
              AI 준비도
            </h3>

            <p className="mt-2 text-neutral-500">
              AI Readiness
            </p>

            <p className="mt-4 text-neutral-700 leading-relaxed">
              데이터, 업무 흐름 및 시스템의 실질적인 AI 적용 가능성을 분석합니다.
            </p>
          </Link>

          <Link
            href="/workspace/property-intelligence"
            className="border border-black/10 rounded-2xl p-6 bg-white/30 hover:bg-white/50 transition"
          >
            <h3 className="text-2xl font-semibold">
              프로퍼티 인텔리전스
            </h3>

            <p className="mt-2 text-neutral-500">
              Property Intelligence
            </p>

            <p className="mt-4 text-neutral-700 leading-relaxed">
              부동산 정보와 근거를 검증하고 비교하여 의사결정을 지원합니다.
            </p>
          </Link>

        </div>
      </section>

      {/* Active Projects */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-2">
          운영 프로젝트
        </h2>

        <p className="text-neutral-500 mb-8">
          Active Projects
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          <a
            href="https://blog.naver.com/assetpicker"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black/10 rounded-2xl p-6 bg-white/30 hover:bg-white/50 transition"
          >
            <h3 className="text-2xl font-semibold">
              AssetPicker
            </h3>

            <p className="mt-3 text-neutral-700">
              실제 현장 분석을 통해 자산에 대한 인사이트를 제공합니다.
            </p>
          </a>

          <Link
            href="/workspace/real-estate-toolkit"
            className="border border-black/10 rounded-2xl p-6 bg-white/30 hover:bg-white/50 transition"
          >
            <h3 className="text-2xl font-semibold">
              Real Estate Toolkit
            </h3>

            <p className="mt-3 text-neutral-700">
              부동산 분석을 위한 계산기와 실무 도구를 개발합니다.
            </p>
          </Link>

          <Link
            href="/workspace/assist"
            className="border border-black/10 rounded-2xl p-6 bg-white/30 hover:bg-white/50 transition"
          >
            <h3 className="text-2xl font-semibold">
              ASSIST
            </h3>

            <p className="mt-3 text-neutral-700">
              AI 어시스턴트, 생산성 도구 및 창작 애플리케이션을 개발합니다.
            </p>
          </Link>

          <a
            href="https://exoticordinary.com/voutique"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black/10 rounded-2xl p-6 bg-white/30 hover:bg-white/50 transition"
          >
            <h3 className="text-2xl font-semibold">
              The Exotic Voutiq™
            </h3>

            <p className="mt-3 text-neutral-700">
              브랜딩, 큐레이션 및 스토리텔링의 가능성을 실험합니다.
            </p>
          </a>

        </div>
      </section>

    </main>
  );
}