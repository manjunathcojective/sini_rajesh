"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui";

export default function StartingOut() {
  return (
    <section
      id="starting-out-section"
      aria-label="Starting Out - Consulting Journey"
      className="w-full bg-[#FEFEFE] overflow-hidden"
    >
      {/*
        Content Container: max-width 1440px, centred
        Padding: Desktop 60px 100px | Tablet clamp | Mobile clamp
        Layout:
          Desktop (xl+)  → 2-col: [story left] [image right]
          Tablet/Mobile  → 1-col: badge → heading → image → paragraphs
      */}
      <div
        id="starting-out-container"
        className="
          w-full max-w-[1440px] mx-auto
          px-[clamp(20px,6.9vw,100px)]
          py-[clamp(40px,4.2vw,60px)]
          flex flex-col lg:flex-row
          gap-[clamp(32px,4.2vw,60px)]
          items-start lg:items-stretch
        "
      >
        {/* ── Left Column: Story ───────────────────────────────────────────── */}
        <motion.div
          id="starting-out-story"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="
            flex flex-col

            w-full lg:flex-1 min-w-0 xl:max-w-[598px]
            gap-[clamp(20px,2.5vw,32px)]
          "
        >
          {/* Header: Badge + Heading */}
          <header className="flex flex-col gap-[clamp(14px,2.1vw,30px)]">
            <Badge
              text="Starting Out"
              id="badge-starting-out"
              className="w-fit"
            />

            <h2
              className="
                font-serif font-bold italic text-[#141414]
                text-[clamp(28px,17.7px+2.42vw,41.62px)]
                leading-tight lg:leading-[45px]
                tracking-normal m-0
                w-full lg:max-w-[508px]
              "
            >
              A Business I Didn't Quite Set Out to Build
            </h2>
          </header>

          {/* ── Inline Image: visible only on Mobile & Tablet (hidden on xl+) ── */}
          <motion.div
            id="starting-out-image-inline"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="
              relative overflow-hidden
              rounded-[clamp(12px,1.1vw,24px)]
              w-full
              aspect-[1336/1000]
              group
              lg:hidden
            "
          >
            <Image
              src="/images/starting-out.png"
              alt="Starting Out - Dr. Sini Rajesh"
              fill
              className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              sizes="(max-width: 767px) calc(100vw - 40px), calc(100vw - 100px)"
            />
          </motion.div>

          {/* Content Paragraphs */}
          <div
            id="starting-out-paragraphs"
            className="flex flex-col gap-[clamp(8px,0.8vw,12px)]"
          >
            <p
              className="
                font-sans font-normal text-[#141414]/75
                text-[clamp(14px,13.1px+0.2vw,16px)]
                leading-[140%] m-0
              "
            >
              When I stepped away from my corporate career, I didn't have a
              business plan or a carefully mapped-out entrepreneurial journey
              waiting for me.
            </p>

            <p
              className="
                font-sans font-normal text-[#141414]/75
                text-[clamp(14px,13.1px+0.2vw,16px)]
                leading-[140%] m-0
              "
            >
              I simply started doing what came naturally helping people I knew
              with their people and organisational challenges. I was happy to
              share my experience, offer a different perspective and help
              wherever I could.
            </p>

            <p
              className="
                font-sans font-normal text-[#141414]/75
                text-[clamp(14px,13.1px+0.2vw,16px)]
                leading-[140%] m-0
              "
            >
              Then something interesting began to happen.
            </p>

            <p
              className="
                font-sans font-normal text-[#141414]/75
                text-[clamp(14px,13.1px+0.2vw,16px)]
                leading-[140%] m-0
              "
            >
              They valued my contribution and wanted me to become more involved.
              Eventually, they began insisting that I charge for my services and
              started referring me to other business owners who needed similar
              support. Over time, this gave me the opportunity to work with
              business owners, CXOs, leaders and organisations across different
              industries.
            </p>

            <p
              className="
                font-sans font-normal text-[#141414]/75
                text-[clamp(14px,13.1px+0.2vw,16px)]
                leading-[140%] m-0
              "
            >
              One conversation led to another, one opportunity to the next, and
              gradually, what had begun simply as a desire to contribute started
              taking the shape of a consulting practice.
            </p>

            {/* Closing italic quote */}
            <p
              className="
                font-serif font-bold italic text-[#141414]/75
                text-[clamp(16px,15px+0.17vw,20px)]
                leading-[120%] m-0 mt-[clamp(4px,0.5vw,8px)]
              "
            >
              Sometimes, the path ahead becomes clearer only after you begin
              walking it!
            </p>
          </div>
        </motion.div>

        {/* ── Right Column Image: visible only on Desktop (xl+) ────────────── */}
        <motion.div
          id="starting-out-image"
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="
            relative overflow-hidden
            rounded-[clamp(12px,1.1vw,24px)]
            hidden lg:block
            w-full lg:flex-1 min-w-0 xl:max-w-[582px]
            lg:self-stretch lg:h-auto
            group
          "
        >
          <Image
            src="/images/starting-out.png"
            alt="Starting Out - Dr. Sini Rajesh"
            fill
            className="object-cover object-[left_48%] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
            style={{ objectPosition: "left 48%" }}
            sizes="582px"
          />
        </motion.div>
      </div>
    </section>
  );
}
