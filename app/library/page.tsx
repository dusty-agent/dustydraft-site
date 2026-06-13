export default function LibraryPage() {
    return ( <main className="min-h-screen bg-[#ede4da] text-neutral-900">
    
      <section className="max-w-5xl mx-auto px-6 py-20">
    
        <h1 className="text-5xl font-bold">
          라이브러리
        </h1>
    
        <p className="mt-4 text-xl text-neutral-700">
          Library
        </p>
    
        <p className="mt-8 text-lg text-neutral-800 max-w-3xl">
          기록, 가이드 및 참고자료.
        </p>
    
      </section>
    
      <section className="max-w-5xl mx-auto px-6 py-12">
    
        <h2 className="text-3xl font-bold mb-2">
          콘텐츠
        </h2>
    
        <p className="text-neutral-500 mb-8">
          Content
        </p>
    
        <div className="grid md:grid-cols-3 gap-6">
    
          <a
            href="https://www.youtube.com/@dustydraft"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black/10 rounded-2xl p-6 bg-white/30 block hover:bg-white/50 transition"
          >
            <h3 className="text-2xl font-semibold">
              YouTube
            </h3>
    
            <p className="mt-3 text-neutral-600">
              Videos, experiments and creative projects.
            </p>
          </a>
    
          <a
            href="https://blog.naver.com/assetpicker"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black/10 rounded-2xl p-6 bg-white/30 block hover:bg-white/50 transition"
          >
            <h3 className="text-2xl font-semibold">
              AssetPicker Journal
            </h3>
    
            <p className="mt-3 text-neutral-600">
              Investment research and asset analysis.
            </p>
          </a>
    
          <a
            href="https://youtu.be/1vrROZF3BzQ?si=S3Y8MW1WF6JcoKMQ"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black/10 rounded-2xl p-6 bg-white/30 block hover:bg-white/50 transition"
          >
            <h3 className="text-2xl font-semibold">
              Voutiq
            </h3>
    
            <p className="mt-3 text-neutral-600">
              Branding, lifestyle and curated stories.
            </p>
          </a>
    
        </div>
    
      </section>
    
      <section className="max-w-5xl mx-auto px-6 py-12">
    
        <h2 className="text-3xl font-bold mb-2">
          리소스
        </h2>
    
        <p className="text-neutral-500 mb-8">
          Resources
        </p>
    
        <div className="grid md:grid-cols-2 gap-6">

            <a
                href="https://theplaceyoung.wordpress.com/2025/02/15/%f0%9f%94%90-nda-%eb%b9%84%eb%b0%80%ec%9c%a0%ec%a7%80%ea%b3%84%ec%95%bd%ec%84%9c-%ec%b2%b4%ea%b2%b0-%ec%95%88%eb%82%b4/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-black/10 rounded-2xl p-6 bg-white/30 block hover:bg-white/50 transition"
            >
                <h3 className="text-xl font-semibold">
                NDA Guide
                </h3>

                <p className="mt-3 text-neutral-600">
                Project participation and collaboration guidelines.
                </p>
            </a>

            <a
                href="https://theplaceyoung.wordpress.com/2025/02/15/%f0%9f%93%8c-%eb%8d%b0%ec%9d%b4%ed%84%b0-%ea%b0%80%ea%b3%b5-%ec%9e%91%ec%97%85-%ea%b0%80%ec%9d%b4%eb%93%9c/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-black/10 rounded-2xl p-6 bg-white/30 block hover:bg-white/50 transition"
            >
                <h3 className="text-xl font-semibold">
                Dataset Guide
                </h3>

                <p className="mt-3 text-neutral-600">
                Dataset creation and processing guide.
                </p>
            </a>
    
          <a
            href="https://blog.naver.com/ralalife/224295941872"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black/10 rounded-2xl p-6 bg-white/30 block hover:bg-white/50 transition"
            >
            <h3 className="text-xl font-semibold">
                Technical Notes
            </h3>

            <p className="mt-3 text-neutral-600">
                Engineering notes, development experiments and technical articles.
            </p>
            </a>

            <a
            href="https://blog.naver.com/ralalife"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black/10 rounded-2xl p-6 bg-white/30 block hover:bg-white/50 transition"
            >
            <h3 className="text-xl font-semibold">
                Development Journal
            </h3>

            <p className="mt-3 text-neutral-600">
                Build logs, project updates and operational notes.
            </p>
            </a>
    
        </div>
    
      </section>
    
    </main>
    
    );
    }
    