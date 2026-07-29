export default function PropertyIntelligencePage() {
  return (
    <main className="min-h-screen bg-[#ede4da] text-neutral-900">

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-8 md:py-10">
        <h1 className="text-5xl font-bold">
          프로퍼티 인텔리전스
        </h1>

        <p className="mt-4 text-xl text-neutral-500">
          Property Intelligence
        </p>

        <p className="mt-8 text-lg text-neutral-800 max-w-3xl leading-relaxed">
          부동산 관련 정보와 근거를 연결하고 검증하여
          더 나은 판단과 실행을 지원합니다.
        </p>

        <p className="mt-6 text-lg text-neutral-700 max-w-3xl leading-relaxed">
          부동산은 단순한 투자대상이 아니라 물리적 공간이자
          권리와 이용관계가 결합된 운영·관리·거래의 대상입니다.
        </p>
      </section>

      {/* What We Assess */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-2">
          무엇을 보는가
        </h2>

        <p className="text-neutral-500 mb-8">
          What We Assess
        </p>

        <div className="border border-black/10 rounded-2xl p-8 bg-white/30">
          <p className="text-lg text-neutral-700 leading-relaxed">
            부동산에 관한 판단은 하나의 문서나 하나의 수치만으로
            이루어지기 어렵습니다.
          </p>

          <p className="mt-4 text-lg text-neutral-700 leading-relaxed">
            자산의 상태, 이용 목적, 권리관계, 주변 환경,
            자료의 신뢰도와 복수의 대안을 함께 검토합니다.
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

        <div className="grid md:grid-cols-2 gap-6">

          <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
            <h3 className="text-xl font-semibold">
              자산 상태
            </h3>

            <p className="mt-2 text-neutral-500">
              Property Conditions
            </p>

            <p className="mt-4 text-neutral-700">
              물리적 특성, 구조, 시설 및 현재 이용 상태.
            </p>
          </div>

          <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
            <h3 className="text-xl font-semibold">
              이용 가능성
            </h3>

            <p className="mt-2 text-neutral-500">
              Usability
            </p>

            <p className="mt-4 text-neutral-700">
              희망 용도, 공간 적합성 및 실제 활용 가능성.
            </p>
          </div>

          <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
            <h3 className="text-xl font-semibold">
              권리와 거래
            </h3>

            <p className="mt-2 text-neutral-500">
              Rights & Transactions
            </p>

            <p className="mt-4 text-neutral-700">
              소유권, 임대차, 계약조건 및 거래 구조.
            </p>
          </div>

          <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
            <h3 className="text-xl font-semibold">
              운영
            </h3>

            <p className="mt-2 text-neutral-500">
              Operations
            </p>

            <p className="mt-4 text-neutral-700">
              관리 조건, 운영비용 및 지속적인 운영 요구사항.
            </p>
          </div>

          <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
            <h3 className="text-xl font-semibold">
              입지와 환경
            </h3>

            <p className="mt-2 text-neutral-500">
              Location & Context
            </p>

            <p className="mt-4 text-neutral-700">
              접근성, 배후수요, 경쟁시설 및 주변 환경.
            </p>
          </div>

          <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
            <h3 className="text-xl font-semibold">
              문서와 데이터
            </h3>

            <p className="mt-2 text-neutral-500">
              Documents & Data
            </p>

            <p className="mt-4 text-neutral-700">
              자료의 출처, 최신성, 누락 여부 및 정보 간 정합성.
            </p>
          </div>

        </div>
      </section>

      {/* Analysis Process */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-2">
          분석 과정
        </h2>

        <p className="text-neutral-500 mb-8">
          Analysis Process
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
            <h3 className="text-xl font-semibold">
              연관 질문 확장
            </h3>

            <p className="mt-2 text-neutral-500">
              Question Expansion
            </p>

            <p className="mt-4 text-neutral-700">
              사용자의 원질문에서 필요한 연관 검토사항을 확장합니다.
            </p>
          </div>

          <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
            <h3 className="text-xl font-semibold">
              근거 검증
            </h3>

            <p className="mt-2 text-neutral-500">
              Evidence Validation
            </p>

            <p className="mt-4 text-neutral-700">
              문서와 데이터의 일치, 충돌 및 누락 여부를 확인합니다.
            </p>
          </div>

          <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
            <h3 className="text-xl font-semibold">
              비교 분석
            </h3>

            <p className="mt-2 text-neutral-500">
              Comparative Analysis
            </p>

            <p className="mt-4 text-neutral-700">
              자산, 문서, 이용 시나리오 및 시점별 차이를 비교합니다.
            </p>
          </div>

          <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
            <h3 className="text-xl font-semibold">
              의사결정 지원
            </h3>

            <p className="mt-2 text-neutral-500">
              Decision Support
            </p>

            <p className="mt-4 text-neutral-700">
              확인된 사실과 불확실성, 다음 실행사항을 함께 제시합니다.
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
          <p className="text-lg text-neutral-700 leading-relaxed">
            부동산에 관한 하나의 질문도 복수의 문서와 데이터,
            서로 다른 분석 기준을 필요로 할 수 있습니다.
          </p>

          <p className="mt-4 text-lg text-neutral-700 leading-relaxed">
            확인된 정보, 부분 확인 정보, 충돌 정보,
            누락 정보 및 외부 확인이 필요한 사항을 구분합니다.
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
            <h3 className="text-xl font-semibold">
              자산 진단
            </h3>

            <p className="mt-2 text-neutral-500">
              Property Assessment
            </p>
          </div>

          <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
            <h3 className="text-xl font-semibold">
              근거 검증
            </h3>

            <p className="mt-2 text-neutral-500">
              Evidence Validation
            </p>
          </div>

          <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
            <h3 className="text-xl font-semibold">
              비교 분석
            </h3>

            <p className="mt-2 text-neutral-500">
              Comparative Analysis
            </p>
          </div>

          <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
            <h3 className="text-xl font-semibold">
              이용·운영 시나리오
            </h3>

            <p className="mt-2 text-neutral-500">
              Use & Operating Scenarios
            </p>
          </div>

          <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
            <h3 className="text-xl font-semibold">
              실행 로드맵
            </h3>

            <p className="mt-2 text-neutral-500">
              Action Roadmaps
            </p>
          </div>

          <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
            <h3 className="text-xl font-semibold">
              의사결정 지원
            </h3>

            <p className="mt-2 text-neutral-500">
              Decision Support
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}