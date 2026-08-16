import Link from "next/link";

type LinkItem = {
  label: string;
  href: string;
  external?: boolean;
};

type BrandTheme =
  | "default"
  | "dustie"
  | "assetpicker"
  | "exotic"
  | "voutique"
  | "voutiq"
  | "boutique";

type BrandPaperProps = {
  eyebrow: string;
  name: string;
  tagline?: string;
  koreanTitle: string;
  description: string;
  status?: string;

  parent?: string;
  parentHref?: string;

  developedBy?: string;
  developedByHref?: string;

  keywords?: string[];
  links?: LinkItem[];

  children?: React.ReactNode;
  beforeLinks?: React.ReactNode;

  theme?: BrandTheme;

  linksEyebrow?: string;
  linksTitle?: string;
};

const themes = {
  default: {
    main: "bg-dd-sand text-dd-ink",
    detail: "bg-dd-ivory",
    muted: "text-[#716554]",
    subtle: "text-[#817361]",
    line: "border-black/15",
    detailLine: "border-black/10",
    pill: "border-black/15 text-[#716554]",
    footer: "text-[#817361]",
  },

  dustie: {
    main: "bg-dustie-mint text-dustie-ink",
    detail: "bg-dustie-soft",
    muted: "text-dustie-muted",
    subtle: "text-dustie-muted/70",
    line: "border-dustie-line",
    detailLine: "border-dustie-line",
    pill: "border-dustie-line text-dustie-muted",
    footer: "text-dustie-muted",
  },

  assetpicker: {
    main: "bg-ap-paper text-ap-ink",
    detail: "bg-ap-sand",
    muted: "text-ap-muted",
    subtle: "text-ap-muted/70",
    line: "border-ap-line",
    detailLine: "border-ap-line",
    pill: "border-ap-line text-ap-muted",
    footer: "text-ap-muted",
  },

  exotic: {
    main: "bg-eo-pink text-eo-ink",
    detail: "bg-eo-soft",
    muted: "text-eo-muted",
    subtle: "text-eo-muted/70",
    line: "border-eo-line",
    detailLine: "border-eo-line",
    pill: "border-eo-line text-eo-muted",
    footer: "text-eo-muted",
  },

  voutique: {
    main: "bg-vq-black text-vq-ivory",
    detail: "bg-vq-soft text-vq-ink",
    muted: "text-vq-muted",
    subtle: "text-vq-muted/70",
    line: "border-vq-line",
    detailLine: "border-vq-line",
    pill: "border-vq-line text-vq-muted",
    footer: "text-vq-muted",
  },

  voutiq: {
    main: "bg-voutiq-tech text-voutiq-ink",
    detail: "bg-voutiq-soft",
    muted: "text-voutiq-muted",
    subtle: "text-voutiq-muted/70",
    line: "border-voutiq-line",
    detailLine: "border-voutiq-line",
    pill: "border-voutiq-line text-voutiq-muted",
    footer: "text-voutiq-muted",
  },

  boutique: {
    main: "bg-boutique-cream text-boutique-ink",
    detail: "bg-boutique-pink",
    muted: "text-boutique-muted",
    subtle: "text-boutique-muted/70",
    line: "border-boutique-line",
    detailLine: "border-boutique-line",
    pill: "border-boutique-line text-boutique-muted",
    footer: "text-boutique-muted",
  },
};

