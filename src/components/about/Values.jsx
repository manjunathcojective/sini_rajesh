"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui";

const CORE_VALUES = [
  {
    id: "value-growth",
    title: "Growth:",
    desc: "Be a Lifelong Learner",
  },
  {
    id: "value-honesty",
    title: "Honesty:",
    desc: "Own Your Integrity Even When No One is Watching",
  },
  {
    id: "value-clarity",
    title: "Clarity:",
    desc: "Align Your Thoughts, Words & Actions",
  },
  {
    id: "value-compassion",
    title: "Compassion:",
    desc: "Passion with a Heart",
  },
  {
    id: "value-celebration",
    title: "Celebration:",
    desc: "Celebrate Every Step Forward, No Matter How Small",
  },
  {
    id: "value-contribution",
    title: "Contribution:",
    desc: "Give Back to Society and the Causes You Believe In",
  },
];

export default function Values() {
  return (
    <section
      id="values-section"
      aria-label="Core Values that Guide Me"
      className="w-full bg-[#FEFEFE] overflow-hidden"
    >
      <div
        id="values-content-container"
        className="
          w-full max-w-[1440px] mx-auto
          px-[clamp(20px,6.94vw,100px)]
          py-[clamp(40px,4.5vw,60px)]
          flex flex-col lg:flex-row
          items-start lg:items-stretch
          justify-between
          gap-[clamp(32px,4vw,60px)]
        "
      >
        {/* Left Column: Values List */}
        <motion.div
          id="values-list-column"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="
            w-full lg:flex-1 min-w-0 xl:max-w-[621px]
            flex flex-col justify-between
            gap-[clamp(24px,2.5vw,36px)]
          "
        >
          {/* Header */}
          <header className="flex flex-col gap-[clamp(16px,2vw,24px)] w-full">
            <div id="values-badge-group" className="flex flex-col items-start gap-[clamp(12px,1.5vw,20px)] w-full">
              <Badge text="Values" id="badge-values" className="w-fit" />
              <h2
                className="
                  font-serif font-bold italic text-[#141414]
                  text-[clamp(28px,20px+1.5vw,41.62px)]
                  leading-tight lg:leading-[45px]
                  tracking-normal m-0 w-full
                "
              >
                The Values I Choose To Live &amp; Work By
              </h2>
            </div>

            <p
              className="
                font-sans font-normal text-[#141414]/75
                text-[clamp(14px,13.1px+0.2vw,16px)]
                leading-[140%] m-0 w-full
              "
            >
              What we achieve matters. But I believe how we achieve it matters just as much. These six values guide the way I live, learn, work, and contribute.
            </p>
          </header>

          {/* Inline Image: visible only on Mobile & Tablet (below sentence, hidden on lg+) */}
          <motion.div
            id="values-image-inline"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="
              lg:hidden
              relative overflow-hidden group
              w-full
              aspect-[621/485]
              rounded-[24px]
            "
          >
            <Image
              src="/images/values.png"
              alt="Values that Guide Me - Dr. Sini Rajesh"
              fill
              className="
                object-cover object-center
                rounded-[24px]
                transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                group-hover:scale-105
              "
              sizes="(max-width: 1023px) 100vw, 621px"
              priority
            />
          </motion.div>

          {/* 6 Core Values */}
          <ul id="values-items-list" className="flex flex-col gap-[clamp(6px,0.8vw,10px)] w-full list-none p-0 m-0" role="list">
            {CORE_VALUES.map((val) => (
              <li
                key={val.id}
                id={val.id}
                className="
                  inline-flex items-center gap-3
                  py-[clamp(6px,0.7vw,9px)] px-[6px]
                  border-b border-[#D07578]/25
                  w-fit max-w-full
                "
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#141414] shrink-0" aria-hidden="true" />
                <span
                  className="
                    font-serif font-normal italic
                    text-[clamp(16.5px,15.5px+0.3vw,20px)]
                    leading-snug text-[#141414] m-0
                  "
                >
                  <strong className="font-bold">{val.title}</strong> {val.desc}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right Column: Values Image (Desktop only) */}
        <motion.div
          id="values-image-wrapper"
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="
            hidden lg:block
            relative overflow-hidden group
            w-full lg:flex-1 min-w-0 xl:max-w-[521px]
            lg:self-stretch lg:h-auto
            rounded-[24px]
          "
        >
          <Image
            src="/images/values.png"
            alt="Values that Guide Me - Dr. Sini Rajesh"
            fill
            className="
              object-cover object-center
              rounded-[24px]
              transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
              group-hover:scale-105
            "
            sizes="(max-width: 1440px) 50vw, 521px"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
