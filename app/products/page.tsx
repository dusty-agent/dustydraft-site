export default function ProductsPage() {
  return ( <main className="min-h-screen bg-[#ede4da] text-neutral-900">
  
    {/* Hero */}
    <section className="max-w-5xl mx-auto px-6 py-8 md:py-10">
  
      <h1 className="text-5xl font-bold">
        제품
      </h1>
  
      <p className="mt-4 text-xl text-neutral-700">
        Products
      </p>
  
      <p className="mt-8 text-lg text-neutral-800 max-w-3xl">
        실험, 운영 그리고 학습 과정에서
        만들어진 도구와 플랫폼입니다.
      </p>
  
    </section>
  
    {/* Toolkits */}
    <section className="max-w-5xl mx-auto px-6 py-12">
  
      <h2 className="text-3xl font-bold mb-2">
        툴킷
      </h2>
  
      <p className="text-neutral-500 mb-8">
        Toolkits
      </p>
  
      <div className="grid md:grid-cols-2 gap-6">
  
        <a
          href="/products/real-estate-toolkit"
          className="border border-black/10 rounded-2xl p-6 bg-white/30 block hover:bg-white/50 transition"
        >
          <h3 className="text-2xl font-semibold">
            Real Estate Toolkit →
          </h3>
  
          <p className="mt-3 text-neutral-600">
            NOI, Cap Rate, Equity, Leverage, ROE and investment analysis tools.
          </p>
        </a>
  
        <a
          href="/products/assist"
          className="border border-black/10 rounded-2xl p-6 bg-white/30 block hover:bg-white/50 transition"
        >
          <h3 className="text-2xl font-semibold">
            ASSIST →
          </h3>
  
          <p className="mt-3 text-neutral-600">
            AI assistants, automation tools and intelligent workflows.
          </p>
        </a>
  
      </div>
  
    </section>
  
    {/* Ongoing Projects */}
    <section className="max-w-5xl mx-auto px-6 py-12">
  
      <h2 className="text-3xl font-bold mb-2">
        진행 중인 프로젝트
      </h2>
  
      <p className="text-neutral-500 mb-8">
        Ongoing Projects
      </p>
  
      <div className="space-y-6">
  
        <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
  
          <h3 className="text-2xl font-semibold">
            AssetPicker
          </h3>
  
          <p className="mt-3 text-neutral-600">
            Asset intelligence through real-world property analysis.
          </p>
  
        </div>
  
        <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
  
          <h3 className="text-2xl font-semibold">
            The Exotic Voutiq™
          </h3>
  
          <p className="mt-3 text-neutral-600">
            An experiment in branding, curation and storytelling.
          </p>
  
        </div>
  
        <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
  
          <h3 className="text-2xl font-semibold">
            Dataset Lab
          </h3>
  
          <p className="mt-3 text-neutral-600">
            Data processing and AI dataset experiments.
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
  