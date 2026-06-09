export default function ProductsPage() {
    return (
      <main className="min-h-screen bg-[#ede4da] text-neutral-900">
  
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 py-20">
  
          <h1 className="text-5xl font-bold">
            Products
          </h1>
  
          <p className="mt-6 text-xl text-neutral-700">
            Experimental tools, digital products and ongoing projects.
          </p>
  
        </section>
  
        {/* Experimental Tools */}
        <section className="max-w-5xl mx-auto px-6 py-12">
  
          <h2 className="text-3xl font-bold mb-8">
            Experimental Tools
          </h2>
  
          <div className="grid md:grid-cols-3 gap-6">
  
            <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
              <h3 className="text-2xl font-semibold">
                Dustie
              </h3>
  
              <p className="mt-3 text-neutral-600">
                AI Assistant Platform
              </p>
            </div>
  
            <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
              <h3 className="text-2xl font-semibold">
                Painter
              </h3>
  
              <p className="mt-3 text-neutral-600">
                Creative Generation Tool
              </p>
            </div>
  
            <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
              <h3 className="text-2xl font-semibold">
                Meemo
              </h3>
  
              <p className="mt-3 text-neutral-600">
                Knowledge Workspace
              </p>
            </div>
  
          </div>
  
        </section>
  
        {/* Ongoing Projects */}
        <section className="max-w-5xl mx-auto px-6 py-12">
  
          <h2 className="text-3xl font-bold mb-8">
            Ongoing Projects
          </h2>
  
          <div className="space-y-6">
  
            <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
              <h3 className="text-2xl font-semibold">
                AssetPicker
              </h3>
  
              <p className="mt-3 text-neutral-600">
                Research and investment platform.
              </p>
            </div>
  
            <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
              <h3 className="text-2xl font-semibold">
                Dataset Lab
              </h3>
  
              <p className="mt-3 text-neutral-600">
                Data processing and AI dataset experiments.
              </p>
            </div>
  
          </div>
  
        </section>
  
        {/* Vision */}
        <section className="max-w-5xl mx-auto px-6 py-16">
  
          <h2 className="text-3xl font-bold mb-8">
            Vision
          </h2>
  
          <p className="text-lg text-neutral-700 max-w-3xl">
            We build independent software, AI services and
            experimental digital products that explore new ways
            of creating, learning and working.
          </p>
  
        </section>
  
      </main>
    );
  }