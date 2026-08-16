import BrandPaper from "../_components/BrandPaper";

export default function ExoticBoutiquePage() {

  return (
    <BrandPaper
      eyebrow="Exotic Ordinary / Physical Boutique"
      name="The Exotic Boutique"
      tagline="A Small Physical Boutique"
      koreanTitle="작은 현실의 가게에서 시작된 경험."
      description="The Exotic Boutique는 실제 공간에서 제품과 취향, 큐레이션을 경험하는 작은 오프라인 부티크입니다. 이 현실의 경험은 이후 The Exotic Voutique™라는 디지털 공간으로 확장되었습니다."
      status="Trademark Pending"
      parent="Exotic Ordinary®"
      parentHref="/brands/exotic-ordinary"
      developedBy="DustyDraft"
      developedByHref="/about"
      keywords={[
        "Physical Boutique",
        "Retail",
        "Curation",
        "Lifestyle",
      ]}
      links={[
        {
            label: "네이버 지도에서 매장 보기",
            href: "https://naver.me/GctERDE8",
            external: true,
        },      
        {
          label: "Exotic Ordinary®",
          href: "/brands/exotic-ordinary",
        },
        {
          label: "The Exotic Voutique™",
          href: "/brands/the-exotic-voutique",
        },
      ]}
    />
  );
}