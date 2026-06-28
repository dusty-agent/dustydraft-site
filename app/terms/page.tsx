// export default function TermsPage() {
//     return (
//       <main className="max-w-3xl mx-auto px-8 py-24">
  
//         <h1 className="text-4xl font-bold">
//           이용약관
//         </h1>
  
//         <div className="mt-12 space-y-10 leading-8 text-neutral-700">
  
//           <section>
  
//             <h2 className="text-xl font-semibold">
//               제1조 (목적)
//             </h2>
  
//             <p className="mt-3">
//               본 약관은 드래프트(draft)가 운영하는
//               dustydraft.com에서 제공하는
//               소프트웨어, 오픈소스 프로젝트,
//               npm 패키지 및 기타 서비스의
//               이용조건을 규정합니다.
//             </p>
  
//           </section>
  
//           <section>
  
//             <h2 className="text-xl font-semibold">
//               제2조 (지식재산권)
//             </h2>
  
//             <p className="mt-3">
  
//               본 사이트의 모든 프로그램,
//               디자인, 문서, 이미지, 로고,
//               코드 및 콘텐츠의 저작권은
//               드래프트(draft) 또는
//               정당한 권리자에게 있습니다.
  
//             </p>
  
//           </section>
  
//           <section>
  
//             <h2 className="text-xl font-semibold">
//               제3조 (이용 제한)
//             </h2>
  
//             <ul className="list-disc ml-6 mt-4 space-y-2">
  
//               <li>무단 복제 및 재배포 금지</li>
  
//               <li>상업적 이용 금지</li>
  
//               <li>AI 학습 데이터로 이용 금지</li>
  
//               <li>역공학 및 무단 수정 금지</li>
  
//             </ul>
  
//           </section>
  
//           <section>
  
//             <h2 className="text-xl font-semibold">
//               제4조 (면책)
//             </h2>
  
//             <p className="mt-3">
  
//               제공되는 소프트웨어는
//               "있는 그대로" 제공되며,
//               회사는 사용으로 인해 발생한
//               손해에 대해 법령이 허용하는 범위에서
//               책임을 부담하지 않습니다.
  
//             </p>
  
//           </section>
  
//           <section className="pt-10 border-t">
  
//             시행일 : 2026년 6월 1일
  
//           </section>
  
//         </div>
  
