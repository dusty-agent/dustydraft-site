export default function CompanyPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">

      <h1 className="text-5xl font-bold">
        Company
      </h1>

      <p className="mt-6 text-lg text-neutral-600">
        Information about DUSTY DRAFT, contact details and business information.
      </p>

      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">
          About
        </h2>

        <div className="border border-black/10 rounded-2xl p-8 bg-white/30">
          <p className="text-neutral-700 leading-relaxed">
            DUSTY DRAFT is an independent development studio and product lab
            focused on software, AI services and digital ventures.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">
          Contact
        </h2>

        <div className="border border-black/10 rounded-2xl p-8 bg-white/30">
          <p>Email: contact@dustydraft.com</p>
          <p className="mt-2">
            Website: dustydraft.com
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">
          Links
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <a
            href="https://youtube.com/@dustydraft"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black/10 rounded-2xl p-6 bg-white/30 hover:bg-white/50 transition"
          >
            <h3 className="text-xl font-semibold">
              YouTube
            </h3>

            <p className="mt-3 text-neutral-600">
              Videos, experiments and updates.
            </p>
          </a>

          <a
            href="https://draft.best"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black/10 rounded-2xl p-6 bg-white/30 hover:bg-white/50 transition"
          >
            <h3 className="text-xl font-semibold">
              draft.best
            </h3>

            <p className="mt-3 text-neutral-600">
              Related projects and ventures.
            </p>
          </a>

        </div>
      </section>

    </main>
  );
}