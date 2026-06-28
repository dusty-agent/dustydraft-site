export default function AIPage() {
  return (
    <main className="max-w-4xl mx-auto px-8 py-24">

      <h1 className="text-4xl font-semibold text-[#1F1F1F]">
        AI 정책
      </h1>

      <p className="mt-3 text-lg text-[#8A7A72] italic">
        AI Policy
      </p>

      <div className="mt-16 space-y-12 leading-8 text-[#6E625B]">

        <section>

          <h2 className="text-xl font-semibold text-[#1F1F1F] mb-4">
            1. 목적
          </h2>

          <p>
            본 정책은 드래프트(draft)가 운영하는
            DUSTYDRAFT®의 콘텐츠, 소프트웨어,
            데이터셋 및 연구자료의 AI 관련 이용 기준을
            규정하기 위한 것입니다.
          </p>

          <p className="mt-4 italic text-[#8A7A72]">
            This policy explains how AI systems may
            interact with DUSTYDRAFT® content.
          </p>

        </section>

        <section>

          <h2 className="text-xl font-semibold text-[#1F1F1F] mb-4">
            2. 허용되는 이용
          </h2>

          <p>
            이용자는 본 서비스를 일반적인 웹사이트 이용,
            문서 열람, 오픈소스 프로젝트 이용 및
            각 프로젝트의 LICENSE 범위 내에서 사용할 수 있습니다.
          </p>

        </section>

        <section>

          <h2 className="text-xl font-semibold text-[#1F1F1F] mb-4">
            3. 제한되는 이용
          </h2>

          <p>
            회사의 사전 서면 승인 없이 다음 행위를 하여서는 안 됩니다.
          </p>

          <ul className="list-disc ml-6 mt-5 space-y-3">

            <li>AI 모델 학습(Training)</li>

            <li>대규모 언어모델(LLM)의 학습 또는 Fine-tuning</li>

            <li>데이터셋 구축</li>

            <li>Embedding 생성</li>

            <li>Vector Database 구축</li>

            <li>자동 크롤링(Crawling)</li>

            <li>자동 스크래핑(Scraping)</li>

            <li>대량 데이터 수집</li>

            <li>자동화된 봇을 통한 접근</li>

          </ul>

          <p className="mt-4 italic text-[#8A7A72]">
            AI training, fine-tuning,
            dataset creation, embeddings,
            crawling and scraping are prohibited
            without prior written permission.
          </p>

        </section>

        <section>

          <h2 className="text-xl font-semibold text-[#1F1F1F] mb-4">
            4. 오픈소스 프로젝트
          </h2>

          <p>
            일부 프로젝트는 오픈소스로 제공됩니다.
            오픈소스 라이선스는 각 저장소의
            LICENSE 파일을 따릅니다.
          </p>

          <p className="mt-3">
            단, 오픈소스 라이선스는
            DUSTYDRAFT®의 상표, 로고,
            디자인 및 브랜드 자산에는 적용되지 않습니다.
          </p>

        </section>

        <section>

          <h2 className="text-xl font-semibold text-[#1F1F1F] mb-4">
            5. 예외 승인
          </h2>

          <p>
            연구기관, 교육기관 또는 기업은
            별도의 서면 승인을 받은 경우
            일부 이용이 허용될 수 있습니다.
          </p>

          <p className="mt-4 italic text-[#8A7A72]">
            Certain uses may be permitted
            with prior written approval.
          </p>

        </section>

        <section>

          <h2 className="text-xl font-semibold text-[#1F1F1F] mb-4">
            6. 문의
          </h2>

          <div className="mt-6 rounded-xl border border-[#DDD5D0] p-6">

            <p>
              사업자 : 드래프트(draft)
            </p>

            <p className="mt-2">
              브랜드 : DUSTYDRAFT®
            </p>

            <p className="mt-2">
              이메일 : theplaceyoung@gmail.com
            </p>

            <p className="mt-2">
              Website : https://dustydraft.com
            </p>

          </div>

        </section>

        <section className="pt-10 border-t border-[#DDD5D0]">

          <h2 className="text-xl font-semibold text-[#1F1F1F] mb-4">
            부칙
          </h2>

          <p>
            본 정책은 2026년 6월 1일부터 시행합니다.
          </p>

          <p className="mt-3 italic text-[#8A7A72]">
            Effective Date : June 1, 2026
          </p>

        </section>

      </div>

    </main>
  );
}