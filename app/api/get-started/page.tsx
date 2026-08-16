import Link from "next/link";

export default function ApiGetStartedPage() {
  return (
    <main className="min-h-screen bg-dd-black text-dd-white">
      <section className="mx-auto max-w-5xl px-6 py-24 md:px-10 md:py-32">
        <p className="text-sm uppercase tracking-[0.22em] text-white/35">
          DustyDraft / API
        </p>

        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
          Get Started
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/55">
          Asset Provenance API (South Korea)는 현재 Public Beta로
          별도의 API Key 없이 사용할 수 있습니다.
        </p>

        <section className="mt-16 border-t border-white/10 pt-10">
          <p className="text-xs uppercase tracking-[0.2em] text-white/30">
            01 / Documentation
          </p>

          <h2 className="mt-3 text-2xl font-medium">
            문서를 확인하세요.
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-white/45">
            Swagger UI에서 현재 제공되는 엔드포인트와 응답 구조를
            직접 확인할 수 있습니다.
          </p>

          <a
            href="https://provenance.open.dustydraft.com/api/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex rounded-full border border-white/15 px-5 py-3 text-sm text-white/75 transition hover:bg-white/10"
          >
            Documentation ↗
          </a>
        </section>

        <section className="mt-14 border-t border-white/10 pt-10">
          <p className="text-xs uppercase tracking-[0.2em] text-white/30">
            02 / First Request
          </p>

          <h2 className="mt-3 text-2xl font-medium">
            첫 요청을 보내보세요.
          </h2>

          <div className="mt-7 overflow-x-auto rounded-2xl border border-white/10 bg-black p-6">
            <pre className="text-sm leading-7 text-white/70">
{`curl "https://provenance.open.dustydraft.com/api/v1/parcels/parcel-demo-001/lineage"`}
            </pre>
          </div>
        </section>

        <section className="mt-14 border-t border-white/10 pt-10">
          <p className="text-xs uppercase tracking-[0.2em] text-white/30">
            03 / Response
          </p>

          <h2 className="mt-3 text-2xl font-medium">
            하나의 자산 흐름을 확인합니다.
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-white/45">
            Parcel을 기준으로 연결된 Records, Events, Relations,
            Evidence, Sources, Annotations를 한 번에 확인할 수 있습니다.
          </p>

          <a
            href="https://provenance.open.dustydraft.com/api/v1/parcels/parcel-demo-001/lineage"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/85"
          >
            Example Response ↗
          </a>
        </section>

        <div className="mt-20 border-t border-white/10 pt-8">
          <Link
            href="/api"
            className="text-sm text-white/50 transition hover:text-white"
          >
            ← Back to API
          </Link>
        </div>
      </section>
    </main>
  );
}