import Link from "next/link";
export default function RealEstateToolkitPage() {
    const tools = [
      {
        title: "Investment Analysis Calculator",
        href: "/products/real-estate-toolkit/investment-analysis",
        description:
        "Analyze NOI, Cap Rate, Equity, Leverage and ROE in one place.",
        featured: true,
      },

      {
        title: "NOI Calculator",
        href: "/products/real-estate-toolkit/noi",
        description:
          "Calculate Net Operating Income from rental income and operating expenses.",
      },
      {
        title: "Cap Rate Calculator",
        href: "/products/real-estate-toolkit/cap-rate",
        description:
          "Estimate capitalization rate based on NOI and purchase price.",
      },
      {
        title: "Equity Calculator",
        href: "/products/real-estate-toolkit/equity",
        description:
          "Calculate required equity based on purchase price, deposits and loans.",
      },
      {
        title: "Leverage Calculator",
        href: "/products/real-estate-toolkit/leverage",
        description:
          "Understand leverage ratios and financing impact.",
      },
      {
        title: "ROE Calculator",
        href: "/products/real-estate-toolkit/roe",
        description:
          "Measure return on equity for real estate investments.",
      },
    ];
  
    return (
      <main className="min-h-screen bg-[#ede4da] text-neutral-900">
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 py-20">
          <h1 className="text-5xl font-bold">
            Real Estate Toolkit
          </h1>
  
          <p className="mt-6 text-xl text-neutral-700 max-w-3xl">
          Investment calculators for real estate investors, agents and analysts. Start with the Investment Analysis Calculator or explore individual metrics.
          </p>
        </section>
  
        {/* Tools */}
        <section className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold mb-8">
            Calculators
          </h2>
  
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
                    className={`mt-3 ${
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
  
        {/* About */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-8">
            About
          </h2>
  
          <p className="text-lg text-neutral-700 max-w-3xl">
            The Real Estate Toolkit is an experimental collection
            of calculators designed to help analyze income-producing
            properties and investment opportunities.
          </p>
        </section>

        <section className="max-w-5xl mx-auto px-6 pb-20">
  <div className="border border-black/10 rounded-2xl p-6 bg-white/30">

    <h2 className="text-2xl font-semibold">
      AssetPicker
    </h2>

    <p className="mt-3 text-neutral-600">
      Learn how to use these calculators through real estate
      investment articles and case studies.
    </p>

    <a
      href="https://blog.naver.com/assetpicker"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-4 underline"
    >
      Visit AssetPicker →
    </a>

  </div>
  
</section>
      </main>
    );
  }