//       </main>
//     );
//   }
export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-8 py-24">

      <h1 className="text-4xl font-semibold text-[#1F1F1F]">
        이용약관
      </h1>

      <p className="mt-3 text-lg text-[#8A7A72] italic">
        Terms of Service
      </p>

      <div className="mt-16 space-y-12 leading-8 text-[#6E625B]">

        {/* 제1조 */}

        <section>

          <h2 className="text-xl font-semibold text-[#1F1F1F] mb-4">
            제1조 (목적)
          </h2>

          <p>
            본 약관은 드래프트(draft)(이하 "회사")가 운영하는
            DUSTYDRAFT® 웹사이트(이하 "서비스")에서 제공하는
            소프트웨어, 오픈소스 프로젝트, 개발 도구,
            데이터셋, 문서 및 기타 서비스의 이용과 관련하여
            회사와 이용자의 권리, 의무 및 책임사항을
            규정함을 목적으로 합니다.
          </p>

          <p className="mt-4 italic text-[#8A7A72]">
            These Terms of Service govern the rights,
            obligations and responsibilities between
            draft and users of the DUSTYDRAFT® platform.
          </p>

        </section>

        {/* 제2조 */}

        <section>

          <h2 className="text-xl font-semibold text-[#1F1F1F] mb-4">
            제2조 (용어의 정의)
          </h2>

          <p>
            본 약관에서 사용하는 주요 용어의 정의는 다음과 같습니다.
          </p>

          <ul className="list-disc ml-6 mt-5 space-y-3">

            <li>
              <strong>회사</strong> :
              드래프트(draft)를 의미합니다.
            </li>

            <li>
              <strong>DUSTYDRAFT®</strong> :
              회사가 운영하는 브랜드 및 웹사이트를 의미합니다.
            </li>

            <li>
              <strong>서비스</strong> :
              회사가 제공하는 웹사이트, 프로그램,
              API, 오픈소스 프로젝트, 문서,
              데이터셋 및 기타 온라인 서비스를 의미합니다.
            </li>

            <li>
              <strong>이용자</strong> :
              서비스를 방문하거나 이용하는 모든 개인
              또는 법인을 의미합니다.
            </li>

            <li>
              <strong>오픈소스 프로젝트</strong> :
              별도의 LICENSE가 포함되어 공개되는
              소프트웨어 프로젝트를 의미합니다.
            </li>

          </ul>

          <p className="mt-5 italic text-[#8A7A72]">
            Definitions include the Company,
            Services, Users and Open-source Projects.
          </p>

        </section>

        {/* 제3조 */}

        <section>

          <h2 className="text-xl font-semibold text-[#1F1F1F] mb-4">
            제3조 (약관의 효력 및 변경)
          </h2>

          <p>
            회사는 관련 법령을 위반하지 않는 범위에서
            본 약관을 변경할 수 있습니다.
          </p>

          <p className="mt-3">
            변경된 약관은 웹사이트에 게시한 날부터
            효력이 발생하며,
            이용자가 변경 이후에도 서비스를 계속 이용하는 경우
            변경된 약관에 동의한 것으로 간주합니다.
          </p>

          <p className="mt-4 italic text-[#8A7A72]">
            These Terms may be updated at any time
            to comply with applicable laws
            or improve the Service.
          </p>

        </section>

        {/* 제4조 */}

        <section>

          <h2 className="text-xl font-semibold text-[#1F1F1F] mb-4">
            제4조 (서비스의 제공)
          </h2>

          <p>
            회사는 다음과 같은 서비스를 제공합니다.
          </p>

          <ul className="list-disc ml-6 mt-5 space-y-3">

            <li>오픈소스 프로젝트 제공</li>

            <li>개발 도구 및 유틸리티</li>

            <li>데이터셋 제공</li>

            <li>API 및 문서</li>

            <li>연구 및 프로토타입 공개</li>

            <li>기타 회사가 정하는 서비스</li>

          </ul>

          <p className="mt-4 italic text-[#8A7A72]">
            Services may be modified,
            suspended or discontinued
            without prior notice when necessary.
          </p>

        </section>

        {/* 제5조 */}

        <section>

          <h2 className="text-xl font-semibold text-[#1F1F1F] mb-4">
            제5조 (오픈소스 프로젝트)
          </h2>

          <p>
            일부 프로젝트는 오픈소스 라이선스에 따라
            제공될 수 있습니다.
          </p>

          <p className="mt-3">
            이용자는 각 프로젝트에 포함된
            LICENSE 파일을 반드시 확인하고
            해당 라이선스를 준수하여야 합니다.
          </p>

          <p className="mt-3">
            오픈소스 라이선스는 별도로 명시되지 않는 한
            소스코드에만 적용되며,
            DUSTYDRAFT®, draft,
            로고, 디자인, 브랜드 자산에는
            적용되지 않습니다.
          </p>

          <p className="mt-4 italic text-[#8A7A72]">
            Open-source licenses apply only to the
            source code unless otherwise stated.
            They do not grant rights to use
            DUSTYDRAFT® trademarks,
            logos or brand identity.
          </p>

        </section>
                {/* 제6조 */}

                <section>

                <h2 className="text-xl font-semibold text-[#1F1F1F] mb-4">
                  제6조 (지식재산권)
                </h2>

                <p>
                  본 서비스에 포함된 소프트웨어, 프로그램, API,
                  문서, 데이터셋, 디자인, 이미지, 아이콘, 텍스트,
                  로고 및 기타 모든 콘텐츠의 저작권과
                  지식재산권은 회사 또는 정당한 권리자에게 있습니다.
                </p>

                <p className="mt-3">
                  이용자는 회사의 사전 서면 동의 없이
                  이를 복제, 수정, 배포, 판매,
                  재게시 또는 상업적으로 이용할 수 없습니다.
                </p>

                <p className="mt-4 italic text-[#8A7A72]">
                  All intellectual property rights,
                  including copyrights and proprietary rights,
                  belong to draft or their respective owners.
                </p>

                </section>

                {/* 제7조 */}

                <section>

                <h2 className="text-xl font-semibold text-[#1F1F1F] mb-4">
                  제7조 (상표권)
                </h2>

                <p>
                  DUSTYDRAFT®는
                  드래프트(draft)의 등록상표입니다.
                </p>

                <p className="mt-3">
                  이용자는 회사의 사전 서면 동의 없이
                  DUSTYDRAFT®, draft,
                  로고, 브랜드명, 서비스명,
                  아이덴티티 또는 혼동을 일으킬 수 있는
                  유사한 명칭을 사용할 수 없습니다.
                </p>

                <p className="mt-4 italic text-[#8A7A72]">
                  DUSTYDRAFT® is a registered trademark
                  of draft and may not be used without
                  prior written permission.
                </p>

                </section>

                {/* 제8조 */}

                <section>

                <h2 className="text-xl font-semibold text-[#1F1F1F] mb-4">
                  제8조 (AI 및 데이터셋 이용 제한)
                </h2>

                <p>
                  회사의 사전 허가 없이
                  본 서비스의 콘텐츠를 이용하여
                  AI 모델을 학습시키거나
                  데이터셋을 구축할 수 없습니다.
                </p>

                <ul className="list-disc ml-6 mt-5 space-y-3">

                  <li>AI 모델 학습</li>

                  <li>LLM Fine-tuning</li>

                  <li>Dataset 구축</li>

                  <li>Embedding 생성</li>

                  <li>Vector Database 구축</li>

                  <li>대규모 데이터 수집</li>

                  <li>자동 크롤링</li>

                  <li>자동 스크래핑</li>

                </ul>

                <p className="mt-4">
                  별도의 서면 허가가 있는 경우를 제외하고,
                  위와 같은 행위는 허용되지 않습니다.
                </p>

                <p className="mt-4 italic text-[#8A7A72]">
                  AI training, dataset creation,
                  scraping, crawling,
                  vector database construction
                  and similar activities are prohibited
                  without prior written permission.
                </p>

                </section>

                {/* 제9조 */}

                <section>

                <h2 className="text-xl font-semibold text-[#1F1F1F] mb-4">
                  제9조 (이용자의 의무)
                </h2>

                <p>
                  이용자는 서비스를 이용함에 있어
                  다음 각 호의 행위를 하여서는 안 됩니다.
                </p>

                <ul className="list-disc ml-6 mt-5 space-y-3">

                  <li>관계 법령을 위반하는 행위</li>

                  <li>서비스 운영을 방해하는 행위</li>

                  <li>허위 정보 등록</li>

                  <li>타인의 권리를 침해하는 행위</li>

                  <li>무단 복제 및 재배포</li>

                  <li>악성 코드 배포</li>

                  <li>자동화 프로그램을 이용한 과도한 요청</li>

                </ul>

                <p className="mt-4 italic text-[#8A7A72]">
                  Users shall not interfere with the
                  operation of the Service
                  or violate applicable laws.
                </p>

                </section>

                {/* 제10조 */}

                <section>

                <h2 className="text-xl font-semibold text-[#1F1F1F] mb-4">
                  제10조 (서비스의 변경 및 중단)
                </h2>

                <p>
                  회사는 서비스 개선,
                  유지보수, 시스템 장애,
                  보안 강화 또는 기타 운영상 필요한 경우
                  서비스의 전부 또는 일부를
                  변경하거나 중단할 수 있습니다.
                </p>

                <p className="mt-3">
                  회사는 합리적인 범위에서
                  사전에 이를 공지하도록 노력합니다.
                </p>

                <p className="mt-4 italic text-[#8A7A72]">
                  The Company may modify,
                  suspend or discontinue
                  all or part of the Service
                  when necessary.
                </p>

                </section>
                        {/* 제11조 */}

        <section>

