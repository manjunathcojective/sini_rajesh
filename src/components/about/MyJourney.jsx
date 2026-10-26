"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui";

export default function MyJourney() {
  return (
    <section
      id="my-journey"
      aria-label="My Professional Journey"
      className="relative w-full overflow-hidden bg-[#FEFEFE] flex justify-center py-[clamp(40px,4vw,60px)]"
    >
      {/* Outer Layout: Fluid container centered up to 1440px with fluid gutters */}
      <div className="w-full max-w-[1440px] px-[clamp(20px,6.26px+3.66vw,60px)] flex justify-center items-center">
        <div
          id="journey-content-grid"
          className="w-full flex flex-col lg:grid lg:grid-cols-[1fr_520px] lg:grid-rows-[auto_1fr] lg:gap-x-[clamp(32px,3vw+16px,80px)] xl:gap-x-[139px] items-start lg:items-stretch gap-y-6 sm:gap-y-8 lg:gap-y-0"
        >
          {/* 1. Top Area: Badge, Section Heading & Subtext */}
          <motion.header
            id="journey-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:max-w-[621px] flex flex-col gap-[clamp(12px,1.2vw+6px,16px)] lg:col-start-1 lg:row-start-1"
          >
            <Badge
              text="My Journey"
              color="#D07578"
              className="[&>span:last-child]:text-[clamp(16px,14.59px+0.375vw,20px)] [&>span:first-child]:w-[clamp(5px,4.6px+0.1vw,6px)] [&>span:first-child]:h-[clamp(5px,4.6px+0.1vw,6px)]"
            />

            <h2 className="font-serif font-bold italic text-[#141414] text-[clamp(28px,20px+2.15vw,41.62px)] leading-tight lg:leading-[45px] tracking-normal m-0">
              Every Journey Begins Somewhere
            </h2>

            <p className="font-sans font-normal text-[#141414]/75 text-[clamp(14px,13.3px+0.188vw,16px)] leading-[140%] m-0">
              Mine began with curiosity, a willingness to learn, and six simple words that have stayed with me throughout my life:
            </p>
          </motion.header>

          {/* 2. Image: In desktop, stretches to full height of adjacent content (at 1141px+, cropping center); in mobile/tablet, full-width between header & quote */}
          <motion.div
            id="journey-image-wrapper"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="group relative w-full lg:w-[520px] aspect-[1336/1000] lg:aspect-auto h-auto lg:h-full lg:min-h-[556px] lg:self-stretch rounded-[12px] overflow-hidden shrink-0 shadow-[0_8px_30px_rgba(0,0,0,0.04)] my-1 sm:my-2 lg:my-0 lg:col-start-2 lg:row-start-1 lg:row-span-2"
          >
            <Image
              src="/images/my-story-my-journey.png"
              alt="My Story - My Journey"
              fill
              priority
              className="object-cover object-[center_15%] lg:object-[center_31%] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 520px"
            />
          </motion.div>

          {/* 3. Bottom Area: Quote & Narrative Story (starts with border-top: 1px solid rgba(208, 117, 120, 1)) */}
          <motion.div
            id="journey-quote-body"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:max-w-[621px] border-t border-[#D07578] pt-[clamp(16px,1.5vw+10px,20px)] flex flex-col gap-[clamp(20px,2vw+10px,30px)] lg:col-start-1 lg:row-start-2 lg:self-end lg:mt-[clamp(24px,2.5vw,36px)]"
          >
            {/* Quote Title */}
            <h3 className="font-serif font-semibold italic text-[#D07578] text-[clamp(20px,18px+0.54vw,25.81px)] leading-tight m-0">
              “Let me give it a try”
            </h3>

            {/* Paragraphs Container */}
            <div id="journey-paragraphs" className="w-full flex flex-col gap-[clamp(10px,1vw+4px,14px)]">
              <p className="font-sans font-normal text-[#141414]/75 text-[clamp(14px,13.3px+0.188vw,16px)] leading-[145%] m-0">
                My professional journey began as a trainee in the manufacturing industry. From there, life and work took me through different roles, responsibilities and industries—from Automation, Power &amp; Energy and IT to Real Estate and beyond.
              </p>

              <p className="font-sans font-normal text-[#141414]/75 text-[clamp(14px,13.3px+0.188vw,16px)] leading-[145%] m-0">
                I didn’t begin with a carefully mapped-out career plan. What I did have was a willingness to say yes to new responsibilities, explore unfamiliar territory and step beyond what was comfortable whenever an opportunity to learn came my way.
              </p>

              <p className="font-sans font-normal text-[#141414]/75 text-[clamp(14px,13.3px+0.188vw,16px)] leading-[145%] m-0">
                Each experience taught me something different not only about business and organisations, but also about people, leadership and myself.
              </p>

              {/* Approach Container */}
              <div id="journey-approach-container" className="w-full flex flex-col gap-[clamp(12px,1.2vw+6px,16px)] pt-2">
                <p className="font-sans font-normal text-[#141414] text-[clamp(14px,13.3px+0.188vw,16px)] leading-snug m-0">
                  Looking back, a simple approach that has remained with me throughout my journey:
                </p>

                {/* 4 Approach Badges */}
                <div
                  id="journey-approach-badges"
                  className="flex flex-wrap items-center gap-[clamp(10px,1.2vw+6px,17px)] w-full"
                >
                  <Badge
                    id="badge-learn"
                    text="Learn"
                    color="#141414"
                    className="border-b border-[#D07578] px-2 pb-1 [&>span:last-child]:text-[clamp(14px,12.59px+0.375vw,18px)] [&>span:first-child]:w-[clamp(5px,4.6px+0.1vw,6px)] [&>span:first-child]:h-[clamp(5px,4.6px+0.1vw,6px)]"
                  />
                  <Badge
                    id="badge-experience"
                    text="Experience"
                    color="#141414"
                    className="border-b border-[#D07578] px-2 pb-1 [&>span:last-child]:text-[clamp(14px,12.59px+0.375vw,18px)] [&>span:first-child]:w-[clamp(5px,4.6px+0.1vw,6px)] [&>span:first-child]:h-[clamp(5px,4.6px+0.1vw,6px)]"
                  />
                  <Badge
                    id="badge-contribute"
                    text="Contribute"
                    color="#141414"
                    className="border-b border-[#D07578] px-2 pb-1 [&>span:last-child]:text-[clamp(14px,12.59px+0.375vw,18px)] [&>span:first-child]:w-[clamp(5px,4.6px+0.1vw,6px)] [&>span:first-child]:h-[clamp(5px,4.6px+0.1vw,6px)]"
                  />
                  <Badge
                    id="badge-growth"
                    text="Keep Growing."
                    color="#141414"
                    className="border-b border-[#D07578] px-2 pb-1 [&>span:last-child]:text-[clamp(14px,12.59px+0.375vw,18px)] [&>span:first-child]:w-[clamp(5px,4.6px+0.1vw,6px)] [&>span:first-child]:h-[clamp(5px,4.6px+0.1vw,6px)]"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
