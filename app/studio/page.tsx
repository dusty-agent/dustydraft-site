export default function StudioPage() {
    return (
      <main className="min-h-screen bg-[#ede4da] text-neutral-900">
  
        <section className="max-w-5xl mx-auto px-6 py-20">
  
          <h1 className="text-5xl font-bold">
            Development Studio
          </h1>
  
          <p className="mt-6 text-xl text-neutral-700">
            Building software, documenting ideas and exploring new technologies.
          </p>
  
        </section>
  
        <section className="max-w-5xl mx-auto px-6 py-12">
  
          <h2 className="text-3xl font-bold mb-8">
            Activities
          </h2>
  
          <div className="grid md:grid-cols-2 gap-6">
  
            <div className="border rounded-2xl p-6">
              <h3 className="font-semibold text-xl">
                Rala's Tech Notes
              </h3>
  
              <p className="mt-2 text-neutral-600">
                Technical notes, build logs and engineering insights.
              </p>
            </div>
  
            <div className="border rounded-2xl p-6">
              <h3 className="font-semibold text-xl">
                GitHub
              </h3>
  
              <p className="mt-2 text-neutral-600">
                Source code, experiments and open projects.
              </p>
            </div>
  
          </div>
  
        </section>
  
      </main>
    );
  }