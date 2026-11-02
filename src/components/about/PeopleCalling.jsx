"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PeopleCalling() {
  return (
    <section
      id="people-calling-section"
      aria-label="When People Became My Calling"
      className="relative w-full overflow-hidden bg-[#FEFEFE] flex justify-center py-[clamp(40px,4vw,60px)]"
    >
      {/* Outer Layout: Fluid container centered up to 1440px with fluid gutters */}
      <div className="w-full max-w-[1440px] px-[clamp(20px,6.26px+3.66vw,60px)] lg:px-[80px] flex justify-center items-center">
        {/* Card: Frame 43 (1280 x 552 on desktop, border 1px solid #D07578/50, rounded 24px) */}
        <motion.div
          id="people-calling-card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full border border-[#D07578]/50 rounded-[clamp(16px,2vw,24px)] overflow-hidden flex flex-col lg:flex-row items-stretch bg-[#FEFEFE]"
        >
          {/* Left Image: In desktop, width 480px stretching to full height; in mobile/tablet, full-width with 1:1.332 ratio (aspect-[1332/1000]) */}
          <div
            id="people-calling-image"
            className="group relative w-full lg:w-[480px] lg:min-w-[420px] xl:w-[480px] aspect-[1332/1000] lg:aspect-auto h-auto lg:h-auto lg:min-h-[552px] lg:self-stretch overflow-hidden shrink-0"
          >
            <Image
              src="/images/people-calling.png"
              alt="People Calling"
              fill
              priority
              className="object-cover object-[center_20%] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 480px"
            />
          </div>

          {/* Right Content */}
          <motion.div
            id="people-calling-content"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex flex-col justify-between p-[clamp(20px,3vw+10px,40px)] lg:p-[45px] xl:p-[50px] gap-[clamp(24px,2.5vw+12px,40px)]"
          >
            {/* Title */}
            <h2 className="font-serif font-bold italic text-[#141414] text-[clamp(28px,20px+2.15vw,41.62px)] leading-tight lg:leading-[45px] tracking-normal m-0 w-full max-w-[560px]">
              When People Became My Calling
            </h2>

            {/* Subtitle & Story Container */}
            <div
              id="people-calling-body"
              className="w-full border-t border-[#D07578] pt-[clamp(16px,1.5vw+10px,20px)] flex flex-col gap-[clamp(20px,2vw+10px,36px)]"
            >
              <h3 className="font-serif font-semibold italic text-[#D07578] text-[clamp(20px,18px+0.54vw,25.81px)] leading-tight m-0">
                Interestingly, my journey into HR didn’t begin with an HR title
              </h3>

              <div id="people-calling-paragraphs" className="w-full flex flex-col gap-[clamp(8px,0.8vw+4px,12px)]">
                <p className="font-sans font-normal text-[#141414]/75 text-[clamp(14px,13.3px+0.188vw,16px)] leading-[140%] m-0">
                  While working as an Operations Head with an IT services company in Bangalore, I noticed something interesting. Even though we had an HR team, employees would often come to me not only when they had a concern or needed help finding a way forward, but also when they had something happy to share.
                </p>
                <p className="font-sans font-normal text-[#141414]/75 text-[clamp(14px,13.3px+0.188vw,16px)] leading-[140%] m-0">
                  I found myself doing what came naturally to me listening, understanding, helping and finding solutions. And somewhere along the way, I realised something very simple: <strong>People energised me</strong>.
                </p>
                <p className="font-sans font-normal text-[#141414]/75 text-[clamp(14px,13.3px+0.188vw,16px)] leading-[140%] m-0">
                  That realisation eventually led me into Human Resources, where I went on to take on larger responsibilities and leadership roles, eventually becoming an HR Director.
                </p>
                <p className="font-sans font-normal text-[#141414]/75 text-[clamp(14px,13.3px+0.188vw,16px)] leading-[140%] m-0">
                  It was an enriching journey—one that gave me the opportunity to work closely with people, leaders and organisations, and deepened my understanding of what enables people and businesses to grow.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
