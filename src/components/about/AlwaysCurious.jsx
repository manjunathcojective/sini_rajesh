"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui";

export default function AlwaysCurious() {
  return (
    <section
      id="always-curious-section"
      aria-label="Always Curious"
      className="w-full bg-[#FEFEFE] overflow-hidden"
    >
      {/*
        Desktop (xl / 1440px):
          - Section padding: 60px top/bottom, 100px left/right
          - 3-col flex row, gap: 40px
          - Col 1: 319px wide, full height (557px), flex-col, gap: 30px
          - Col 2: 400px wide, full height (557px), image, border-radius: 24px
          - Col 3: 441px wide, 362px tall, align-self: flex-end, gap: 13.5px

        Tablet / Mobile: described by user — TBD
      */}
      <div
        id="always-curious-container"
        className="
          w-full max-w-[1440px] mx-auto
          px-[clamp(20px,6.9vw,100px)]
          py-[clamp(40px,4.2vw,60px)]
          flex flex-col lg:grid lg:grid-cols-[319fr_400fr_441fr]
          items-start
          gap-[clamp(16px,2.78vw,40px)]
        "
      >
        {/* ── Column 1: Badge + Heading + Body ───────────────────────────── */}
        <motion.div
          id="curious-intro-column"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="
            flex flex-col
            w-full min-w-0 lg:max-w-[319px]
            gap-[clamp(16px,2.08vw,30px)]
          "
        >
          <Badge
            text="Always Curious"
            id="badge-always-curious"
            className="w-fit"
          />

          <div id="curious-heading-group" className="flex flex-col gap-[clamp(12px,1.39vw,20px)]">
            <h2
              className="
                font-serif font-bold italic text-[#141414]
                text-[clamp(28px,17.7px+2.42vw,41.62px)]
                leading-tight lg:leading-[45px]
                tracking-normal m-0
                w-full
              "
            >
              Curiosity Has Always Taken Me Somewhere New
            </h2>

            <p
              className="
                font-sans font-normal text-[#141414]/75
                text-[clamp(14px,13.1px+0.2vw,16px)]
                leading-[140%] m-0
                w-full
              "
            >
              During my early consulting days, I would visit client organisations
              every week or fortnight. Over time, I began noticing something
              rather special. People would often tell me they looked forward to
              the days I visited them, and sometimes even ask why I couldn't come
              more often.
            </p>
          </div>
        </motion.div>

        {/* ── Column 2: Center Image ──────────────────────────────────────── */}
        <motion.div
          id="curious-center-image"
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="
            relative overflow-hidden group
            rounded-[clamp(12px,3.125vw,24px)]
            w-full min-w-0 lg:max-w-[400px]
            aspect-[668/500] lg:aspect-[400/557]
          "
        >
          {/* Mobile & Tablet: Wide version (full uncropped stage photo) */}
          <Image
            src="/images/always-curious-wide.jpg"
            alt="Always Curious - Dr. Sini Rajesh"
            fill
            className="lg:hidden object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
            sizes="(max-width: 1023px) 100vw, 1px"
          />

          {/* Desktop & Laptop (lg+): Approved original portrait version */}
          <Image
            src="/images/always-curious.png"
            alt="Always Curious - Dr. Sini Rajesh"
            fill
            className="hidden lg:block object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
            sizes="(max-width: 1279px) 290px, 400px"
          />
        </motion.div>

        {/* ── Column 3: Insight & Learning (aligned to bottom on desktop) ── */}
        <motion.div
          id="curious-insight-column"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="
            flex flex-col
            w-full min-w-0 lg:max-w-[441px]
            lg:self-end
            gap-[clamp(10px,0.94vw,13.5px)]
          "
        >
          {/* "It made me wonder:" */}
          <h3
            className="
              font-serif font-bold italic text-[#D07578]
              text-[clamp(22px,18px+0.6vw,32.77px)]
              leading-[100%] m-0
              w-full
            "
          >
            It made me wonder:
          </h3>

          {/* Divider block */}
          <div
            id="curious-insight-content"
            className="
              flex flex-col
              w-full
              gap-[clamp(6px,0.56vw,8px)]
              border-t border-[#D07578]
              pt-[clamp(12px,1.11vw,16px)]
            "
          >
            <h4
              className="
                font-serif font-bold italic text-[#D07578]
                text-[clamp(16px,14.7px+0.23vw,20px)]
                leading-[100%] m-0
                w-full
              "
            >
              What was creating that sense of happiness and connection?
            </h4>

            <div
              id="curious-learning-paragraphs"
              className="flex flex-col gap-[clamp(4px,0.21vw,3px)]"
            >
              <p
                className="
                  font-sans font-normal text-[#141414]/75
                  text-[clamp(14px,13.1px+0.2vw,16px)]
                  leading-[140%] m-0
                  w-full
                "
              >
                That question sparked another journey of learning. I began
                exploring happiness more deeply and eventually became a Certified
                Happiness Coach.
              </p>

              <p
                className="
                  font-sans font-normal text-[#141414]/75
                  text-[clamp(14px,13.1px+0.2vw,16px)]
                  leading-[140%] m-0
                  w-full
                "
              >
                And my curiosity didn't stop there. One area of learning
                naturally led me to another: Coaching, NLP, Mindset, Human
                Behaviour, Leadership and Personal Transformation. Each helped me
                understand people from a different perspective and added another
                dimension to the way I worked with them.
              </p>

              {/* Way-of-life closing block */}
              <div className="flex flex-col gap-[1.2px]">
                <p
                  className="
                    font-sans font-normal text-[#141414]/75
                    text-[clamp(14px,13.1px+0.2vw,16px)]
                    leading-[130%] m-0
                  "
                >
                  What began as professional learning gradually became something
                  much more personal too.
                </p>
                <p
                  className="
                    font-serif font-bold italic text-[#141414]
                    text-[clamp(16px,14.7px+0.23vw,20px)]
                    leading-[120%] m-0
                  "
                >
                  It became a way of life.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
