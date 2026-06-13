import Link from "next/link";

export default function AssistPage() {
  return (
    <main className="min-h-screen bg-[#ede4da] text-neutral-900">

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-20">

        <h1 className="text-5xl font-bold">
          Assist
        </h1>

        <p className="mt-6 text-xl text-neutral-700 max-w-3xl">
          AI assistants, intelligent workflows and digital companions.
        </p>

      </section>

      {/* Dustie */}
      <section className="max-w-5xl mx-auto px-6 py-12">

        <h2 className="text-3xl font-bold mb-8">
          Assistant
        </h2>

        <a
          href="https://dusty-agent.github.io/dustie/"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-black/10 rounded-2xl p-8 bg-white/30 block hover:bg-white/50 transition"
        >
          <h3 className="text-3xl font-semibold">
            DUSTIE →
          </h3>

          <p className="mt-4 text-neutral-600 text-lg">
            Communicate with Dustie.
          </p>

          <p className="mt-3 text-neutral-500">
            An experimental AI assistant designed to support thinking,
            exploration and creative problem solving.
          </p>

        </a>

      </section>

      {/* About */}
      <section className="max-w-5xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold mb-8">
          About
        </h2>

        <p className="text-lg text-neutral-700 max-w-3xl">
          Assist is a collection of AI-powered tools and assistants
          designed to help people think, learn, create and work more effectively.
        </p>

      </section>

    </main>
  );
}
