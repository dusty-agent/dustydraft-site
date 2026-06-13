import Link from "next/link";

export default function ServicesPage() {
return ( <main className="min-h-screen bg-[#ede4da] text-neutral-900">
  {/* Hero */}
  <section className="max-w-5xl mx-auto px-6 py-20">

    <h1 className="text-5xl font-bold">
      서비스
    </h1>

    <p className="mt-4 text-xl text-neutral-700">
      Services
    </p>

    <p className="mt-8 text-lg text-neutral-800 max-w-3xl">
      관찰, 분석, 실험 그리고 실행을 통해
      현실의 문제를 탐구합니다.
    </p>

    <p className="mt-6 text-lg text-neutral-700 max-w-3xl">
      많은 프로젝트는 내부 실험에서 시작됩니다.
      우리는 우리 자신을 첫 번째 고객으로 생각하며
      실제 사례를 축적해 나갑니다.
    </p>

  </section>

  {/* Areas */}
  <section className="max-w-5xl mx-auto px-6 py-12">

    <h2 className="text-3xl font-bold mb-2">
      탐구 영역
    </h2>

    <p className="text-neutral-500 mb-8">
      Areas of Exploration
    </p>

    <div className="grid md:grid-cols-3 gap-6">

      <Link
        href="/services/building-intelligence"
        className="border border-black/10 rounded-2xl p-6 bg-white/30 hover:bg-white/50 transition"
      >
        <h3 className="text-2xl font-semibold">
          Asset Intelligence
        </h3>

        <p className="mt-3 text-neutral-600">
          Buildings, properties, operations and investment analysis.
        </p>
      </Link>

      <Link
        href="/services/business-intelligence"
        className="border border-black/10 rounded-2xl p-6 bg-white/30 hover:bg-white/50 transition"
      >
        <h3 className="text-2xl font-semibold">
          Business Intelligence
        </h3>

        <p className="mt-3 text-neutral-600">
          Business models, operations, brands and execution.
        </p>
      </Link>

      <div className="border border-black/10 rounded-2xl p-6 bg-white/30">

        <h3 className="text-2xl font-semibold">
          AI Readiness
        </h3>

        <p className="mt-3 text-neutral-600">
          AI adoption, workflow design and automation opportunities.
        </p>

        <p className="mt-4 text-sm text-neutral-500">
          Coming Soon
        </p>

      </div>

    </div>

  </section>

</main>
);
}
