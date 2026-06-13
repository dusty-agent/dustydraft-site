"use client";

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
    <main className="min-h-screen bg-[#ede4da] text-neutral-900">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold">
          NOI Calculator
        </h1>

        <p className="mt-6 text-xl text-neutral-700">
          Calculate Net Operating Income (NOI) from annual rental income
          and operating expenses.
        </p>
      </section>

      {/* Calculator */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="border border-black/10 rounded-2xl bg-white/30 p-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm mb-2">
                Annual Gross Income (₩)
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
              <label className="block text-sm mb-2">
                Operating Expenses (₩)
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
              Result
            </h2>

            {noi !== null ? (
              <div className="mt-4">
                <p className="text-sm text-neutral-600">
                  Net Operating Income (NOI)
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
    </main>
  );
}