export default function BrandPaper({
  eyebrow,
  name,
  tagline,
  koreanTitle,
  description,
  status,

  parent,
  parentHref,

  developedBy,
  developedByHref,

  keywords = [],
  links = [],

  children,
  beforeLinks,

  theme = "default",

  linksEyebrow = "Explore",
  linksTitle = "더 살펴보기",
}: BrandPaperProps) {
  const t = themes[theme];

  return (
    <div className={`min-h-screen ${t.main}`}>

      {/* ==================================================
          BRAND INTRO
      ================================================== */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-12 md:pb-28 md:pt-20">

        <div className={`border-t ${t.line} pt-6`}>

          {/* Eyebrow / Status */}
          <div className="flex flex-wrap items-center justify-between gap-4">

            <p
              className={`
                text-sm
                uppercase
                tracking-[0.24em]
                ${t.muted}
              `}
            >
              {eyebrow}
            </p>

            {status && (
              <span
                className={`
                  rounded-full
                  border
                  px-4
                  py-2
                  text-xs
                  uppercase
                  tracking-[0.14em]
                  ${t.pill}
                `}
              >
                {status}
              </span>
            )}

          </div>


          {/* Brand Name */}
          <h1
            className="
              mt-10
              max-w-5xl
              text-5xl
              font-semibold
              leading-[0.98]
              tracking-[-0.045em]
              sm:text-6xl
              md:text-7xl
            "
          >
            {name}
          </h1>


          {/* Tagline */}
          {tagline && (
            <p
              className={`
                mt-5
                text-lg
                md:text-xl
                ${t.muted}
              `}
            >
              {tagline}
            </p>
          )}


          {/* Overview */}
          <div
            className={`
              mt-14
              grid
              gap-10
              border-t
              pt-8
              md:grid-cols-12
              ${t.line}
            `}
          >

            {/* Left */}
            <div className="md:col-span-4">

              <p
                className={`
                  text-sm
                  uppercase
                  tracking-[0.2em]
                  ${t.muted}
                `}
              >
                Overview
              </p>

              <h2
                className="
                  mt-4
                  text-2xl
                  font-semibold
                  leading-snug
                  tracking-[-0.025em]
                  md:text-3xl
                "
              >
                {koreanTitle}
              </h2>

            </div>


            {/* Right */}
            <div className="md:col-span-8">

              <p
                className="
                  max-w-3xl
                  text-xl
                  leading-relaxed
                  tracking-[-0.015em]
                  md:text-2xl
                "
              >
                {description}
              </p>


              {/* Keywords */}
              {keywords.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-2">

                  {keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className={`
                        rounded-full
                        border
                        px-4
                        py-2
                        text-sm
                        ${t.pill}
                      `}
                    >
                      {keyword}
                    </span>
                  ))}

                </div>
              )}

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          ADDITIONAL BRAND CONTENT
      ================================================== */}
      {children}


      {/* ==================================================
          CONTENT BEFORE LINKS
          이미지 / 영상 / 서비스 / 채널 / 쇼케이스 등
      ================================================== */}
      {beforeLinks}


      {/* ==================================================
          LINKS / AT A GLANCE
      ================================================== */}
      {links.length > 0 && (

        <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">

          <p
            className={`
              text-sm
              uppercase
              tracking-[0.22em]
              ${t.muted}
            `}
          >
            {linksEyebrow}
          </p>


          <h2
            className="
              mt-4
              text-4xl
              font-semibold
              tracking-[-0.035em]
              md:text-5xl
            "
          >
            {linksTitle}
          </h2>


          <div className={`mt-12 border-t ${t.line}`}>

            {links.map((item, index) => {

              const className = `
                group
                flex
                items-center
                justify-between
                border-b
                py-7
                text-xl
                font-semibold
                transition-all
                duration-300
                hover:px-3
                ${t.line}
              `;

              if (item.external) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >

                    <span>
                      {String(index + 1).padStart(2, "0")}
                      &nbsp;&nbsp;
                      {item.label}
                    </span>

                    <span
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                    >
                      ↗
                    </span>

                  </a>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={className}
                >

                  <span>
                    {String(index + 1).padStart(2, "0")}
                    &nbsp;&nbsp;
                    {item.label}
                  </span>

                  <span
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>

                </Link>
              );
            })}

          </div>

        </section>
      )}


      {/* ==================================================
        BRAND CREDIT
        아주 작고 조용한 마지막 크레딧
        ================================================== */}
        {(parent || developedBy) && (
        <section className={`border-t ${t.detailLine}`}>
            <div
            className="
                mx-auto
                max-w-6xl
                px-6
                py-7
                opacity-40
                transition-opacity
                hover:opacity-70
            "
            >
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-[11px]">

                {parent && (
                <div className="flex items-center gap-2">
                    <span className={`uppercase tracking-[0.16em] ${t.subtle}`}>
                    Parent
                    </span>

                    {parentHref ? (
                    <Link
                        href={parentHref}
                        className="font-medium hover:underline"
                    >
                        {parent} →
                    </Link>
                    ) : (
                    <span className="font-medium">
                        {parent}
                    </span>
                    )}
                </div>
                )}

                {developedBy && (
                <div className="flex items-center gap-2">
                    <span className={`uppercase tracking-[0.16em] ${t.subtle}`}>
                    Developed by
                    </span>

                    {developedByHref ? (
                    <Link
                        href={developedByHref}
                        className="font-medium hover:underline"
                    >
                        {developedBy} →
                    </Link>
                    ) : (
                    <span className="font-medium">
                        {developedBy}
                    </span>
                    )}
                </div>
                )}

            </div>
            </div>
        </section>
        )}

      {/* ==================================================
          BRAND PAPER FOOTER
      ================================================== */}
      <section className="px-6 pb-6">

        <div
          className={`
            mx-auto
            max-w-6xl
            border-t
            py-7
            text-sm
            ${t.line}
            ${t.footer}
          `}
        >

          <div className="flex flex-col justify-between gap-2 md:flex-row">

            <p>
              DustyDraft Brand Paper
            </p>

            <Link
              href="/brands"
              className="
                transition-opacity
                hover:opacity-60
              "
            >
              All Brands →
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}