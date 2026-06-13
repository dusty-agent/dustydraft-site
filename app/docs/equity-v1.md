"use client";

import { useMemo, useState } from "react";

export default function EquityCalculatorPage() {
  const [purchasePrice, setPurchasePrice] = useState("");
  const [deposit, setDeposit] = useState("");
  const [loan, setLoan] = useState("");

  const equity = useMemo(() => {
    const p = Number(purchasePrice);
    const d = Number(deposit);
    const l = Number(loan);

    if (!p) return null;

    return p - d - l;
  }, [purchasePrice, deposit, loan]);

  const formatNumber = (value: number) =>
    new Intl.NumberFormat("ko-KR").format(value);

  return (
    <main className="min-h-screen bg-[#ede4da] text-neutral-900">
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold">Equity Calculator</h1>

        <p className="mt-6 text-xl text-neutral-700">
          Calculate required equity for a real estate acquisition.
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
            placeholder="Deposit Assumption"
            value={deposit}
            onChange={(e) => setDeposit(e.target.value)}
            className="w-full mb-4 rounded-xl border border-black/10 p-3"
          />

          <input
            type="number"
            placeholder="Loan Amount"
            value={loan}
            onChange={(e) => setLoan(e.target.value)}
            className="w-full rounded-xl border border-black/10 p-3"
          />

          <div className="mt-8 pt-8 border-t border-black/10">
            <h2 className="text-2xl font-semibold">Equity</h2>

            <p className="mt-3 text-5xl font-bold">
              {equity !== null
                ? `₩${formatNumber(equity)}`
                : "-"}
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}