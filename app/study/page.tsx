"use client";

import { useMemo, useState } from "react";

const questions = [
  { question: "What is the role of a catalyst in a chemical reaction?", options: ["Increase activation energy", "Lower activation energy", "Increase product mass", "Stop the reaction"], answer: 1 },
  { question: "Which particle determines the atomic number of an element?", options: ["Neutron", "Electron", "Proton", "Ion"], answer: 2 },
  { question: "What happens to particles when temperature increases?", options: ["They stop moving", "Their average kinetic energy increases", "Their mass disappears", "They become electrons"], answer: 1 },
];

export default function StudyPage() {
  const [selected, setSelected] = useState<number | null>(null);
  const [current, setCurrent] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const question = questions[current];
  const score = useMemo(() => submitted && selected === question.answer ? 1 : 0, [submitted, selected, question.answer]);

  function next() {
    setCurrent((value) => (value + 1) % questions.length);
    setSelected(null);
    setSubmitted(false);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <header className="mb-10 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[.2em] text-cyan-400">STUDYMATE AI</p>
            <h1 className="mt-2 text-3xl font-semibold">Chemistry practice</h1>
          </div>
          <a href="/" className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300">Dashboard</a>
        </header>

        <div className="mb-8 h-2 overflow-hidden rounded-full bg-white/10">
          <div className="h-full rounded-full bg-cyan-400 transition-all" style={{ width: `${((current + 1) / questions.length) * 100}%` }} />
        </div>

        <section className="rounded-3xl border border-white/10 bg-white/[.03] p-6 sm:p-10">
          <div className="flex items-center justify-between gap-4">
            <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">Question {current + 1} of {questions.length}</span>
            <span className="text-sm text-slate-500">Score +{score}</span>
          </div>
          <h2 className="mt-8 max-w-3xl text-2xl font-semibold leading-tight sm:text-4xl">{question.question}</h2>

          <div className="mt-8 grid gap-3">
            {question.options.map((option, index) => {
              const isCorrect = submitted && index === question.answer;
              const isWrong = submitted && selected === index && index !== question.answer;
              return (
                <button key={option} onClick={() => !submitted && setSelected(index)} className={`flex items-center gap-4 rounded-2xl border p-4 text-left transition ${isCorrect ? "border-emerald-400/50 bg-emerald-400/10" : isWrong ? "border-red-400/50 bg-red-400/10" : selected === index ? "border-cyan-400/60 bg-cyan-400/10" : "border-white/10 bg-white/[.02] hover:bg-white/[.05]"}`}>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-sm">{String.fromCharCode(65 + index)}</span>
                  <span>{option}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex justify-end gap-3">
            {!submitted ? (
              <button disabled={selected === null} onClick={() => setSubmitted(true)} className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 disabled:cursor-not-allowed disabled:opacity-40">Check answer</button>
            ) : (
              <button onClick={next} className="rounded-xl bg-white px-6 py-3 font-semibold text-slate-950">Next question →</button>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
