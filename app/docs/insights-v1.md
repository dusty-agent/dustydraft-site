import Link from "next/link";
export default function InsightsPage() {
    return ( <main className="min-h-screen bg-[#ede4da] text-neutral-900">
    
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-20">
    
        <h1 className="text-5xl font-bold">
          Insights
        </h1>
    
        <p className="mt-6 text-xl text-neutral-700">
          Assessment frameworks, diagnostics and practical intelligence.
        </p>
    
        <p className="mt-10 text-lg text-neutral-800 max-w-3xl">
          Most people start with solutions.
          We start with understanding reality.
        </p>
    
      </section>
    
      {/* Why Assessment Matters */}
      <section className="max-w-5xl mx-auto px-6 py-12">
    
        <h2 className="text-3xl font-bold mb-8">
          Why Assessment Matters
        </h2>
    
        <div className="border border-black/10 rounded-2xl p-8 bg-white/30">
    
          <p className="text-lg text-neutral-700">
            Before building systems, deploying AI or investing in technology,
            it is important to understand the current state.
          </p>
    
          <p className="mt-4 text-lg text-neutral-700">
            Assessment helps identify opportunities, constraints
            and realistic paths forward.
          </p>

          <p className="mt-4 text-lg text-neutral-700">
            Many projects fail because they begin
            with solutions rather than understanding
            the problem. Assessment helps reduce risk,
            improve decision quality and create
            realistic implementation plans.
          </p>
    
        </div>
    
      </section>
    
      {/* The Dusty Framework */}
      <section className="max-w-5xl mx-auto px-6 py-12">
    
        <h2 className="text-3xl font-bold mb-8">
          The Dusty Framework
        </h2>
    
        <div className="grid md:grid-cols-5 gap-6">
    
          <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
    
            <h3 className="text-xl font-semibold">
              AS-IS
            </h3>
    
            <p className="mt-3 text-neutral-600">
              Understand the current reality.
            </p>
    
          </div>
    
          <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
    
            <h3 className="text-xl font-semibold">
              Assessment
            </h3>
    
            <p className="mt-3 text-neutral-600">
              Measure readiness, risks and opportunities.
            </p>
    
          </div>
    
          <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
    
            <h3 className="text-xl font-semibold">
              TO-BE
            </h3>
    
            <p className="mt-3 text-neutral-600">
              Define realistic goals and priorities.
            </p>
    
          </div>
          <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
    
                <h3 className="text-xl font-semibold">
                Validation
                </h3>

                <p className="mt-3 text-neutral-600">
                Test assumptions through observation, pilot projects and proof of concept.
                </p>

          </div>
          <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
    
            <h3 className="text-xl font-semibold">
              Implementation
            </h3>
    
            <p className="mt-3 text-neutral-600">
              Deploy, integrate and continuously improve.
            </p>
    
          </div>
    
        </div>
    
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12">

            <h2 className="text-xl font-medium mb-6 text-neutral-600 uppercase tracking-wide">
            Methodology
            </h2>

            <div className="border border-black/10 rounded-2xl p-8 bg-white/30">

            <p className="text-lg text-neutral-700">
                Most projects begin with a solution.
                We begin with understanding reality.
            </p>

            <p className="mt-4 text-lg text-neutral-700">
                By assessing the current state, defining realistic goals,
                validating assumptions and implementing practical solutions,
                organizations can reduce risk and make better decisions.
            </p>

            </div>

    </section>
    
    <section className="max-w-5xl mx-auto px-6 py-12">

        <h2 className="text-xl font-medium mb-6 text-neutral-600 uppercase tracking-wide">
            Process
        </h2>

        <div className="border border-black/10 rounded-2xl p-8 bg-white/30">

            <p className="text-lg md:text-xl font-medium text-center text-neutral-700">
            AS-IS → Assessment/diagnosis → TO-BE → Validation → Implementation
            </p>

        </div>

    </section>
      {/* Assessment Areas */}
      <section className="max-w-5xl mx-auto px-6 py-12">
    
        <h2 className="text-3xl font-bold mb-8">
          Assessment Areas
        </h2>
    
        <div className="grid md:grid-cols-3 gap-6">

        <Link
            href="/services/building-intelligence"
            className="border border-black/10 rounded-2xl p-6 bg-white/30 hover:bg-white/50 transition"
            >
            <h3 className="text-2xl font-semibold">
                Building Intelligence
            </h3>

            <p className="mt-3 text-neutral-600">
                Building operations, technology readiness
                and digital assessments.
            </p>

            <p className="mt-4 text-sm text-neutral-500">
                Learn More →
            </p>
        </Link>

        <Link
            href="/services/business-intelligence"
            className="border border-black/10 rounded-2xl p-6 bg-white/30 hover:bg-white/50 transition"
        >
            <h3 className="text-2xl font-semibold">
            Business Intelligence
            </h3>

            <p className="mt-3 text-neutral-600">
            Business planning, operational diagnostics
            and implementation readiness.
            </p>

            <p className="mt-4 text-sm text-neutral-500">
            Learn More →
            </p>
        </Link>

        <div className="border border-black/10 rounded-2xl p-6 bg-white/30">

            <h3 className="text-2xl font-semibold">
            AI Readiness
            </h3>

            <p className="mt-3 text-neutral-600">
            Assess whether AI can deliver practical value.
            </p>

            <p className="mt-4 text-sm text-neutral-500">
            Coming Soon
            </p>

        </div>

        </div>
    
      </section>

      {/* Case Studies */}
      <section className="max-w-5xl mx-auto px-6 py-12">
    
        <h2 className="text-3xl font-bold mb-8">
          Case Studies
        </h2>
    
        <div className="border border-black/10 rounded-2xl p-8 bg-white/30">
    
          <p className="text-lg text-neutral-700">
            Future assessment reports, framework experiments
            and practical diagnostics.
          </p>
    
        </div>
    
      </section>
    
      {/* Philosophy */}
      <section className="max-w-5xl mx-auto px-6 py-16">
    
        <h2 className="text-3xl font-bold mb-8">
          Philosophy
        </h2>
    
        <p className="text-lg text-neutral-700 max-w-3xl">
          We believe meaningful progress starts with understanding reality.
          Rather than chasing trends, we focus on assessing what exists,
          identifying what is possible and designing practical paths forward.
        </p>

        <p className="mt-4 text-lg text-neutral-700">
            Not every opportunity can be evaluated
            from existing information alone.
            Meaningful assessment may require
            observation, measurement and validation
            before major decisions are made.
        </p>
    
      </section>
    
    </main>
    
    );
    }
    