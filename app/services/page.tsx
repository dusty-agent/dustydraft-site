import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-dd-warm-gray text-dd-ink">

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-8 md:py-10">

        <h1 className="text-5xl font-bold">
          서비스
        </h1>

        <p className="mt-4 text-xl text-neutral-500">
          Services
        </p>

        <p className="mt-8 text-lg text-neutral-800 max-w-3xl leading-relaxed">
          관찰, 분석, 검증과 실행을 통해
          현실의 문제를 구조적으로 탐구합니다.
        </p>

        <p className="mt-6 text-lg text-neutral-700 max-w-3xl leading-relaxed">
          많은 프로젝트는 내부 실험에서 시작됩니다.
          우리는 우리 자신을 첫 번째 고객으로 생각하며,
          실제 사례와 수행 경험을 축적해 나갑니다.
        </p>

      </section>

      {/* Intelligence Services */}
      <section className="max-w-5xl mx-auto px-6 py-12">

        <h2 className="text-3xl font-bold mb-2">
          인텔리전스 서비스
        </h2>

        <p className="text-neutral-500 mb-8">
          Intelligence Services
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          <Link
            href="/services/building-intelligence"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black/10 rounded-2xl p-6 bg-white/30 hover:bg-white/50 transition"
          >
            <h3 className="text-2xl font-semibold">
              빌딩 인텔리전스
            </h3>

            <p className="mt-2 text-sm text-neutral-500">
              Building Intelligence
            </p>

            <p className="mt-4 text-neutral-700 leading-relaxed">
              건물, 시설 및 운영 환경의 현재 상태와
              개선 가능성을 진단합니다.
            </p>

            <p className="mt-4 text-sm text-neutral-500">
              자세히 보기 →
            </p>
          </Link>

          <Link
            href="/services/business-intelligence"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black/10 rounded-2xl p-6 bg-white/30 hover:bg-white/50 transition"
          >
            <h3 className="text-2xl font-semibold">
              비즈니스 인텔리전스
            </h3>

            <p className="mt-2 text-sm text-neutral-500">
              Business Intelligence
            </p>

            <p className="mt-4 text-neutral-700 leading-relaxed">
              비즈니스 모델, 운영 구조 및
              실행 가능성을 분석합니다.
            </p>

            <p className="mt-4 text-sm text-neutral-500">
              자세히 보기 →
            </p>
          </Link>

          <Link
            href="/services/ai-readiness"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black/10 rounded-2xl p-6 bg-white/30 hover:bg-white/50 transition"
          >
            <h3 className="text-2xl font-semibold">
              AI 준비도
            </h3>

            <p className="mt-2 text-sm text-neutral-500">
              AI Readiness
            </p>

            <p className="mt-4 text-neutral-700 leading-relaxed">
              데이터, 업무 흐름 및 시스템의
              실질적인 AI 적용 가능성을 진단합니다.
            </p>

            <p className="mt-4 text-sm text-neutral-500">
              자세히 보기 →
            </p>
          </Link>

          <Link
            href="/services/property-intelligence"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black/10 rounded-2xl p-6 bg-white/30 hover:bg-white/50 transition"
          >
            <h3 className="text-2xl font-semibold">
              프로퍼티 인텔리전스
            </h3>

            <p className="mt-2 text-sm text-neutral-500">
              Property Intelligence
            </p>

            <p className="mt-4 text-neutral-700 leading-relaxed">
              부동산 정보와 근거를 연결하고 검증하여,
              비교 분석과 의사결정을 지원합니다.
            </p>

            <p className="mt-4 text-sm text-neutral-500">
              자세히 보기 →
            </p>
          </Link>

        </div>

      </section>

    </main>
  );
}