export default function BuildingIntelligencePage() {
    return (
      <main className="min-h-screen bg-[#ede4da] text-neutral-900">
  
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 py-20">
  
          <h1 className="text-5xl font-bold">
            Building Intelligence
          </h1>
  
          <p className="mt-6 text-xl text-neutral-700">
            Assessing buildings, operations and technology readiness.
          </p>
  
          <p className="mt-10 text-lg text-neutral-800 max-w-3xl">
            Buildings generate data every day, yet many decisions are
            still made without understanding how a building actually performs.
          </p>
  
        </section>
  
        {/* Why It Matters */}
        <section className="max-w-5xl mx-auto px-6 py-12">
  
          <h2 className="text-3xl font-bold mb-8">
            Why It Matters
          </h2>
  
          <div className="border border-black/10 rounded-2xl p-8 bg-white/30">
  
            <p className="text-lg text-neutral-700">
              Building performance affects operational efficiency,
              tenant experience and long-term asset value.
            </p>
  
            <p className="mt-4 text-lg text-neutral-700">
              Understanding how a building operates is often the first step
              toward meaningful improvement.
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
                Operations
              </h3>
  
              <p className="mt-3 text-neutral-600">
                Facility management, workflows and operational efficiency.
              </p>
  
            </div>
  
            <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
  
              <h3 className="text-xl font-semibold">
                Technology
              </h3>
  
              <p className="mt-3 text-neutral-600">
                Existing systems, digital maturity and technology readiness.
              </p>
  
            </div>
  
            <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
  
              <h3 className="text-xl font-semibold">
                Data
              </h3>
  
              <p className="mt-3 text-neutral-600">
                Availability, quality and potential use of operational data.
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
              Not every opportunity can be evaluated from existing information alone.
            </p>
  
            <p className="mt-4 text-lg text-neutral-700">
              Validation may require observation periods,
              sensor deployment, data collection,
              pilot projects and performance measurement.
            </p>
  
          </div>
  
        </section>
  
        {/* Outcomes */}
        <section className="max-w-5xl mx-auto px-6 py-16">
  
          <h2 className="text-3xl font-bold mb-8">
            Outcomes
          </h2>
  
          <div className="grid md:grid-cols-2 gap-6">
  
            <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
              Operational Insights
            </div>
  
            <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
              Technology Roadmaps
            </div>
  
            <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
              Proof of Concept Plans
            </div>
  
            <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
              Implementation Priorities
            </div>
  
          </div>
  
        </section>
  
      </main>
    );
  }