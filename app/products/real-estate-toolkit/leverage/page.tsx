"use client";

import { useMemo, useState } from "react";

export default function LeverageCalculatorPage() {
  const [purchasePrice, setPurchasePrice] = useState("");
  const [equity, setEquity] = useState("");

  const leverage = useMemo(() => {
    const p = Number(purchasePrice);
    const e = Number(equity);

    if (!p || !e) return null;

    return (p / e).toFixed(2);
  }, [purchasePrice, equity]);

  return (
    <main className="min-h-screen bg-[#ede4da] text-neutral-900">
      <section className="max-w-4xl mx-auto px-6 py-20">

        <h1 className="text-5xl font-bold">
          Leverage Calculator
        </h1>

        <p className="mt-6 text-xl text-neutral-700">
          Calculate investment leverage multiple.
        </p>

      </section>

      <section className="max-w-4xl mx-auto px-6 pb-20">

        <div className="border border-black/10 rounded-2xl p-8 bg-white/30">

          <input
            type="number"
            placeholder="Purchase Price"
            value={purchasePrice}
            onChange={(e) => setPurchasePrice(e.target.value)}
            className="w-full mb-4 rounded-xl border border-black/10 p-3"
          />

          <input
            type="number"
            placeholder="Equity"
            value={equity}
            onChange={(e) => setEquity(e.target.value)}
            className="w-full rounded-xl border border-black/10 p-3"
          />

          <div className="mt-8 pt-8 border-t border-black/10">
            <h2 className="text-2xl font-semibold">
              Leverage Multiple
            </h2>

            <p className="mt-3 text-5xl font-bold">
              {leverage ? `${leverage}x` : "-"}
            </p>
          </div>

        </div>

      </section>
    </main>
  );
}