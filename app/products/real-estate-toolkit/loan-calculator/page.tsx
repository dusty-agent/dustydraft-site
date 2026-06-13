"use client";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function LoanCalculatorPage() {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [gracePeriod, setGracePeriod] = useState("0");

  const [repaymentMethod, setRepaymentMethod] = useState(
    "equal-payment"
  );

  const results = useMemo(() => {
    const principal = Number(loanAmount);
    const annualRate = Number(interestRate);
    const termYears = Number(loanTerm);
    const graceYears = Number(gracePeriod);

    if (
      !principal ||
      !annualRate ||
      !termYears
    ) {
      return null;
    }

    const monthlyRate = annualRate / 100 / 12;

    const totalMonths = termYears * 12;
    const graceMonths = graceYears * 12;

    const repaymentMonths =
      totalMonths - graceMonths;

    if (repaymentMonths <= 0) {
      return null;
    }

    const graceInterest =
      principal * monthlyRate;

    if (repaymentMethod === "equal-payment") {
      const payment =
        principal *
        (
          monthlyRate *
          Math.pow(
            1 + monthlyRate,
            repaymentMonths
          )
        ) /
        (
          Math.pow(
            1 + monthlyRate,
            repaymentMonths
          ) - 1
        );

      return {
        graceInterest,
        monthlyPayment: payment,
        annualDebtService: payment * 12,
      };
    }

    if (repaymentMethod === "equal-principal") {
      const principalPayment =
        principal / repaymentMonths;

      const firstPayment =
        principalPayment +
        principal * monthlyRate;

      const lastPayment =
        principalPayment +
        principalPayment * monthlyRate;

      return {
        graceInterest,
        firstPayment,
        lastPayment,
        annualDebtService:
          firstPayment * 12,
      };
    }

    return {
      graceInterest,
      monthlyInterest: graceInterest,
      balloonPayment: principal,
      annualDebtService:
        graceInterest * 12,
    };
  }, [
    loanAmount,
    interestRate,
    loanTerm,
    gracePeriod,
    repaymentMethod,
  ]);

  const formatNumber = (value: number) =>
    new Intl.NumberFormat("ko-KR").format(
      Math.round(value)
    );

  return (
    <main className="min-h-screen bg-[#ede4da] text-neutral-900">

      <section className="max-w-4xl mx-auto px-6 py-20">

        <h1 className="text-5xl font-bold">
          대출 상환 계산기
        </h1>

        <p className="mt-4 text-xl text-neutral-700">
          Loan Repayment Calculator
        </p>

        <p className="mt-8 text-lg text-neutral-600">
          대출 조건에 따른 월 상환액을 계산합니다.
        </p>

      </section>

      <section className="max-w-4xl mx-auto px-6 pb-20">

        <div className="border border-black/10 rounded-2xl p-8 bg-white/30">

          <div className="space-y-5">

            <div>
              <label className="block mb-2">
                <span className="font-medium">
                  대출금
                </span>

                <span className="ml-2 text-sm text-neutral-500">
                  Loan Amount
                </span>
              </label>

              <input
                type="number"
                value={loanAmount}
                onChange={(e) =>
                  setLoanAmount(e.target.value)
                }
                className="w-full rounded-xl border border-black/10 p-3"
              />
            </div>

            <div>
              <label className="block mb-2">
                <span className="font-medium">
                  연이율
                </span>

                <span className="ml-2 text-sm text-neutral-500">
                  Interest Rate
                </span>
              </label>

              <input
                type="number"
                value={interestRate}
                onChange={(e) =>
                  setInterestRate(e.target.value)
                }
                className="w-full rounded-xl border border-black/10 p-3"
              />
            </div>

            <div>
              <label className="block mb-2">
                <span className="font-medium">
                  대출기간
                </span>

                <span className="ml-2 text-sm text-neutral-500">
                  Loan Term
                </span>
              </label>

              <input
                type="number"
                value={loanTerm}
                onChange={(e) =>
                  setLoanTerm(e.target.value)
                }
                className="w-full rounded-xl border border-black/10 p-3"
              />
            </div>

            <div>
              <label className="block mb-2">
                <span className="font-medium">
                  거치기간
                </span>

                <span className="ml-2 text-sm text-neutral-500">
                  Grace Period
                </span>
              </label>

              <input
                type="number"
                value={gracePeriod}
                onChange={(e) =>
                  setGracePeriod(e.target.value)
                }
                className="w-full rounded-xl border border-black/10 p-3"
              />
            </div>

            <div>
              <label className="block mb-2">
                <span className="font-medium">
                  상환방식
                </span>

                <span className="ml-2 text-sm text-neutral-500">
                  Repayment Method
                </span>
              </label>

              <select
                value={repaymentMethod}
                onChange={(e) =>
                  setRepaymentMethod(
                    e.target.value
                  )
                }
                className="w-full rounded-xl border border-black/10 p-3"
              >
                <option value="equal-payment">
                  원리금균등
                </option>

                <option value="equal-principal">
                  원금균등
                </option>

                <option value="balloon">
                  만기일시상환
                </option>

              </select>
            </div>

          </div>
        </div>

        <div className="mt-8">

          <h2 className="text-2xl font-semibold">
            분석 결과 (Results)
          </h2>

          {!results ? (
            <p className="mt-4 text-neutral-500">
              값을 입력해주세요.
            </p>
          ) : (
            <div className="mt-6 space-y-6">

              <div>
                <p className="text-sm text-neutral-500">
                  거치기간 월 이자
                  Interest During Grace Period
                </p>

                <p className="text-3xl font-bold">
                  ₩
                  {formatNumber(
                    results.graceInterest
                  )}
                </p>
              </div>

            </div>
          )}

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