export default function ContentPage() {
    return (
      <main className="min-h-screen bg-[#ede4da] text-neutral-900">
  
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 py-20">
  
          <h1 className="text-5xl font-bold">
            Content
          </h1>
  
          <p className="mt-6 text-xl text-neutral-700">
            Stories, tutorials, technical notes and public updates.
          </p>
  
        </section>
  
        {/* Channels */}
        <section className="max-w-5xl mx-auto px-6 py-12">
  
          <h2 className="text-3xl font-bold mb-8">
            Channels
          </h2>
  
          <div className="grid md:grid-cols-3 gap-6">
  
            <a
              href="#"
              className="border border-black/10 rounded-2xl p-6 bg-white/30 block hover:bg-white/50 transition"
            >
              <h3 className="text-2xl font-semibold">
                YouTube
              </h3>
  
              <p className="mt-3 text-neutral-600">
                Videos, tutorials and project updates.
              </p>
            </a>
  
            <a
              href="#"
              className="border border-black/10 rounded-2xl p-6 bg-white/30 block hover:bg-white/50 transition"
            >
              <h3 className="text-2xl font-semibold">
                Tech Notes
              </h3>
  
              <p className="mt-3 text-neutral-600">
                Development logs and engineering articles.
              </p>
            </a>
  
            <a
              href="#"
              className="border border-black/10 rounded-2xl p-6 bg-white/30 block hover:bg-white/50 transition"
            >
              <h3 className="text-2xl font-semibold">
                LinkedIn
              </h3>
  
              <p className="mt-3 text-neutral-600">
                Professional updates and announcements.
              </p>
            </a>
  
          </div>
  
        </section>
  
        {/* Publications */}
        <section className="max-w-5xl mx-auto px-6 py-12">
  
          <h2 className="text-3xl font-bold mb-8">
            Publications
          </h2>
  
          <div className="space-y-6">
  
            <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
              <h3 className="text-2xl font-semibold">
                Rala's Tech Notes
              </h3>
  
              <p className="mt-3 text-neutral-600">
                Technical writing, experiments and build logs.
              </p>
            </div>
  
            <div className="border border-black/10 rounded-2xl p-6 bg-white/30">
              <h3 className="text-2xl font-semibold">
                Development Journal
              </h3>
  
              <p className="mt-3 text-neutral-600">
                Notes on software, AI and digital products.
              </p>
            </div>
  
          </div>
  
        </section>
  
        {/* Media Kit */}
        <section className="max-w-5xl mx-auto px-6 py-16">
  
          <h2 className="text-3xl font-bold mb-8">
            Media Kit
          </h2>
  
          <p className="text-lg text-neutral-700 max-w-3xl">
            Public information, announcements and media resources
            related to Dusty Draft and its products.
          </p>
  
        </section>
  
      </main>
    );
  }