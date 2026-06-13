import Link from "next/link";

export default function AssistPage() {
  return (
    <main className="min-h-screen bg-[#ede4da] text-neutral-900">

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-20">

        <h1 className="text-5xl font-bold">
          어시스트
        </h1>

        <p className="mt-4 text-xl text-neutral-700">
          Assist
        </p>

        <p className="mt-8 text-lg text-neutral-800 max-w-3xl">
          AI 어시스턴트, 자동화 도구 및 지능형 워크플로우.
        </p>

      </section>

      {/* Assistants */}
      <section className="max-w-5xl mx-auto px-6 py-12">

        <h2 className="text-3xl font-bold mb-2">
          어시스턴트
        </h2>

        <p className="text-neutral-500 mb-8">
          Assistants
        </p>

        <a
          href="https://dusty-agent.github.io/dustie/"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-black/10 rounded-2xl p-8 bg-white/30 block hover:bg-white/50 transition"
        >
          <h3 className="text-3xl font-semibold">
            DUSTIE →
          </h3>

          <p className="mt-3 text-neutral-600">
            생각, 탐색 및 문제 해결을 지원하는 실험적 AI 어시스턴트.
          </p>

        </a>

      </section>

      {/* Philosophy */}
      <section className="max-w-5xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold mb-2">
          철학
        </h2>

        <p className="text-neutral-500 mb-8">
          Philosophy
        </p>

        <p className="text-lg text-neutral-700 max-w-3xl">
          우리는 AI를 단순한 챗봇이 아니라
          사고와 실행을 돕는 도구로 생각합니다.
        </p>

      </section>

    </main>
  );
}