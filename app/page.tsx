"use client";

import { useState } from "react";

const modes = [
  ["Tutor", "Learn any topic step by step", "✦"],
  ["Quiz me", "Test what you actually remember", "?"],
  ["Explain", "Make a difficult idea simple", "≡"],
  ["Summarize", "Turn notes into key ideas", "↘"],
];

const suggestions = [
  "Explain photosynthesis simply",
  "Quiz me on quadratic equations",
  "Help me understand organic chemistry",
  "Make a revision plan for my exams",
];

export default function Home() {
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState("");

  function ask(text = message) {
    if (!text.trim()) return;
    setSent(text.trim());
    setMessage("");
  }

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-[#172033]">
      <div className="mx-auto flex min-h-screen max-w-7xl">
        <aside className="hidden w-60 shrink-0 border-r border-slate-200 bg-white px-4 py-5 md:flex md:flex-col">
          <a href="/" className="flex items-center gap-2 px-2 text-lg font-bold"><span className="grid h-9 w-9 place-items-center rounded-xl bg-[#315bea] text-sm text-white">S</span> StudyMate</a>
          <button className="mt-8 rounded-xl bg-[#315bea] px-4 py-3 text-sm font-semibold text-white shadow-sm">+ New study chat</button>
          <nav className="mt-5 space-y-1 text-sm">
            <a className="flex rounded-lg bg-blue-50 px-3 py-2.5 font-medium text-[#315bea]" href="/">⌂ &nbsp; Assistant</a>
            <a className="flex rounded-lg px-3 py-2.5 text-slate-600 hover:bg-slate-50" href="/study">▣ &nbsp; Study tools</a>
            <a className="flex rounded-lg px-3 py-2.5 text-slate-600 hover:bg-slate-50" href="/planner">◷ &nbsp; Revision planner</a>
            <a className="flex rounded-lg px-3 py-2.5 text-slate-600 hover:bg-slate-50" href="/tutor">✦ &nbsp; AI tutor</a>
          </nav>
          <div className="mt-auto rounded-xl bg-slate-50 p-3 text-xs leading-5 text-slate-500"><b className="text-slate-700">Study tip</b><br />Try explaining a topic from memory before checking your notes.</div>
        </aside>

        <section className="flex min-w-0 flex-1 flex-col">
          <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-5 sm:px-8">
            <div className="flex items-center gap-3 md:hidden"><span className="grid h-8 w-8 place-items-center rounded-lg bg-[#315bea] text-sm font-bold text-white">S</span><b>StudyMate</b></div>
            <div className="hidden text-sm text-slate-500 md:block">AI Study Assistant</div>
            <div className="flex items-center gap-3 text-sm"><span className="hidden text-slate-400 sm:block">Good study session ✨</span><button className="h-9 w-9 rounded-full border border-slate-200 bg-slate-50 text-slate-500">V</button></div>
          </header>

          <div className="flex flex-1 flex-col px-5 pb-8 pt-10 sm:px-8 lg:px-16">
            <div className="mx-auto w-full max-w-3xl">
              {!sent ? (
                <>
                  <div className="text-center">
                    <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-2xl text-[#315bea]">✦</div>
                    <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">What are you studying today?</h1>
                    <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">Ask me anything. I can explain concepts, quiz you, summarize notes, solve problems and help you plan your revision.</p>
                  </div>
                  <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm focus-within:border-blue-300 focus-within:ring-4 focus-within:ring-blue-50">
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); ask(); } }} placeholder="Ask StudyMate anything..." rows={3} className="w-full resize-none border-0 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-slate-400" />
                    <div className="flex items-center justify-between px-2 pb-1"><span className="text-xs text-slate-400">Shift + Enter for a new line</span><button onClick={() => ask()} className="rounded-lg bg-[#315bea] px-4 py-2 text-sm font-semibold text-white disabled:opacity-40" disabled={!message.trim()}>Ask StudyMate ↑</button></div>
                  </div>
                  <div className="mt-5 grid gap-2 sm:grid-cols-2">{suggestions.map((s) => <button key={s} onClick={() => ask(s)} className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-left text-sm text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-[#315bea]">{s}</button>)}</div>
                  <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">{modes.map(([name, desc, icon]) => <a href={name === "Tutor" ? "/tutor" : "/study"} key={name} className="rounded-xl border border-slate-200 bg-white p-4 hover:border-slate-300"><span className="grid h-8 w-8 place-items-center rounded-lg bg-slate-100 text-sm font-bold text-slate-600">{icon}</span><b className="mt-3 block text-sm">{name}</b><span className="mt-1 block text-xs leading-5 text-slate-400">{desc}</span></a>)}</div>
                </>
              ) : (
                <div>
                  <div className="mb-8 flex items-start gap-3"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#315bea] text-sm font-bold text-white">V</span><div className="rounded-2xl rounded-tl-sm bg-blue-50 px-4 py-3 text-sm leading-6 text-slate-700">{sent}</div></div>
                  <div className="flex items-start gap-3"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#315bea] text-white">✦</span><div className="rounded-2xl rounded-tl-sm border border-slate-200 bg-white px-5 py-4 text-sm leading-7 text-slate-600 shadow-sm"><b className="text-slate-800">Let&apos;s study that together.</b><p className="mt-2">I&apos;m ready to break this down into clear steps, examples and a quick check for understanding. Connect an AI model to the assistant API to enable live answers.</p><button onClick={() => setSent("")} className="mt-4 rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium hover:bg-slate-50">Start another question</button></div></div>
                </div>
              )}
            </div>
          </div>

          <footer className="border-t border-slate-200 bg-white px-5 py-3 text-center text-[11px] text-slate-400">StudyMate helps you learn — it should support your thinking, not replace it.</footer>
        </section>
      </div>
    </main>
  );
}
