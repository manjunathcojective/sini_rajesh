"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import TrustedByCard from "./TrustedByCard";
import { quoteContent } from "@/lib/data";

function FluidEllipsesSvg({ className = "" }) {
  return (
    <svg
      viewBox="0 0 840 483"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* 1. Outer Left */}
      <ellipse
        cx="199"
        cy="241.5"
        rx="198.5"
        ry="241"
        fill="#FEFEFE"
        stroke="rgba(208, 117, 120, 0.25)"
        strokeWidth="1"
      />
      {/* 2. Outer Right */}
      <ellipse
        cx="641"
        cy="241.5"
        rx="198.5"
        ry="241"
        fill="#FEFEFE"
        stroke="rgba(208, 117, 120, 0.25)"
        strokeWidth="1"
      />
      {/* 3. Inner Left */}
      <ellipse
        cx="309"
        cy="241.5"
        rx="198.5"
        ry="241"
        fill="#FEFEFE"
        stroke="rgba(208, 117, 120, 0.25)"
        strokeWidth="1"
      />
      {/* 4. Inner Right */}
      <ellipse
        cx="531"
        cy="241.5"
        rx="198.5"
        ry="241"
        fill="#FEFEFE"
        stroke="rgba(208, 117, 120, 0.25)"
        strokeWidth="1"
      />
      {/* 5. Center (In Front) */}
      <ellipse
        cx="420"
        cy="241.5"
        rx="198.5"
        ry="241"
        fill="#FEFEFE"
        stroke="rgba(208, 117, 120, 0.32)"
        strokeWidth="1"
      />
    </svg>
  );
}

export default function InspirationQuote() {
  const { quote, photos } = quoteContent;
  const stageRef = useRef(null);
  const [cardScale, setCardScale] = useState(1);

  useEffect(() => {
    function updateScale() {
      if (stageRef.current) {
        const stageWidth = stageRef.current.offsetWidth;
        const w = window.innerWidth;
        if (w >= 1024) {
          // Smaller laptops & desktop (>= 1024px): Proportional scaling based on 840px base width
          const s = Math.min(1, Math.max(0.85, stageWidth / 840));
          setCardScale(s);
        } else if (w >= 768) {
          // Tablet (768px - 1023px): Tablet proportional scaling
          const s = Math.min(0.85, Math.max(0.70, stageWidth / 840));
          setCardScale(s);
        } else {
          // Mobile (< 768px): Scale card down to match the exact size of the corner images (17.85% of stageWidth)
          // Unscaled card width is 175px, so scale = targetImageWidth / 175
          const targetImageWidth = 0.1785 * stageWidth;
          const s = Math.min(0.48, Math.max(0.32, targetImageWidth / 175));
          setCardScale(s);
        }
      }
    }
    updateScale();
    const ro = new ResizeObserver(updateScale);
    if (stageRef.current) ro.observe(stageRef.current);
    window.addEventListener("resize", updateScale);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateScale);
    };
  }, []);

  return (
    <section
      id="inspiration-quote-section"
      aria-label="Inspirational Quote"
      className="relative w-full overflow-hidden bg-[#FEFEFE] flex items-center justify-center pt-[clamp(24px,3vw,44px)] pb-[clamp(36px,4vw,60px)] px-4"
    >
      {/* ========================================================================= */}
      {/* CENTRAL STAGE (Locked to 840/483 Ellipse Aspect Ratio):                    */}
      {/* Upper & lower photos and TrustedByCard are attached directly to the      */}
      {/* Ellipse Stage at the exact same contact points as in the desktop version. */}
      {/* As the ellipse scales down, they move inward together and the card        */}
      {/* scales down proportionally while staying in contact with the ellipse rim. */}
      {/* ========================================================================= */}
      <div
        id="inspiration-quote-stage"
        ref={stageRef}
        className="relative flex items-center justify-center select-none w-[clamp(280px,92vw,840px)] aspect-[840/483]"
      >
        {/* Five Overlapping SVG Ellipses with Continuous Subtle Breathing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          animate={{
            y: [0, -4, 0],
            scale: [1, 1.01, 1],
          }}
          transition={{
            y: { duration: 6.5, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 6.5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
        >
          <FluidEllipsesSvg className="w-full h-full transition-all duration-700" />
        </motion.div>

        {/* Upper Photo (Top-Left) — Attached to Upper-Left Ellipse Rim */}
        <motion.figure
          id="quote-photo-1"
          initial={{ opacity: 0, y: -20, x: -10, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          animate={{
            y: [0, -3, 0],
          }}
          transition={{
            y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 },
          }}
          className="absolute -left-[2%] -top-[4%] w-[17.85%] aspect-square rounded-[4px] overflow-hidden shadow-md z-10 pointer-events-auto transition-transform duration-500 hover:scale-105"
        >
          <Image
            src={photos.photo1.src}
            alt={photos.photo1.alt}
            width={150}
            height={150}
            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
            loading="lazy"
          />
        </motion.figure>

        {/* Centered Fluid Quote Block — Fixed 5-line layout scaling smoothly with clamps */}
        <motion.blockquote
          id="quote-text"
          initial={{ opacity: 0, y: 16, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-serif italic font-bold select-text pointer-events-auto z-10 flex flex-col items-center justify-center w-[90%] text-[clamp(13px,2.5vw+4px,41.62px)] leading-[clamp(17px,3vw+5px,45px)] text-[#141414] tracking-normal"
          style={{
            fontFamily: 'var(--font-serif), "Cormorant Garamond", Georgia, serif',
          }}
        >
          <span className="block whitespace-nowrap">“Through The TEA of Your Life, coaching,</span>
          <span className="block whitespace-nowrap">mentoring, leadership development, and</span>
          <span className="block whitespace-nowrap">organisation development interventions, I help</span>
          <span className="block whitespace-nowrap">turn potential into purposeful action and</span>
          <span className="block whitespace-nowrap">sustainable growth.”</span>
        </motion.blockquote>

        {/* Lower Photo (Bottom-Right) — Attached to Lower-Right Ellipse Rim */}
        <motion.figure
          id="quote-photo-2"
          initial={{ opacity: 0, y: 16, x: 8, scale: 0.92 }}
          whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          animate={{
            y: [0, 3, 0],
          }}
          transition={{
            y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.6 },
          }}
          className="absolute -right-[2%] -bottom-[4%] w-[17.85%] aspect-square rounded-[4px] overflow-hidden shadow-md z-10 pointer-events-auto transition-transform duration-500 hover:scale-105"
        >
          <Image
            src={photos.photo2.src}
            alt={photos.photo2.alt}
            width={150}
            height={150}
            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
            loading="lazy"
          />
        </motion.figure>

        {/* Bottom-Left Trusted By Card — Scaled down to match image size on mobile */}
        <motion.div
          id="quote-trusted-card"
          initial={{ opacity: 0, y: 16, x: -8 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -left-[2%] -bottom-[4%] z-10 pointer-events-auto"
        >
          <div
            className="origin-bottom-left transition-transform duration-300 ease-out"
            style={{
              transform: `scale(${cardScale})`,
            }}
          >
            <TrustedByCard />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
