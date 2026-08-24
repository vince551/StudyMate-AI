"use client";

import { useState } from "react";

const initial = [
  { subject: "Mathematics", topic: "Quadratic equations", duration: "45 min", done: true },
  { subject: "Chemistry", topic: "Organic chemistry", duration: "40 min", done: false },
  { subject: "Physics", topic: "Waves", duration: "35 min", done: false },
  { subject: "Biology", topic: "Cell biology", duration: "30 min", done: false },
];

export default function PlannerPage() {
  const [tasks, setTasks] = useState(initial);
  const completed = tasks.filter((task) => task.done).length;

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <header className="flex items-center justify-between border-b border-white/10 pb-6">
          <div><p className="text-xs font-semibold tracking-[.2em] text-cyan-400">REVISION PLANNER</p><h1 className="mt-2 text-3xl font-semibold">Today&apos;s study plan</h1></div>
          <a href="/" className="text-sm text-slate-400">Dashboard</a>
        </header>

        <section className="grid gap-4 py-8 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[.03] p-5"><p className="text-sm text-slate-500">Progress</p><p className="mt-2 text-3xl font-semibold">{completed}/{tasks.length}</p></div>
          <div className="rounded-2xl border border-white/10 bg-white/[.03] p-5"><p className="text-sm text-slate-500">Study time</p><p className="mt-2 text-3xl font-semibold">2h 30m</p></div>
          <div className="rounded-2xl border border-white/10 bg-white/[.03] p-5"><p className="text-sm text-slate-500">Streak</p><p className="mt-2 text-3xl font-semibold">7 days</p></div>
        </section>

        <section className="space-y-3">
          {tasks.map((task, index) => (
            <button key={task.topic} onClick={() => setTasks((items) => items.map((item, i) => i === index ? { ...item, done: !item.done } : item))} className="flex w-full items-center gap-4 rounded-2xl border border-white/10 bg-white/[.03] p-5 text-left transition hover:bg-white/[.05]">
              <span className={`h-5 w-5 rounded-full border ${task.done ? "border-cyan-400 bg-cyan-400" : "border-white/20"}`} />
              <span className="flex-1"><span className="block text-xs text-cyan-400">{task.subject}</span><span className={`mt-1 block font-medium ${task.done ? "text-slate-500 line-through" : ""}`}>{task.topic}</span></span>
              <span className="text-sm text-slate-500">{task.duration}</span>
            </button>
          ))}
        </section>
      </div>
    </main>
  );
}
