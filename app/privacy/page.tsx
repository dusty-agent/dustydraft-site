// export default function PrivacyPage() {
//     return (
//       <main className="max-w-3xl mx-auto px-8 py-24">

import Link from "next/link";

  
//         <h1 className="text-4xl font-bold">
//           개인정보처리방침
//         </h1>
  
//         <div className="mt-12 space-y-10 leading-8 text-neutral-700">
  
//           <section>
  
//             <h2 className="text-xl font-semibold">
//               개인정보 수집
//             </h2>
  
//             <p className="mt-3">
  
//               드래프트(draft)는
//               문의 대응 및 서비스 운영을 위해
//               이메일 주소 및 문의 내용을
//               수집할 수 있습니다.
  
//             </p>
  
//           </section>
  
//           <section>
  
//             <h2 className="text-xl font-semibold">
//               개인정보 이용 목적
//             </h2>
  
//             <ul className="list-disc ml-6 mt-4 space-y-2">
  
//               <li>문의 응답</li>
  
//               <li>서비스 제공</li>
  
//               <li>보안 및 장애 대응</li>
  
//             </ul>
  
//           </section>
  
//           <section>
  
//             <h2 className="text-xl font-semibold">
//               개인정보 보관
//             </h2>
  
//             <p className="mt-3">
  
//               개인정보는
//               관련 법령이 정한 기간 동안만
//               보관 후 안전하게 파기합니다.
  
//             </p>
  
//           </section>
  
//           <section>
  
//             <h2 className="text-xl font-semibold">
//               개인정보 보호책임자
//             </h2>
  
//             <p className="mt-3">
  
//               드래프트(draft)
  
//             </p>
  
//           </section>
  
//           <section className="pt-10 border-t">
  
//             시행일 : 2026년 6월 1일
  
//           </section>
  
//         </div>
  
