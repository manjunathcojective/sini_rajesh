"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui";

export default function LifelongLearning() {
  return (
    <section
      id="lifelong-learning-section"
      aria-label="Lifelong Learning - Qualifications and Experience"
      className="w-full bg-[#FEFEFE] overflow-hidden"
    >
      <div
        id="learning-content-container"
        className="
          w-full max-w-[1440px] mx-auto
          px-[clamp(20px,6.94vw,100px)]
          py-[clamp(40px,4.2vw,60px)]
          flex flex-col
          gap-[clamp(36px,4.5vw,60px)]
        "
      >
        {/* Top Row: Image + Story */}
        <div
          id="learning-top-row"
          className="
            flex flex-col lg:flex-row
            items-start lg:items-stretch
            gap-[clamp(28px,4.17vw,60px)]
            w-full
          "
        >
          {/* Left Desktop Side Image (hidden on < lg, visible on lg+) */}
          <motion.div
            id="learning-image-desktop"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="
              hidden lg:block
              relative overflow-hidden group
              w-full lg:flex-1 min-w-0 xl:max-w-[621px]
              lg:self-stretch lg:h-auto
              rounded-[12px]
            "
          >
            <Image
              src="/images/lifelong-learning.png"
              alt="Lifelong Learning - Dr. Sini Rajesh"
              fill
              className="
                object-cover object-center
                rounded-[12px]
                transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                group-hover:scale-105
              "
              sizes="(max-width: 1440px) 50vw, 621px"
              priority
            />
          </motion.div>

          {/* Right Column / Mobile & Tablet Flow */}
          <div
            id="learning-story-column"
            className="
              w-full lg:flex-1 min-w-0 xl:max-w-[559px]
              flex flex-col justify-between
              gap-[clamp(20px,2.5vw,32px)]
            "
          >
            {/* Header: Badge + Heading */}
            <motion.header
              id="learning-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-[clamp(12px,1.5vw,20px)] w-full"
            >
              <Badge text="Lifelong Learning" id="badge-lifelong-learning" className="w-fit" />

              <h2
                className="
                  font-serif font-bold italic text-[#141414]
                  text-[clamp(28px,20px+1.5vw,41.62px)]
                  leading-tight lg:leading-[45px]
                  tracking-normal m-0 w-full
                "
              >
                Experience Has Taught Me And Learning Continues To Shape Me
              </h2>
            </motion.header>

            {/* Inline Image: visible only on Mobile & Tablet (below heading, hidden on lg+) */}
            <motion.div
              id="learning-image-inline"
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="
                lg:hidden
                relative overflow-hidden group
                w-full
                aspect-[621/485]
                rounded-[12px]
              "
            >
              <Image
                src="/images/lifelong-learning.png"
                alt="Lifelong Learning - Dr. Sini Rajesh"
                fill
                className="
                  object-cover object-center
                  rounded-[12px]
                  transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                  group-hover:scale-105
                "
                sizes="(max-width: 1023px) 100vw, 621px"
                priority
              />
            </motion.div>

            {/* Story Paragraphs */}
            <motion.div
              id="learning-story-paragraphs"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="
                flex flex-col
                gap-[clamp(10px,1.2vw,14px)]
                pt-[16px]
                border-t border-[#D07578]/50
                w-full
              "
            >
              <p
                className="
                  font-sans font-normal text-[#141414]/75
                  text-[clamp(14px,13.1px+0.2vw,16px)]
                  leading-[140%] m-0 w-full
                "
              >
                Nearly three decades of working with people and organisations across different industries have given me invaluable experience. At the same time, I never wanted experience to become an excuse to stop learning.
              </p>

              <p
                className="
                  font-sans font-normal text-[#141414]/75
                  text-[clamp(14px,13.1px+0.2vw,16px)]
                  leading-[140%] m-0 w-full
                "
              >
                My own learning journey has taken me through an MBA in Human Resources &amp; Personnel Management, a Diploma in Business Management specialising in Communication Management, and a Doctorate in Business Administration from SSBM Geneva. Along the way, I also became a certified NLP Practitioner, Happiness Coach and Life Coach, and PoSH TTT Expert.
              </p>

              <p
                className="
                  font-sans font-normal text-[#141414]/75
                  text-[clamp(14px,13.1px+0.2vw,16px)]
                  leading-[140%] m-0 w-full
                "
              >
                Beyond formal qualifications, I have also had the opportunity to learn through programmes associated with respected thought leaders, coaches and institutions from India and around the world including Tony Robbins, T. Harv Eker, Blair Singer, Berkeley Institute of Well-Being and Transformation Academy, to name a few.
              </p>

              <div
                id="learning-quote-block"
                className="flex items-baseline flex-wrap gap-1.5 pt-1 w-full"
              >
                <span className="font-sans font-normal text-[#141414]/75 text-[clamp(14px,13.1px+0.2vw,16px)] leading-snug">
                  And even after all these years, one belief continues to guide me:
                </span>
                <span className="font-serif font-bold italic text-[#141414] text-[clamp(18px,16px+0.35vw,20px)] leading-snug">
                  “Be a Lifelong Learner”.
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Row: 4 Pillars of Approach */}
        <motion.div
          id="learning-four-pillars-section"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-[clamp(24px,3vw,40px)] w-full"
        >
          <h3
            className="
              font-serif font-semibold italic text-[#141414]
              text-[clamp(18px,16px+0.7vw,25.81px)]
              leading-[1.25] text-center
              max-w-[888px] m-0 w-full
            "
          >
            Each experience has added something different to the way I think, work and engage with people. <br className="hidden sm:inline" />
            Today, my approach brings together:
          </h3>

          <div
            id="learning-pillars-grid"
            className="
              grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
              gap-[clamp(16px,1.67vw,24px)]
              w-full
            "
          >
            {/* Pillar 1: Experience */}
            <article
              id="pillar-experience"
              className="
                box-border
                p-[20px_15px]
                rounded-[6px]
                border border-[#D07578]/50
                bg-[#FEFEFE]
                flex flex-col justify-between
                min-h-[220px] lg:min-h-[250px]
                gap-4
                transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
                hover:-translate-y-1 hover:border-[#D07578]/90 hover:shadow-[0_10px_25px_rgba(208,117,120,0.15)]
              "
            >
              <div className="w-10 h-10 flex items-center justify-center shrink-0" aria-hidden="true">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M31.6667 8.3335L20 3.3335L8.33333 8.3335L14.1667 10.8335V14.1668C14.1667 14.1668 16.1111 13.3335 20 13.3335C23.8888 13.3335 25.8333 14.1668 25.8333 14.1668V10.8335L31.6667 8.3335ZM31.6667 8.3335V15.0002" stroke="#D07578" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M25.8333 14.1665V15.8332C25.8333 19.0548 23.2217 21.6665 20 21.6665C16.7783 21.6665 14.1667 19.0548 14.1667 15.8332V14.1665" stroke="#D07578" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12.9709 27.8389C11.137 28.9797 6.32843 31.3091 9.25715 34.2237C10.6878 35.6476 12.2812 36.6659 14.2845 36.6659H25.7155C27.7188 36.6659 29.3122 35.6476 30.7428 34.2237C33.6715 31.3091 28.863 28.9797 27.029 27.8389C22.7285 25.1637 17.2715 25.1637 12.9709 27.8389Z" stroke="#D07578" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <div className="flex flex-col gap-1 w-full">
                <h4 className="font-serif font-semibold italic text-[#141414] text-[clamp(20px,18px+0.4vw,25.81px)] leading-tight m-0 mb-1">
                  Experience
                </h4>
                <p className="font-sans font-normal text-[#141414]/75 text-[clamp(14px,13.1px+0.2vw,16px)] leading-[135%] m-0">
                  Nearly three decades of working with people, leaders and organisations across industries.
                </p>
              </div>
            </article>

            {/* Pillar 2: Research */}
            <article
              id="pillar-research"
              className="
                box-border
                p-[20px_15px]
                rounded-[6px]
                border border-[#D07578]/50
                bg-[#FEFEFE]
                flex flex-col justify-between
                min-h-[220px] lg:min-h-[250px]
                gap-4
                transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
                hover:-translate-y-1 hover:border-[#D07578]/90 hover:shadow-[0_10px_25px_rgba(208,117,120,0.15)]
              "
            >
              <div className="w-10 h-10 flex items-center justify-center shrink-0" aria-hidden="true">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26.6669 27.5L33.3334 34.1667" stroke="#D07578" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M30 19.1666C30 25.6099 24.7767 30.8333 18.3333 30.8333C11.89 30.8333 6.66666 25.6099 6.66666 19.1666C6.66666 12.7234 11.89 7.5 18.3333 7.5" stroke="#D07578" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M25.8333 5.8335L26.2632 6.99521C26.8268 8.51853 27.1087 9.2802 27.6643 9.83581C28.22 10.3914 28.9817 10.6733 30.505 11.237L31.6667 11.6668L30.505 12.0967C28.9817 12.6604 28.22 12.9422 27.6643 13.4978C27.1087 14.0535 26.8268 14.8151 26.2632 16.3384L25.8333 17.5001L25.4035 16.3384C24.8398 14.8151 24.558 14.0535 24.0023 13.4978C23.4467 12.9422 22.685 12.6604 21.1617 12.0967L20 11.6668L21.1617 11.237C22.685 10.6733 23.4467 10.3914 24.0023 9.83581C24.558 9.2802 24.8398 8.51853 25.4035 6.99521L25.8333 5.8335Z" stroke="#D07578" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <div className="flex flex-col gap-1 w-full">
                <h4 className="font-serif font-semibold italic text-[#141414] text-[clamp(20px,18px+0.4vw,25.81px)] leading-tight m-0 mb-1">
                  Research
                </h4>
                <p className="font-sans font-normal text-[#141414]/75 text-[clamp(14px,13.1px+0.2vw,16px)] leading-[135%] m-0">
                  Doctoral research on mindset and human behaviour in leadership and OD.
                </p>
              </div>
            </article>

            {/* Pillar 3: Continuous Learning */}
            <article
              id="pillar-continuous-learning"
              className="
                box-border
                p-[20px_15px]
                rounded-[6px]
                border border-[#D07578]/50
                bg-[#FEFEFE]
                flex flex-col justify-between
                min-h-[220px] lg:min-h-[250px]
                gap-4
                transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
                hover:-translate-y-1 hover:border-[#D07578]/90 hover:shadow-[0_10px_25px_rgba(208,117,120,0.15)]
              "
            >
              <div className="w-10 h-10 flex items-center justify-center shrink-0" aria-hidden="true">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.09833 15.0002C6.22736 8.23831 12.5602 3.3335 20.0414 3.3335C28.705 3.3335 35.8285 9.9113 36.6667 18.3335L33.3334 17.655" stroke="#D07578" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M35.9016 24.9998C33.7726 31.7617 27.4398 36.6665 19.9586 36.6665C11.2951 36.6665 4.1716 30.0887 3.33331 21.6665L6.66673 22.345" stroke="#D07578" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15.0033 22.5463V25.866C15.0033 26.4105 15.263 26.9287 15.7234 27.2167C17.1294 28.0962 18.1989 28.354 20.009 28.4098C21.6769 28.4547 22.7227 28.1925 24.2799 27.2192C24.7469 26.9272 25.0149 26.4043 25.0149 25.852V22.5463M28.352 18.358V23.3838M11.7488 18.0725C12.3515 16.7992 16.0894 14.5825 19.5015 13.4874C19.8307 13.3817 20.1844 13.3922 20.5089 13.5111C23.5257 14.6156 26.8814 16.286 28.0995 17.642C28.7357 18.3498 28.1137 19.2532 27.3447 19.8122C25.784 20.9468 24.0607 21.8295 20.5819 23.1658C20.2137 23.3072 19.8047 23.312 19.4347 23.1747C15.8669 21.85 12.5317 20.1402 11.7765 18.636C11.6874 18.4585 11.6639 18.2518 11.7488 18.0725Z" stroke="#D07578" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <div className="flex flex-col gap-1 w-full">
                <h4 className="font-serif font-semibold italic text-[#141414] text-[clamp(20px,18px+0.4vw,25.81px)] leading-tight m-0 mb-1">
                  Continuous Learning
                </h4>
                <p className="font-sans font-normal text-[#141414]/75 text-[clamp(14px,13.1px+0.2vw,16px)] leading-[135%] m-0">
                  Ongoing learning through coaching, NLP, happiness and leadership programmes.
                </p>
              </div>
            </article>

            {/* Pillar 4: Practical Application */}
            <article
              id="pillar-practical-application"
              className="
                box-border
                p-[20px_15px]
                rounded-[6px]
                border border-[#D07578]/50
                bg-[#FEFEFE]
                flex flex-col justify-between
                min-h-[220px] lg:min-h-[250px]
                gap-4
                transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
                hover:-translate-y-1 hover:border-[#D07578]/90 hover:shadow-[0_10px_25px_rgba(208,117,120,0.15)]
              "
            >
              <div className="w-10 h-10 flex items-center justify-center shrink-0" aria-hidden="true">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24.1667 14.1657C22.7215 14.8882 18.5197 16.112 14.3861 15.99C13.3 15.9579 12.5 15.0253 12.5 13.9387C12.5 13.0653 13.0172 12.2722 13.8013 11.8876C15.4736 11.0673 18.1117 9.69647 20.4515 8.43097C21.8722 7.66267 22.5825 7.2785 23.121 7.09665C24.5638 6.60939 25.7252 6.59072 27.1828 7.03139C27.727 7.19584 28.3805 7.52259 29.6873 8.17605L31.1945 8.92962C31.314 8.98937 31.3738 9.01925 31.435 9.04402C31.5925 9.10775 31.7588 9.14702 31.9282 9.16045C31.994 9.16569 32.0608 9.16569 32.1945 9.16569C33.2537 9.16569 33.7832 9.16569 34.217 9.28495C35.3503 9.59657 36.2358 10.482 36.5473 11.6153C36.6667 12.0491 36.6667 12.5787 36.6667 13.6378V22.8562C36.6667 24.0397 35.7073 24.999 34.5238 24.999C34.292 24.999 34.0663 25.0742 33.881 25.2133L33.3333 25.624C32.1777 26.4907 31.5998 26.9242 30.9373 27.175C30.8118 27.2225 30.6847 27.2648 30.5558 27.3022C29.8752 27.499 29.1528 27.499 27.7083 27.499H23.3333" stroke="#D07578" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M24.1667 14.165L29.2855 19.9625C30.152 20.9157 30.1172 22.3812 29.2064 23.292C28.264 24.2345 26.736 24.2345 25.7937 23.292C26.7142 24.2125 26.7539 25.7445 25.8334 26.665C24.9129 27.5855 23.4205 27.5855 22.5 26.665L21.6667 25.8317C22.5872 26.7522 22.5872 28.2445 21.6667 29.165C20.7462 30.0855 19.2539 30.0855 18.3334 29.165C19.2539 30.0855 19.2539 31.5778 18.3334 32.4983L18.2322 32.5995C17.7634 33.0683 17.1275 33.3317 16.4645 33.3317H16.25C15.4497 33.3317 14.6821 33.0138 14.1162 32.4478L7.35706 25.6887C6.91504 25.2467 6.31552 24.9983 5.69039 24.9983C4.38866 24.9983 3.33337 23.9432 3.33337 22.6413V15.8317C3.33337 12.689 3.33337 11.1177 4.30969 10.1414C5.28599 9.16504 6.85734 9.16504 10 9.16504H18.3334" stroke="#D07578" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <div className="flex flex-col gap-1 w-full">
                <h4 className="font-serif font-semibold italic text-[#141414] text-[clamp(20px,18px+0.4vw,25.81px)] leading-tight m-0 mb-1">
                  Practical Application
                </h4>
                <p className="font-sans font-normal text-[#141414]/75 text-[clamp(14px,13.1px+0.2vw,16px)] leading-[135%] m-0">
                  Turning insights into real, purposeful action for individuals and organisations.
                </p>
              </div>
            </article>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
