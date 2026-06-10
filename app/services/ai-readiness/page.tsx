export default function BusinessIntelligencePage() {
    return (
      <main className="min-h-screen bg-[#ede4da] text-neutral-900">
  
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 py-20">
  
          <h1 className="text-5xl font-bold">
            Business Intelligence
          </h1>
  
          <p className="mt-6 text-xl text-neutral-700">
            Assessing business readiness, operations and implementation potential.
          </p>
  
          <p className="mt-10 text-lg text-neutral-800 max-w-3xl">
            Many organizations have ideas, goals and plans.
            The challenge is understanding whether they are practical,
            sustainable and ready for implementation.
          </p>
  
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
        <section className="max-w-5xl mx-auto px-6 py-16">
  
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