<h2 className="text-xl font-semibold text-[#1F1F1F] mb-4">
  제11조 (면책사항)
</h2>

<p>
  회사는 천재지변, 시스템 장애, 통신망 장애,
  해킹, 불가항력 또는 회사의 합리적인 통제를
  벗어난 사유로 인해 서비스를 제공하지 못하는 경우
  책임을 지지 않습니다.
</p>

<p className="mt-3">
  회사는 오픈소스 프로젝트, 연구자료,
  데이터셋 및 기타 콘텐츠를
  "있는 그대로(AS IS)" 제공하며,
  특정 목적에 대한 적합성이나
  완전성을 보증하지 않습니다.
</p>

<p className="mt-3">
  이용자가 서비스를 이용함으로써
  발생하는 직접적 또는 간접적인 손해에 대하여
  관련 법령이 허용하는 범위 내에서
  책임을 부담하지 않습니다.
</p>

<p className="mt-4 italic text-[#8A7A72]">
  The Service, including software,
  datasets and documentation,
  is provided "AS IS" without
  warranties of any kind.
</p>

</section>

{/* 제12조 */}

<section>

<h2 className="text-xl font-semibold text-[#1F1F1F] mb-4">
  제12조 (준거법 및 관할)
</h2>

<p>
  본 약관은 대한민국 법률에 따라
  해석되고 적용됩니다.
</p>

<p className="mt-3">
  본 약관과 관련하여 발생하는
  모든 분쟁은 대한민국 법원을
  전속 관할법원으로 합니다.
</p>

<p className="mt-4 italic text-[#8A7A72]">
  These Terms shall be governed by
  the laws of the Republic of Korea.
</p>

</section>

{/* 제13조 */}

<section>

<h2 className="text-xl font-semibold text-[#1F1F1F] mb-4">
  제13조 (문의)
</h2>

<p>
  서비스 이용과 관련하여
  문의사항이 있는 경우
  아래 이메일로 연락하여 주시기 바랍니다.
</p>

<div className="mt-5 rounded-xl border border-[#DDD5D0] p-6">

  <p>
    사업자 : 드래프트(draft)
  </p>

  <p className="mt-2">
    브랜드 : DUSTYDRAFT®
  </p>

  <p className="mt-2">
    이메일 : soyoung@draft.best
  </p>

  <p className="mt-2">
    웹사이트 : https://draft.best
  </p>

</div>

<p className="mt-4 italic text-[#8A7A72]">
  For inquiries regarding these Terms,
  please contact us by email.
</p>

</section>

{/* 시행일 */}

<section className="pt-10 border-t border-[#DDD5D0]">

<h2 className="text-xl font-semibold text-[#1F1F1F] mb-4">
  부칙
</h2>

<p>
  본 이용약관은
  2026년 6월 1일부터 시행합니다.
</p>

<p className="mt-3 italic text-[#8A7A72]">
  Effective Date : June 1, 2026
</p>

<p className="mt-4">
  보다 자세한 사항은{" "}
  <a
    href="/open-source"
    className="underline hover:opacity-70"
  >
    Open Source Policy
  </a>
  를 참고하시기 바랍니다.
</p>

</section>

</div>

</main>

);
}

