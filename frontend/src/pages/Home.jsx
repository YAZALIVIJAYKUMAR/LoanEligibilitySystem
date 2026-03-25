import { useState } from "react";
import LoanForm from "../components/LoanForm";
import EMICalculator from "../components/EMICalculator";

export default function Home() {
  const [result, setResult] = useState(null);

  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="min-h-screen pt-32 flex flex-col justify-center items-center
        bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900
        text-white px-6 relative overflow-hidden"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-center leading-tight">
          Know Your <span className="text-cyan-400">Loan Potential</span>
        </h1>

        <p className="mt-6 text-slate-300 text-center max-w-2xl text-lg">
          Get an instant eligibility prediction for personal loans in seconds.
          No hidden requirements, no waiting.
        </p>

        <div className="mt-10">
          <a
            href="#about"
            className="px-8 py-3 rounded-full bg-cyan-400 text-slate-900
            font-semibold shadow-lg hover:shadow-cyan-400/40
            hover:-translate-y-0.5 transition-all"
          >
            Explore LoanPulse
          </a>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="py-24 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              About <span className="text-blue-600">LoanPulse</span>
            </h2>

            <p className="text-gray-600 mb-4">
              LoanPulse is an AI-powered loan eligibility prediction system that
              helps users understand their approval chances before applying.
            </p>

            <p className="text-gray-600 mb-6">
              It leverages Machine Learning models trained on historical loan
              data to deliver fast, accurate, and transparent decisions.
            </p>

            <ul className="space-y-2 text-sm text-gray-700">
              <li>✔ MERN Stack + Python ML</li>
              <li>✔ No credit score impact</li>
              <li>✔ Instant eligibility result</li>
              <li>✔ User friendly UI</li>
            </ul>

            <div className="mt-6">
              <a
                href="#loan"
                className="inline-block px-6 py-2 rounded-full
                bg-blue-600 text-white font-semibold
                hover:bg-blue-700 transition"
              >
                Check Eligibility
              </a>
            </div>
          </div>

          <div>
            <img
              src="/images/image.jpg"
              alt="Loan flow"
              className="w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* ================= CHECK ELIGIBILITY ================= */}
      <section id="loan" className="py-24 px-6 bg-white flex justify-center">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12">
          <LoanForm onResult={setResult} />

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Demo Flow</h2>

            <ol className="space-y-3 text-sm text-gray-700">
              <li>1. Enter loan details</li>
              <li>2. Submit the form</li>
              <li>3. Backend sends data to ML model</li>
              <li>4. Model predicts eligibility</li>
              <li>5. Result with suggestions shown</li>
            </ol>

            {!result && (
              <p className="text-gray-500">
                .~ Submit the form to see your eligibility result ~.
              </p>
            )}

            {result && (
              <div
                className={`p-6 rounded-xl border ${
                  result === "Approved"
                    ? "bg-green-50 border-green-300"
                    : "bg-red-50 border-red-300"
                }`}
              >
                <h3 className="text-xl font-bold mb-2">
                  {result === "Approved" ? "✅ Approved" : "❌ Rejected"}
                </h3>

                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  {result === "Approved" ? (
                    <>
                      <li>Maintain good credit history</li>
                      <li>Avoid missed EMIs</li>
                      <li>Keep income stable</li>
                    </>
                  ) : (
                    <>
                      <li>Improve credit score</li>
                      <li>Reduce loan amount</li>
                      <li>Clear existing debts</li>
                    </>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ================= EMI CALCULATOR (ONLY UI CHANGE HERE) ================= */}
      <section id="calculator" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            EMI Calculator
          </h2>

          <p className="text-center text-gray-600 mb-12">
            Calculate your monthly EMI based on loan amount,
            interest rate, and tenure.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT: EMI BOX */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              <EMICalculator />
            </div>

            {/* RIGHT: IMAGE (SEPARATE) */}
            <div className="flex justify-center">
              <img
                src="/images/emi-dummy.png"
                alt="EMI illustration"
                className="max-w-sm w-full object-contain opacity-90"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS + WHY LOANPULSE ================= */}
      <section
        id="how"
        className="py-24 bg-gradient-to-br from-blue-50 to-cyan-50 px-6"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14">
          <div>
            <h2 className="text-3xl font-bold mb-14 text-center">
              How It Works
            </h2>

            <div className="space-y-10">
              {[
                "Fill loan application details",
                "AI model evaluates your profile",
                "Eligibility decision generated",
                "Suggestions provided instantly",
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-center">
                  <div
                    className="h-12 w-12 rounded-full bg-gradient-to-br
                    from-blue-600 to-cyan-400 text-white
                    flex items-center justify-center font-bold shadow-md"
                  >
                    {i + 1}
                  </div>
                  <p className="text-gray-700">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-14 text-center">
              Why LoanPulse?
            </h2>

            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              {[
                {
                  title: "Instant Analysis",
                  description:
                    "Eligibility prediction in seconds using ML algorithms",
                },
                {
                  title: "No Hard Inquiries",
                  description:
                    "Preliminary check does not affect your credit score",
                },
                {
                  title: "Transparent Decision",
                  description:
                    "Clear approval or rejection with reasons",
                },
                {
                  title: "Smart Suggestions",
                  description:
                    "Personalized tips to improve eligibility",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-slate-200
                  shadow-sm hover:shadow-md transition"
                >
                  <h3 className="font-semibold text-gray-900 text-sm">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs mt-1">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-28 bg-gray-50 px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Contact Our Team
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14">
          Meet the team behind{" "}
          <span className="font-semibold text-blue-600">LoanPulse</span>,
          a project built with teamwork and innovation.
        </p>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: "PRANAY KUMAR", role: "Project Lead", tag: "Architecture & Vision" },
            { name: "RASHMITHA", role: "ML Engineer", tag: "Model Training & Accuracy" },
            { name: "MADDHAIAH", role: "Frontend Developer", tag: "UI & UX Design" },
            { name: "VIJAY KUMAR", role: "Backend Developer", tag: "API & Integration" },
          ].map((m, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-2xl p-6 text-center
              hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div
                className="h-14 w-14 mx-auto mb-4 rounded-full bg-blue-100
                flex items-center justify-center text-blue-600 font-bold text-lg"
              >
                {m.name.charAt(0)}
              </div>

              <h3 className="font-bold text-gray-900">{m.name}</h3>
              <p className="text-blue-600 text-sm font-medium">{m.role}</p>
              <p className="mt-2 text-xs text-gray-500">{m.tag}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-slate-950 text-slate-300 px-6 py-14">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">LoanPulse</h3>
            <p className="text-sm text-gray-400">
              Loan eligibility prediction system providing instant,
              transparent insights before applying for loans.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#loan" className="hover:text-white">Check Eligibility</a></li>
              <li><a href="#calculator" className="hover:text-white">EMI Calculator</a></li>
              <li><a href="#how" className="hover:text-white">How It Works</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Technology Used</h4>
            <p className="text-sm text-gray-400">
              React • Node.js • Express • MongoDB • Python • Machine Learning
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Contact</h4>
            <p className="text-sm text-gray-400">
              Email:{" "}
              <a
                href="mailto:loanpulse4@gmail.com"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                loanpulse4@gmail.com
              </a>
            </p>

            <p className="text-sm text-gray-400 mt-1">
              Location: Gujarat, India
            </p>

            <h4 className="font-semibold text-white mt-4 mb-2">GitHub</h4>
            <a
              href="https://github.com/YAZALIVIJAYKUMAR/LoanEligibilitySystem"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-cyan-400 hover:text-cyan-300"
            >
              https://github.com/YAZALIVIJAYKUMAR/LoanEligibilitySystem
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} LoanPulse
        </div>
      </footer>
    </>
  );
}

/* ================= EMI CALCULATOR LOGIC (UNCHANGED) ================= */

function EmiCalculator() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [emi, setEmi] = useState(null);

  const calculateEmi = () => {
    const P = Number(amount);
    const R = Number(rate) / 12 / 100;
    const N = Number(tenure) * 12;

    if (!P || !R || !N) return;

    const value =
      (P * R * Math.pow(1 + R, N)) /
      (Math.pow(1 + R, N) - 1);

    setEmi(value.toFixed(2));
  };

  const resetEmi = () => {
    setAmount("");
    setRate("");
    setTenure("");
    setEmi(null);
  };

  return (
    <div className="grid md:grid-cols-2 gap-10">
      <div className="space-y-4">
        <input
          type="number"
          placeholder="Loan Amount (₹)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border px-4 py-2 rounded-lg"
        />
        <input
          type="number"
          placeholder="Interest Rate (% p.a.)"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          className="w-full border px-4 py-2 rounded-lg"
        />
        <input
          type="number"
          placeholder="Tenure (Years)"
          value={tenure}
          onChange={(e) => setTenure(e.target.value)}
          className="w-full border px-4 py-2 rounded-lg"
        />

        <button
          onClick={calculateEmi}
          className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition"
        >
          Calculate EMI
        </button>

        <button
          onClick={resetEmi}
          className="w-full border border-gray-300 text-gray-700 py-2 rounded-full hover:bg-gray-100 transition"
        >
          Reset
        </button>
      </div>

      <div className="flex items-center justify-center">
        {emi ? (
          <div className="text-center">
            <p className="text-sm text-gray-500">Monthly EMI</p>
            <h3 className="text-4xl font-bold text-blue-600 mt-2">
              ₹ {emi}
            </h3>
          </div>
        ) : (
          <p className="text-gray-400 text-sm">
            Enter values to calculate EMI
          </p>
        )}
      </div>
    </div>
  );
}
