import BrandPaper from "../_components/BrandPaper";

export default function ExoticVoutiquePage() {
  return (
    <BrandPaper
      eyebrow="Exotic Ordinary / Virtual Boutique"
      name="The Exotic Voutique™"
      tagline="A Virtual Boutique for Bespoke Jewelry Experiences"
      koreanTitle="현실의 부티크를 디지털 공간으로 확장합니다."
      description="The Exotic Voutique™는 맞춤 주얼리를 탐색하고 구성하며, 디자인과 제작 경험까지 이어갈 수 있도록 설계된 가상의 디지털 부티크입니다."
      status="Trademark / Patent Pending"
      parent="Exotic Ordinary®"
      parentHref="/brands/exotic-ordinary"
      developedBy="DustyDraft"
      developedByHref="/about"
      keywords={[
        "Virtual Boutique",
        "Bespoke Jewelry",
        "Curation",
        "Digital Experience",
        "Customization",
      ]}
      links={[
        {
          label: "The Exotic Voutique™ 열기",
          href: "https://exoticordinary.com/voutique",
          external: true,
        },
        {
          label: "Jewelry Studio",
          href: "https://exoticordinary.com/studio",
          external: true,
        },
        {
          label: "Concept Film",
          href: "https://www.youtube.com/watch?v=tKdXWK6GbQA",
          external: true,
        },
        {
          label: "Voutiq B2B Solution",
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