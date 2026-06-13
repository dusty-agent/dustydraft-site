export default function BuildingIntelligencePage() {
    return (
      <main className="min-h-screen bg-[#ede4da] text-neutral-900">
  
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 py-20">
  
        <h1 className="text-5xl font-bold">
          빌딩 인텔리전스
        </h1>

        <p className="mt-4 text-xl text-neutral-700">
          Building Intelligence
        </p>

        <p className="mt-8 text-lg text-neutral-800 max-w-3xl">
          건물, 시설 및 운영 환경을 진단하고 분석합니다.
        </p>

        <p className="mt-8 text-lg text-neutral-700 max-w-3xl">
          건물은 매일 데이터를 생성하지만,
          실제 운영 상태를 이해하지 못한 채
          의사결정이 이루어지는 경우가 많습니다.
        </p>
  
        </section>
  
        {/* Why It Matters */}
        <section className="max-w-5xl mx-auto px-6 py-12">
  
        <h2 className="text-3xl font-bold mb-2">
          무엇을 보는가
        </h2>

        <p className="text-neutral-500 mb-8">
          What We Assess
        </p>
  
          <div className="border border-black/10 rounded-2xl p-8 bg-white/30">
  
          <p className="text-lg text-neutral-700">
            건물은 단순한 공간이 아니라
            운영되고 관리되는 자산입니다.
          </p>

          <p className="mt-4 text-lg text-neutral-700">
            의미 있는 개선은
            현재 상태를 이해하는 것에서 시작됩니다.
          </p>
  
          </div>
  
        </section>
  
        {/* Assessment Areas */}
        <section className="max-w-5xl mx-auto px-6 py-12">
  
        <h2 className="text-3xl font-bold mb-2">
          진단 영역
        </h2>

        <p className="text-neutral-500 mb-8">
          Assessment Areas
        </p>
  
          <div className="grid md:grid-cols-3 gap-6">
  
            <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
  
            <h3 className="text-xl font-semibold">
              운영
            </h3>

            <p className="text-sm text-neutral-500 mt-1">
              Operations
            </p>

            <p className="mt-3 text-neutral-600">
              시설관리, 운영 프로세스 및 업무 효율.
            </p>
  
            </div>
  
            <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
  
            <h3 className="text-xl font-semibold">
              기술
            </h3>

            <p className="text-sm text-neutral-500 mt-1">
              Technology
            </p>

            <p className="mt-3 text-neutral-600">
              기존 시스템, 디지털 성숙도 및 기술 준비도.
            </p>
  
            </div>
  
            <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
  
            <h3 className="text-xl font-semibold">
              데이터
            </h3>

            <p className="text-sm text-neutral-500 mt-1">
              Data
            </p>

            <p className="mt-3 text-neutral-600">
              운영 데이터의 품질, 활용 가능성 및 가치.
            </p>
  
            </div>
  
          </div>
  
        </section>
  
        {/* Validation */}
        <section className="max-w-5xl mx-auto px-6 py-12">
  
        <h2 className="text-3xl font-bold mb-2">
          검증
        </h2>

        <p className="text-neutral-500 mb-8">
          Validation
        </p>
  
          <div className="border border-black/10 rounded-2xl p-8 bg-white/30">
  
          <p className="text-lg text-neutral-700">
            모든 기회가 기존 정보만으로 평가될 수 있는 것은 아닙니다.
          </p>

          <p className="mt-4 text-lg text-neutral-700">
            관찰, 데이터 수집, 파일럿 프로젝트 및
            성능 측정을 통해 가설을 검증할 수 있습니다.
          </p>
  
          </div>
  
        </section>
  
        {/* Outcomes */}
        <section className="max-w-5xl mx-auto px-6 py-16">
  
        <h2 className="text-3xl font-bold mb-2">
          결과물
        </h2>

        <p className="text-neutral-500 mb-8">
          Outcomes
        </p>
  
          <div className="grid md:grid-cols-2 gap-6">
  
            <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
              <h3 className="font-semibold">
                운영 인사이트
              </h3>

              <p className="text-sm text-neutral-500 mt-1">
                Operational Insights
              </p>
            </div>
  
            <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
              <h3 className="font-semibold">
                기술 로드맵
              </h3>

              <p className="text-sm text-neutral-500 mt-1">
                Technology Roadmaps
              </p>
            </div>
  
            <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
              <h3 className="font-semibold">
                PoC 계획
              </h3>

              <p className="text-sm text-neutral-500 mt-1">
                Proof of Concept Plans
              </p>
            </div>
  
            <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
              <h3 className="font-semibold">
                실행 우선순위
              </h3>

              <p className="text-sm text-neutral-500 mt-1">
                Implementation Priorities
              </p>
            </div>
  
          </div>
  
        </section>
  
      </main>
    );
  }