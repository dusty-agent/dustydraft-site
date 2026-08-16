export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-dd-paper text-dd-ink">

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-8 md:py-10">

        <h1 className="text-5xl font-bold">
          Resources
        </h1>

        <p className="mt-6 text-xl text-neutral-700">
          Documentation, guides and utilities.
        </p>

      </section>

      {/* Guides */}
      <section className="max-w-5xl mx-auto px-6 py-12">

        <h2 className="text-3xl font-bold mb-8">
          Guides
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
            <h3 className="text-xl font-semibold">
              NDA Guide
            </h3>

            <p className="mt-3 text-neutral-600">
              Guidelines for project participation.
            </p>
          </div>

          <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
            <h3 className="text-xl font-semibold">
              Dataset Guide
            </h3>

            <p className="mt-3 text-neutral-600">
              Dataset creation and processing guide.
            </p>
          </div>

        </div>

      </section>

      {/* Documentation */}
      <section className="max-w-5xl mx-auto px-6 py-12">

        <h2 className="text-3xl font-bold mb-8">
          Documentation
        </h2>

        <div className="space-y-6">

          <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
            <h3 className="text-xl font-semibold">
              Technical Notes
            </h3>

            <p className="mt-3 text-neutral-600">
              Engineering notes, experiments and build logs.
            </p>
          </div>

          <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
            <h3 className="text-xl font-semibold">
              Development Journal
            </h3>

            <p className="mt-3 text-neutral-600">
              Research, ideas and project updates.
            </p>
          </div>

        </div>

      </section>

      {/* Utilities */}
      <section className="max-w-5xl mx-auto px-6 py-12">

        <h2 className="text-3xl font-bold mb-8">
          Utilities
        </h2>

        <p className="text-lg text-neutral-700">
          Internal tools, templates and helpful resources
          for projects and workflows.
        </p>

      </section>

    </main>
  );
}