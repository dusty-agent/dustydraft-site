import Link from "next/link";

export default function SelfMotivationToolkitPage() {
//   const tools = [
//     {
//       title: "Journaling Prompt Generator",
//       href: "/products/self-motivation-toolkit/journaling",
//       description:
//         "Thought-provoking prompts for self-reflection and journaling.",
//     },
//     {
//       title: "Daily Reflection",
//       href: "/products/self-motivation-toolkit/reflection",
//       description:
//         "Capture lessons, wins and challenges from your day.",
//     },
//     {
//       title: "Goal Tracker",
//       href: "/products/self-motivation-toolkit/goals",
//       description:
//         "Track meaningful goals and measure progress.",
//     },
//     {
//       title: "Habit Tracker",
//       href: "/products/self-motivation-toolkit/habits",
//       description:
//         "Build consistency through daily habit tracking.",
//     },
//   ];
    const tools = [
        {
        title: "MEEMO",
        href: "https://meemo-451116.web.app/",
        description:
            "Capture ideas, organize thoughts and reflect intentionally.",
        external: true,
        },
        {
        title: "PAINTER",
        href: "https://my-creative-canvas-browser.web.app/",
        description:
            "Visualize ideas and explore creativity through generative tools.",
        external: true,
        },
    ];

  return (
    <main className="min-h-screen bg-[#ede4da] text-neutral-900">

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-8 md:py-10">

        <h1 className="text-5xl font-bold">
          Self Motivation Toolkit
        </h1>

        <p className="mt-6 text-xl text-neutral-700 max-w-3xl">
          Tools for thinking,
          creating and personal growth.
        </p>

      </section>

      {/* Tools */}
      <section className="max-w-5xl mx-auto px-6 py-12">

        <h2 className="text-3xl font-bold mb-8">
          Tools
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="border border-black/10 rounded-2xl p-6 bg-white/30 block hover:bg-white/50 transition"
            >
              <h3 className="text-2xl font-semibold">
                {tool.title} →
              </h3>

              <p className="mt-3 text-neutral-600">
                {tool.description}
              </p>
            </Link>
          ))}

        </div>

      </section>

      {/* About */}
      <section className="max-w-5xl mx-auto px-6 pt-10 pb-16">

        <h2 className="text-3xl font-bold mb-8">
          About
        </h2>

        <p className="text-lg text-neutral-700 max-w-3xl">
          The Self Motivation Toolkit is an experimental
          collection of tools designed to help people think,
          reflect and grow intentionally.
        </p>

      </section>

    </main>
  );
}
