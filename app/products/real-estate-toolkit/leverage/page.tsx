"use client";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function LeverageCalculatorPage() {
  const [purchasePrice, setPurchasePrice] = useState("");
  const [equity, setEquity] = useState("");

  const metrics = useMemo(() => {
    const p = Number(purchasePrice);
    const e = Number(equity);
  
    if (!p || !e || e > p) return null;
  
    const debt = p - e;
    const leverage = (p / e).toFixed(2);
    const ltv = ((debt / p) * 100).toFixed(1);
  
    return {
      debt,
      leverage,
      ltv,
    };
  }, [purchasePrice, equity]);
  return (
    <main className="min-h-screen bg-[#ede4da] text-neutral-900">
      <section className="max-w-4xl mx-auto px-6 py-20">

      <h1 className="text-5xl font-bold">
        레버리지 계산기
      </h1>

      <p className="mt-4 text-xl text-neutral-700">
        Leverage Calculator
      </p>

      <p className="mt-8 text-lg text-neutral-600">
        자기자본 대비 투자 레버리지를 계산해보세요.
      </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-20">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="border border-black/10 rounded-2xl p-8 bg-white/30">

        <div className="mb-4">
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
            {Number(equity) > Number(purchasePrice) && (
            <p className="mt-3 text-sm text-red-600">
              자기자본은 매입가를 초과할 수 없습니다.
            </p>
        )}
          </label>

          <input
            type="number"
            value={equity}
            onChange={(e) => setEquity(e.target.value)}
            className="w-full rounded-xl border border-black/10 p-3"
          />
        </div>
      </div>
      <div className="pt-2">

        <h2 className="text-2xl font-semibold">
          분석 결과 (Results)
        </h2>

  <div className="mt-6 space-y-6">

    <div>
      <p className="text-sm text-neutral-500">
        대출금 (Debt)
      </p>

      <p className="text-3xl font-bold">
        {metrics ? metrics.debt.toLocaleString() : "-"}
      </p>

    </div>

    <div>
      <p className="text-sm text-neutral-500">
        담보인정비율 (Loan-to-Value, LTV)
      </p>

      <p className="text-3xl font-bold">
        {metrics ? `${metrics.ltv}%` : "-"}
      </p>
    </div>

    <div>
      <p className="text-sm text-neutral-500">
        레버리지 배수 (Leverage Multiple)
      </p>

      <p className="text-5xl font-bold">
        {metrics ? `${metrics.leverage}x` : "-"}
      </p>
    </div>

  </div>
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