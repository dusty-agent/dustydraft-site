import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#ede4da] text-neutral-900">

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-12">

        <h1 className="text-5xl md:text-7xl font-bold">
          DUSTY DRAFT®
        </h1>

        <p className="mt-6 italic text-xl text-neutral-700">
          Development Studio & Product Lab
        </p>

        <p className="mt-10 text-lg text-neutral-800 max-w-2xl">
          We build software, AI services and digital products
          through research, experimentation and continuous learning.
        </p>
        <img
  src="/images/hero.png"
  alt="Dusty Draft"
  className="rounded-3xl mt-10 w-full"
/>
      </section>

      {/* What We Do */}
      <section className="max-w-5xl mx-auto px-6 py-16">

        <h2 className="text-4xl font-bold mb-10">
          What We Do
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
            <h3 className="text-xl font-semibold">
              Software Development
            </h3>

            <p className="mt-3 text-neutral-600">
              Web applications, automation and custom solutions.
            </p>
          </div>

          <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
            <h3 className="text-xl font-semibold">
              AI Services
            </h3>

            <p className="mt-3 text-neutral-600">
              Datasets, AI workflows and intelligent assistants.
            </p>
          </div>

          <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
            <h3 className="text-xl font-semibold">
              Digital Products
            </h3>

            <p className="mt-3 text-neutral-600">
              Experimental tools, platforms and independent products.
            </p>
          </div>

        </div>

      </section>

      {/* Explore */}
      <section className="max-w-5xl mx-auto px-6 py-16">

        <h2 className="text-4xl font-bold mb-10">
          Explore
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <Link
            href="/studio"
            className="border border-black/10 rounded-2xl p-8 bg-white/30 hover:bg-white/50 transition"
          >
            <h3 className="text-2xl font-semibold">
              Studio
            </h3>

            <p className="mt-3 text-neutral-600">
              Development, research, open source and technical writing.
            </p>
          </Link>

          <Link
            href="/products"
            className="border border-black/10 rounded-2xl p-8 bg-white/30 hover:bg-white/50 transition"
          >
            <h3 className="text-2xl font-semibold">
              Products
            </h3>

            <p className="mt-3 text-neutral-600">
              Experimental tools and ongoing projects.
            </p>
          </Link>

          <Link
            href="/content"
            className="border border-black/10 rounded-2xl p-8 bg-white/30 hover:bg-white/50 transition"
          >
            <h3 className="text-2xl font-semibold">
              Content
            </h3>

            <p className="mt-3 text-neutral-600">
              YouTube, articles, documentation and updates.
            </p>
          </Link>

          <Link
            href="/company"
            className="border border-black/10 rounded-2xl p-8 bg-white/30 hover:bg-white/50 transition"
          >
            <h3 className="text-2xl font-semibold">
              Company
            </h3>

            <p className="mt-3 text-neutral-600">
              About, contact information and business details.
            </p>
          </Link>

        </div>

      </section>

    </main>
  );
}