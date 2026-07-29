"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

export default function CapRateCalculatorPage() {
  const [noi, setNoi] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");

  const capRate = useMemo(() => {
    const n = Number(noi);
    const p = Number(purchasePrice);

    if (!n || !p) return null;

    return ((n / p) * 100).toFixed(2);
  }, [noi, purchasePrice]);

  return (
    <main className="min-h-screen bg-[#ede4da] text-neutral-900">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-8 md:py-10">
      <h1 className="text-5xl font-bold">
          자본환원율 계산기
        </h1>

        <p className="mt-4 text-xl text-neutral-700">
          Cap Rate Calculator
        </p>

        <p className="mt-8 text-lg text-neutral-600">
          순영업소득과 매입가를 기반으로 자본환원율을 계산합니다.
        </p>
      </section>

      {/* Calculator */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="border border-black/10 rounded-2xl bg-white/30 p-8">
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
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2">
              <span className="font-medium">
                매입가
              </span>

              <span className="ml-2 text-sm text-neutral-500">
                Purchase Price
              </span>
            </label>

            <input
              type="number"
              value={purchasePrice}
              onChange={(e) => setPurchasePrice(e.target.value)}
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-3"
            />
          </div>

          <div className="mt-10 border-t border-black/10 pt-8">
          <h2 className="text-2xl font-semibold">
            분석 결과 (Results)
          </h2>

            {capRate ? (
              <div className="mt-4">
                <p className="text-sm text-neutral-500">
                  자본환원율 Cap Rate
                </p>

                <p className="text-5xl font-bold mt-2">
                  {capRate}%
                </p>
              </div>
            ) : (
              <p className="mt-4 text-neutral-500">
                Enter NOI and purchase price to calculate.
              </p>
            )}
          </div>
        </div> </div>
      </section>

      {/* Formula */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="border border-black/10 rounded-2xl bg-white/30 p-8">
          <h2 className="text-2xl font-semibold">
            Formula
          </h2>

          <p className="mt-4 text-lg">
            Cap Rate = NOI ÷ Purchase Price × 100
          </p>

          <p className="mt-6 text-neutral-700">
            Example:
          </p>

          <ul className="mt-3 space-y-2 text-neutral-700">
            <li>Annual NOI: ₩30,000,000</li>
            <li>Purchase Price: ₩500,000,000</li>
            <li>Cap Rate: 6.00%</li>
          </ul>
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