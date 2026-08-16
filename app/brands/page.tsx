import Link from "next/link";

const brands = [
  {
    number: "01",
    name: "Dustie",
    type: "AI & Real Estate Intelligence",
    category: "AI PRODUCT",
    status: "TRADEMARK PENDING",
    href: "/brands/dustie",
  },
  {
    number: "02",
    name: "AssetPicker",
    type: "Real Estate Information & Media",
    category: "MEDIA / REAL ESTATE",
    status: "TRADEMARK / PATENT PENDING",
    href: "/brands/assetpicker",
  },
  {
    number: "03",
    name: "Exotic Ordinary®",
    type: "Lifestyle, Commerce & Creative Brand",
    category: "BRAND",
    status: "REGISTERED",
    href: "/brands/exotic-ordinary",
  },
  {
    number: "04",
    name: "The Exotic Boutique",
    type: "Physical Boutique · Seoul",
    category: "PHYSICAL SPACE",
    status: "TRADEMARK PENDING",
    href: "/brands/the-exotic-boutique",
  },
  {
    number: "05",
    name: "The Exotic Voutique™",
    type: "Virtual Boutique & Bespoke Jewelry Experience",
    category: "VIRTUAL SPACE",
    status: "TRADEMARK / PATENT PENDING",
    href: "/brands/the-exotic-voutique",
  },
  {
    number: "06",
    name: "Voutiq",
    type: "Personalization & Virtual Boutique Solution",
    category: "B2B SOLUTION",
    status: "TRADEMARK PENDING",
    href: "/brands/voutiq",
  },
];

export default function BrandsPage() {
  return (
    <main className="min-h-screen bg-dd-sand text-dd-ink">

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-12 md:pb-28 md:pt-20">
        <div className="border-t border-black/20 pt-6">

          <p className="text-sm uppercase tracking-[0.24em] text-[#6F6252]">
            Brands & Ventures
          </p>

          <h1 className="mt-10 max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] md:text-7xl">
            Brands we build,
            <br />
            incubate and operate.
          </h1>

          <p className="mt-10 max-w-2xl text-xl leading-relaxed text-[#665B4E]">
            DustyDraft가 기획하거나 개발하고,
            <br className="hidden md:block" />
            실제 공간, 디지털 제품과 서비스로 발전시키는
            브랜드와 프로젝트를 소개합니다.
          </p>

        </div>
      </section>


      {/* Brand List */}
      <section className="mx-auto max-w-6xl px-6 pb-20">

        <div className="border-t border-black/20">

          {brands.map((brand) => (
            <Link
              key={brand.name}
              href={brand.href}
              className="
                group grid gap-5
                border-b border-black/15
                py-8
                transition-colors
                hover:bg-black/[0.035]
                md:grid-cols-12
                md:items-center
                md:px-4
              "
            >

              {/* Number */}
              <div className="md:col-span-1">
                <span className="text-sm text-[#817361]">
                  {brand.number}
                </span>
              </div>


              {/* Brand */}
              <div className="md:col-span-5">

                <p className="text-[10px] uppercase tracking-[0.18em] text-[#8A7B68]">
                  {brand.category}
                </p>

                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.025em]">
                  {brand.name}
                </h2>

                <p className="mt-2 text-sm text-[#716554]">
                  {brand.type}
                </p>

              </div>


              {/* Status */}
              <div className="md:col-span-4">

                <span
                  className="
                    inline-flex
                    rounded-full
                    border border-black/20
                    bg-black/[0.015]
                    px-3 py-1.5
                    text-[10px] uppercase
                    tracking-[0.12em]
                    text-[#655A4C]
                  "
                >
                  {brand.status}
                </span>

              </div>


              {/* Arrow */}
              <div className="flex justify-end md:col-span-2">

                <span className="inline-block text-xl text-[#5F5548] transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>

              </div>

            </Link>
          ))}

        </div>
      </section>


      {/* Physical → Virtual → Solution */}
      <section className="mx-auto max-w-6xl px-6 pb-24">

        <div className="border-t border-black/20 pt-12">

          <p className="text-sm uppercase tracking-[0.22em] text-[#6F6252]">
            From Place to Platform
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
            현실의 경험을 디지털 공간과
            <br />
            기술 솔루션으로 확장합니다.
          </h2>


          <div className="mt-12 grid gap-0 border-l border-t border-black/15 md:grid-cols-4">

            <Link
              href="/brands/the-exotic-boutique"
              className="group min-h-56 border-b border-r border-black/15 p-6 hover:bg-black/[0.03] transition"
            >
              <span className="text-xs text-[#817361]">
                01 · Physical
              </span>

              <h3 className="mt-8 text-xl font-semibold">
                The Exotic Boutique
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#716554]">
                실제 공간에서 시작된
                제품과 큐레이션 경험.
              </p>

              <span className="mt-7 inline-block text-sm">
                →
              </span>
            </Link>


            <Link
              href="/brands/the-exotic-voutique"
              className="group min-h-56 border-b border-r border-black/15 p-6 hover:bg-black/[0.03] transition"
            >
              <span className="text-xs text-[#817361]">
                02 · Virtual
              </span>

              <h3 className="mt-8 text-xl font-semibold">
                The Exotic Voutique™
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#716554]">
                현실의 경험을 확장한
                가상의 디지털 부티크.
              </p>

              <span className="mt-7 inline-block text-sm">
                →
              </span>
            </Link>


            <Link
              href="/brands/the-exotic-voutique/voutique"
              className="group min-h-56 border-b border-r border-black/15 p-6 hover:bg-black/[0.03] transition"
            >
              <span className="text-xs text-[#817361]">
                03 · Experience
              </span>

              <h3 className="mt-8 text-xl font-semibold">
                Voutique
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#716554]">
                맞춤 디자인과 큐레이션,
                제작 흐름을 연결하는 서비스.
              </p>

              <span className="mt-7 inline-block text-sm">
                →
              </span>
            </Link>


            <Link
              href="/brands/voutiq"
              className="group min-h-56 border-b border-r border-black/15 p-6 hover:bg-black/[0.03] transition"
            >
              <span className="text-xs text-[#817361]">
                04 · B2B
              </span>

              <h3 className="mt-8 text-xl font-semibold">
                Voutiq
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#716554]">
                디지털 부티크 경험을
                다른 브랜드에 적용하기 위한 솔루션.
              </p>

              <span className="mt-7 inline-block text-sm">
                →
              </span>
            </Link>

          </div>

        </div>

      </section>


      {/* Closing */}
      <section className="mx-auto max-w-6xl px-6 pb-20">

        <div className="border-t border-black/15 pt-7">

          <div className="flex flex-col justify-between gap-3 text-sm text-[#716554] md:flex-row">

            <p>
              Brands, products and ventures developed and incubated through DustyDraft.
            </p>

            <Link
              href="/about"
              className="text-[#4F463B] transition hover:opacity-60"
            >
              About DustyDraft →
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}