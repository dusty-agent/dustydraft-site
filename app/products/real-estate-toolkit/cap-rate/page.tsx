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
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold">
          Cap Rate Calculator
        </h1>

        <p className="mt-6 text-xl text-neutral-700">
          Calculate capitalization rate using Net Operating Income (NOI)
          and purchase price.
        </p>
      </section>

      {/* Calculator */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="border border-black/10 rounded-2xl bg-white/30 p-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm mb-2">
                Annual NOI (₩)
              </label>

              <input
                type="number"
                value={noi}
                onChange={(e) => setNoi(e.target.value)}
                placeholder="30000000"
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">
                Purchase Price (₩)
              </label>

              <input
                type="number"
                value={purchasePrice}
                onChange={(e) => setPurchasePrice(e.target.value)}
                placeholder="500000000"
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3"
              />
            </div>
          </div>

          <div className="mt-10 border-t border-black/10 pt-8">
            <h2 className="text-2xl font-semibold">
              Result
            </h2>

            {capRate ? (
              <div className="mt-4">
                <p className="text-sm text-neutral-600">
                  Capitalization Rate
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
        </div>
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
    </main>
  );
}