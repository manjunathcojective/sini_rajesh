"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HowCanIHelp() {
  return (
    <section
      id="how-can-i-help-section"
      className="w-full flex justify-center overflow-hidden bg-[#FEFEFE] relative"
      aria-labelledby="help-heading"
    >
      <div
        id="help-container"
        className="relative flex flex-col items-center justify-between md:block overflow-hidden w-full max-w-[1440px] min-h-[720px] sm:min-h-[780px] md:min-h-[860px] lg:min-h-[740px] px-fluid-gutter pt-[clamp(30px,4vw,60px)] pb-[clamp(40px,4vw+10px,60px)] lg:pt-[50px] lg:pb-[60px]"
      >
        {/* Background Images & Gradient Overlay */}
        <div className="absolute inset-0 pointer-events-none w-full h-full overflow-hidden">
          {/* Desktop Background Image (1201px+) */}
          <div className="hidden lg:block absolute inset-y-0 left-[-300px] w-[calc(100%+300px)] h-full">
            <Image
              src="/images/how-can-i-help-bg.png"
              alt="How Can I Help Background"
              fill
              priority
              className="object-cover object-[100%_center]"
            />
          </div>
          {/* Tablet & Mobile Background Image (< 1201px) */}
          <div className="block lg:hidden absolute inset-0 w-full h-full overflow-hidden">
            <Image
              src="/images/how-can-i-help-tablet-bg.jpg"
              alt="How Can I Help Background"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
          {/* Dual Gradient Overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, #FEFEFE 0%, rgba(193, 190, 179, 0) 40.5%), linear-gradient(360deg, #FEFEFE 0%, rgba(193, 190, 179, 0) 23.5%)",
            }}
          />
        </div>

        {/* Content Container */}
        <div
          id="help-content-wrapper"
          className="relative z-10 w-full h-full flex flex-col justify-between md:block max-w-[1280px] mx-auto"
        >
          {/* Heading Block */}
          <motion.div
            id="help-heading-block"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative -top-6 sm:-top-8 md:absolute md:top-[-6px] lg:top-[-6px] md:left-[clamp(30px,4.5vw,50px)] lg:left-[80px] w-full max-w-[387px] flex flex-col gap-2.5"
          >
            <div
              id="help-title-group"
              className="flex flex-col w-full max-w-[332px] gap-1.5"
            >
              {/* Badge */}
              <div id="help-badge" className="flex items-center gap-2.5 h-[13px]">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#D07578] shrink-0"
                  aria-hidden="true"
                />
                <span className="font-serif font-bold italic text-[#D07578] text-[clamp(18px,16px+0.35vw,20px)] leading-none whitespace-nowrap">
                  How can I help?
                </span>
              </div>

              {/* Main Heading */}
              <h2
                id="help-heading"
                className="font-serif font-bold italic text-[#141414] text-[clamp(28px,20px+2.15vw,41.62px)] leading-[1.08] m-0 flex items-center whitespace-nowrap"
              >
                Igniting Mindz!
              </h2>
            </div>

            {/* Description Paragraph */}
            <p className="w-full max-w-[387px] font-sans font-normal text-[#141414]/75 lg:text-[#141414] text-[clamp(14px,13.2px+0.25vw,16px)] leading-[1.3] m-0">
              Igniting Mindz was born from a belief that has guided much of my
              life and work: When you ignite a mind, you open the door to
              possibilities.
            </p>
          </motion.div>

          {/* Glassmorphism Card */}
          <motion.div
            id="help-glass-card"
            initial={{ opacity: 0, y: 35, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="group/card relative mt-[clamp(130px,18vw,180px)] md:mt-0 md:absolute md:top-[420px] md:right-0 lg:top-[285px] lg:right-[-16px] xl:right-[-50px] lg:left-auto w-full max-w-[518px] h-auto flex flex-col justify-between gap-4 sm:gap-5 rounded-[12px] p-4 sm:p-5 bg-[#D07578]/50 backdrop-blur-[25px] cursor-default select-text"
          >
            {/* Top Text in Glass Card */}
            <motion.div
              id="help-card-upper"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-col w-full max-w-[478px] gap-2"
            >
              <p className="w-full font-sans font-light text-white text-[clamp(13px,12.5px+0.2vw,15px)] leading-[1.38] m-0">
                It is the platform through which I bring together my work in
                personal transformation, mentoring, leadership development, HR,
                and Organisation Development. While the interventions may be
                different, the purpose remains the same:
              </p>

              <blockquote className="w-full font-sans font-semibold text-white text-[clamp(13px,12.5px+0.2vw,15px)] leading-[1.38] m-0 not-italic">
                “To inspire people, discover what is possible, build the confidence and capability to pursue it, and create transformation that makes a meaningful difference.”
              </blockquote>
            </motion.div>

            {/* Bullet Points in Glass Card */}
            <div id="help-pillars-list" className="flex flex-col w-full max-w-[478px] gap-2 sm:gap-2.5">
              {/* Item 1 */}
              <motion.div
                id="help-pillar-1"
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="group/item flex items-center gap-2.5 w-full max-w-full lg:max-w-[273px] min-h-[22px] pb-2 sm:pb-2.5 border-b border-white/25 cursor-default transition-colors hover:bg-white/5 rounded px-1.5"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-white shrink-0 transition-transform duration-300 group-hover/item:scale-125 group-hover/item:shadow-[0_0_4px_rgba(255,255,255,0.8)]" />
                <div className="font-sans font-normal text-white text-[clamp(13px,12.5px+0.2vw,14px)] md:text-[15px] lg:text-[14px] leading-tight lg:whitespace-nowrap select-text">
                  When individuals grow, leaders evolve
                </div>
              </motion.div>

              {/* Item 2 */}
              <motion.div
                id="help-pillar-2"
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="group/item flex items-center gap-2.5 w-full max-w-full lg:max-w-[326px] min-h-[22px] pb-2 sm:pb-2.5 border-b border-white/25 cursor-default transition-colors hover:bg-white/5 rounded px-1.5"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-white shrink-0 transition-transform duration-300 group-hover/item:scale-125 group-hover/item:shadow-[0_0_4px_rgba(255,255,255,0.8)]" />
                <div className="font-sans font-normal text-white text-[clamp(13px,12.5px+0.2vw,14px)] md:text-[15px] lg:text-[14px] leading-tight lg:whitespace-nowrap select-text">
                  When leaders evolve, organisations transform
                </div>
              </motion.div>

              {/* Item 3 */}
              <motion.div
                id="help-pillar-3"
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="group/item flex items-start gap-2.5 w-full max-w-[478px] min-h-[22px] pb-2 sm:pb-2.5 border-b border-white/25 cursor-default transition-colors hover:bg-white/5 rounded px-1.5"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-white shrink-0 mt-1 transition-transform duration-300 group-hover/item:scale-125 group-hover/item:shadow-[0_0_4px_rgba(255,255,255,0.8)]" />
                <div className="font-sans font-normal text-white text-[clamp(13px,12.5px+0.2vw,14px)] md:text-[15px] lg:text-[14px] leading-[135%] select-text">
                  And when organisations transform, their impact can extend far
                  beyond the workplace
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

