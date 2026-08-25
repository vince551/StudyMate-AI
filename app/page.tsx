"use client";

import { useState } from "react";

const tools = [
  { icon: "✦", title: "AI Tutor", text: "Learn concepts through guided, step-by-step conversations.", href: "/tutor", tone: "violet" },
  { icon: "⌁", title: "Study Lab", text: "Practice with quick questions and instant feedback.", href: "/study", tone: "cyan" },
  { icon: "◫", title: "Flashcards", text: "Turn difficult topics into active-recall cards.", href: "/study", tone: "blue" },
  { icon: "◷", title: "Planner", text: "Build a focused revision routine that fits your day.", href: "/planner", tone: "amber" },
];

const subjects = ["Mathematics", "Chemistry", "Physics", "Biology"];

export default function Home() {
  const [subject, setSubject] = useState("Chemistry");
  const [focus, setFocus] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#070912] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(99,102,241,.16),transparent_28%),radial-gradient(circle_at_10%_60%,rgba(6,182,212,.08),transparent_25%)]" />
      <div className="relative mx-auto max-w-[1440px] px-5 py-5 sm:px-8 lg:px-12">
        <nav className="flex items-center justify-between rounded-2xl border border-white/[.08] bg-white/[.035] px-4 py-3 backdrop-blur-xl sm:px-5">
          <a href="/" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-300 to-indigo-500 text-lg font-black text-slate-950 shadow-lg shadow-cyan-500/10">S</span>
            <span><strong className="block text-sm tracking-tight">StudyMate</strong><span className="block text-[10px] uppercase tracking-[.22em] text-slate-500">AI learning OS</span></span>
          </a>
          <div className="hidden items-center gap-7 text-sm text-slate-400 md:flex">
            <a className="text-white" href="/">Dashboard</a><a className="hover:text-white" href="/tutor">AI Tutor</a><a className="hover:text-white" href="/study">Study Lab</a><a className="hover:text-white" href="/planner">Planner</a>
          </div>
          <button className="rounded-xl border border-white/10 bg-white/[.04] px-4 py-2 text-sm text-slate-300 transition hover:bg-white/[.08]">Profile</button>
        </nav>

        <section className="grid gap-8 py-10 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:py-16">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[.06] px-3 py-1.5 text-xs text-cyan-200"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" /> Your personal learning workspace</div>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-.045em] sm:text-6xl lg:text-7xl">Turn study time into <span className="bg-gradient-to-r from-cyan-300 via-indigo-300 to-violet-300 bg-clip-text text-transparent">progress.</span></h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">StudyMate brings your tutor, revision plan, practice sessions and learning progress into one calm, intelligent workspace.</p>
            <div className="mt-8 flex flex-wrap gap-3"><a href="/tutor" className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-100">Start with AI Tutor →</a><a href="/planner" className="rounded-xl border border-white/10 bg-white/[.04] px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[.08]">Open planner</a></div>
          </div>

          <div className="relative rounded-[28px] border border-white/10 bg-[#0d1020]/90 p-5 shadow-2xl shadow-indigo-950/30 backdrop-blur-xl sm:p-6">
            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-violet-500/10 blur-2xl" />
            <div className="flex items-center justify-between"><div><p className="text-xs uppercase tracking-[.18em] text-slate-500">Today&apos;s focus</p><h2 className="mt-2 text-2xl font-semibold">{subject}</h2></div><span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">On track</span></div>
            <div className="mt-7 rounded-2xl border border-white/[.07] bg-black/20 p-4"><div className="flex items-end justify-between"><div><p className="text-sm text-slate-400">Session progress</p><p className="mt-1 text-3xl font-semibold">68<span className="text-base text-slate-500">%</span></p></div><span className="text-xs text-slate-500">42 min</span></div><div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[68%] rounded-full bg-gradient-to-r from-cyan-300 to-indigo-400" /></div></div>
            <div className="mt-4 grid grid-cols-4 gap-2">{subjects.map((item) => <button key={item} onClick={() => setSubject(item)} className={`rounded-xl px-2 py-2.5 text-[11px] transition ${subject === item ? "bg-white text-slate-950" : "bg-white/[.04] text-slate-500 hover:text-slate-200"}`}>{item}</button>)}</div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => <a href={tool.href} key={tool.title} className="group rounded-2xl border border-white/[.08] bg-white/[.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[.05]"><span className="mb-10 grid h-10 w-10 place-items-center rounded-xl bg-white/[.06] text-lg text-cyan-200">{tool.icon}</span><h3 className="font-semibold">{tool.title}</h3><p className="mt-2 text-sm leading-6 text-slate-500 group-hover:text-slate-400">{tool.text}</p><span className="mt-5 block text-xs font-medium text-slate-600 group-hover:text-cyan-300">Open workspace ↗</span></a>)}
        </section>

        <section className="mt-5 grid gap-4 lg:grid-cols-[1.3fr_.7fr]">
          <div className="rounded-2xl border border-white/[.08] bg-white/[.025] p-5 sm:p-6"><div className="flex items-center justify-between"><div><p className="text-xs uppercase tracking-[.18em] text-slate-600">Weekly momentum</p><h2 className="mt-2 text-xl font-semibold">You&apos;re building a habit.</h2></div><span className="text-2xl font-semibold text-cyan-300">7 <small className="text-xs font-normal text-slate-500">day streak</small></span></div><div className="mt-7 flex h-28 items-end gap-2">{[35,52,44,72,58,86,68].map((height,index)=><div key={index} className="flex-1 rounded-t-lg bg-gradient-to-t from-indigo-500/20 to-cyan-300/70 transition hover:opacity-80" style={{height:`${height}%`}} />)}</div><div className="mt-2 flex justify-between text-[10px] text-slate-600"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div></div>
          <div className="rounded-2xl border border-white/[.08] bg-gradient-to-br from-indigo-500/10 to-cyan-400/[.04] p-6"><p className="text-xs uppercase tracking-[.18em] text-indigo-300">Quick focus</p><h2 className="mt-3 text-2xl font-semibold">One focused session beats an hour of distraction.</h2><p className="mt-3 text-sm leading-6 text-slate-500">Start a 25-minute focus block and keep your phone out of the loop.</p><button onClick={() => setFocus(!focus)} className="mt-6 w-full rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100">{focus ? "Focus session active ✓" : "Start 25 min focus"}</button></div>
        </section>

        <footer className="flex flex-col gap-3 py-10 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between"><span>StudyMate AI · built for active learning</span><span>Learn. Practice. Remember.</span></footer>
      </div>
    </main>
  );
}
