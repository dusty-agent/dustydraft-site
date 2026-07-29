export default function BusinessIntelligencePage() {
    return (
      <main className="min-h-screen bg-[#ede4da] text-neutral-900">
  
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 py-8 md:py-10">
  
        <h1 className="text-5xl font-bold">
          비즈니스 인텔리전스
        </h1>

        <p className="mt-4 text-xl text-neutral-700">
          Business Intelligence
        </p>

        <p className="mt-8 text-lg text-neutral-800 max-w-3xl">
          비즈니스와 조직의 현재 상태를 진단하고 분석합니다.
        </p>

        <p className="mt-8 text-lg text-neutral-700 max-w-3xl">
          많은 조직은 목표와 계획을 가지고 있지만,
          현재 위치를 정확히 이해하지 못한 채
          의사결정을 내리는 경우가 많습니다.
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
              조직은 목표와 전략을 가지고 움직입니다.
            </p>

            <p className="mt-4 text-lg text-neutral-700">
              의미 있는 성장은 현재 상태를 이해하는 것에서 시작됩니다.
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
              전략
            </h3>

            <p className="text-sm text-neutral-500 mt-1">
              Strategy
            </p>

            <p className="mt-3 text-neutral-600">
              목표, 우선순위 및 장기 방향성.
            </p>

          </div>
  
            <div className="border border-black/10 rounded-2xl p-6 bg-white/30">

              <h3 className="text-xl font-semibold">
                운영
              </h3>

              <p className="text-sm text-neutral-500 mt-1">
                Operations
              </p>

              <p className="mt-3 text-neutral-600">
                업무 프로세스, 조직 운영 및 실행 역량.
              </p>

            </div>
  
            <div className="border border-black/10 rounded-2xl p-6 bg-white/30">

              <h3 className="text-xl font-semibold">
                준비도
              </h3>

              <p className="text-sm text-neutral-500 mt-1">
                Readiness
              </p>

              <p className="mt-3 text-neutral-600">
                자원, 제약요인 및 실행 가능성.
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
            모든 기회가 즉시 실행되어야 하는 것은 아닙니다.
          </p>

          <p className="mt-4 text-lg text-neutral-700">
            시장 검증, 파일럿 프로젝트 및 실행 가능성 검토를 통해
            가설을 검증할 수 있습니다.
          </p>

        </div>
  
        </section>
  
        {/* Outcomes */}
        <section className="max-w-5xl mx-auto px-6 pt-10 pb-16">
  
        <h2 className="text-3xl font-bold mb-2">
          결과물
        </h2>

        <p className="text-neutral-500 mb-8">
          Outcomes
        </p>
  
          <div className="grid md:grid-cols-2 gap-6">
  
            <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
              <h3 className="font-semibold">
                전략 진단
              </h3>

              <p className="text-sm text-neutral-500 mt-1">
                Strategic Assessment
              </p>
            </div>
  
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
                실행 로드맵
              </h3>

              <p className="text-sm text-neutral-500 mt-1">
                Implementation Roadmap
              </p>
            </div>
  
            <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
              <h3 className="font-semibold">
                의사결정 지원
              </h3>

              <p className="text-sm text-neutral-500 mt-1">
                Decision Support
              </p>
            </div>
  
          </div>
  
        </section>
  
      </main>
    );
  }