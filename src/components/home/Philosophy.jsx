"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import PhilosophyCard, { PHILOSOPHY_CARDS } from "./PhilosophyCard";

export default function Philosophy() {
  return (
    <section
      id="philosophy-section"
      className="w-full bg-[#FEFEFE] flex justify-center pt-[clamp(40px,5vw,72px)] pb-[clamp(40px,5vw,72px)] px-[clamp(16px,4vw,60px)] xl:px-[clamp(24px,6.94vw,100px)] overflow-hidden"
      aria-labelledby="philosophy-heading"
    >
      <div
        id="philosophy-container"
        className="w-full max-w-[1240px] flex flex-col gap-[clamp(28px,3.8vw,56px)]"
      >
        {/* ========================================================================= */}
        {/* 1. DESKTOP TOP ROW (>= 1024px): 2 Columns with Image matching Text Height */}
        {/* ========================================================================= */}
        <div
          id="philosophy-top-row"
          className="hidden lg:grid grid-cols-2 xl:grid-cols-[621px_1fr] gap-8 xl:gap-14 items-stretch w-full"
        >
          {/* Visual Image: Matches exact height of the text column beside it */}
          <motion.div
            id="philosophy-hero-image"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-full min-h-[380px] rounded-[12px] overflow-hidden"
          >
            <Image
              src="/images/my-philosophy-image.png"
              alt="My Philosophy"
              fill
              priority
              className="object-cover object-[80%_center] transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1279px) 50vw, 621px"
            />
          </motion.div>

          {/* Desktop Right Column: Badge, Heading, Paragraphs, Button */}
          <div
            id="philosophy-content-col"
            className="flex flex-col justify-between gap-6 w-full"
          >
            {/* Badge & Title */}
            <motion.div
              id="philosophy-heading-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-4"
            >
              <div id="philosophy-badge" className="inline-flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D07578] shrink-0" aria-hidden="true" />
                <span className="font-serif font-bold italic text-[20px] leading-none text-[#D07578]">
                  My Philosophy
                </span>
              </div>
              <h2
                id="philosophy-heading"
                className="font-serif font-bold italic text-[clamp(32px,2vw+20px,41.62px)] leading-[1.08] text-[#141414] m-0"
              >
                It All Begins Within
              </h2>
            </motion.div>

            {/* Explanatory Paragraphs */}
            <motion.div
              id="philosophy-paragraphs"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-3.5 font-sans font-normal text-[16px] leading-[1.48] text-[#141414] text-justify"
            >
              <p className="m-0">
                We spend a great deal of time trying to change what is happening around us. Yet, some of the most powerful changes begin by looking within. Our mindset influences how we see challenges, make decisions, build relationships and respond to situations. We may not always control what happens around us, but we can choose how we respond.
              </p>
              <p className="m-0">
                This philosophy is at the heart of <strong className="font-serif font-bold italic text-[1.24em] tracking-[-0.01em] text-[#141414] [-webkit-text-stroke:0.5px_#141414] [text-shadow:_0_0_0.4px_#141414]">The TEA of Your Life</strong>, my signature approach to personal and professional transformation. It encourages greater self-awareness, helps us recognise what may be holding us back and inspires meaningful change across five dimensions of life: <strong className="font-bold">Health, Relationships, Career &amp; Business, Money &amp; Wealth, and Inner Self.</strong> The goal isn&apos;t to create a perfect life, but to understand ourselves better and take purposeful steps towards who we aspire to become.
              </p>
              <div className="font-serif font-bold italic text-[20px] leading-[1.4] text-[#141414] m-0 pt-1">
                Sometimes, the biggest shift begins with a simple change in the way we think.
              </div>
            </motion.div>

            {/* Action Button */}
            <motion.div
              id="philosophy-cta-button"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.36, 1] }}
            >
              <Button
                href="/services"
                ariaLabel="Discover The TEA of Your Life"
                size="md"
                className="!w-fit !min-w-[283px] !h-[44px]"
              >
                Discover The TEA of Your Life
              </Button>
            </motion.div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. TABLET & MOBILE LAYOUT (< 1024px): Image directly after "It All Begins Within" */}
        {/* ========================================================================= */}
        <div
          id="philosophy-top-tablet-mobile"
          className="flex lg:hidden flex-col gap-6 md:gap-7 w-full"
        >
          {/* 1. Badge & Title */}
          <div id="philosophy-heading-block-mobile" className="flex flex-col gap-3">
            <div className="inline-flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D07578] shrink-0" aria-hidden="true" />
              <span className="font-serif font-bold italic text-[clamp(17px,1.2vw+12px,20px)] leading-none text-[#D07578]">
                My Philosophy
              </span>
            </div>
            <h2 className="font-serif font-bold italic text-[clamp(28px,2.5vw+18px,41.62px)] leading-[1.12] text-[#141414] m-0">
              It All Begins Within
            </h2>
          </div>

          {/* 2. Visual Image directly after Title */}
          {/* Tablet aspect ratio height:width = 1:1.59047619048 -> aspect-[1.59047619/1] */}
          {/* Mobile aspect ratio height:width = 1:1.57786885246 -> aspect-[1.57786885/1] */}
          <motion.div
            id="philosophy-hero-image-mobile"
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full rounded-[12px] overflow-hidden aspect-[1.57786885/1] md:aspect-[1.59047619/1]"
          >
            <Image
              src="/images/my-philosophy-image.png"
              alt="My Philosophy"
              fill
              priority
              className="object-cover object-[80%_center]"
              sizes="(max-width: 767px) 94vw, (max-width: 1023px) 88vw, 621px"
            />
          </motion.div>

          {/* 3. Explanatory Paragraphs */}
          <div className="flex flex-col gap-3 font-sans font-normal text-[clamp(14.5px,0.4vw+13px,16px)] leading-[1.5] text-[#141414] text-justify">
            <p className="m-0">
              We spend a great deal of time trying to change what is happening around us. Yet, some of the most powerful changes begin by looking within. Our mindset influences how we see challenges, make decisions, build relationships and respond to situations. We may not always control what happens around us, but we can choose how we respond.
            </p>
            <p className="m-0">
              This philosophy is at the heart of <strong className="font-serif font-bold italic text-[1.24em] tracking-[-0.01em] text-[#141414] [-webkit-text-stroke:0.5px_#141414] [text-shadow:_0_0_0.4px_#141414]">The TEA of Your Life</strong>, my signature approach to personal and professional transformation. It encourages greater self-awareness, helps us recognise what may be holding us back and inspires meaningful change across five dimensions of life: <strong className="font-bold">Health, Relationships, Career &amp; Business, Money &amp; Wealth, and Inner Self.</strong> The goal isn&apos;t to create a perfect life, but to understand ourselves better and take purposeful steps towards who we aspire to become.
            </p>
            <div className="font-serif font-bold italic text-[clamp(17px,1.2vw+14px,20px)] leading-[1.4] text-[#141414] pt-1">
              Sometimes, the biggest shift begins with a simple change in the way we think.
            </div>
          </div>

          {/* 4. Action Button */}
          <div className="pt-1">
            <Button
              href="/services"
              ariaLabel="Discover The TEA of Your Life"
              size="md"
              className="!w-fit !min-w-[283px] !h-[44px]"
            >
              Discover The TEA of Your Life
            </Button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. PHILOSOPHY CARDS (4 Cards Grid)                                        */}
        {/* ========================================================================= */}
        <div
          id="philosophy-cards-row"
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-3.5 xl:gap-6 items-stretch"
        >
          {PHILOSOPHY_CARDS.map((card, index) => (
            <PhilosophyCard key={card.id} {...card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
