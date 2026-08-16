export default function LibraryPage() {
  const contentItems = [
    {
      number: "01",
      title: "DustyDraft YouTube",
      category: "Ideas / Perspective",
      description:
        "DustyDraft의 컨셉과 생각을 짧은 영상으로 기록합니다.",
      href: "https://www.youtube.com/@dustydraft",
    },
    {
      number: "02",
      title: "AssetPicker",
      category: "Real Estate / AP Daily",
      description:
        "부동산·도시·정책·시장에 관한 정보를 정리해 공유합니다.",
      href: "https://www.youtube.com/@assetpicker",
    },
    {
      number: "03",
      title: "The Exotic Voutique™",
      category: "Concept / Digital Experience",
      description:
        "맞춤 주얼리와 디지털 경험을 연결하는 프로젝트입니다.",
      href: "https://exoticordinary.com/voutique",
    },
  ];

  const resourceItems = [
    {
      number: "01",
      title: "NDA Guide",
      category: "Guide",
      description:
        "프로젝트 참여와 협업을 위한 비밀유지계약 관련 안내입니다.",
      href: "https://theplaceyoung.wordpress.com/2025/02/15/%f0%9f%94%90-nda-%eb%b9%84%eb%b0%80%ec%9c%a0%ec%a7%80%ea%b3%84%ec%95%bd%ec%84%9c-%ec%b2%b4%ea%b2%b0-%ec%95%88%eb%82%b4/",
    },
    {
      number: "02",
      title: "Dataset Guide",
      category: "Guide",
      description:
        "데이터 가공 작업과 관련해 정리한 참고자료입니다.",
      href: "https://theplaceyoung.wordpress.com/2025/02/15/%f0%9f%93%8c-%eb%8d%b0%ec%9d%b4%ed%84%b0-%ea%b0%80%ea%b3%b5-%ec%9e%91%ec%97%85-%ea%b0%80%ec%9d%b4%eb%93%9c/",
    },
    {
      number: "03",
      title: "Technical Notes",
      category: "Notes",
      description:
        "개발과 기술에 관해 작성한 글과 메모를 모아둡니다.",
      href: "https://blog.naver.com/ralalife/224295941872",
    },
    {
      number: "04",
      title: "Development Journal",
      category: "Journal",
      description:
        "개발과 프로젝트에 관한 기록을 남기는 개인 아카이브입니다.",
      href: "https://blog.naver.com/ralalife",
    },
  ];

  return (
    <main className="min-h-screen bg-dd-paper text-dd-ink">

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-20 md:py-24">
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.24em] text-neutral-500">
          Library
        </p>

        <h1 className="text-5xl font-bold tracking-[-0.04em] md:text-6xl">
          라이브러리
        </h1>

        <div className="mt-10 max-w-2xl">
          <p className="text-xl leading-relaxed tracking-[-0.015em] md:text-2xl">
            공개한 콘텐츠와
            <br />
            참고자료를 한곳에 모았습니다.
          </p>

          <p className="mt-6 max-w-xl leading-relaxed text-neutral-600">
            DustyDraft와 연결된 채널, 프로젝트와
            다시 찾아볼 만한 자료를 정리합니다.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-5xl px-6 py-14">
        <div className="grid gap-6 border-t border-black/10 pt-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
              01
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em]">
              콘텐츠
            </h2>

            <p className="mt-2 text-sm text-neutral-500">
              Content
            </p>
          </div>

          <div className="md:col-span-8">
            <p className="max-w-xl leading-relaxed text-neutral-600">
              현재 공개되어 있는 콘텐츠와 프로젝트를 모아둡니다.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-black/10">
          {contentItems.map((item) => (
            <a
              key={item.number}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-4 border-b border-black/10 py-8 transition md:grid-cols-12 md:items-start"
            >
              <div className="md:col-span-1">
                <span className="text-xs text-neutral-400">
                  {item.number}
                </span>
              </div>

              <div className="md:col-span-4">
                <h3 className="text-xl font-semibold tracking-[-0.02em] transition group-hover:opacity-60">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs uppercase tracking-[0.12em] text-neutral-400">
                  {item.category}
                </p>
              </div>

              <div className="md:col-span-6">
                <p className="max-w-lg leading-relaxed text-neutral-600">
                  {item.description}
                </p>
              </div>

              <div className="hidden text-right text-neutral-400 transition group-hover:translate-x-1 group-hover:text-neutral-900 md:col-span-1 md:block">
                ↗
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Resources */}
      <section className="mx-auto max-w-5xl px-6 py-14">
        <div className="grid gap-6 border-t border-black/10 pt-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
              02
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em]">
              리소스
            </h2>

            <p className="mt-2 text-sm text-neutral-500">
              Resources
            </p>
          </div>

          <div className="md:col-span-8">
            <p className="max-w-xl leading-relaxed text-neutral-600">
              작업하면서 작성하거나 다시 참고하기 위해 남겨둔
              가이드와 기록입니다.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-black/10">
          {resourceItems.map((item) => (
            <a
              key={item.number}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-4 border-b border-black/10 py-8 transition md:grid-cols-12 md:items-start"
            >
              <div className="md:col-span-1">
                <span className="text-xs text-neutral-400">
                  {item.number}
                </span>
              </div>

              <div className="md:col-span-4">
                <h3 className="text-xl font-semibold tracking-[-0.02em] transition group-hover:opacity-60">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs uppercase tracking-[0.12em] text-neutral-400">
                  {item.category}
                </p>
              </div>

              <div className="md:col-span-6">
                <p className="max-w-lg leading-relaxed text-neutral-600">
                  {item.description}
                </p>
              </div>

              <div className="hidden text-right text-neutral-400 transition group-hover:translate-x-1 group-hover:text-neutral-900 md:col-span-1 md:block">
                ↗
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="mx-auto max-w-5xl px-6 pb-24 pt-14">
        <div className="border-t border-black/10 pt-10">
          <p className="max-w-xl text-sm leading-relaxed text-neutral-500">
            이 페이지는 공개되는 콘텐츠와 자료에 따라
            천천히 업데이트됩니다.
          </p>
        </div>
      </section>

    </main>
  );
}