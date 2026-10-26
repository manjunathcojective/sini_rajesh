"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function AboutMe() {
  return (
    <section
      id="about-me-section"
      className="w-full flex justify-center overflow-hidden bg-[#FEFEFE] py-[clamp(40px,5vw,72px)] px-[clamp(16px,6.94vw,100px)]"
      aria-labelledby="about-me-heading"
    >
      <div
        id="about-me-container"
        className="w-full max-w-[1240px] flex flex-col"
      >
        {/* ========================================================================= */}
        {/* 1. DESKTOP LAYOUT (>= 1025px): 2 Columns with Image matching Text Height   */}
        {/* ========================================================================= */}
        <div
          id="about-me-main-wrapper"
          className="hidden lg:flex flex-row w-full justify-between items-stretch gap-6 lg:gap-8 xl:gap-[39px]"
        >
          {/* Left Column: Text & Content */}
          <div
            id="about-me-left-col"
            className="flex flex-col justify-between w-full lg:flex-[52] lg:max-w-[52%] gap-6 lg:gap-8 xl:gap-[40px]"
          >
            {/* Badge & Main Heading */}
            <motion.div
              id="about-me-heading-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col w-full gap-4"
            >
              <div id="about-me-badge" className="inline-flex items-center gap-2.5 h-[13px]">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#D07578] shrink-0"
                  aria-hidden="true"
                />
                <span className="font-serif font-bold italic text-[#D07578] text-[20px] leading-none whitespace-nowrap">
                  About
                </span>
              </div>
              <h2
                id="about-me-heading"
                className="font-serif font-bold italic text-[#141414] text-[clamp(32px,2vw+20px,41.62px)] leading-[1.08] m-0"
              >
                Let’s Get to Know Each Other Better
              </h2>
            </motion.div>

            {/* Content Wrapper */}
            <div id="about-me-content-wrapper" className="flex flex-col w-full gap-6">
              {/* Profile Meta Row */}
              <motion.div
                id="about-me-profile-row"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center w-full gap-3.5 pb-3 border-b border-[#141414]/25"
              >
                <div
                  id="about-me-profile-img"
                  className="group/small-img relative w-[60px] h-[60px] rounded-[2px] overflow-hidden shrink-0 cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-500"
                >
                  <Image
                    src="/images/about-image-small.png"
                    alt="Dr. Sini Rajesh"
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover/small-img:scale-110"
                  />
                </div>
                <div id="about-me-profile-meta" className="flex flex-col justify-center gap-1.5">
                  <div className="font-sans font-normal text-[25.81px] text-[#141414] leading-tight">
                    Dr. Sini Rajesh
                  </div>
                  <div className="font-sans font-normal text-[14px] text-[#141414]/80 leading-none">
                    Founder of Igniting Mindz
                  </div>
                </div>
              </motion.div>

              {/* Story Paragraphs */}
              <motion.div
                id="about-me-paragraphs"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col w-full gap-3 font-sans font-normal text-[16px] leading-[1.4] text-[#141414] text-justify"
              >
                <p className="m-0">
                  Hello, I’m Dr. Sini Rajesh, a Mentor, HR Expert, Organisation
                  Development Specialist, Life Coach and a Happypreneur, the
                  Founder of Igniting Mindz.
                </p>
                <p className="m-0">
                  My titles describe different dimensions of my work, but beyond
                  them, I am simply someone who loves people, loves learning,
                  enjoys meaningful conversations, celebrates the little wins,
                  and genuinely finds joy in helping others grow.
                </p>
                <p className="m-0">
                  I genuinely love what I do. And if there is one thing that
                  nearly three decades of working with people and organisations
                  has taught me, it is this: there is far more potential within
                  us than we often realise.
                </p>
                <p className="m-0">
                  My journey in Human Resources took me through corporate
                  leadership, entrepreneurship, mentoring, coaching, leadership
                  development, and organisation transformation. But through all
                  these different roles, one thing has remained constant my
                  passion for people and their potential.
                </p>
                <p className="m-0">
                  Today, I bring together my experience in HR, Organisation
                  Development, leadership, mindset, human behaviour, mentoring
                  and coaching to inspire individuals, leaders and organisations
                  to explore possibilities, grow with greater clarity and
                  confidence, and create meaningful transformation.
                </p>
                <div className="font-serif font-bold italic text-[20px] leading-[1.4] text-[#141414] m-0 pt-1">
                  There is far more potential within us than we often realise.
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                id="about-me-cta-button"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.36, 1] }}
              >
                <Button
                  href="/about"
                  ariaLabel="More About My Journey"
                  size="md"
                  className="!w-fit !min-w-[244px] !h-[44px]"
                >
                  More About My Journey
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Right Large Image: Matches exact height of the text column beside it */}
          <motion.div
            id="about-me-hero-image"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full lg:flex-[45] lg:max-w-[45%] h-full min-h-[460px] lg:min-h-[500px] rounded-[6px] overflow-hidden shrink-0"
          >
            <Image
              src="/images/about-image-large.png"
              alt="About Dr. Sini Rajesh"
              fill
              priority
              className="object-cover object-center transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1279px) 45vw, 558px"
            />
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* 2. TABLET & MOBILE LAYOUT (< 1025px): Photo directly below Heading        */}
        {/* ========================================================================= */}
        <div
          id="about-me-tablet-mobile"
          className="flex lg:hidden flex-col w-full gap-6 md:gap-7"
        >
          {/* 1. Badge & Main Heading */}
          <div id="about-me-heading-block-mobile" className="flex flex-col w-full gap-3">
            <div id="about-me-badge-mobile" className="inline-flex items-center gap-2.5">
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#D07578] shrink-0"
                aria-hidden="true"
              />
              <span className="font-serif font-bold italic text-[#D07578] text-[clamp(17px,1.2vw+12px,20px)] leading-none whitespace-nowrap">
                About
              </span>
            </div>
            <h2
              id="about-me-heading-mobile"
              className="font-serif font-bold italic text-[#141414] text-[clamp(28px,2.5vw+18px,41.62px)] leading-[1.12] m-0"
            >
              Let’s Get to Know Each Other Better
            </h2>
          </div>

          {/* 2. Photo directly below "Let's Get to Know Each Other Better" */}
          {/* Ratio of height : width is 1 : 1.336 -> aspect-[1.336/1] */}
          <motion.div
            id="about-me-hero-image-mobile"
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full rounded-[12px] overflow-hidden aspect-[1.336/1]"
          >
            <Image
              src="/images/about-image-large.png"
              alt="About Dr. Sini Rajesh"
              fill
              priority
              className="object-cover object-[50%_35%]"
              style={{ objectPosition: "50% 35%" }}
              sizes="(max-width: 767px) 94vw, (max-width: 1200px) 88vw, 650px"
            />

          </motion.div>

          {/* 3. Profile Meta Row */}
          <div className="flex items-center w-full gap-3.5 pb-3 border-b border-[#141414]/25">
            <div className="group/small-img relative w-[54px] h-[54px] sm:w-[60px] sm:h-[60px] rounded-[2px] overflow-hidden shrink-0 shadow-sm">
              <Image
                src="/images/about-image-small.png"
                alt="Dr. Sini Rajesh"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center gap-1">
              <div className="font-sans font-normal text-[clamp(19px,1.2vw+15px,25.81px)] text-[#141414] leading-tight">
                Dr. Sini Rajesh
              </div>
              <div className="font-sans font-normal text-[clamp(12.5px,0.4vw+11px,14px)] text-[#141414]/80 leading-none">
                Founder of Igniting Mindz
              </div>
            </div>
          </div>

          {/* 4. Story Paragraphs */}
          <div className="flex flex-col w-full gap-3 font-sans font-normal text-[clamp(14.5px,0.4vw+13px,16px)] leading-[145%] text-[#141414] text-justify">
            <p className="m-0">
              Hello, I’m Dr. Sini Rajesh, a Mentor, HR Expert, Organisation
              Development Specialist, Life Coach and a Happypreneur, the
              Founder of Igniting Mindz.
            </p>
            <p className="m-0">
              My titles describe different dimensions of my work, but beyond
              them, I am simply someone who loves people, loves learning,
              enjoys meaningful conversations, celebrates the little wins,
              and genuinely finds joy in helping others grow.
            </p>
            <p className="m-0">
              I genuinely love what I do. And if there is one thing that
              nearly three decades of working with people and organisations
              has taught me, it is this: there is far more potential within
              us than we often realise.
            </p>
            <p className="m-0">
              My journey in Human Resources took me through corporate
              leadership, entrepreneurship, mentoring, coaching, leadership
              development, and organisation transformation. But through all
              these different roles, one thing has remained constant my
              passion for people and their potential.
            </p>
            <p className="m-0">
              Today, I bring together my experience in HR, Organisation
              Development, leadership, mindset, human behaviour, mentoring
              and coaching to inspire individuals, leaders and organisations
              to explore possibilities, grow with greater clarity and
              confidence, and create meaningful transformation.
            </p>
            <div className="font-serif font-bold italic text-[clamp(17px,1.2vw+14px,20px)] leading-[1.4] text-[#141414] pt-1">
              There is far more potential within us than we often realise.
            </div>
          </div>

          {/* 5. CTA Button */}
          <div className="pt-1">
            <Button
              href="/about"
              ariaLabel="More About My Journey"
              size="md"
              className="!w-fit !min-w-[244px] !h-[44px]"
            >
              More About My Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
