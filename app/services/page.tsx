import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#ede4da] text-neutral-900">

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-20">

        <h1 className="text-5xl font-bold">
          Services
        </h1>

        <p className="mt-6 text-xl text-neutral-700">
          Assessment, diagnostics and practical intelligence.
        </p>

        <p className="mt-10 text-lg text-neutral-800 max-w-3xl">
          We help organizations understand their current state,
          evaluate opportunities and design realistic paths forward.
        </p>

      </section>

      {/* Service Areas */}
      <section className="max-w-5xl mx-auto px-6 py-12">

        <h2 className="text-3xl font-bold mb-8">
          Service Areas
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <Link
            href="/services/building-intelligence"
            className="border border-black/10 rounded-2xl p-6 bg-white/30 hover:bg-white/50 transition"
          >
            <h3 className="text-2xl font-semibold">
              Building Intelligence
            </h3>

            <p className="mt-3 text-neutral-600">
              Building operations, technology readiness and digital assessments.
            </p>
          </Link>

          <div className="border border-black/10 rounded-2xl p-6 bg-white/30">

            <h3 className="text-2xl font-semibold">
              Business Intelligence
            </h3>

            <p className="mt-3 text-neutral-600">
              Process analysis, operational diagnostics and business readiness.
            </p>

            <p className="mt-4 text-sm text-neutral-500">
              Coming Soon
            </p>

          </div>

          <div className="border border-black/10 rounded-2xl p-6 bg-white/30">

            <h3 className="text-2xl font-semibold">
              AI Readiness
            </h3>

            <p className="mt-3 text-neutral-600">
              Evaluate where AI can create measurable business value.
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