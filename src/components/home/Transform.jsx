"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const TRANSFORM_CARDS = [
  {
    id: "transform-card-yourself",
    title: "Transform Yourself",
    image: "/images/transform-image-test.png",
    alt: "Transform Yourself",
    tags: "Coaching | Mentoring | The TEA of Your Life",
    desc: "Gain clarity, let go of limiting beliefs and take purposeful action.",
    isCenter: false,
    delay: 0.1,
  },
  {
    id: "transform-card-leadership",
    title: "Transform Your Leadership",
    image: "/images/transform-your-leadership.png",
    alt: "Transform Your Leadership",
    tags: "Leadership Development | Growth Mindset | Mentoring",
    desc: "Lead with clarity, confidence and empathy, and help others grow.",
    isCenter: true,
    delay: 0.25,
  },
  {
    id: "transform-card-organization",
    title: "Transform Your Organisation",
    image: "/images/transform-your-organization.png",
    alt: "Transform Your Organisation",
    tags: "Organisation Development | HR Consulting | People & Culture",
    desc: "Build the systems, people practices and leadership your organisation needs to grow.",
    isCenter: false,
    delay: 0.4,
  },
];

export default function Transform() {
  return (
    <section
      id="transform-section"
      className="w-full flex justify-center overflow-hidden bg-[#FEFEFE]"
      aria-labelledby="transform-heading"
    >
      {/* Outer Container with Fluid Responsive Padding */}
      <div
        id="transform-container"
        className="relative flex flex-col items-center w-full max-w-[1440px] min-h-auto md:min-h-[821px] lg:min-h-[895px] px-fluid-gutter py-12 md:py-[50px] lg:py-[60px] gap-[10px] bg-[#FEFEFE]"
      >
        <div
          id="transform-main-wrapper"
          className="flex flex-col items-center w-full max-w-[1240px] gap-8 md:gap-10"
        >
          {/* Header Block */}
          <motion.div
            id="transform-heading-block"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center w-full max-w-[697px] lg:max-w-[779px] gap-6 sm:gap-[30px] lg:gap-[40px] text-center"
          >
            {/* Title & Badge Group */}
            <div
              id="transform-title-group"
              className="flex flex-col items-center w-full max-w-[547px] gap-4 sm:gap-6 lg:gap-[30px]"
            >
              <div
                id="transform-badge"
                className="inline-flex items-center justify-center gap-2.5 h-[13px]"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#D07578] shrink-0"
                  aria-hidden="true"
                />
                <span className="font-serif font-bold italic text-fluid-h3 sm:text-[20px] text-[#D07578] leading-none whitespace-nowrap">
                  Transformation
                </span>
              </div>

              {/* Main Heading */}
              <h2
                id="transform-heading"
                className="font-serif font-bold italic text-[28px] sm:text-[36.56px] lg:text-[41.62px] leading-tight lg:leading-[45px] text-[#141414] text-center m-0 lg:whitespace-nowrap"
              >
                What Would You Like to Transform?
              </h2>
            </div>

            {/* Description Subtext Block */}
            <div
              id="transform-description-block"
              className="flex flex-col items-center w-full max-w-[571px] lg:max-w-[779px] gap-3 sm:gap-2.5 lg:gap-4 text-center"
            >
              <p className="w-full font-sans font-normal text-[14px] sm:text-[14.5px] lg:text-[16px] leading-[145%] sm:leading-[140%] text-[#141414] text-center m-0">
                Transformation means different things at different stages of our
                lives. You may be trying to find clarity within yourself. You
                may be stepping into greater leadership responsibility, or you
                may be building an organisation that has grown faster than its
                people systems and processes.
              </p>
              <p className="w-full font-sans font-normal text-[14px] sm:text-[14.5px] lg:text-[16px] leading-[145%] sm:leading-[140%] lg:leading-none text-[#141414] text-center m-0">
                Wherever you are in that journey, we can begin there.
              </p>
            </div>
          </motion.div>

          {/* Cards Section */}
          <div
            id="transform-cards-section"
            className="flex flex-col items-center w-full max-w-[698px] lg:max-w-none gap-[18px] md:gap-6"
          >
            {/* Cards Row (3 side-by-side on desktop & tablet, stacked on mobile) */}
            <div
              id="transform-cards-row"
              className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4 lg:gap-[30px] w-full md:h-[468px]"
            >
              {TRANSFORM_CARDS.map((card) => {
                // Card Dimensions: Full height on mobile using natural image aspect ratio (287/468 & 287/400); exact dimensions on tablet and desktop
                const cardSizeClass = card.isCenter
                  ? "w-full max-w-[340px] sm:max-w-[385px] aspect-[287/468] md:aspect-auto md:w-[222px] md:h-[468px] lg:w-[287px] lg:h-[468px]"
                  : "w-full max-w-[340px] sm:max-w-[385px] aspect-[287/400] md:aspect-auto md:w-[222px] md:h-[400px] lg:w-[287px] lg:h-[400px]";

                // Bottom Block positioning
                const bottomBlockClass = card.isCenter
                  ? "bottom-11 md:bottom-11 lg:bottom-[58px]"
                  : "bottom-9 md:bottom-9 lg:bottom-12";

                return (
                  <motion.article
                    key={card.id}
                    id={card.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{
                      duration: 0.75,
                      delay: card.delay,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`group/card relative ${cardSizeClass} shrink-0 overflow-hidden cursor-pointer rounded-none bg-[#FEFEFE]`}
                  >
                    {/* Background Image Container without Overlays/Effects */}
                    <div className="relative w-full h-full overflow-hidden">
                      <Image
                        src={card.image}
                        alt={card.alt}
                        fill
                        sizes="(max-width: 767px) 385px, (max-width: 1200px) 222px, 287px"
                        style={{ objectFit: "cover", objectPosition: "center" }}
                        className="transition-transform duration-700 group-hover/card:scale-105"
                      />
                    </div>

                    {/* Card Title (z-10 sits crisp above the top scoop shadow) */}
                    <h3 className="absolute top-9 lg:top-[42px] left-4 w-[calc(100%-32px)] md:max-w-[190px] lg:max-w-[261px] m-0 font-sans font-semibold text-[16px] lg:text-[18px] leading-snug lg:leading-none text-white z-10">
                      {card.title}
                    </h3>

                    {/* Bottom Content Block (z-10 sits crisp above the bottom feathery dissolve) */}
                    <div
                      className={`absolute ${bottomBlockClass} left-4 w-[calc(100%-32px)] md:w-[190px] lg:w-[255px] flex flex-col gap-2 z-10`}
                    >
                      <div className="w-full font-serif font-bold italic text-[12.5px] lg:text-[14px] leading-tight text-white pb-1 border-b border-[#D07578]/70">
                        {card.tags}
                      </div>
                      <p className="w-full font-sans font-normal text-[11.5px] lg:text-[13px] leading-[135%] text-white m-0">
                        {card.desc}
                      </p>
                    </div>

                    {/* Accessible Full-Card Clickable Link */}
                    <Link
                      href="/services"
                      aria-label={`Explore services for ${card.title}`}
                      className="absolute inset-0 z-20 focus:outline-none focus:ring-2 focus:ring-[#D07578] focus:ring-offset-2"
                    />
                  </motion.article>
                );
              })}
            </div>

            {/* Explore Services Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.36, 1] }}
            >
              <Button
                id="transform-explore-btn"
                href="/services"
                ariaLabel="Explore Services"
                className="w-[172px] h-[44px] justify-center shadow-sm hover:shadow-[0_8px_20px_rgba(208,117,120,0.35)] transition-all duration-300"
              >
                Explore Services
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