//       </main>
//     );
//   }

        export default function PrivacyPage() {
  return (
    <main className="max-w-4xl mx-auto px-8 py-24">

      <h1 className="text-4xl font-semibold text-[#1F1F1F]">
        개인정보처리방침
      </h1>

      <p className="mt-3 text-lg text-[#8A7A72] italic">
        Privacy Policy
      </p>

      <div className="mt-16 space-y-12 leading-8 text-[#6E625B]">

        {/* 제1조 */}

        <section>

          <h2 className="text-xl font-semibold text-[#1F1F1F] mb-4">
            제1조 (목적)
          </h2>

          <p>
            드래프트(draft)(이하 &quot;회사&quot;)는
            DUSTYDRAFT® 서비스 이용자의
            개인정보를 중요하게 생각하며,
            「개인정보 보호법」 등
            관계 법령을 준수합니다.
          </p>

          <p className="mt-3">
            본 개인정보처리방침은
            회사가 어떠한 개인정보를
            수집하고, 어떻게 이용하며,
            어떻게 보호하는지를
            설명하기 위한 것입니다.
          </p>

          <p className="mt-4 italic text-[#8A7A72]">
            This Privacy Policy explains
            how draft collects,
            uses and protects
            personal information.
          </p>

        </section>

        {/* 제2조 */}

        <section>

          <h2 className="text-xl font-semibold text-[#1F1F1F] mb-4">
            제2조 (수집하는 개인정보)
          </h2>

          <p>
            회사는 서비스 제공을 위해
            필요한 최소한의 개인정보만을
            수집합니다.
          </p>

          <ul className="list-disc ml-6 mt-5 space-y-3">

            <li>이름</li>

            <li>이메일 주소</li>

            <li>문의 내용</li>

            <li>GitHub 계정(필요한 경우)</li>

            <li>서비스 이용 기록</li>

            <li>접속 로그</li>

            <li>IP 주소</li>

            <li>브라우저 정보</li>

            <li>운영체제 정보</li>

          </ul>

          <p className="mt-4 italic text-[#8A7A72]">

            We collect only the minimum
            information necessary
            to provide our services.

          </p>

        </section>

        {/* 제3조 */}

        <section>

          <h2 className="text-xl font-semibold text-[#1F1F1F] mb-4">
            제3조 (개인정보의 이용 목적)
          </h2>

          <p>
            회사는 다음 목적에 한하여
            개인정보를 이용합니다.
          </p>

          <ul className="list-disc ml-6 mt-5 space-y-3">

            <li>서비스 제공</li>

            <li>기술지원</li>

            <li>문의 응답</li>

            <li>오류 분석</li>

            <li>보안 관리</li>

            <li>서비스 개선</li>

            <li>법령상 의무 이행</li>

          </ul>

          <p className="mt-4 italic text-[#8A7A72]">

            Personal information
            is used solely for
            service operation,
            support and security.

          </p>

        </section>

        {/* 제4조 */}

        <section>

          <h2 className="text-xl font-semibold text-[#1F1F1F] mb-4">
            제4조 (보유 및 이용기간)
          </h2>

          <p>

            회사는 개인정보의
            수집 목적이 달성되면
            지체 없이 파기합니다.

          </p>

          <p className="mt-3">

            다만 관계 법령에서
            일정 기간 보관하도록
            규정한 경우에는
            해당 기간 동안 보관합니다.

          </p>

          <ul className="list-disc ml-6 mt-5 space-y-3">

            <li>계약 및 거래기록 : 5년</li>

            <li>소비자 불만 : 3년</li>

            <li>접속 로그 : 최대 3개월</li>

          </ul>

          <p className="mt-4 italic text-[#8A7A72]">

            Information is retained
            only as long as necessary
            or required by law.

          </p>

        </section>

        {/* 제5조 */}

        <section>

          <h2 className="text-xl font-semibold text-[#1F1F1F] mb-4">
            제5조 (개인정보의 제3자 제공)
          </h2>

          <p>

            회사는 이용자의 동의 없이
            개인정보를 외부에 제공하지 않습니다.

          </p>

          <p className="mt-3">

            다만 관계 법령에 따른 경우,
            수사기관의 요청이 있는 경우,
            또는 이용자의 동의가 있는 경우에는
            예외로 합니다.

          </p>

          <p className="mt-4 italic text-[#8A7A72]">

            Personal information
            is not shared with third parties
            unless required by law
            or with user consent.

          </p>

        </section>
                {/* 제11조 */}

                <section>

                <h2 className="text-xl font-semibold text-[#1F1F1F] mb-4">
                  제11조 (개인정보 보호책임자)
                </h2>

                <p>
                  회사는 개인정보 처리에 관한 업무를
                  총괄하여 책임지고 있으며,
                  이용자의 개인정보 관련 문의를
                  신속하게 처리하기 위하여
                  아래와 같이 개인정보 보호책임자를 지정합니다.
                </p>

                <div className="mt-6 rounded-xl border border-[#DDD5D0] p-6">

                  <p>
                    사업자 : 드래프트(draft)
                  </p>

                  <p className="mt-2">
                    브랜드 : DUSTYDRAFT®
                  </p>

                  <p className="mt-2">
                    개인정보 보호책임자 : 장소영
                  </p>

                  <p className="mt-2">
                    이메일 : theplaceyoung@gmail.com
                  </p>

                  <p className="mt-2">
                    웹사이트 : https://dustydraft.com
                  </p>

                </div>

                <p className="mt-4 italic text-[#8A7A72]">
                  For privacy-related inquiries,
                  please contact the Privacy Officer.
                </p>

                </section>

                {/* 제12조 */}

                <section>

                <h2 className="text-xl font-semibold text-[#1F1F1F] mb-4">
                  제12조 (개인정보처리방침의 변경)
                </h2>

                <p>
                  회사는 관련 법령, 서비스 정책 또는
                  기술적 변경사항에 따라
                  본 개인정보처리방침을
                  수정할 수 있습니다.
                </p>

                <p className="mt-3">
                  변경되는 경우에는
                  웹사이트를 통하여
                  사전에 공지하거나,
                  필요한 경우 이용자에게
                  개별적으로 안내합니다.
                </p>

                <p className="mt-4 italic text-[#8A7A72]">
                  This Privacy Policy may be updated
                  to reflect legal,
                  operational or technical changes.
                </p>

                </section>

                {/* 제13조 */}

                <section>

                <h2 className="text-xl font-semibold text-[#1F1F1F] mb-4">
                  제13조 (국제 서비스 및 외부 플랫폼)
                </h2>

                <p>
                  DUSTYDRAFT®는 글로벌 오픈소스 생태계와
                  개발자 서비스를 활용할 수 있으며,
                  이에 따라 일부 서비스는 해외 플랫폼을
                  통해 제공될 수 있습니다.
                </p>

                <p className="mt-3">
                  GitHub, npm Registry, Vercel,
                  Cloudflare 등 외부 플랫폼 이용 시에는
                  해당 서비스 제공자의 정책이 함께 적용될 수 있습니다.
                </p>

                <p className="mt-4 italic text-[#8A7A72]">
                  Certain services may be provided
                  through international platforms
                  such as GitHub, npm Registry,
                  Vercel and Cloudflare.
                </p>

                </section>

                {/* 시행일 */}

                <section className="pt-10 border-t border-[#DDD5D0]">

                <h2 className="text-xl font-semibold text-[#1F1F1F] mb-4">
                  부칙
                </h2>

                <p>
                  본 개인정보처리방침은
                  2026년 6월 1일부터 시행합니다.
                </p>

                <p className="mt-3 italic text-[#8A7A72]">
                  Effective Date : June 1, 2026
                </p>
                <Link
  href="/open-source"
  className="text-neutral-300 hover:text-white transition"
>
  오픈소스 정책
  <span className="ml-2 text-neutral-500">
    Open Source Policy
  </span>
</Link>
                </section>

</div>

</main>

);
}
