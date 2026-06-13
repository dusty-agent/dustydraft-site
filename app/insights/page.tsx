import Link from "next/link";

export default function InsightsPage() {
return ( <main className="min-h-screen bg-[#ede4da] text-neutral-900">
  {/* Hero */}
  <section className="max-w-5xl mx-auto px-6 py-20">

    <h1 className="text-5xl font-bold">
      인사이트
    </h1>

    <p className="mt-4 text-xl text-neutral-700">
      Insights
    </p>

    <p className="mt-10 text-lg text-neutral-800 max-w-3xl">
      투자, 데이터, AI에 대한 생각을 기록합니다.
    </p>

    <p className="mt-6 text-xl text-neutral-800 max-w-3xl">
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
        현재 상태를 이해합니다.
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
        기회와 위험을 진단합니다.
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
        현실적인 목표를 정의합니다.
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
  가설을 검증합니다.
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
        실행하고 개선합니다.
        </p>
      </div>

    </div>

  </section>

  {/* Assessment Areas */}
  <section className="max-w-5xl mx-auto px-6 py-12">

    <h2 className="text-3xl font-bold">
    진단 영역
    </h2>

<p className="mt-2 mb-10 text-neutral-500">
    Assessment Areas
    </p>
    <div className="grid md:grid-cols-3 gap-6">

      <Link
        href="/services/building-intelligence"
        className="border border-black/10 rounded-2xl p-6 bg-white/30 hover:bg-white/50 transition"
      >
        <h3 className="text-2xl font-semibold">
          빌딩 인텔리전스
        </h3>

        <p className="mt-2 text-sm text-neutral-500">
          Building Intelligence
        </p>

        <p className="mt-4 text-neutral-600">
          건물 운영, 기술 도입,
          디지털 전환 준비도를 진단합니다.
        </p>

        <p className="mt-4 text-sm text-neutral-500">
          자세히 보기 →
        </p>
      </Link>

      <Link
        href="/services/business-intelligence"
        className="border border-black/10 rounded-2xl p-6 bg-white/30 hover:bg-white/50 transition"
      >
        <h3 className="text-2xl font-semibold">
          비즈니스 인텔리전스
        </h3>

        <p className="mt-2 text-sm text-neutral-500">
          Business Intelligence
        </p>

        <p className="mt-4 text-neutral-600">
          비즈니스 모델, 운영 프로세스,
          실행 가능성을 분석합니다.
        </p>

        <p className="mt-4 text-sm text-neutral-500">
          자세히 보기 →
        </p>
      </Link>

      <div className="border border-black/10 rounded-2xl p-6 bg-white/30">

        <h3 className="text-2xl font-semibold">
          AI 준비도 진단
        </h3>

        <p className="mt-2 text-sm text-neutral-500">
          AI Readiness
        </p>

        <p className="mt-4 text-neutral-600">
          AI가 실제 가치를 만들 수 있는지 평가합니다.
        </p>

        <p className="mt-4 text-sm text-neutral-500">
          준비 중
        </p>

      </div>

    </div>

  </section>

  {/* Philosophy */}
  <section className="max-w-5xl mx-auto px-6 py-16">

  <h2 className="text-3xl font-bold">
        철학
        </h2>

        <p className="mt-2 mb-10 text-neutral-500">
        Philosophy
        </p>

    <p className="text-lg text-neutral-700 max-w-3xl">
      우리는 의미 있는 변화는 현실을 이해하는 것에서 시작된다고 믿습니다.
    </p>

    <p className="mt-4 text-lg text-neutral-700 max-w-3xl">
      트렌드를 쫓기보다 현재 상태를 평가하고,
      가능성을 발견하며,
      실행 가능한 방향을 설계합니다.
    </p>

  </section>

</main>

);
}
