export default function Home() {
  const tools = [
    { title: "AI Tutor", description: "Ask questions and learn step by step.", icon: "✦" },
    { title: "Quiz Lab", description: "Turn topics into practice questions.", icon: "◇" },
    { title: "Flashcards", description: "Build active-recall decks in seconds.", icon: "▣" },
    { title: "Revision Plan", description: "Organise what to study and when.", icon: "◷" },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <header className="flex items-center justify-between border-b border-white/10 pb-6">
          <div>
            <p className="text-sm font-medium text-cyan-400">STUDYMATE AI</p>
            <h1 className="mt-1 text-2xl font-semibold tracking-tight">Your learning workspace</h1>
          </div>
          <button className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 hover:bg-white/5">Profile</button>
        </header>

        <section className="grid gap-8 py-12 lg:grid-cols-[1.4fr_.6fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm text-slate-400">Good to see you.</p>
            <h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
              Study smarter. <span className="text-cyan-400">Understand deeper.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Learn with an AI tutor, practise with generated quizzes, organise revision, and build better study habits.
            </p>
            <button className="mt-8 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300">
              Start a study session →
            </button>
          </div>

          <aside className="rounded-3xl border border-white/10 bg-white/[.04] p-6">
            <p className="text-sm text-slate-400">Today&apos;s focus</p>
            <p className="mt-3 text-3xl font-semibold">Chemistry</p>
            <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[68%] rounded-full bg-cyan-400" />
            </div>
            <div className="mt-3 flex justify-between text-xs text-slate-500"><span>68% complete</span><span>42 min</span></div>
          </aside>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => (
            <article key={tool.title} className="group rounded-2xl border border-white/10 bg-white/[.03] p-5 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[.05]">
              <div className="mb-8 text-2xl text-cyan-400">{tool.icon}</div>
              <h3 className="text-lg font-semibold">{tool.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{tool.description}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
