"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui";

export default function NewChapter() {
  return (
    <section
      id="new-chapter-section"
      aria-label="A New Chapter"
      className="relative w-full h-[clamp(888px,calc(1381px-64.14vw),1108px)] md:h-[clamp(800px,calc(988.6px-13.1vw),888px)] lg:h-[800px] overflow-hidden bg-[#FEFEFE]"
    >
      {/* Edge-to-Edge Full-Bleed Background Image */}
      <Image
        src="/images/new-chapter.png"
        alt="A New Chapter - Igniting Mindz"
        fill
        priority
        className={[
          "object-cover transition-[transform,object-position] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
          /* Mobile (425px): Figma → 1260×1108 frame, left: -284px
             Natural 1707×1024 with object-cover on 425×1108 → renders 1847×1108
             x% = 284/(1847-425) = 284/1422 ≈ 20% | y anchored top */
          "object-[42%_top] scale-100",
          /* Tablet (768px): Figma → 1598×888 frame, left: -328px
             Natural with object-cover on 768×888 → renders 1480×888; need scale-[1.08] → 1598×958
             x% = 328/(1598-768) = 328/830 ≈ 39.5% | y anchored top */
          "md:object-[49.5%_top] md:scale-[1.08]",
          /* Desktop (>= 1025px): approved position */
          "lg:object-[100%_15%] lg:scale-110 lg:-translate-x-[70px] lg:-translate-y-[25px]",
        ].join(" ")}
        sizes="100vw"
      />

      {/* Linear Gradient Overlay: spans 100% edge-to-edge */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-[1] bg-[linear-gradient(180deg,#FEFEFE_0%,rgba(254,254,254,0)_12%),linear-gradient(360deg,#FEFEFE_0%,rgba(193,190,179,0)_20%)]"
      />

      {/* Content Container: Centered up to 1440px */}
      <div
        id="new-chapter-banner"
        className="relative w-full max-w-[1440px] h-full mx-auto pointer-events-none"
      >
        {/* Top-Left Content: Frame 25
            - Mobile & Tablet: occupies full width between gutters (left-[clamp(20px,4.7vw,50px)] right-[clamp(20px,4.7vw,50px)])
            - Desktop (>= 1025px): pinned to top: 75px, left: 80px, width: 501px
        */}
        <motion.div
          id="new-chapter-intro"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto absolute z-[5] flex flex-col gap-[clamp(14px,1.8vw+8px,28px)] top-[clamp(32px,6vw,50px)] left-[clamp(20px,4.7vw,50px)] right-[clamp(20px,4.7vw,50px)] w-auto max-w-none lg:top-[75px] lg:left-[80px] lg:right-auto lg:w-[501px] lg:max-w-[501px]"
        >
          <header className="w-full flex flex-col gap-[clamp(10px,1vw+6px,14px)]">
            <Badge
              text="New Chapter"
              id="badge-new-chapter"
              className="w-fit"
            />

            <h2 className="font-serif font-bold italic text-[#141414] text-[clamp(28px,17.7px+2.42vw,41.62px)] leading-tight md:leading-[45px] tracking-normal m-0 w-full max-w-none lg:max-w-[501px]">
              When Success Began to Mean Something More
            </h2>
          </header>

          <p className="font-sans font-normal text-[#141414]/75 text-[clamp(14px,13.1px+0.2vw,16px)] leading-[140%] m-0 w-full max-w-none lg:max-w-[360px]">
            My corporate journey has given me opportunities to learn, lead, grow and work with some wonderful people. I am grateful for the experiences and responsibilities that had shaped me along the way.
          </p>
        </motion.div>

        {/* Bottom-Right Frosted Glass Card: Frame 44/45
            - Mobile: bottom: clamp(32px, 8vw, 44px), left/right: clamp(20px, 4.7vw, 32px), max-w-[385px]
            - Tablet (768px): bottom: 44px, right: 50px, width: 518px
            - Desktop (>= 1025px): bottom: 81px, right: 100px, width: 534px
        */}
        <motion.div
          id="new-chapter-reflection-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto absolute z-[5] rounded-[clamp(12px,0.5vw+10px,16px)] overflow-hidden bg-[#D07578]/80 backdrop-blur-[25px] border border-white/20 p-[clamp(16px,1.2vw+11px,20px)] flex flex-col gap-[clamp(6px,0.8vw+4px,10px)] shadow-[0_8px_32px_rgba(208,117,120,0.25)] bottom-[clamp(28px,6.6vw,44px)] left-[clamp(16px,3.8vw,24px)] right-[clamp(16px,3.8vw,24px)] md:left-auto md:right-[clamp(50px,calc(-7.1px+7.44vw),100px)] md:bottom-[clamp(44px,calc(1.7px+5.5vw),81px)] md:w-[clamp(518px,calc(499.7px+2.38vw),534px)] lg:right-[100px] lg:bottom-[81px] lg:w-[534px]"
        >
          <p className="font-sans font-normal text-white text-[clamp(14px,13.1px+0.2vw,16px)] leading-[130%] m-0">
            Reaching a milestone makes you look towards the next one. And sometimes, it makes you ask a completely different question. Over time, I found myself reflecting on one question:
          </p>

          <blockquote className="font-serif font-bold italic text-white text-[clamp(18px,16.7px+0.23vw,20px)] leading-[110%] m-0">
            “What if I could use what I had learnt to help many more people?”
          </blockquote>

          <div id="new-chapter-reflection-body" className="w-full flex flex-col gap-[clamp(4px,0.5vw+2px,6px)]">
            <p className="font-sans font-normal text-white text-[clamp(14px,13.1px+0.2vw,16px)] leading-[130%] m-0">
              I had been blessed with a fulfilling career and many opportunities along the way. And increasingly, I felt a desire to give back, contribute and create a wider impact.
            </p>

            <p className="font-sans font-normal text-white text-[clamp(14px,13.1px+0.2vw,16px)] leading-[130%] m-0">
              So, in 2017, I stepped away from my corporate career. Not because I was unhappy with the journey behind me. Quite the opposite.
            </p>

            <p className="font-sans font-semibold text-white text-[clamp(14px,13.1px+0.2vw,16px)] leading-[130%] m-0">
              I was ready to widen the circle of people I could impact.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
