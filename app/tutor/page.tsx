"use client";

import { FormEvent, useState } from "react";

export default function TutorPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{ role: "assistant", text: "Hi! I’m StudyMate. Tell me what you’re learning and I’ll guide you step by step." }]);

  function submit(event: FormEvent) {
    event.preventDefault();
    const value = input.trim();
    if (!value) return;
    setMessages((items) => [...items, { role: "user", text: value }, { role: "assistant", text: "Great question. I’ll break this down into a simple explanation, then give you a quick check to test your understanding." }]);
    setInput("");
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 py-8">
        <header className="flex items-center justify-between border-b border-white/10 pb-6">
          <div><p className="text-xs font-semibold tracking-[.2em] text-cyan-400">AI TUTOR</p><h1 className="mt-2 text-2xl font-semibold">Learn through conversation</h1></div>
          <a href="/" className="text-sm text-slate-400 hover:text-white">Dashboard</a>
        </header>

        <section className="flex flex-1 flex-col py-8">
          <div className="flex-1 space-y-5">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-2xl rounded-2xl px-5 py-4 text-sm leading-7 ${message.role === "user" ? "bg-cyan-400 font-medium text-slate-950" : "border border-white/10 bg-white/[.04] text-slate-300"}`}>
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={submit} className="mt-8 flex gap-3 rounded-2xl border border-white/10 bg-white/[.03] p-2">
            <input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask about a topic..." className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-slate-600" />
            <button className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950">Ask</button>
          </form>
          <p className="mt-3 text-center text-xs text-slate-600">StudyMate is designed to explain concepts and build understanding, not replace your own learning.</p>
        </section>
      </div>
    </main>
  );
}
