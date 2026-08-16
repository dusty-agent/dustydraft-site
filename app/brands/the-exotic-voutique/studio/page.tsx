import BrandPaper from "../../_components/BrandPaper";

export default function ExoticVoutiqueStudioPage() {
  return (
    <BrandPaper
      eyebrow="The Exotic Voutique / Studio"
      name="Jewelry Studio"
      tagline="Configure. Save. Request."
      koreanTitle="아이디어를 구체적인 주얼리 구성으로."
      description="주얼리의 형태와 소재, 구성 요소를 선택하고 디자인을 저장한 뒤 제작 문의까지 이어갈 수 있는 디지털 스튜디오입니다."
      status="Active"
      parent="The Exotic Voutique™"
      parentHref="/brands/the-exotic-voutique"
      developedBy="DustyDraft"
      developedByHref="/about"
      keywords={[
        "Configuration",
        "Design",
        "Jewelry",
        "Order Request",
      ]}
      links={[
        {
          label: "Jewelry Studio 열기",
          href: "https://exoticordinary.com/studio",
          external: true,
        },
        {
          label: "The Exotic Voutique™",
          href: "/brands/the-exotic-voutique",
        },
      ]}
    />
  );
}