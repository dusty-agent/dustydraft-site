import Link from "next/link";

const tools = [
  {
    title: "DUSTIE",
    href: "https://dusty-agent.github.io/dustie/",
    description:
      "Experimental AI assistant for thinking and exploration.",
  },
  {
    title: "MEEMO",
    href: "https://meemo-451116.web.app/",
    description:
      "Capture ideas, organize thoughts and reflect intentionally.",
  },
  {
    title: "PAINTER",
    href: "https://my-creative-canvas-browser.web.app/",
    description:
      "Visualize ideas and explore creativity through generative tools.",
  },
];

export default function AssistPage() {
  return (
    <main className="min-h-screen bg-[#ede4da] text-neutral-900">

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-8 md:py-10">

        <h1 className="text-5xl font-bold">
          어시스턴트
        </h1>

        <p className="mt-4 text-xl text-neutral-700">
          Assistants
        </p>

        <p className="mt-8 text-lg text-neutral-800 max-w-3xl">
          AI 어시스턴트, 자동화 도구 및 지능형 워크플로우.
        </p>

      </section>

      {/* Applications */}
      <section className="max-w-5xl mx-auto px-6 py-12">

      <h2 className="text-3xl font-bold mb-2">
        애플리케이션
      </h2>

      <p className="text-neutral-500 mb-8">
        Applications
      </p>

      <div className="grid md:grid-cols-3 gap-6">

        {tools.map((tool) => (
          <a
            key={tool.href}
            href={tool.href}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black/10 rounded-2xl p-6 bg-white/30 block hover:bg-white/50 transition"
          >
            <h3 className="text-2xl font-semibold">
              {tool.title} →
            </h3>

            <p className="mt-3 text-neutral-600">
              {tool.description}
            </p>
          </a>
        ))}

      </div>

      </section>

      {/* Philosophy */}
      <section className="max-w-5xl mx-auto px-6 pt-10 pb-16">

      <h2 className="text-3xl font-bold mb-2">
        철학
      </h2>

      <p className="text-neutral-500 mb-8">
        Philosophy
      </p>

      <p className="text-lg text-neutral-700 max-w-3xl">
        우리는 사람의 생각하고, 만들고, 실행하는 과정을 기술이 돕는다고 믿습니다.
      </p>

      </section>

    </main>
  );
}