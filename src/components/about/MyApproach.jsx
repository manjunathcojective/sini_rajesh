"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge, Button } from "@/components/ui";

export default function MyApproach() {
  return (
    <section
      id="my-approach-section"
      aria-label="My Approach - From Understanding Behaviour To Creating Transformation"
      className="w-full bg-[#FEFEFE] overflow-hidden"
    >
      <div
        id="approach-two-col-layout"
        className="
          w-full max-w-[1440px] mx-auto
          px-[clamp(20px,6.94vw,100px)]
          py-[clamp(40px,3.47vw,50px)]
          flex flex-col lg:flex-row
          items-center lg:items-start
          gap-[clamp(32px,4.17vw,60px)]
        "
      >
        {/* Left Column: Image (Desktop only: lg+) */}
        <motion.div
          id="approach-image-wrapper"
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="
            hidden lg:block
            relative overflow-hidden group
            w-full lg:w-[600px] lg:max-w-[600px] lg:h-[657px] lg:shrink-0
            rounded-[12px]
          "
        >
          <Image
            src="/images/my-approach.png"
            alt="My Approach - Dr. Sini Rajesh"
            fill
            className="
              object-cover object-center
              rounded-[12px]
              transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
              group-hover:scale-105
            "
            sizes="600px"
            priority
          />
        </motion.div>

        {/* Right Column: Content */}
        <div
          id="approach-content-column"
          className="
            w-full lg:flex-1 min-w-0 xl:max-w-[580px]
            flex flex-col justify-between
            gap-[clamp(24px,3vw,36px)] lg:gap-0
            lg:h-[657px]
          "
        >
          {/* Header */}
          <motion.header
            id="approach-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-[clamp(16px,1.88vw,27px)] w-full"
          >
            <Badge text="My Approach" id="badge-my-approach" className="w-fit" />

            <h2
              className="
                font-serif font-bold italic
                text-[clamp(28px,20px+1.5vw,41.62px)]
                leading-tight lg:leading-[45px]
                tracking-normal text-[#141414]
                m-0 w-full
              "
            >
              From Understanding Behaviour To Creating Transformation
            </h2>
          </motion.header>

          {/* Inline Image: visible only on Mobile & Tablet (below heading, hidden on xl+) */}
          <motion.div
            id="approach-image-inline"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="
              lg:hidden
              relative overflow-hidden group
              w-full
              aspect-[385/300]
              md:aspect-[668/657]
              rounded-[12px]
            "
          >
            <Image
              src="/images/my-approach.png"
              alt="My Approach - Dr. Sini Rajesh"
              fill
              className="
                object-cover object-center
                rounded-[12px]
                transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                group-hover:scale-105
              "
              sizes="(max-width: 1279px) 100vw, 600px"
              priority
            />
          </motion.div>

          {/* Approach Details */}
          <motion.div
            id="approach-details-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="
              flex flex-col justify-between
              gap-[clamp(24px,2vw,30px)] lg:gap-0
              w-full lg:flex-1 lg:h-auto lg:flex lg:flex-col lg:justify-between
              lg:mt-[clamp(20px,2.2vw,32px)]
            "
          >
            <div
              id="approach-tea-body"
              className="
                w-full
                pt-[clamp(14px,1.18vw,17px)]
                flex flex-col
                gap-[clamp(14px,1.39vw,20px)]
                border-t border-[#D07578]
              "
            >
              <h3
                className="
                  font-serif font-semibold italic text-[#D07578]
                  text-[clamp(20px,18px+0.54vw,25.81px)]
                  leading-tight tracking-normal m-0 w-full
                "
              >
                Knowing what to change isn’t always enough
              </h3>

              <div id="approach-tea-paragraphs" className="flex flex-col gap-2 w-full">
                <p
                  className="
                    font-sans font-normal text-[#141414]/75
                    text-[clamp(14px,13.1px+0.2vw,16px)]
                    leading-[140%] tracking-normal m-0 w-full
                  "
                >
                  We often know what we would like to change. We may want to become more confident, communicate better, respond differently to situations, develop better habits or become more effective leaders. Knowing what we want to change doesn’t always help us understand why we think, feel or behave the way we do. So I began looking at what influences our behaviour from within.
                </p>

                {/* TEA Connection Row */}
                <div id="tea-connection-row" className="flex flex-col gap-2 w-full">
                  <p
                    className="
                      font-sans font-normal text-[#141414]/75
                      text-[clamp(14px,13.1px+0.2vw,16px)]
                      leading-normal tracking-normal m-0 w-full
                    "
                  >
                    At the heart of this is a simple connection
                  </p>

                  <div
                    id="tea-four-pillars"
                    className="
                      flex flex-wrap sm:flex-nowrap
                      items-center
                      gap-x-[clamp(8px,1vw+2px,16px)]
                      gap-y-2
                      py-0
                    "
                    aria-label="Thoughts to Emotions to Actions to Results"
                  >
                    <div id="pillar-thoughts" className="flex items-center border-b border-[#D07578] pb-1 px-0.5">
                      <span className="font-serif font-bold italic text-[clamp(16px,15px+0.35vw,20px)] leading-none text-[#141414] whitespace-nowrap">
                        Thoughts
                      </span>
                    </div>

                    <svg
                      className="w-[clamp(14px,1.1vw,18px)] h-[clamp(14px,1.1vw,18px)] text-[#D07578] shrink-0 -translate-y-[2px]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                      <path d="m13 6 6 6-6 6" />
                    </svg>

                    <div id="pillar-emotions" className="flex items-center border-b border-[#D07578] pb-1 px-0.5">
                      <span className="font-serif font-bold italic text-[clamp(16px,15px+0.35vw,20px)] leading-none text-[#141414] whitespace-nowrap">
                        Emotions
                      </span>
                    </div>

                    <svg
                      className="w-[clamp(14px,1.1vw,18px)] h-[clamp(14px,1.1vw,18px)] text-[#D07578] shrink-0 -translate-y-[2px]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                      <path d="m13 6 6 6-6 6" />
                    </svg>

                    <div id="pillar-actions" className="flex items-center border-b border-[#D07578] pb-1 px-0.5">
                      <span className="font-serif font-bold italic text-[clamp(16px,15px+0.35vw,20px)] leading-none text-[#141414] whitespace-nowrap">
                        Actions
                      </span>
                    </div>

                    <svg
                      className="w-[clamp(14px,1.1vw,18px)] h-[clamp(14px,1.1vw,18px)] text-[#D07578] shrink-0 -translate-y-[2px]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                      <path d="m13 6 6 6-6 6" />
                    </svg>

                    <div id="pillar-results" className="flex items-center border-b border-[#D07578] pb-1 px-0.5">
                      <span className="font-serif font-bold italic text-[clamp(16px,15px+0.35vw,20px)] leading-none text-[#141414] whitespace-nowrap">
                        Results
                      </span>
                    </div>
                  </div>
                </div>

                <p
                  className="
                    font-sans font-normal text-[#141414]/75
                    text-[clamp(14px,13.1px+0.2vw,16px)]
                    leading-[140%] tracking-normal m-0 w-full
                  "
                >
                  This understanding became the foundation for{" "}
                  <span className="font-sans font-semibold  text-[#141414]/85">
                    <em>The TEA of Your Life</em>
                  </span>{" "}
                  and my signature program:{" "}
                  <span className="font-sans font-semibold text-[#141414]/85">
                    Ignite Your Inner Power – The TEA of Your Life
                  </span>
                  .
                </p>

                <p
                  className="
                    font-sans font-normal text-[#141414]/75
                    text-[clamp(14px,13.1px+0.2vw,16px)]
                    leading-[140%] tracking-normal m-0 w-full
                  "
                >
                  TEA helps people develop greater awareness of themselves – their thoughts, beliefs, emotions and responses – so they can begin creating change from within rather than simply trying to change what appears on the surface.
                </p>

                <p
                  className="
                    font-sans font-normal text-[#141414]/75
                    text-[clamp(14px,13.1px+0.2vw,16px)]
                    leading-[140%] tracking-normal m-0 w-full
                  "
                >
                  Because lasting transformation isn’t only about changing what you do.<br /><strong><em>It begins with understanding what is driving you to do it.</em></strong>
                </p>
              </div>
            </div>

            {/* Discover TEA Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.36, 1] }}
              className="pt-2 lg:pt-0 lg:mt-auto"
            >
              <Button
                id="btn-discover-tea"
                href="/contact"
                className="w-[283px] max-w-full"
                ariaLabel="Discover The TEA of Your Life"
              >
                Discover The TEA of Your Life
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
