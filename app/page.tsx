export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For SaaS Founders
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Hit Your MRR Milestones.<br />
          <span className="text-[#58a6ff]">Celebrate Every Win.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Track real-time MRR progress with beautiful milestone bars. Auto-trigger Slack pings and investor emails the moment you cross $1K, $5K, $10K MRR — and beyond.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors duration-150"
        >
          Start Tracking — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No credit card required to try.</p>

        {/* Mock Dashboard Preview */}
        <div className="mt-14 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left">
          <p className="text-xs text-[#6e7681] uppercase tracking-widest mb-4">Live MRR Dashboard</p>
          {[
            { label: "$1,000 MRR", pct: 100, done: true },
            { label: "$5,000 MRR", pct: 74, done: false },
            { label: "$10,000 MRR", pct: 37, done: false },
          ].map((m) => (
            <div key={m.label} className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span className={m.done ? "text-[#3fb950]" : "text-[#c9d1d9]"}>{m.label}</span>
                <span className="text-[#6e7681]">{m.pct}%</span>
              </div>
              <div className="h-2 bg-[#21262d] rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${m.done ? "bg-[#3fb950]" : "bg-[#58a6ff]"}`}
                  style={{ width: `${m.pct}%` }}
                />
              </div>
            </div>
          ))}
          <div className="mt-5 flex gap-2 flex-wrap">
            <span className="bg-[#1f2937] border border-[#3fb950] text-[#3fb950] text-xs px-3 py-1 rounded-full">🎉 $1K milestone hit — Slack notified</span>
            <span className="bg-[#1f2937] border border-[#30363d] text-[#6e7681] text-xs px-3 py-1 rounded-full">$5K — 74% there</span>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 text-center">
          <p className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Founder Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$19<span className="text-xl font-normal text-[#6e7681]">/mo</span></p>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to track and celebrate MRR growth</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Real-time MRR sync (Stripe or manual)",
              "Unlimited milestone targets",
              "Slack & email celebration triggers",
              "Investor update templates",
              "Historical MRR chart",
              "Team sharing (up to 5 seats)",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#3fb950] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-150"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "How does MRR tracking work?",
              a: "Connect your Stripe account via API key or enter MRR manually. We calculate your current MRR and show progress toward each milestone you set.",
            },
            {
              q: "How do celebration triggers work?",
              a: "When your MRR crosses a milestone, we instantly send a Slack message to your channel and an email to your investor list — fully customizable templates.",
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes. Cancel from your account settings at any time. You keep access until the end of your billing period with no questions asked.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="border-b border-[#21262d] pb-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#6e7681] pb-10">
        © {new Date().getFullYear()} MRR Milestone Tracker. Built for founders.
      </footer>
    </main>
  );
}
