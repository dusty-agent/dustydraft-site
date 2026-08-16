import BrandPaper from "../_components/BrandPaper";

export default function ExoticOrdinaryPage() {
  return (
    <BrandPaper
      eyebrow="DustyDraft / Incubated Brand"
      name="Exotic Ordinary®"
      tagline="Ordinary, made a little more exotic."
      koreanTitle="평범한 일상에 조금 다른 경험을 더합니다."
      description="주얼리, 음악, 콘텐츠와 디지털 경험을 통해 일상 속 취향과 감각을 탐구하는 독립 브랜드입니다."
      status="Active"
      developedBy="DustyDraft"
      developedByHref="/about"
      keywords={[
        "Lifestyle",
        "Jewelry",
        "Music",
        "Content",
        "Digital Experience",
      ]}
      links={[
        {
          label: "Exotic Ordinary",
          href: "https://exoticordinary.com",
          external: true,
        },
        {
          label: "The Exotic Voutique™",
          href: "/brands/the-exotic-voutique",
        },
        {
          label: "Voutiq",
          href: "/brands/voutiq",
        },
        {
          label: "The Exotic Boutique",
          href: "/brands/the-exotic-boutique",
        },
      ]}
    />
  );
}