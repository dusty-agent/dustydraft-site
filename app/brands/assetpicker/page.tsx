import BrandPaper from "../_components/BrandPaper";

export default function AssetPickerPage() {
  return (
    <main className="min-h-screen bg-ap-sand text-ap-ink">

      {/* Hero */}
      <section className="bg-ap-sand px-6 pt-10 md:pt-16">
        <div
          className="
            relative
            mx-auto
            max-w-6xl
            aspect-video
            overflow-hidden
            rounded-[30px]
            bg-cover
            bg-center
          "
          style={{
            backgroundImage: "url('/images/assetpicker-cover.png')",
          }}
        >
          <div className="absolute inset-0 bg-black/15" />

          <div
            className="
              relative z-10
              flex h-full
              flex-col justify-between
              p-8
              md:p-14
            "
          >
            {/* Top */}
            <div className="flex items-start justify-between gap-4">

              <p className="text-xs uppercase tracking-[0.24em] text-white/75">
                DustyDraft / Brand
              </p>

              <div
                className="
                    flex
                    flex-wrap
                    items-center
                    justify-end
                    gap-2
                    text-[9px]
                    uppercase
                    tracking-[0.16em]
                    text-white/40
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

              <p className="mb-4 text-sm tracking-[0.18em] text-white/70">
                PICK THE BEST ASSET.
              </p>

              <h1
                className="
                  text-5xl
                  font-semibold
                  leading-none
                  tracking-[-0.05em]
                  text-white
                  md:text-7xl
                "
              >
                AssetPicker
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
                부동산·도시·정책·시장의 정보를
                <br className="hidden md:block" />
                더 쉽게 확인하고 이해할 수 있도록.
              </p>

            </div>

          </div>
        </div>


        {/* Hero Caption */}
        <div
          className="
            mx-auto
            flex
            max-w-6xl
            flex-col
            justify-between
            gap-2
            py-5
            text-[10px]
            uppercase
            tracking-[0.18em]
            text-ap-navy/55
            sm:flex-row
          "
        >
          <span>AssetPicker</span>
          <span>Real Estate · Information · Media</span>
        </div>

      </section>


      {/* Brand Information */}
      <BrandPaper
        theme="assetpicker"
        eyebrow="DustyDraft / Brand"
        name="AssetPicker"
        tagline="Pick the Best Asset."
        koreanTitle="부동산 정보를 더 쉽게 확인할 수 있도록."
        description="부동산·도시·정책·시장의 주요 정보를 정리하고, AP Daily와 영상 콘텐츠를 통해 공유합니다."
        status="Active"
        developedBy="DustyDraft"
        developedByHref="/about"

        keywords={[
          "AP Daily",
          "Real Estate",
          "News",
          "Shorts",
          "Information",
        ]}

        beforeLinks={
            <>
              {/* ==================================================
                  AP DAILY
              ================================================== */}
              <section className="bg-ap-navy text-white">
                <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          
                  <p className="text-[11px] uppercase tracking-[0.22em] text-white/45">
                    AP Daily
                  </p>
          
                  <div className="mt-4 grid gap-10 md:grid-cols-12 md:items-end">
          
                    {/* Copy */}
                    <div className="md:col-span-7">
          
                      <h2
                        className="
                          text-3xl
                          font-semibold
                          leading-tight
                          tracking-[-0.03em]
                          md:text-5xl
                        "
                      >
                        오늘의 부동산 정보를
                        <br />
                        한 번에 확인하세요.
                      </h2>
          
                      <p className="mt-6 max-w-2xl leading-relaxed text-white/65">
                        매일 주요 부동산·도시·정책 뉴스를 정리하고,
                        카드뉴스와 짧은 영상으로 공유합니다.
                      </p>
          
                    </div>
          
          
                    {/* CTA */}
                    <div
                      className="
                        flex flex-col
                        gap-3
                        md:col-span-5
                        md:items-end
                      "
                    >
          
                      <a
                        href="https://www.dustie.xyz/discover/news"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex
                          min-w-[250px]
                          items-center
                          justify-between
                          rounded-full
                          bg-white
                          px-6 py-4
                          text-sm
                          font-semibold
                          text-ap-navy
                          transition
                          hover:opacity-90
                        "
                      >
                        오늘의 부동산 뉴스
                        <span>↗</span>
                      </a>
          
                      <a
                        href="https://open.kakao.com/o/giaqO4Ii"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex
                          min-w-[250px]
                          items-center
                          justify-between
                          rounded-full
                          border
                          border-white/25
                          px-6 py-4
                          text-sm
                          font-semibold
                          text-white
                          transition
                          hover:bg-white/10
                        "
                      >
                        AP Daily 오픈채팅 참여
                        <span>↗</span>
                      </a>
          
                    </div>
          
                  </div>
          
                </div>
              </section>
          
          
              {/* ==================================================
                  SHORTS & VIDEO
              ================================================== */}
              <section className="bg-ap-paper">
                <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          
                  <div
                    className="
                      flex flex-col
                      justify-between
                      gap-5
                      md:flex-row
                      md:items-end
                    "
                  >
          
                    <div>
          
                      <p className="text-[11px] uppercase tracking-[0.22em] text-ap-muted">
                        Shorts & Video
                      </p>
          
                      <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-ap-ink md:text-4xl">
                        짧게 보고,
                        <br />
                        빠르게 이해합니다.
                      </h2>
          
                    </div>
          
                    <p className="max-w-md text-sm leading-relaxed text-ap-muted">
                      주요 부동산 이슈를 짧은 영상으로 정리한
                      AssetPicker Shorts를 확인해보세요.
                    </p>
          
                  </div>
          
          
                  {/* Clickable Banner */}
                  <a
                    href="https://www.youtube.com/watch?v=whJIpoeX2_4&list=PLNh6kloQi2EM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-10 block"
                  >
          
                    <div
                      className="
                        relative
                        overflow-hidden
                        rounded-[26px]
                        border
                        border-ap-line
                        bg-white
                      "
                    >
          
                      <img
                        src="/images/assetpicker-channel.jpg"
                        alt="AssetPicker Shorts Playlist"
                        className="
                          block
                          w-full
                          h-auto
                          transition-transform
                          duration-500
                          group-hover:scale-[1.015]
                        "
                      />
          
                      <div
                        className="
                          absolute
                          inset-0
                          bg-black/0
                          transition
                          group-hover:bg-black/10
                        "
                      />
          
                      <span
                        className="
                          absolute
                          bottom-5
                          right-5
                          rounded-full
                          bg-white/90
                          px-5 py-3
                          text-xs
                          font-semibold
                          tracking-[0.1em]
                          text-ap-navy
                          backdrop-blur
                        "
                      >
                        SHORTS 보기 ↗
                      </span>
          
                    </div>
          
                  </a>
          
          
                  <div
                    className="
                      mt-4
                      flex
                      flex-col
                      gap-2
                      text-[10px]
                      uppercase
                      tracking-[0.22em]
                      text-ap-muted
                      md:flex-row
                      md:justify-between
                    "
                  >
                    <span>AssetPicker</span>
                    <span>AP Daily · Shorts · YouTube</span>
                  </div>
          
                </div>
              </section>
          
          
              {/* ==================================================
                  MARKET READER
              ================================================== */}
              <section className="bg-ap-navy text-white">
                <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          
                  <div
                    className="
                      flex
                      flex-col
                      justify-between
                      gap-6
                      md:flex-row
                      md:items-end
                    "
                  >
          
                    <div>
          
                      <p className="text-[11px] uppercase tracking-[0.22em] text-white/45">
                        Daily Market Board
                      </p>
          
                      <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
                        MarketReader
                      </h2>
          
                    </div>
          
                    <p className="max-w-md text-sm leading-relaxed text-white/60">
                      시장을 해석하거나 전망하기보다,
                      매일 확인할 주요 시장 숫자를
                      간결하게 정리합니다.
                    </p>
          
                  </div>
          
          
                  <a
                    href="https://www.youtube.com/watch?v=Uq7AFetm25Y&list=PLTH7LilYdu_I"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group
                      mt-10
                      block
                      border-t
                      border-white/15
                      py-8
                    "
                  >
          
                    <div
                      className="
                        flex
                        flex-col
                        justify-between
                        gap-6
                        md:flex-row
                        md:items-center
                      "
                    >
          
                      <div>
          
                        <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                          AssetPicker / MarketReader
                        </p>
          
                        <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em]">
                          오늘의 환율·금리
                        </h3>
          
                        <p className="mt-3 text-sm leading-relaxed text-white/50">
                          환율 · 금리 · 주요 시장 지표를
                          Daily Market Board로 확인하세요.
                        </p>
          
                      </div>
          
                      <span
                        className="
                          text-sm
                          text-white/60
                          transition-transform
                          group-hover:translate-x-1
                        "
                      >
                        Playlist ↗
                      </span>
          
                    </div>
          
                  </a>
          
          
                  <div
                    className="
                      border-t
                      border-white/10
                      pt-5
                      text-[10px]
                      uppercase
                      tracking-[0.22em]
                      text-white/30
                    "
                  >
                    Exchange Rate · Interest Rate · Market Data
                  </div>
          
                </div>
              </section>
          
          
              {/* ==================================================
                  FIELD OF VIEW
              ================================================== */}
              <section className="bg-ap-paper">
                <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          
                  <div className="border-t border-ap-line pt-10">
          
                    <div
                      className="
                        mb-8
                        flex
                        flex-col
                        justify-between
                        gap-4
                        md:flex-row
                        md:items-end
                      "
                    >
          
                      <div>
          
                        <p className="text-[11px] uppercase tracking-[0.22em] text-ap-muted">
                          Field of View
                        </p>
          
                        <h2 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-ap-ink md:text-3xl">
                          도시와 자산을 바라보는 시선
                        </h2>
          
                      </div>
          
                      <p className="max-w-md text-sm leading-relaxed text-ap-muted">
                        지역과 공간을 직접 보고,
                        시장과 정책의 변화를 함께 살펴봅니다.
                      </p>
          
                    </div>
          
          
                    {/* City Image */}
                    <div className="overflow-hidden rounded-[28px]">
          
                      <img
                        src="/images/assetpicker-city.png"
                        alt="AssetPicker City"
                        className="block w-full h-auto"
                      />
          
                    </div>
          
          
                    {/* Caption */}
                    <div
                      className="
                        mt-5
                        flex
                        flex-col
                        gap-2
                        text-[10px]
                        uppercase
                        tracking-[0.22em]
                        text-ap-muted
                        md:flex-row
                        md:items-center
                        md:justify-between
                      "
                    >
                      <span>AssetPicker</span>
                      <span>Real Estate · City · Information</span>
                    </div>
          
                  </div>
          
                </div>
              </section>
          
            </>
          }

        linksEyebrow="At a Glance"
        linksTitle="한눈에 보기"

        links={[
          {
            label: "오늘의 부동산 뉴스",
            href: "https://www.dustie.xyz/discover/news",
            external: true,
          },
          {
            label: "AssetPicker Shorts",
            href: "https://www.youtube.com/watch?v=whJIpoeX2_4&list=PLNh6kloQi2EM",
            external: true,
          },
          {
            label: "MarketReader — 오늘의 환율·금리",
            href: "https://www.youtube.com/watch?v=Uq7AFetm25Y&list=PLTH7LilYdu_I",
            external: true,
          },
          {
            label: "AP Daily 오픈채팅",
            href: "https://open.kakao.com/o/giaqO4Ii",
            external: true,
          },
          {
            label: "YouTube",
            href: "https://www.youtube.com/@assetpicker",
            external: true,
          },
          {
            label: "Instagram",
            href: "https://instagram.com/assetpicker",
            external: true,
          },
          {
            label: "Facebook",
            href: "https://www.facebook.com/assetpicker",
            external: true,
          },
        ]}
      />

    </main>
  );
}