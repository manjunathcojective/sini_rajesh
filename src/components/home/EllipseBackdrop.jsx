"use client";
import React from "react";
import { motion } from "framer-motion";

function EllipseSvg({ className = "" }) {
  return (
    <svg
      width="398"
      height="483"
      viewBox="0 0 398 483"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-auto transition-all duration-700 ease-out hover:drop-shadow-[0_4px_16px_rgba(208,117,120,0.12)] group ${className}`}
    >
      <ellipse
        cx="198.516"
        cy="241.5"
        rx="198.516"
        ry="241.5"
        fill="#FEFEFE"
        className="transition-colors duration-700 group-hover:fill-[#FFFDFD]"
      />
      <path
        d="M198.517 0.5C307.791 0.500141 396.533 108.303 396.533 241.5C396.533 374.697 307.791 482.5 198.517 482.5C89.2424 482.5 0.5 374.697 0.5 241.5C0.5 108.303 89.2424 0.5 198.517 0.5Z"
        className="stroke-[#D07578]/25 transition-all duration-700 ease-out group-hover:stroke-[#D07578]/50"
      />
    </svg>
  );
}

export default function EllipseBackdrop({ className = "" }) {
  // 5 identical overlapping SVG ellipses matching the exact Figma vector curvature
  // Layering: Center in front, stepping behind to the left and right with summoning animation offsets
  const ellipses = [
    // 1. Outer Left (Fans out to left from center)
    {
      id: "outer-left",
      left: "301.00px",
      zIndex: 1,
      initialX: 140,
      delay: 0.35,
      scaleStart: 0.85,
    },

    // 2. Outer Right (Fans out to right from center)
    {
      id: "outer-right",
      left: "742.15px",
      zIndex: 1,
      initialX: -140,
      delay: 0.35,
      scaleStart: 0.85,
    },

    // 3. Inner Left (Fans out mid-left)
    {
      id: "inner-left",
      left: "411.29px",
      zIndex: 2,
      initialX: 75,
      delay: 0.2,
      scaleStart: 0.9,
    },

    // 4. Inner Right (Fans out mid-right)
    {
      id: "inner-right",
      left: "631.86px",
      zIndex: 2,
      initialX: -75,
      delay: 0.2,
      scaleStart: 0.9,
    },

    // 5. Center (Appears and blooms first in center)
    {
      id: "center",
      left: "521.58px",
      zIndex: 3,
      initialX: 0,
      delay: 0.05,
      scaleStart: 0.92,
    },
  ];

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none select-none z-0 ${className}`}
    >
      {/* Desktop SVG Ellipses Container (exact 1440px coordinate system) */}
      <div className="relative w-full h-full">
        {ellipses.map((ellipse) => (
          <motion.div
            key={ellipse.id}
            className="absolute"
            initial={{
              opacity: 0,
              x: ellipse.initialX,
              scale: ellipse.scaleStart,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 1.1,
              delay: ellipse.delay,
              ease: [0.16, 1, 0.3, 1], // Custom smooth blooming ease
            }}
            style={{
              top: "56px",
              left: ellipse.left,
              zIndex: ellipse.zIndex,
            }}
          >
            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 6 + ellipse.zIndex * 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: ellipse.delay + 0.5,
              }}
            >
              <EllipseSvg />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Responsive Ellipses for Mobile & Tablet with Unified Summoning Animation */}
      <div className="hidden absolute inset-0 flex items-center justify-center overflow-hidden opacity-60">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-[320px] sm:w-[420px] h-[360px] sm:h-[440px] flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute scale-[0.65] sm:scale-[0.85] left-[-40px] z-[1]"
          >
            <EllipseSvg />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute scale-[0.65] sm:scale-[0.85] right-[-40px] z-[1]"
          >
            <EllipseSvg />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="absolute scale-[0.65] sm:scale-[0.85] z-[2]"
          >
            <EllipseSvg />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
