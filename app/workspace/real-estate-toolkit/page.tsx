import Link from "next/link";



export default function RealEstateToolkitPage() {
  const tools = [
    {
      title: "투자분석계산",
      subtitle: "Investment Analysis Calculator",
      href: "/workspace/real-estate-toolkit/investment-analysis",
      description: "NOI, Cap Rate, Equity, Leverage 및 ROE를 통합 분석합니다.",
      featured: true,
    },
    {
      title: "순영업소득",
      subtitle: "NOI Calculator",
      href: "/workspace/real-estate-toolkit/noi",
      description: "임대수익과 운영비용을 기반으로 NOI를 계산합니다.",
    },
    {
      title: "자본환원율",
      subtitle: "Cap Rate Calculator",
      href: "/workspace/real-estate-toolkit/cap-rate",
      description: "NOI와 매입가를 기준으로 Cap Rate를 계산합니다.",
    },
    {
      title: "실투자금",
      subtitle: "Equity Calculator",
      href: "/workspace/real-estate-toolkit/equity",
      description: "매입가, 보증금, 대출금을 반영하여 실투자금을 계산합니다.",
    },
    {
      title: "레버리지",
      subtitle: "Leverage Calculator",
      href: "/workspace/real-estate-toolkit/leverage",
      description: "레버리지 배수와 LTV를 계산합니다.",
    },
    {
      title: "자기자본수익률",
      subtitle: "ROE Calculator",
      href: "/workspace/real-estate-toolkit/roe",
      description: "자기자본 대비 수익률을 계산합니다.",
    },
    {
      title: "대출상환",
      subtitle: "Loan Calculator",
      href: "/workspace/real-estate-toolkit/loan-calculator",
      description: "원리금균등, 원금균등, 만기일시상환을 비교합니다.",
    },
  ];
  
    return (

      
      <main className="min-h-screen bg-[#ede4da] text-neutral-900">
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 py-20">
          <h1 className="text-5xl font-bold">
            부동산 툴킷
          </h1>

          <p className="mt-4 text-xl text-neutral-700">
            Real Estate Toolkit
          </p>

          <p className="mt-8 text-lg text-neutral-800 max-w-3xl">
            부동산 투자 분석을 위한 계산기 모음.
          </p>
        </section>
  
        {/* Tools */}
        <section className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold mb-2">
            계산기
          </h2>

          <p className="text-neutral-500 mb-8">
            Calculators
          </p>
  
          <div className="grid md:grid-cols-2 gap-6">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className={`
                  border rounded-2xl p-6 block transition
                  ${
                    tool.featured
                      ? "border-neutral-900 bg-neutral-900 text-white hover:bg-neutral-800"
                      : "border-black/10 bg-white/30 hover:bg-white/50"
                  }
                `}
              >
                <h3 className="text-2xl font-semibold">
                  {tool.title} →
                </h3>

                <p
                  className={`text-sm mt-1 ${
                    tool.featured
                      ? "text-white/60"
                      : "text-neutral-500"
                  }`}
                >
                  {tool.subtitle}
                </p>

                <p
                  className={`mt-4 ${
                    tool.featured
                      ? "text-white/80"
                      : "text-neutral-600"
                  }`}
                >
                  {tool.description}
                </p>

                {tool.featured && (
                  <div className="mt-4 inline-flex items-center rounded-full border border-white/20 px-3 py-1 text-xs text-white/70">
                    Recommended
                  </div>
                )}
              </Link>
            ))}
          </div>
        </section>
  
        <section className="max-w-5xl mx-auto px-6 pb-20">
          <div className="border border-black/10 rounded-2xl p-6 bg-white/30">

            {/* AssetPicker */}

              <h3 className="text-2xl font-semibold">
                AssetPicker
              </h3>

              <p className="mt-3 text-neutral-600">
                실제 부동산 투자 사례와 시장 분석 콘텐츠를 제공합니다.
              </p>

              <a
                href="https://blog.naver.com/assetpicker"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 underline"
              >
                AssetPicker 방문하기 →
              </a>

          </div>
  
        </section>

      </main>
    );
  }