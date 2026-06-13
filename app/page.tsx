import Link from "next/link";

export default function WorkspacePage() {
  return (
    <main className="min-h-screen bg-[#ede4da] text-neutral-900">

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-20">

        <h1 className="text-5xl font-bold">
          워크스페이스
        </h1>

        <p className="mt-4 text-xl text-neutral-700">
          Workspace
        </p>

        <p className="mt-8 text-lg text-neutral-800 max-w-3xl">
          자산, 비즈니스 그리고 기술을 탐구하고,
          도구와 서비스를 만들며,
          실제 사례를 운영합니다.
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

        <div className="grid md:grid-cols-3 gap-6">

          <Link
            href="/workspace/building-intelligence"
            className="border border-black/10 rounded-2xl p-6 bg-white/30 hover:bg-white/50 transition"
          >
            <h3 className="text-2xl font-semibold">
              Asset Intelligence
            </h3>

            <p className="mt-3 text-neutral-600">
              Assets, buildings and real-world investment analysis.
            </p>
          </Link>

          <Link
            href="/workspace/business-intelligence"
            className="border border-black/10 rounded-2xl p-6 bg-white/30 hover:bg-white/50 transition"
          >
            <h3 className="text-2xl font-semibold">
              Business Intelligence
            </h3>

            <p className="mt-3 text-neutral-600">
              Business models, operations and implementation.
            </p>
          </Link>

          <div className="border border-black/10 rounded-2xl p-6 bg-white/30">

            <h3 className="text-2xl font-semibold">
              AI Readiness
            </h3>

            <p className="mt-3 text-neutral-600">
              AI adoption and automation opportunities.
            </p>

            <p className="mt-4 text-sm text-neutral-500">
              Coming Soon
            </p>

          </div>

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

            <p className="mt-3 text-neutral-600">
              Asset intelligence through real-world analysis.
            </p>
          </a>

          <Link
            href="/workspace/real-estate-toolkit"
            className="border border-black/10 rounded-2xl p-6 bg-white/30 hover:bg-white/50 transition"
          >
            <h3 className="text-2xl font-semibold">
              Real Estate Toolkit
            </h3>

            <p className="mt-3 text-neutral-600">
              Investment analysis calculators and tools.
            </p>
          </Link>

          <Link
            href="/workspace/assist"
            className="border border-black/10 rounded-2xl p-6 bg-white/30 hover:bg-white/50 transition"
          >
            <h3 className="text-2xl font-semibold">
              ASSIST
            </h3>

            <p className="mt-3 text-neutral-600">
              AI assistants, productivity tools and creative applications.
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

            <p className="mt-3 text-neutral-600">
              Branding, curation and storytelling experiments.
            </p>
          </a>

        </div>

      </section>

    </main>
  );
}