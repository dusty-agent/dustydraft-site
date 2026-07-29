"use client";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function NOICalculatorPage() {
  const [grossIncome, setGrossIncome] = useState("");
  const [operatingExpenses, setOperatingExpenses] = useState("");

  const noi = useMemo(() => {
    const income = Number(grossIncome);
    const expenses = Number(operatingExpenses);

    if (!income) return null;

    return income - expenses;
  }, [grossIncome, operatingExpenses]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("ko-KR").format(value);
  };

  return (
    <main className="min-h-screen bg-[#e6ece8] text-neutral-900">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-8 md:py-10">
      <h1 className="text-5xl font-bold">
        순영업소득 계산기
      </h1>

      <p className="mt-4 text-xl text-neutral-700">
        NOI Calculator
      </p>

      <p className="mt-8 text-lg text-neutral-600">
        연 임대수입과 운영비를 기준으로 순영업소득을 계산합니다.
      </p>
      </section>

      {/* Calculator */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="border border-black/10 rounded-2xl bg-white/30 p-8">
          <div className="space-y-6">
            <div>
            <label className="block mb-2">
              <span className="font-medium">
                연 임대수입
              </span>

              <span className="ml-2 text-sm text-neutral-500">
                Annual Gross Income
              </span>
            </label>

              <input
                type="number"
                value={grossIncome}
                onChange={(e) => setGrossIncome(e.target.value)}
                placeholder="36000000"
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3"
              />
            </div>

            <div>
            <label className="block mb-2">
              <span className="font-medium">
                운영비
              </span>

              <span className="ml-2 text-sm text-neutral-500">
                Operating Expenses
              </span>
            </label>

              <input
                type="number"
                value={operatingExpenses}
                onChange={(e) => setOperatingExpenses(e.target.value)}
                placeholder="6000000"
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3"
              />
            </div>
          </div>

          <div className="mt-10 border-t border-black/10 pt-8">
          <h2 className="text-2xl font-semibold">
            분석 결과 (Results)
          </h2>

            {noi !== null ? (
              <div className="mt-4">
                <p className="text-sm text-neutral-500">
                  순영업소득 NOI
                </p>

                <p className="text-5xl font-bold mt-2">
                  ₩{formatCurrency(noi)}
                </p>
              </div>
            ) : (
              <p className="mt-4 text-neutral-500">
                Enter annual income and expenses to calculate NOI.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Formula */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="border border-black/10 rounded-2xl bg-white/30 p-8">
          <h2 className="text-2xl font-semibold">
            Formula
          </h2>

          <p className="mt-4 text-lg">
            NOI = Gross Income − Operating Expenses
          </p>

          <div className="mt-8">
            <p className="font-medium">
              Example
            </p>

            <ul className="mt-3 space-y-2 text-neutral-700">
              <li>Annual Rental Income: ₩36,000,000</li>
              <li>Operating Expenses: ₩6,000,000</li>
              <li>NOI: ₩30,000,000</li>
            </ul>
          </div>
        </div>
      </section>

      {/* About NOI */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="border border-black/10 rounded-2xl bg-white/30 p-8">
          <h2 className="text-2xl font-semibold">
            What is NOI?
          </h2>

          <p className="mt-4 text-neutral-700 leading-relaxed">
            Net Operating Income (NOI) represents the income generated
            by a property after deducting operating expenses, but before
            debt service, taxes and depreciation.
          </p>

          <p className="mt-4 text-neutral-700 leading-relaxed">
            NOI is one of the most important metrics used by investors
            to evaluate the performance of income-producing real estate.
          </p>
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
        href="/workspace/real-estate-toolkit/noi"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        순영업소득 (NOI)
      </Link>

      <Link
        href="/workspace/real-estate-toolkit/cap-rate"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        자본환원율 (Cap Rate)
      </Link>

      <Link
        href="/workspace/real-estate-toolkit/equity"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        실투자금 (Equity)
      </Link>

      <Link
        href="/workspace/real-estate-toolkit/leverage"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        레버리지 (Leverage)
      </Link>

      <Link
        href="/workspace/real-estate-toolkit/roe"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        자기자본수익률 (ROE)
      </Link>

      <Link
        href="/workspace/real-estate-toolkit/loan-calculator"
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