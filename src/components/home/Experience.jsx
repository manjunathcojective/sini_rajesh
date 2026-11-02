"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import CredentialTag from "./CredentialTag";

const CREDENTIALS_COL_1 = [
  { id: "cred-hr-director", label: "Former HR Director" },
  { id: "cred-dba", label: "DBA" },
  { id: "cred-life-coach", label: "Life Coach" },
  { id: "cred-happiness-coach", label: "Happiness Coach" },
];

const CREDENTIALS_COL_2 = [
  { id: "cred-mba", label: "MBA – HR & Personnel Management" },
  { id: "cred-nlp", label: "Certified NLP Practitioner" },
  { id: "cred-posh", label: "PoSH TTT Expert" },
];

export default function Experience() {
  return (
    <section
      id="experience-section"
      className="w-full flex justify-center overflow-hidden bg-[#FEFEFE]"
      aria-labelledby="experience-heading"
    >
      {/* Experience Outer Container */}
      <div
        id="experience-container"
        className="relative flex flex-col items-center w-full max-w-[1440px] px-fluid-gutter py-12 lg:py-[60px]"
      >
        {/* Main Content Layout - Fluid Adaptive up to 1440px breakpoint */}
        <div
          id="experience-main-wrapper"
          className="flex flex-col lg:flex-row w-full justify-between items-center lg:items-stretch gap-8 lg:gap-8 xl:gap-[51px] opacity-100"
        >
          {/* Left Column - Content, Credentials & Button (Fluidly scales with screen width, perfectly aligned with My Story) */}
          <div
            id="experience-left-col"
            className="flex flex-col justify-between w-full lg:flex-[56] lg:max-w-[56%] h-auto lg:min-h-[667px] gap-6 lg:gap-0"
          >
            {/* Story & Heading Block */}
            <div
              id="experience-content-block"
              className="flex flex-col w-full gap-5 xl:gap-[24px]"
            >
              {/* Heading Block */}
              <motion.div
                id="experience-heading-block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col w-full gap-3 xl:gap-[18px]"
              >
                {/* Category Badge */}
                <div id="experience-badge" className="inline-flex items-center gap-2.5">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#D07578] shrink-0"
                    aria-hidden="true"
                  />
                  <span className="font-serif font-bold italic text-fluid-h3 text-[#D07578] leading-none whitespace-nowrap">
                    Experience and credibility
                  </span>
                </div>

                {/* Main Heading */}
                <h2
                  id="experience-heading"
                  className="font-serif font-bold italic text-fluid-h2 sm:text-[36px] xl:text-[40px] leading-tight xl:leading-[44px] text-[#141414] m-0 xl:whitespace-nowrap"
                >
                  The Values I Choose to Live &amp; Work By
                </h2>
              </motion.div>

              {/* Tablet & Mobile Fluid Responsive Image (Proportionate with text width: 100% width, fluid aspect ratio) */}
              <motion.div
                id="experience-mobile-image-container"
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="block lg:hidden w-full aspect-[385/300] sm:aspect-[668/500] overflow-hidden rounded-[12px] opacity-100 my-4 sm:my-6 shadow-sm"
              >
                <div className="relative w-full h-full overflow-hidden rounded-[12px]">
                  <Image
                    src="/images/experience_and_credibility.png"
                    alt="Experience and Credibility"
                    fill
                    priority
                    className="object-cover object-[center_-33%] scale-[1.45] origin-center"
                    sizes="(max-width: 640px) 100vw, (max-width: 1200px) 668px, 520px"
                  />
                </div>
              </motion.div>

              {/* Story Paragraphs */}
              <motion.div
                id="experience-paragraphs"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col w-full gap-2.5 xl:gap-[12px]"
              >
                <p className="font-sans font-normal text-fluid-body text-[#141414] leading-[135%] m-0">
                  What we achieve matters. But I believe how we achieve it matters just as much. These six values guide the way I live, learn, work, and contribute: Growth, Honesty, Clarity, Compassion, Celebration and Contribution
                </p>

                <p className="font-sans font-semibold text-fluid-body text-[#141414] leading-[135%] m-0">
                  Three Dimensions That Shape My Work – Experience, Learning &amp; Research
                </p>

                <p className="font-sans font-normal text-fluid-body text-[#141414] leading-[140%] m-0">
                  These values, together with three decades of working with people, leaders and organisations across industries have shaped the way I understand growth, leadership, business and transformation.
                </p>

                <p className="font-sans font-normal text-fluid-body text-[#141414] leading-[140%] m-0">
                  My professional experience, combined with my doctoral research into mindset and human behaviour, continuous learning and practical application, enables me to bring together the human and organisational dimensions of transformation.
                </p>

                <p className="font-sans font-normal text-fluid-body text-[#141414] leading-[140%] m-0">
                  Every industry comes with its own unique set of challenges. Yet, across industries and organisations, one thing remains at the heart of it all: people.
                </p>
              </motion.div>
            </div>

            {/* Credentials Tags (152px tall) */}
            <div
              id="experience-credentials-wrapper"
              className="flex flex-col sm:flex-row flex-wrap sm:flex-nowrap gap-5 sm:gap-8 xl:gap-[54px] w-full pt-1"
            >
              <div
                id="experience-credentials-col-1"
                className="flex flex-col gap-3 xl:gap-[16px]"
              >
                {CREDENTIALS_COL_1.map((item) => (
                  <CredentialTag key={item.id} {...item} />
                ))}
              </div>

              <div
                id="experience-credentials-col-2"
                className="flex flex-col gap-3 xl:gap-[16px]"
              >
                {CREDENTIALS_COL_2.map((item) => (
                  <CredentialTag key={item.id} {...item} />
                ))}
              </div>
            </div>

            {/* CTA Button (44px tall, perfectly aligned with image bottom on desktop) */}
            <Link href="/about" aria-label="Discover My Story" className="w-fit block">
              <motion.div
                id="experience-cta-button"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.36, 1] }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex items-center justify-center w-[201px] h-[44px] rounded-[6px] bg-[#D07578] overflow-hidden cursor-pointer shadow-sm hover:shadow-[0_8px_20px_rgba(208,117,120,0.35)] transition-all duration-300"
              >
                <div className="flex items-center justify-center gap-2 relative z-10 pointer-events-none">
                  {/* Liquid Dot hover effect */}
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full bg-white/70 transition-all duration-1000 ease-out z-0 shrink-0 pointer-events-none group-hover:bg-white group-hover:scale-[160]"
                    aria-hidden="true"
                  />
                  <span className="relative z-10 font-sans font-semibold text-fluid-body text-white group-hover:text-[#D07578] whitespace-nowrap transition-all duration-500">
                    Discover My Story
                  </span>
                </div>
              </motion.div>
            </Link>
          </div>

          {/* Desktop Right Image (Proportionally scales with screen, max-width bounded to 1440px layout) */}
          <motion.div
            id="experience-image-container"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block group/photo relative overflow-hidden shrink-0 cursor-pointer lg:flex-[44] lg:max-w-[44%] lg:min-h-[667px] rounded-[12px] opacity-100 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(208,117,120,0.25)] transition-all duration-700"
          >
            <Image
              src="/images/experience_and_credibility.png"
              alt="Experience and Credibility"
              fill
              priority
              className="object-cover object-center transition-transform duration-700 ease-out group-hover/photo:scale-105"
              sizes="(max-width: 1200px) 480px, 520px"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
