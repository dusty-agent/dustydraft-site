export default function AboutPage() {
    return ( <main className="min-h-screen bg-[#ede4da] text-neutral-900">
    
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-20">
    
        <h1 className="text-5xl font-bold">
          소개
        </h1>
    
        <p className="mt-4 text-xl text-neutral-700">
          About
        </p>
    
        <p className="mt-8 text-lg text-neutral-800 max-w-3xl">
          DUSTY DRAFT는 탐구, 실험 그리고 실행을 위한 독립 워크스페이스입니다.
        </p>
    
      </section>
    
      {/* About */}
      <section className="max-w-5xl mx-auto px-6 py-12">
    
        <h2 className="text-3xl font-bold mb-2">
          소개
        </h2>
    
        <p className="text-neutral-500 mb-8">
          About
        </p>
    
        <div className="border border-black/10 rounded-2xl p-8 bg-white/30">
    
          <p className="text-neutral-700 leading-relaxed">
            우리는 자산, 비즈니스 그리고 기술을 탐구합니다.
          </p>
    
          <p className="mt-4 text-neutral-700 leading-relaxed">
            실제 사례를 만들고, 도구를 개발하며,
            그 과정에서 얻은 경험과 지식을 기록합니다.
          </p>
    
        </div>
    
      </section>
    
      {/* Contact */}
      <section className="max-w-5xl mx-auto px-6 py-12">
    
        <h2 className="text-3xl font-bold mb-2">
          연락처
        </h2>
    
        <p className="text-neutral-500 mb-8">
          Contact
        </p>
    
        <div className="border border-black/10 rounded-2xl p-8 bg-white/30">
    
          <p>
            Founder: Jang So Young
          </p>
    
          <p className="mt-2">
            Email: soyoung@draft.best
          </p>
    
        </div>
    
      </section>
    
      {/* Overview */}
      <section className="max-w-5xl mx-auto px-6 py-12">
    
        <h2 className="text-3xl font-bold mb-2">
          개요
        </h2>
    
        <p className="text-neutral-500 mb-8">
          Overview
        </p>
    
        <div className="border border-black/10 rounded-2xl p-8 bg-white/30">
    
          <p>
            Founded: 2019
          </p>
    
          <p className="mt-2">
            Location: Seoul, South Korea
          </p>
    
          <p className="mt-2">
            Focus: Assets, Business and Technology
          </p>
    
        </div>
    
      </section>
    
    </main>
    
    );
    }
    