"use client";

import React, { useState } from "react";

export default function ContactClientEn() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mbdarkzo", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        return;
      }

      setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh] text-center gap-6">
        <div className="w-20 h-20 rounded-full bg-green-50 text-green-500 flex items-center justify-center text-3xl">✓</div>
        <h2 className="text-2xl font-bold font-serif text-[#16324f]">Your suggestion was sent!</h2>
        <p className="text-gray-500 text-sm">Thanks for the idea. We will review it soon.</p>
        <button onClick={() => window.history.back()} className="px-6 py-2 rounded-full bg-[#16324f] text-white font-bold text-sm">
          Go Back
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl space-y-6">
      <div className="space-y-4">
        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Nickname</label>
          <input
            name="nickname"
            required
            type="text"
            placeholder="How should we call you?"
            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-[#16324f]/20 outline-none transition-all"
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email</label>
          <input
            name="email"
            required
            type="email"
            placeholder="Where should we reply?"
            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-[#16324f]/20 outline-none transition-all"
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Suggestion</label>
          <textarea
            name="message"
            required
            rows={4}
            placeholder="Example: Please add a new anime world test"
            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-[#16324f]/20 outline-none transition-all resize-none"
          />
        </div>
      </div>
      {status === "error" && (
        <p className="text-sm text-red-500 text-center">Failed to send. Please try again.</p>
      )}
      <button
        type="submit"
        className="w-full py-4 rounded-2xl bg-[#16324f] text-white font-bold text-lg shadow-lg hover:brightness-110 transition-all active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending..." : "Send Suggestion"}
      </button>
    </form>
  );
}
