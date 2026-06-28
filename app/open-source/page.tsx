export default function OpenSourcePage() {
  return (
    <main className="max-w-4xl mx-auto px-8 py-24">

      <h1 className="text-4xl font-semibold text-[#1F1F1F]">
        오픈소스 정책
      </h1>

      <p className="mt-3 text-lg text-[#8A7A72] italic">
        Open Source Policy
      </p>

      <div className="mt-16 space-y-12 leading-8 text-[#6E625B]">

        {/* 목적 */}

        <section>

          <h2 className="text-xl font-semibold text-[#1F1F1F] mb-4">
            1. 목적
          </h2>

          <p>
            본 정책은 드래프트(draft)가 운영하는
            DUSTYDRAFT®에서 공개하는 오픈소스 프로젝트의
            이용 기준과 라이선스 정책을 설명하기 위한 것입니다.
          </p>

          <p className="mt-4 italic text-[#8A7A72]">
            This policy explains the licensing and usage
            requirements for open-source projects published
            by DUSTYDRAFT®.
          </p>

        </section>

        {/* LICENSE */}

        <section>

          <h2 className="text-xl font-semibold text-[#1F1F1F] mb-4">
            2. 라이선스
          </h2>

          <p>
            각 프로젝트에는 별도의 LICENSE 파일이 포함될 수 있으며,
            이용자는 반드시 해당 라이선스의 조건을 준수하여야 합니다.
          </p>

          <p className="mt-3">
            라이선스 종류(MIT, Apache 2.0, GPL 등)는
            프로젝트마다 다를 수 있습니다.
          </p>

          <p className="mt-4 italic text-[#8A7A72]">
            Each repository includes its own license.
            Users must comply with the LICENSE
            distributed with that repository.
          </p>

        </section>

        {/* 코드 */}

        <section>

          <h2 className="text-xl font-semibold text-[#1F1F1F] mb-4">
            3. 소스코드 이용
          </h2>

          <p>
            오픈소스 라이선스가 적용되는 경우,
            이용자는 라이선스 범위 내에서
            소스코드를 사용할 수 있습니다.
          </p>

          <p className="mt-3">
            코드의 수정, 배포 및 이용은
            해당 프로젝트의 LICENSE를 우선합니다.
          </p>

          <p className="mt-4 italic text-[#8A7A72]">
            Source code may be used,
            modified and redistributed
            only in accordance with
            its applicable license.
          </p>

        </section>

        {/* 브랜드 */}

        <section>

          <h2 className="text-xl font-semibold text-[#1F1F1F] mb-4">
            4. 브랜드 및 상표
          </h2>

          <p>
            오픈소스 라이선스는
            소스코드에만 적용됩니다.
          </p>

          <p className="mt-3">
            DUSTYDRAFT®,
            draft,
            로고,
            브랜드명,
            서비스명,
            디자인 및 브랜드 아이덴티티는
            라이선스 대상이 아닙니다.
          </p>

          <p className="mt-3">
            회사의 사전 서면 동의 없이
            상표 또는 브랜드를 사용할 수 없습니다.
          </p>

          <p className="mt-4 italic text-[#8A7A72]">
            Open-source licenses do not grant
            permission to use the DUSTYDRAFT®
            trademark, logo or brand identity.
          </p>

        </section>

        {/* 금지 */}

        <section>

          <h2 className="text-xl font-semibold text-[#1F1F1F] mb-4">
            5. 금지되는 행위
          </h2>

          <ul className="list-disc ml-6 space-y-3">

            <li>LICENSE를 위반하는 행위</li>

            <li>저작권 표시 삭제</li>

            <li>상표의 무단 사용</li>

            <li>회사 명의의 오인 또는 사칭</li>

            <li>허위 출처 표시</li>

          </ul>

          <p className="mt-4 italic text-[#8A7A72]">
            Removing copyright notices,
            misrepresenting ownership,
            or unauthorized trademark use
            is prohibited.
          </p>

        </section>

        {/* 문의 */}

        <section>

          <h2 className="text-xl font-semibold text-[#1F1F1F] mb-4">
            6. 문의
          </h2>

          <p>

            라이선스,
            상표,
            브랜드 사용과 관련된 문의는
            아래 이메일로 연락하시기 바랍니다.

          </p>

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
            본 정책은
            2026년 6월 1일부터 시행합니다.
          </p>

          <p className="mt-3 italic text-[#8A7A72]">
            Effective Date : June 1, 2026
          </p>

        </section>

      </div>

    </main>
  );
}