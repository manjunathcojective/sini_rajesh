"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui";

export default function MyPurpose() {
  return (
    <section
      id="my-purpose-section"
      aria-label="My Purpose - Igniting Mindz"
      className="relative w-full overflow-hidden bg-[#FEFEFE] min-h-[1060px] md:min-h-[888px] lg:min-h-[782px] flex items-center justify-center"
    >
      {/* Background Image with Dual Gradient Overlay */}
      <div
        id="purpose-bg-image"
        className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none"
      >
        {/* Mobile & Tablet Background Image (< 1024px) */}
        <Image
          src="/images/my-purpose-tablet.jpg"
          alt="My Purpose - Dr. Sini Rajesh"
          fill
          className="
            lg:hidden object-cover
            object-[40%_38%]
            md:object-[center_38%]
          "
          priority
        />
        {/* Desktop Background Image (>= 1024px) */}
        <Image
          src="/images/my-purpose.png"
          alt="My Purpose - Dr. Sini Rajesh"
          fill
          className="hidden lg:block object-cover object-center"
          priority
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, #FEFEFE 0%, rgba(193, 190, 179, 0) 24%), linear-gradient(360deg, #FEFEFE 0%, rgba(193, 190, 179, 0) 20%)",
          }}
        />
      </div>

      {/* Main Content Container */}
      <div
        id="purpose-container"
        className="
          w-full max-w-[1440px] mx-auto
          px-[clamp(16px,4.7vw,20px)] md:px-[clamp(28px,7.29vw,56px)] lg:px-[clamp(40px,6.94vw,100px)]
          pt-[20px] md:pt-[47px] lg:pt-[clamp(40px,4.5vw,60px)]
          pb-[24px] md:pb-[42px] lg:pb-[clamp(32px,4vw,60px)]
          relative z-10
          flex flex-col justify-between
          gap-[clamp(140px,20vh,220px)] md:gap-[clamp(32px,5vw,60px)]
          min-h-[1060px] md:min-h-[888px] lg:min-h-[782px]
        "
      >
        {/* Top-Left Content */}
        <motion.div
          id="purpose-intro-card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="
            flex flex-col
            w-full max-w-[385px] md:max-w-[660px] lg:max-w-[420px] xl:max-w-[346px]
            gap-[24px] md:gap-[30px] lg:gap-[clamp(14px,1.5vw,16px)]
            self-start
          "
        >
          <header className="flex flex-col items-start gap-[clamp(12px,1.5vw,16px)] md:gap-[16px] w-full">
            <Badge text="My Purpose" id="badge-my-purpose" className="w-fit" />
            <h2
              className="
                font-serif font-bold italic text-[#141414]
                text-[clamp(26px,20px+1.8vw,36px)] md:text-[clamp(32px,3.8vw,40px)] lg:text-[41.62px]
                leading-[1.18] md:leading-[1.15] lg:leading-[45px]
                tracking-normal m-0 w-full
              "
            >
              Some names describe what you do. Others describe why you do it
            </h2>
          </header>

          <div
            id="purpose-intro-text"
            className="flex flex-col gap-2 w-full md:max-w-[600px] lg:max-w-[260px]"
          >
            <p
              className="
                font-sans font-normal text-[#141414]/75
                text-[clamp(14px,13.1px+0.2vw,16px)]
                leading-[140%] tracking-normal m-0 w-full
              "
            >
              For me, Igniting Mindz is the latter.
            </p>
            <p
              className="
                font-sans font-normal text-[#141414]/75
                text-[clamp(14px,13.1px+0.2vw,16px)]
                leading-[140%] tracking-normal m-0 w-full
                lg:max-w-[255px]
              "
            >
              People search for happiness, peace, confidence and success, and often look for the answers outside themselves.
            </p>
          </div>
        </motion.div>

        {/* Bottom-Right Glass Reflection Card */}
        <motion.div
          id="purpose-reflection-card"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="
            box-border
            w-full max-w-[385px] md:max-w-[518px]
            p-[20px]
            flex flex-col
            gap-[clamp(8px,1vw,12px)]
            bg-[#D07578]/50
            rounded-[12px]
            shadow-[0_4px_30px_rgba(0,0,0,0.1)]
            backdrop-blur-[25px]
            border border-white/25
            self-center md:self-end lg:mt-auto
          "
        >
          <div
            id="purpose-inner-paragraphs"
            className="flex flex-col gap-[clamp(8px,1vw,12px)] w-full"
          >
            <p
              className="
                font-sans font-normal text-white
                text-[clamp(13.5px,13px+0.2vw,15.5px)]
                leading-[140%] tracking-normal m-0 w-full
              "
            >
              In reality, there is enormous potential within us but that potential sometimes remains hidden beneath limiting beliefs, self-doubt, old patterns or simply a lack of awareness.
            </p>
            <p
              className="
                font-sans font-normal text-white
                text-[clamp(13.5px,13px+0.2vw,15.5px)]
                leading-[140%] tracking-normal m-0 w-full
              "
            >
              I wanted my work to help people discover the power within themselves. And when I tried to capture that purpose in just a few words, one thought kept coming back to me: Igniting Mindz.
            </p>
            <p
              className="
                font-sans font-normal text-white
                text-[clamp(13.5px,13px+0.2vw,15.5px)]
                leading-[140%] tracking-normal m-0 w-full
              "
            >
              When a mind is ignited, awareness grows, perspective changes and new possibilities begin to open.
            </p>
          </div>

          <div
            id="purpose-conclusion"
            className="flex flex-col gap-[clamp(8px,1vw,10px)] w-full"
          >
            <h3
              className="
                font-serif font-bold italic text-white
                text-[clamp(16.5px,15.5px+0.35vw,19.5px)]
                leading-[1.25] tracking-normal m-0 w-full
              "
            >
              When you ignite a mind, you open the door to possibilities
            </h3>
            <p
              className="
                font-sans font-normal text-white
                text-[clamp(13.5px,13px+0.2vw,15.5px)]
                leading-[140%] tracking-normal m-0 w-full
              "
            >
              That belief is the thread that connects everything I do today from personal transformation and mentoring to leadership development, HR consultancy and Organisation Development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
