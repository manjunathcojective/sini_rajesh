"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui";

export default function VisionMission() {
  return (
    <section
      id="vision-mission-section"
      aria-label="Vision and Mission"
      className="relative w-full overflow-hidden bg-[#FEFEFE] min-h-[700px] flex items-center justify-center"
    >
      {/* Background Image with Dual Gradient Overlay */}
      <div
        id="vision-mission-bg"
        className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none"
      >
        <Image
          src="/images/vision-mission.png"
          alt="Vision & Mission - Dr. Sini Rajesh"
          fill
          className="object-cover object-center"
          priority
        />
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            background:
              "linear-gradient(180deg, #FEFEFE 0%, rgba(240, 237, 228, 0) 9.38%), linear-gradient(0deg, #FEFEFE -0.12%, rgba(240, 237, 228, 0) 7.88%)",
          }}
        />
      </div>

      {/* Main Content Container */}
      <div
        id="vision-mission-container"
        className="
          w-full max-w-[1440px] mx-auto
          px-[clamp(20px,6.94vw,100px)]
          py-[clamp(40px,4.5vw,65px)]
          relative z-10
          flex flex-col items-center
          gap-[clamp(28px,3.5vw,48px)]
        "
      >
        {/* Header */}
        <motion.header
          id="vision-mission-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center gap-[clamp(12px,1.39vw,16px)] max-w-[614px] w-full"
        >
          <Badge text="Vision & Mission" id="badge-vision-mission" className="w-fit" />

          <h2
            className="
              font-serif font-bold italic text-[#141414]
              text-[clamp(28px,20px+1.5vw,41.62px)]
              leading-tight lg:leading-[45px]
              tracking-normal text-center m-0 w-full
            "
          >
            What Guides My Work Today?
          </h2>

          <p
            className="
              font-sans font-normal text-[#141414]/75
              text-[clamp(14px,13.1px+0.2vw,16px)]
              leading-[140%] text-center m-0 w-full
            "
          >
            My journey has evolved in ways I could never have imagined. Through it all, my Vision and Mission are the guiding lights that continue to shape the path ahead.
          </p>
        </motion.header>

        {/* Vision & Mission Cards Row (Staggered on Desktop, Stacked on Mobile/Tablet) */}
        <div
          id="vision-mission-cards-wrapper"
          className="
            w-full
            flex flex-col lg:flex-row
            justify-center lg:justify-between
            items-center
            gap-[clamp(20px,2.5vw,32px)] lg:gap-[40px]
            pt-[clamp(10px,1.5vw,20px)]
          "
        >
          {/* Vision Card (Left on tablet/desktop, centered on mobile) */}
          <motion.article
            id="card-my-vision"
            initial={{ opacity: 0, x: -30, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="
              group
              box-border
              w-full max-w-[385px] md:max-w-[518px]
              min-h-[186px]
              p-[clamp(16px,2vw,20px)]
              flex flex-col justify-between
              gap-[clamp(16px,1.8vw,24px)]
              rounded-[12px]
              bg-[#D07578]/75
              backdrop-blur-[40px]
              border border-white/35
              shadow-[0_8px_32px_rgba(255,255,255,0.35),0_2px_10px_rgba(0,0,0,0.06)]
              transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
              hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(255,255,255,0.5),0_4px_14px_rgba(0,0,0,0.08)]
              self-center md:self-start lg:ml-[20px] xl:ml-[30px]
            "
          >
            <div className="flex justify-between items-start w-full">
              <h3 className="font-serif font-semibold italic text-white text-[clamp(20px,18px+0.4vw,25.81px)] leading-none m-0">
                MY VISION
              </h3>
              <div
                className="w-10 h-10 shrink-0 opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                aria-hidden="true"
              >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 26.6668V16.6668H13.1833C12.7879 14.3393 11.5825 12.2264 9.78005 10.7015C7.97764 9.17661 5.69425 8.33788 3.33333 8.33349V5.00016C6.86833 5.00413 10.2574 6.41016 12.757 8.90979C15.2567 11.4094 16.6627 14.7985 16.6667 18.3335V33.3335H6.66667C4.89856 33.3335 3.20286 32.6311 1.95262 31.3809C0.702379 30.1306 0 28.4349 0 26.6668Z" fill="white"/>
                  <path d="M30 33.3335C28.2319 33.3335 26.5362 32.6311 25.2859 31.3809C24.0357 30.1306 23.3333 28.4349 23.3333 26.6668V16.6668H36.5166C36.1212 14.3393 34.9158 12.2264 33.1134 10.7015C31.311 9.17661 29.0276 8.33788 26.6666 8.33349V5.00016C30.2016 5.00413 33.5907 6.41016 36.0904 8.90979C38.59 11.4094 39.996 14.7985 40 18.3335V33.3335H30Z" fill="white"/>
                </svg>
              </div>
            </div>

            <p className="font-sans font-light text-white/95 text-[clamp(14px,13.1px+0.2vw,16px)] leading-[140%] m-0 w-full">
              To ignite minds and empower individuals and organisations to realize their true potential, rooted in clarity and confidence, while pruning limiting beliefs to create a positive and lasting impact.
            </p>
          </motion.article>

          {/* Mission Card (Right on tablet/desktop, centered on mobile) */}
          <motion.article
            id="card-my-mission"
            initial={{ opacity: 0, x: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="
              group
              box-border
              w-full max-w-[385px] md:max-w-[518px]
              min-h-[186px]
              p-[clamp(16px,2vw,20px)]
              flex flex-col justify-between
              gap-[clamp(16px,1.8vw,24px)]
              rounded-[12px]
              bg-[#D07578]/75
              backdrop-blur-[40px]
              border border-white/35
              shadow-[0_8px_32px_rgba(255,255,255,0.35),0_2px_10px_rgba(0,0,0,0.06)]
              transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
              hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(255,255,255,0.5),0_4px_14px_rgba(0,0,0,0.08)]
              self-center md:self-end lg:mr-[20px] xl:mr-[30px] lg:mt-[90px] xl:mt-[116px]
            "
          >
            <div className="flex justify-between items-start w-full">
              <h3 className="font-serif font-semibold italic text-white text-[clamp(20px,18px+0.4vw,25.81px)] leading-none m-0">
                MY MISSION
              </h3>
              <div
                className="w-10 h-10 shrink-0 opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                aria-hidden="true"
              >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 26.6668V16.6668H13.1833C12.7879 14.3393 11.5825 12.2264 9.78005 10.7015C7.97764 9.17661 5.69425 8.33788 3.33333 8.33349V5.00016C6.86833 5.00413 10.2574 6.41016 12.757 8.90979C15.2567 11.4094 16.6627 14.7985 16.6667 18.3335V33.3335H6.66667C4.89856 33.3335 3.20286 32.6311 1.95262 31.3809C0.702379 30.1306 0 28.4349 0 26.6668Z" fill="white"/>
                  <path d="M30 33.3335C28.2319 33.3335 26.5362 32.6311 25.2859 31.3809C24.0357 30.1306 23.3333 28.4349 23.3333 26.6668V16.6668H36.5166C36.1212 14.3393 34.9158 12.2264 33.1134 10.7015C31.311 9.17661 29.0276 8.33788 26.6666 8.33349V5.00016C30.2016 5.00413 33.5907 6.41016 36.0904 8.90979C38.59 11.4094 39.996 14.7985 40 18.3335V33.3335H30Z" fill="white"/>
                </svg>
              </div>
            </div>

            <p className="font-sans font-light text-white/95 text-[clamp(14px,13.1px+0.2vw,16px)] leading-[140%] m-0 w-full">
              To ignite minds, unlock potential, and empower transformation through The TEA of Your Life, coaching, mentoring, leadership development, and organisational development interventions.
            </p>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
