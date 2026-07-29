"use client";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function ROECalculatorPage() {
  const [noi, setNoi] = useState("");
  const [financingCost, setFinancingCost] = useState("");
  const [equity, setEquity] = useState("");

  const metrics = useMemo(() => {
    const n = Number(noi);
    const f = Number(financingCost);
    const e = Number(equity);

    if (!n || !e) return null;

    const cashFlow = n - f;
    const roe = ((cashFlow / e) * 100).toFixed(2);

    return {
      cashFlow,
      roe,
    };
  }, [noi, financingCost, equity]);

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("ko-KR").format(value);

  const getRating = (roe: number) => {
    if (roe < 5) return "보수적 (Conservative)";
    if (roe < 10) return "보통 (Average)";
    if (roe < 15) return "우수 (Good)";
    return "매우 우수 (Excellent)";
  };

  return (
    <main className="min-h-screen bg-[#ede4da] text-neutral-900">

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-8 md:py-10">

        <h1 className="text-5xl font-bold">
          자기자본수익률 계산기
        </h1>

        <p className="mt-4 text-xl text-neutral-700">
          ROE Calculator
        </p>

        <p className="mt-8 text-lg text-neutral-600">
          자기자본 기준 투자수익률(ROE)을 계산합니다.
        </p>

      </section>

      {/* Calculator */}
      <section className="max-w-4xl mx-auto px-6 pb-20">

        <div className="border border-black/10 rounded-2xl p-8 bg-white/30">

          <div className="space-y-6">

            <div>
              <label className="block mb-2">
                <span className="font-medium">
                  순영업소득
                </span>

                <span className="ml-2 text-sm text-neutral-500">
                  Net Operating Income (NOI)
                </span>
              </label>

              <input
                type="number"
                value={noi}
                onChange={(e) => setNoi(e.target.value)}
                className="w-full rounded-xl border border-black/10 p-3"
              />
            </div>

            <div>
              <label className="block mb-2">
                <span className="font-medium">
                  연간 금융비용
                </span>

                <span className="ml-2 text-sm text-neutral-500">
                  Annual Financing Cost
                </span>
              </label>

              <input
                type="number"
                value={financingCost}
                onChange={(e) => setFinancingCost(e.target.value)}
                className="w-full rounded-xl border border-black/10 p-3"
              />
            </div>

            <div>
              <label className="block mb-2">
                <span className="font-medium">
                  자기자본
                </span>

                <span className="ml-2 text-sm text-neutral-500">
                  Equity
                </span>
              </label>

              <input
                type="number"
                value={equity}
                onChange={(e) => setEquity(e.target.value)}
                className="w-full rounded-xl border border-black/10 p-3"
              />
            </div>

          </div>

        </div>

        {/* Results */}

        <div className="mt-10">

          <h2 className="text-2xl font-semibold">
            분석 결과 (Results)
          </h2>

          {!metrics ? (
            <p className="mt-4 text-neutral-500">
              값을 입력해주세요.
            </p>
          ) : (
            <div className="mt-6 space-y-8">

              <div>
                <p className="text-sm text-neutral-500">
                  연간 현금흐름 Annual Cash Flow
                </p>

                <p className="text-4xl font-bold mt-2">
                  ₩{formatCurrency(metrics.cashFlow)}
                </p>
              </div>

              <div>
                <p className="text-sm text-neutral-500">
                  자기자본수익률 Return on Equity (ROE)
                </p>

                <p className="text-5xl font-bold mt-2">
                  {metrics.roe}%
                </p>
              </div>

              <div>
                <p className="text-sm text-neutral-500">
                  ROE 평가
                </p>

                <p className="text-xl font-medium mt-2">
                  {getRating(Number(metrics.roe))}
                </p>
              </div>

            </div>
          )}

        </div>

      </section>

      {/* Guide */}

      <section className="max-w-4xl mx-auto px-6 pb-20">

        <div className="border border-black/10 rounded-2xl p-8 bg-white/20">

          <h2 className="text-2xl font-semibold">
            ROE 가이드
          </h2>

          <div className="mt-6 space-y-3 text-neutral-700">

            <p>
              5% 이하 : 보수적 (Conservative)
            </p>

            <p>
              5% ~ 10% : 보통 (Average)
            </p>

            <p>
              10% ~ 15% : 우수 (Good)
            </p>

            <p>
              15% 이상 : 매우 우수 (Excellent)
            </p>

          </div>

        </div>

      </section>

      <section className="max-w-5xl mx-auto px-6 pb-20">

  <div className="border-t border-black/10 pt-8">

    <h2 className="text-lg font-medium text-neutral-700">
      모아보기
      <span className="ml-2 text-sm text-neutral-500">
        Related Calculators
      </span>
    </h2>

    <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">

      <Link
        href="/products/real-estate-toolkit/noi"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        순영업소득 (NOI)
      </Link>

      <Link
        href="/products/real-estate-toolkit/cap-rate"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        자본환원율 (Cap Rate)
      </Link>

      <Link
        href="/products/real-estate-toolkit/equity"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        실투자금 (Equity)
      </Link>

      <Link
        href="/products/real-estate-toolkit/leverage"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        레버리지 (Leverage)
      </Link>

      <Link
        href="/products/real-estate-toolkit/roe"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        자기자본수익률 (ROE)
      </Link>

      <Link
        href="/products/real-estate-toolkit/loan-calculator"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        대출상환 (Loan)
      </Link>

    </div>

    <div className="mt-8 text-sm text-neutral-600">

      <span className="font-medium">
        AssetPicker
      </span>

      <a
        href="https://blog.naver.com/assetpicker"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-3 underline"
      >
        방문하기 →
      </a>

    </div>

  </div>

</section>
    </main>
  );
}