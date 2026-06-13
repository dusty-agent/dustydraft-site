"use client";
import Link from "next/link";

import { useMemo, useState } from "react";

export default function InvestmentAnalysisPage() {

  const [purchasePrice, setPurchasePrice] = useState("");
  const [deposit, setDeposit] = useState("");
  const [loan, setLoan] = useState("");
  const [grossIncome, setGrossIncome] = useState("");
  const [operatingExpenses, setOperatingExpenses] = useState("");
  const [interestExpense, setInterestExpense] = useState("");

  const result = useMemo(() => {

    const p = Number(purchasePrice);
    const d = Number(deposit);
    const l = Number(loan);

    const gi = Number(grossIncome);
    const oe = Number(operatingExpenses);
    const ie = Number(interestExpense);

    if (!p) return null;

    const noi = gi - oe;
    const capRate = (noi / p) * 100;

    const equity = p - d - l;

    const leverage =
      equity > 0
        ? p / equity
        : 0;

    const cashFlow =
      noi - ie;

    const roe =
      equity > 0
        ? (cashFlow / equity) * 100
        : 0;

    return {
      noi,
      capRate,
      equity,
      leverage,
      cashFlow,
      roe,
    };

  }, [
    purchasePrice,
    deposit,
    loan,
    grossIncome,
    operatingExpenses,
    interestExpense,
  ]);

  const format = (n: number) =>
    new Intl.NumberFormat("ko-KR").format(
      Math.round(n)
    );

  return (
    <main className="min-h-screen bg-[#ede4da] text-neutral-900">

        <section className="max-w-5xl mx-auto px-6 py-20">

            <h1 className="text-5xl font-bold">
            부동산 투자 분석 계산기
            </h1>

            <p className="mt-3 text-xl text-neutral-600">
            Investment Analysis Calculator
            </p>

            <p className="mt-6 text-xl text-neutral-700 max-w-3xl">
            수익형 부동산의 주요 투자지표를 한 번에 계산해보세요.
            </p>

            <p className="mt-4 text-sm text-neutral-500">
            AssetPicker · Real Estate Investment Tools
            </p>

        </section>

        <section className="max-w-5xl mx-auto px-6 pb-20">

            <div className="grid md:grid-cols-2 gap-8">

                {/* Inputs */}
                <div className="border border-black/10 rounded-2xl p-6 bg-white/30">

                <h2 className="text-2xl font-semibold mb-6">
                    입력값 (Inputs)
                </h2>

                <div className="space-y-4">

                    <input
                        type="number"
                        placeholder="매입가(Purchase Price)"
                        value={purchasePrice}
                        onChange={(e)=>setPurchasePrice(e.target.value)}
                        className="w-full rounded-xl border border-black/10 p-3"
                    />

                    <input
                        type="number"
                        placeholder="보증금 승계(Deposit Assumption)"
                        value={deposit}
                        onChange={(e)=>setDeposit(e.target.value)}
                        className="w-full rounded-xl border border-black/10 p-3"
                    />

                    <input
                        type="number"
                        placeholder="대출금(Loan Amount)"
                        value={loan}
                        onChange={(e)=>setLoan(e.target.value)}
                        className="w-full rounded-xl border border-black/10 p-3"
                    />

                    <input
                        type="number"
                        placeholder="연 임대수입(Annual Gross Income)"
                        value={grossIncome}
                        onChange={(e)=>setGrossIncome(e.target.value)}
                        className="w-full rounded-xl border border-black/10 p-3"
                    />

                    <input
                        type="number"
                        placeholder="운영비(Operating Expenses)"
                        value={operatingExpenses}
                        onChange={(e)=>setOperatingExpenses(e.target.value)}
                        className="w-full rounded-xl border border-black/10 p-3"
                    />

                    <input
                        type="number"
                        placeholder="연 이자비용(Annual Interest Expense)"
                        value={interestExpense}
                        onChange={(e)=>setInterestExpense(e.target.value)}
                        className="w-full rounded-xl border border-black/10 p-3"
                    />

                    </div>

                </div>

                {/* Results */}
                <div className="border border-black/10 rounded-2xl p-6 bg-white/30">

                <h2 className="text-2xl font-semibold mb-6">
                    분석 결과 (Results)
                </h2>

                {result ? (

                    <div className="space-y-4">

                    <div>
                        <div className="text-sm text-neutral-500">
                        순영업소득 (NOI)
                        </div>

                        <div className="text-2xl font-bold">
                        ₩{format(result.noi)}
                        </div>
                    </div>

                    <div>
                        <div className="text-sm text-neutral-500">
                        자본환원율 (Cap Rate)
                        </div>

                        <div className="text-2xl font-bold">
                        {result.capRate.toFixed(2)}%
                        </div>
                    </div>

                    <div>
                        <div className="text-sm text-neutral-500">
                        실투자금 (Equity)
                        </div>

                        <div className="text-2xl font-bold">
                        ₩{format(result.equity)}
                        </div>
                    </div>

                    <div>
                        <div className="text-sm text-neutral-500">
                        레버리지 (Leverage)
                        </div>

                        <div className="text-2xl font-bold">
                        {result.leverage.toFixed(2)}x
                        </div>
                    </div>

                    <div>
                        <div className="text-sm text-neutral-500">
                        현금흐름 (Cash Flow)
                        </div>

                        <div className="text-2xl font-bold">
                        ₩{format(result.cashFlow)}
                        </div>
                    </div>

                    <div>
                        <div className="text-sm text-neutral-500">
                        자기자본수익률 (ROE)
                        </div>

                        <div className="text-2xl font-bold">
                        {result.roe.toFixed(2)}%
                        </div>
                    </div>

                    </div>

                ) : (

                    <p className="text-neutral-500">
                    입력값을 입력하면 분석 결과가 표시됩니다.
                    </p>

                )}

                </div>

            </div>

        </section>
                    
        {result && (

        <section className="max-w-5xl mx-auto px-6 pb-20">

            {/* 계산 과정 */}

            <div className="border border-black/10 rounded-2xl p-6 bg-white/20">

            <h2 className="text-2xl font-semibold mb-6">
                    계산 과정 (Analysis Breakdown)
                </h2>

                <div className="grid md:grid-cols-2 gap-4">

                <div>
                <div className="font-medium">
                    순영업소득 (NOI)
                </div>

                <div className="text-neutral-600">
                    {format(Number(grossIncome))}
                    {" - "}
                    {format(Number(operatingExpenses))}
                    {" = "}
                    {format(result.noi)}
                </div>
                </div>

                <div>
                <div className="font-medium">
                    자본환원율 (Cap Rate)
                </div>

                <div className="text-neutral-600">
                    {format(result.noi)}
                    {" ÷ "}
                    {format(Number(purchasePrice))}
                    {" × 100"}
                    {" = "}
                    {result.capRate.toFixed(2)}%
                </div>
                </div>

                <div>
                <div className="font-medium">
                    실투자금 (Equity)
                </div>

                <div className="text-neutral-600">
                    {format(Number(purchasePrice))}
                    {" - "}
                    {format(Number(deposit))}
                    {" - "}
                    {format(Number(loan))}
                    {" = "}
                    {format(result.equity)}
                </div>
                </div>

                <div>
                <div className="font-medium">
                    현금흐름 (Cash Flow)
                </div>

                <div className="text-neutral-600">
                    {format(result.noi)}
                    {" - "}
                    {format(Number(interestExpense))}
                    {" = "}
                    {format(result.cashFlow)}
                </div>
                </div>

                <div>
                <div className="font-medium">
                    자기자본수익률 (ROE)
                </div>

                <div className="text-neutral-600">
                    {format(result.cashFlow)}
                    {" ÷ "}
                    {format(result.equity)}
                    {" × 100"}
                    {" = "}
                    {result.roe.toFixed(2)}%
                </div>
                </div>
                </div>

            </div>

        </section>

        )}
        <section className="max-w-5xl mx-auto px-6 pb-20">
            <div className= "mt-10">
                <h2 className="text-2xl font-semibold mb-6">
                    관련 계산기 (Related Calculators)
                </h2>

                <div className="grid md:grid-cols-2 gap-4">

                    <Link
                    href="/products/real-estate-toolkit/noi"
                    className="border border-black/10 rounded-xl p-4 bg-white/40 hover:bg-white/60 transition"
                    >
                    <div className="font-semibold">
                        순영업소득 (NOI)
                    </div>

                    <div className="text-sm text-neutral-600 mt-1">
                        NOI 계산기로 이동
                    </div>
                    </Link>

                    <Link
                    href="/products/real-estate-toolkit/cap-rate"
                    className="border border-black/10 rounded-xl p-4 bg-white/40 hover:bg-white/60 transition"
                    >
                    <div className="font-semibold">
                        자본환원율 (Cap Rate)
                    </div>

                    <div className="text-sm text-neutral-600 mt-1">
                        Cap Rate 계산기로 이동
                    </div>
                    </Link>

                    <Link
                    href="/products/real-estate-toolkit/equity"
                    className="border border-black/10 rounded-xl p-4 bg-white/40 hover:bg-white/60 transition"
                    >
                    <div className="font-semibold">
                        실투자금 (Equity)
                    </div>

                    <div className="text-sm text-neutral-600 mt-1">
                        Equity 계산기로 이동
                    </div>
                    </Link>

                    <Link
                    href="/products/real-estate-toolkit/leverage"
                    className="border border-black/10 rounded-xl p-4 bg-white/40 hover:bg-white/60 transition"
                    >
                    <div className="font-semibold">
                        레버리지 (Leverage)
                    </div>

                    <div className="text-sm text-neutral-600 mt-1">
                        Leverage 계산기로 이동
                    </div>
                    </Link>

                    <Link
                    href="/products/real-estate-toolkit/roe"
                    className="border border-black/10 rounded-xl p-4 bg-white/40 hover:bg-white/60 transition"
                    >
                    <div className="font-semibold">
                        자기자본수익률 (ROE)
                    </div>

                    <div className="text-sm text-neutral-600 mt-1">
                        ROE 계산기로 이동
                    </div>
                    </Link>

                    </div>
                </div>   

                {/* AssetPicker */}

                <div className="mt-10 border border-black/10 rounded-2xl p-6 bg-white/20">

                    <h2 className="text-2xl font-semibold">
                    AssetPicker
                    </h2>

                    <p className="mt-3 text-neutral-600">
                    부동산 투자 사례, 시장 분석 및 수익률 분석 콘텐츠를 확인해보세요.
                    </p>

                    <a
                    href="https://blog.naver.com/assetpicker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 underline"
                    >
                    AssetPicker 방문하기 →
                    </a>

                </div>    

            </section>

    </main>
  );
}