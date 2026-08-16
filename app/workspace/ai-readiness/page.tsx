export default function BusinessIntelligencePage() {
    return (
      <main className="min-h-screen bg-[#ede4da] text-neutral-900">
  
        {/* Hero */}
      <section className="bg-ap-sand px-4 pt-6 md:px-6 md:pt-16">
        <div
          className="
            relative
            mx-auto
            max-w-6xl
            min-h-[560px]
            overflow-hidden
            rounded-[28px]
            bg-cover
            bg-center
            md:min-h-0
            md:aspect-video
            md:rounded-[30px]
          "
          style={{
            backgroundImage: "url('/images/assetpicker-cover.png')",
          }}
        >
          <div className="absolute inset-0 bg-black/20" />

          <div
            className="
              relative z-10
              flex min-h-[560px]
              flex-col justify-between
              p-6
              md:min-h-0
              md:h-full
              md:p-14
            "
          >
            {/* Top */}
            <div className="flex items-start justify-between gap-4">
              <p className="
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-white/60
                md:text-xs
                md:tracking-[0.24em]
              ">
                DustyDraft / Brand
              </p>

              <div
                className="
                  hidden
                  items-center
                  justify-end
                  gap-2
                  text-[9px]
                  uppercase
                  tracking-[0.16em]
                  text-white/40
                  sm:flex
                "
              >
                <span>Active</span>
                <span className="text-white/20">·</span>
                <span>Trademark Pending</span>
                <span className="text-white/20">·</span>
                <span>Patent Pending</span>
              </div>
            </div>

            {/* Bottom */}
            <div>
              <p className="
                mb-3
                text-[10px]
                uppercase
                tracking-[0.18em]
                text-white/60
                md:mb-4
                md:text-sm
              ">
                Pick the Best Asset.
              </p>

              <h1
                className="
                  text-[44px]
                  font-semibold
                  leading-[0.95]
                  tracking-[-0.05em]
                  text-white
                  sm:text-5xl
                  md:text-7xl
                "
              >
                AssetPicker
              </h1>

              <p className="
                mt-5
                max-w-[280px]
                text-sm
                leading-6
                text-white/75
                md:mt-6
                md:max-w-xl
                md:text-lg
                md:leading-relaxed
              ">
                부동산·도시·정책·시장의 정보를
                <br />
                더 쉽게 확인하고 이해할 수 있도록.
              </p>
            </div>
          </div>
        </div>

        {/* Caption */}
        <div
          className="
            mx-auto
            flex
            max-w-6xl
            flex-col
            gap-1.5
            py-4
            text-[9px]
            uppercase
            tracking-[0.18em]
            text-ap-navy/50
            sm:flex-row
            sm:justify-between
            md:py-5
            md:text-[10px]
          "
        >
          <span>AssetPicker</span>
          <span>Real Estate · Information · Media</span>
        </div>
      </section>
  
        {/* Why It Matters */}
        <section className="max-w-5xl mx-auto px-6 py-12">
  
          <h2 className="text-3xl font-bold mb-8">
            Why It Matters
          </h2>
  
          <div className="border border-black/10 rounded-2xl p-8 bg-white/30">
  
            <p className="text-lg text-neutral-700">
              Growth requires more than ideas.
              It requires operational readiness,
              realistic planning and measurable execution.
            </p>
  
            <p className="mt-4 text-lg text-neutral-700">
              Understanding current capabilities is often the first step
              toward meaningful business improvement.
            </p>
  
          </div>
  
        </section>
  
        {/* Assessment Areas */}
        <section className="max-w-5xl mx-auto px-6 py-12">
  
          <h2 className="text-3xl font-bold mb-8">
            Assessment Areas
          </h2>
  
          <div className="grid md:grid-cols-3 gap-6">
  
            <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
  
              <h3 className="text-xl font-semibold">
                Strategy
              </h3>
  
              <p className="mt-3 text-neutral-600">
                Goals, priorities and long-term direction.
              </p>
  
            </div>
  
            <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
  
              <h3 className="text-xl font-semibold">
                Operations
              </h3>
  
              <p className="mt-3 text-neutral-600">
                Processes, workflows and execution capability.
              </p>
  
            </div>
  
            <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
  
              <h3 className="text-xl font-semibold">
                Readiness
              </h3>
  
              <p className="mt-3 text-neutral-600">
                Resources, constraints and implementation potential.
              </p>
  
            </div>
  
          </div>
  
        </section>
  
        {/* Validation */}
        <section className="max-w-5xl mx-auto px-6 py-12">
  
          <h2 className="text-3xl font-bold mb-8">
            Validation
          </h2>
  
          <div className="border border-black/10 rounded-2xl p-8 bg-white/30">
  
            <p className="text-lg text-neutral-700">
              Not every business opportunity should be implemented immediately.
            </p>
  
            <p className="mt-4 text-lg text-neutral-700">
              Validation may include market testing,
              feasibility reviews, pilot projects
              and operational assessment.
            </p>
  
          </div>
  
        </section>
  
        {/* Outcomes */}
        <section className="max-w-5xl mx-auto px-6 pt-10 pb-16">
  
          <h2 className="text-3xl font-bold mb-8">
            Outcomes
          </h2>
  
          <div className="grid md:grid-cols-2 gap-6">
  
            <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
              Strategic Assessment
            </div>
  
            <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
              Operational Insights
            </div>
  
            <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
              Implementation Roadmaps
            </div>
  
            <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
              Decision Support
            </div>
  
          </div>
  
        </section>
  
      </main>
    );
  }