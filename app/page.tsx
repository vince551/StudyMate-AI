"use client";
import { useState } from "react";

const subjects = ["Mathematics", "English", "Kiswahili", "Chemistry", "Physics", "Biology", "CRE", "Drawing & Design"];
const tools = [
  ["AI Tutor", "Understand any topic with step-by-step guidance", "✦", "/tutor"],
  ["Quiz Builder", "Create practice questions and test yourself", "?", "/study"],
  ["Flashcards", "Use active recall to remember key ideas", "▤", "/study"],
  ["Summarizer", "Turn long notes into clear revision points", "≡", "/study"],
  ["Revision Planner", "Organize subjects, topics and study time", "◷", "/planner"],
  ["Exam Practice", "Practice with timed questions", "✓", "/study"],
];
const suggestions = ["Explain a difficult topic", "Quiz me on a subject", "Summarize my notes", "Make my revision plan"];

export default function Home() {
  const [query, setQuery] = useState("");
  const [activeSubject, setActiveSubject] = useState("Mathematics");
  const [submitted, setSubmitted] = useState("");
  const ask = (value = query) => { if (!value.trim()) return; setSubmitted(value.trim()); setQuery(""); };

  return <main className="min-h-screen bg-[#f6f8fb] text-slate-800">
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-xl bg-blue-600 font-bold text-white">S</span><span className="font-bold tracking-tight">StudyMate <span className="font-normal text-blue-600">AI</span></span></a>
        <nav className="hidden items-center gap-1 text-sm md:flex"><a className="rounded-lg bg-blue-50 px-3 py-2 font-medium text-blue-700" href="/">Home</a><a className="rounded-lg px-3 py-2 text-slate-500 hover:bg-slate-50" href="/study">Study Tools</a><a className="rounded-lg px-3 py-2 text-slate-500 hover:bg-slate-50" href="/planner">Planner</a><a className="rounded-lg px-3 py-2 text-slate-500 hover:bg-slate-50" href="/tutor">AI Tutor</a></nav>
        <button className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-slate-50 text-sm font-semibold text-slate-600">V</button>
      </div>
    </header>

    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <section className="grid gap-6 lg:grid-cols-[1fr_300px]">
        <div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
            <div className="flex items-start gap-3"><div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600">✦</div><div><p className="text-sm font-semibold text-slate-900">Your AI study assistant</p><p className="mt-1 text-xs text-slate-400">Ask, learn, practice and revise — all in one place.</p></div></div>
            {!submitted ? <>
              <h1 className="mt-8 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">What do you want to study?</h1>
              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">StudyMate can explain lessons, solve problems with you, generate quizzes, summarize notes and build revision plans.</p>
              <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-2 focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-50"><textarea value={query} onChange={e => setQuery(e.target.value)} onKeyDown={e => {if(e.key === "Enter" && !e.shiftKey){e.preventDefault();ask();}}} rows={3} placeholder="Ask StudyMate anything about your studies..." className="w-full resize-none bg-transparent px-3 py-2 text-sm outline-none placeholder:text-slate-400"/><div className="flex items-center justify-between px-2 pb-1"><span className="text-xs text-slate-400">Press Enter to ask</span><button onClick={() => ask()} disabled={!query.trim()} className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white disabled:opacity-40">Ask StudyMate ↑</button></div></div>
              <div className="mt-4 flex flex-wrap gap-2">{suggestions.map(s => <button key={s} onClick={() => ask(s)} className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700">{s}</button>)}</div>
            </> : <div className="mt-8"><div className="rounded-xl bg-blue-50 p-4 text-sm text-blue-900"><b>You asked:</b><p className="mt-1">{submitted}</p></div><div className="mt-4 rounded-xl border border-slate-200 p-5 text-sm leading-6 text-slate-600"><b className="text-slate-900">StudyMate is ready.</b><p className="mt-1">Connect the AI provider to this assistant and it can respond with explanations, examples, questions and guided solutions.</p><button onClick={() => setSubmitted("")} className="mt-4 rounded-lg border px-3 py-2 text-xs font-medium">Ask another question</button></div></div>}
          </div>

          <div className="mt-6"><div className="mb-3 flex items-center justify-between"><h2 className="font-bold text-slate-900">Study tools</h2><a href="/study" className="text-xs font-medium text-blue-600">View all →</a></div><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{tools.map(([title,desc,icon,href]) => <a href={href} key={title} className="group rounded-xl border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-sm"><span className="grid h-9 w-9 place-items-center rounded-lg bg-slate-50 font-semibold text-blue-600 group-hover:bg-blue-50">{icon}</span><h3 className="mt-4 text-sm font-semibold text-slate-900">{title}</h3><p className="mt-1 text-xs leading-5 text-slate-500">{desc}</p></a>)}</div></div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div className="flex items-center justify-between"><div><p className="text-xs text-slate-400">Today&apos;s progress</p><p className="mt-1 text-2xl font-bold text-slate-900">42 min</p></div><span className="rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700">Good</span></div><div className="mt-5 h-2 rounded-full bg-slate-100"><div className="h-full w-[68%] rounded-full bg-blue-600" /></div><div className="mt-2 flex justify-between text-[11px] text-slate-400"><span>0 min</span><span>Goal: 60 min</span></div></div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5"><h2 className="font-semibold text-slate-900">My subjects</h2><div className="mt-3 flex flex-wrap gap-2">{subjects.map(s => <button key={s} onClick={() => setActiveSubject(s)} className={`rounded-lg px-2.5 py-2 text-[11px] ${activeSubject === s ? "bg-blue-600 font-medium text-white" : "bg-slate-50 text-slate-600 hover:bg-blue-50"}`}>{s}</button>)}</div><p className="mt-4 text-xs text-slate-400">Currently focusing on <b className="text-slate-600">{activeSubject}</b>.</p></div>
          <div className="rounded-2xl bg-blue-600 p-5 text-white"><p className="text-xs text-blue-100">Revision streak</p><div className="mt-1 text-3xl font-bold">7 days 🔥</div><p className="mt-2 text-xs leading-5 text-blue-100">Keep studying consistently. Small sessions add up.</p><a href="/planner" className="mt-4 block rounded-lg bg-white px-3 py-2 text-center text-xs font-semibold text-blue-700">Open planner</a></div>
        </aside>
      </section>
    </div>
  </main>;
}
