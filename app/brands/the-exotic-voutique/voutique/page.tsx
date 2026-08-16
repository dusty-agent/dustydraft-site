import BrandPaper from "../../_components/BrandPaper";

export default function VoutiqueExperiencePage() {
  return (
    <BrandPaper
      eyebrow="The Exotic Voutique / Concept"
      name="Voutique"
      tagline="A digital bespoke jewelry concept."
      koreanTitle="맞춤 주얼리 경험의 컨셉을 소개합니다."
      description="The Exotic Voutique™가 추구하는 맞춤, 큐레이션과 디지털 주얼리 경험의 방향을 소개하는 페이지입니다."
      status="Active"
      parent="The Exotic Voutique™"
      parentHref="/brands/the-exotic-voutique"
      developedBy="DustyDraft"
      developedByHref="/about"
      keywords={[
        "Concept",
        "Jewelry",
        "Curation",
        "Experience",
      ]}
      links={[
        {
          label: "Voutique 열기",
          href: "https://exoticordinary.com/voutique",
          external: true,
        },
        {
          label: "Studio",
          href: "/brands/the-exotic-voutique/studio",
        },
      ]}
    />
  );
}