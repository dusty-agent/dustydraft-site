import Link from "next/link";

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-[#ede4da] text-neutral-900">

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-20">

        <h1 className="text-5xl font-bold">
          인사이트
        </h1>

        <p className="mt-4 text-xl text-neutral-700">
          Insights
        </p>

        <p className="mt-10 text-lg text-neutral-800 max-w-3xl leading-relaxed">
          자산, 비즈니스, 데이터와 AI에 대한 생각과
          실제 분석 경험을 기록합니다.
        </p>

        <p className="mt-6 text-xl text-neutral-800 max-w-3xl leading-relaxed">
          대부분의 사람들은 해결책부터 찾습니다.
          <br />
          우리는 현실을 이해하는 것부터 시작합니다.
        </p>

      </section>

      {/* Dusty Framework */}
      <section className="max-w-5xl mx-auto px-6 py-12">

        <h2 className="text-3xl font-bold">
          더스티 프레임워크
        </h2>

        <p className="mt-2 mb-10 text-neutral-500">
          Dusty Framework
        </p>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">

          <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
            <h3 className="text-xl font-semibold">
              현재 상태
            </h3>

            <p className="text-sm text-neutral-500 mt-1">
              AS-IS
            </p>

            <p className="mt-3 text-neutral-600">
              현재 상태와 맥락을 이해합니다.
            </p>
          </div>

          <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
            <h3 className="text-xl font-semibold">
              진단
            </h3>

            <p className="text-sm text-neutral-500 mt-1">
              Assessment
            </p>

            <p className="mt-3 text-neutral-600">
              기회, 위험과 제약요인을 진단합니다.
            </p>
          </div>

          <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
            <h3 className="text-xl font-semibold">
              목표 상태
            </h3>

            <p className="text-sm text-neutral-500 mt-1">
              TO-BE
            </p>

            <p className="mt-3 text-neutral-600">
              현실적인 목표와 대안을 정의합니다.
            </p>
          </div>

          <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
            <h3 className="text-xl font-semibold">
              검증
            </h3>

            <p className="text-sm text-neutral-500 mt-1">
              Validation
            </p>

            <p className="mt-3 text-neutral-600">
              데이터, 근거와 실행 가능성을 검증합니다.
            </p>
          </div>

          <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
            <h3 className="text-xl font-semibold">
              실행
            </h3>

            <p className="text-sm text-neutral-500 mt-1">
              Implementation
            </p>

            <p className="mt-3 text-neutral-600">
              실행하고 측정하며 지속적으로 개선합니다.
            </p>
          </div>

        </div>

      </section>

      {/* Intelligence Areas */}
      <section className="max-w-5xl mx-auto px-6 py-12">

        <h2 className="text-3xl font-bold">
          인텔리전스 영역
        </h2>

        <p className="mt-2 mb-10 text-neutral-500">
          Intelligence Areas
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

            <p className="mt-4 text-neutral-600 leading-relaxed">
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

            <p className="mt-4 text-neutral-600 leading-relaxed">
              비즈니스 모델, 운영 프로세스 및
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

            <p className="mt-4 text-neutral-600 leading-relaxed">
              데이터, 업무 흐름 및 시스템의
              실질적인 AI 적용 가능성을 분석합니다.
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

            <p className="mt-4 text-neutral-600 leading-relaxed">
              부동산 정보와 근거를 검증하고 비교하여
              이용, 운영, 거래 및 의사결정을 지원합니다.
            </p>

            <p className="mt-4 text-sm text-neutral-500">
              자세히 보기 →
            </p>
          </Link>

        </div>

      </section>

      {/* Video Insights */}
      <section className="max-w-5xl mx-auto px-6 py-8 md:py-10">

      <h2 className="text-3xl font-bold">
        영상 인사이트
      </h2>

      <p className="mt-2 mb-4 text-neutral-500">
        Video Insights
      </p>

      <p className="mb-8 text-lg text-neutral-700 max-w-3xl leading-relaxed">
        현실의 문제를 관찰하고 분석하며,
        프로젝트와 아이디어가 발전하는 과정을 영상으로 기록합니다.
      </p>

      <div className="overflow-hidden rounded-2xl border border-black/10 bg-black aspect-video">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/Xs5O4kqylxU"
          title="DUSTYDRAFT Video Insights"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      <a
        href="https://www.youtube.com/@dustydraft"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-5 text-sm text-neutral-600 hover:text-neutral-900 transition"
      >
        YouTube에서 더 보기 ↗
      </a>

      </section>

      {/* Philosophy */}
      <section className="max-w-5xl mx-auto px-6 pt-10 pb-16">

        <h2 className="text-3xl font-bold">
          철학
        </h2>

        <p className="mt-2 mb-10 text-neutral-500">
          Philosophy
        </p>

        <p className="text-lg text-neutral-700 max-w-3xl leading-relaxed">
          우리는 의미 있는 변화가 현실을 정확히 이해하는 것에서
          시작된다고 믿습니다.
        </p>

        <p className="mt-4 text-lg text-neutral-700 max-w-3xl leading-relaxed">
          트렌드나 단일 지표만을 따르기보다 현재 상태와 근거를 평가하고,
          연관된 질문과 대안을 비교하며,
          실행 가능한 방향을 설계합니다.
        </p>

      </section>

    </main>
  );
}