import BrandPaper from "../_components/BrandPaper";

export default function VoutiqPage() {
  return (
    <BrandPaper
      eyebrow="DustyDraft / B2B Solution"
      name="Voutiq"
      tagline="Virtual Boutique Technology for Brands"
      koreanTitle="가상 부티크 경험을 브랜드를 위한 솔루션으로."
      description="Voutiq는 The Exotic Voutique™에서 실험한 디지털 큐레이션과 맞춤 경험 구조를 다른 브랜드와 비즈니스 환경에도 적용할 수 있도록 발전시키는 B2B 솔루션입니다."
      status="Trademark Pending"
      developedBy="DustyDraft"
      developedByHref="/about"
      keywords={[
        "B2B",
        "Virtual Boutique",
        "Personalization",
        "Recommendation",
        "Digital Experience",
        "Brand Technology",
      ]}
      links={[
        {
          label: "The Exotic Voutique™",
          href: "/brands/the-exotic-voutique",
        },
        {
          label: "Exotic Ordinary®",
          href: "/brands/exotic-ordinary",
        },
      ]}
    />
  );
}