"use client";

import React, { useState } from "react";

const DEFAULT_QUESTIONS = [
  {
    id: "faq-1",
    question:
      "Do you feel stuck, overwhelmed, or uncertain about your next step in life, career, business, or relationships?",
    answer:
      "One-on-one coaching provides a safe, reflective space to explore complex decisions, examine underlying thoughts and emotions, and rediscover your innate direction with clarity, confidence, and purpose.",
  },
  {
    id: "faq-2",
    question: "What is one-on-one coaching and how does it work?",
    answer:
      "One-on-one coaching is a personalized, confidential partnership designed to help you gain clarity, dismantle limiting beliefs, and align your choices with your authentic goals. Through reflective inquiry and my signature framework, The TEA of Your Life, we create structured strategies and actionable steps tailored specifically to your journey.",
  },
];

export default function CoachingFaq({ items = DEFAULT_QUESTIONS, defaultOpen = null }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);

  return (
    <div className="w-full max-w-[609px] flex flex-col gap-1.5">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;

        return (
          <div
            key={item.id}
            className="w-full max-w-[609px] border-b border-[#D07578]/25 transition-all duration-300 pb-1.5"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full py-1.5 flex items-center justify-between text-left gap-3 focus:outline-none group cursor-pointer"
              aria-expanded={isOpen}
            >
              <span
                className={`w-full max-w-[583px] font-sans font-semibold text-[16px] leading-[1.2] transition-colors select-none ${
                  isOpen ? "text-[#D07578]" : "text-[#141414] group-hover:text-[#D07578]"
                }`}
              >
                {item.question}
              </span>
              <span
                className={`shrink-0 p-1 flex items-center justify-center transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-[#D07578]" : "text-[#141414] group-hover:text-[#D07578]"
                }`}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </button>

            {isOpen && (
              <div className="pt-1 pb-1.5 text-[clamp(13px,0.2vw+12px,14.5px)] font-sans font-normal leading-[1.45] text-[#141414]/80 animate-in fade-in duration-200">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
