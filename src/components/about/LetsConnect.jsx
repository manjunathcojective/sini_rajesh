"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui";

const CONNECT_POINTS = [
  {
    id: "point-clarity",
    text: "Sometimes, we simply need a little clarity",
  },
  {
    id: "point-listen",
    text: "Someone who will listen",
  },
  {
    id: "point-questions",
    text: "Someone who will ask the right questions",
  },
  {
    id: "point-possibility",
    text: "Someone who will help us see a possibility we may not yet be able to see for ourselves",
  },
];

export default function LetsConnect() {
  return (
    <section
      id="lets-connect-section"
      aria-label="Let's Connect - And Perhaps, This Is Where Our Stories Meet"
      className="w-full bg-[#FEFEFE] overflow-hidden"
    >
      <div
        id="lets-connect-container"
        className="
          w-full max-w-[1440px] mx-auto
          px-[clamp(20px,6.94vw,100px)]
          py-[clamp(40px,4.5vw,60px)]
          flex flex-col items-center
          gap-[clamp(28px,3vw,44px)]
        "
      >
        <motion.div
          id="lets-connect-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex flex-col items-center gap-[clamp(28px,3vw,40px)]"
        >
          {/* Header */}
          <header className="flex flex-col items-center text-center gap-[clamp(12px,1.5vw,16px)] max-w-[697px] w-full">
            <Badge text="Let's Connect" id="badge-lets-connect" className="w-fit" />

            <div id="lets-connect-header-group" className="flex flex-col items-center gap-[clamp(10px,1.2vw,14px)] w-full">
              <h2
                className="
                  font-serif font-bold italic text-[#141414]
                  text-[clamp(28px,20px+1.5vw,41.62px)]
                  leading-tight lg:leading-[45px]
                  tracking-normal text-center m-0 w-full
                "
              >
                And Perhaps, This Is Where Our Stories Meet
              </h2>
              <p
                className="
                  font-sans font-normal text-[#141414]/75
                  text-[clamp(14px,13.1px+0.2vw,16px)]
                  leading-[140%] text-center max-w-[551px] m-0 w-full
                "
              >
                If there is one thing my journey has taught me, it is that there is so much more within each of us than we sometimes realise.
              </p>
            </div>
          </header>

          {/* 4 Pink Quote Boxes (2x2 grid on lg+, 1 col on mobile & tablet) */}
          <div
            id="connect-cards-container"
            className="
              grid grid-cols-1 lg:grid-cols-2
              gap-[clamp(16px,1.67vw,24px)]
              w-full max-w-[1240px]
            "
          >
            {CONNECT_POINTS.map((point) => (
              <div
                key={point.id}
                id={point.id}
                className="
                  group
                  box-border
                  w-full
                  min-h-[80px]
                  p-[clamp(16px,2vw,20px)]
                  flex items-center justify-between
                  gap-4
                  rounded-[12px]
                  bg-[#D07578]
                  backdrop-blur-[40px]
                  transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
                  hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(208,117,120,0.3)]
                "
              >
                <p
                  className="
                    font-sans font-medium text-white
                    text-[clamp(14.5px,13.5px+0.2vw,16px)]
                    leading-[130%] m-0 flex-1 pr-4
                  "
                >
                  {point.text}
                </p>
                <div
                  className="w-10 h-10 shrink-0 opacity-25 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                  aria-hidden="true"
                >
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 26.6663V16.6663H13.1833C12.7879 14.3388 11.5825 12.2259 9.78005 10.701C7.97764 9.17612 5.69425 8.33739 3.33333 8.333V4.99967C6.86833 5.00364 10.2574 6.40968 12.757 8.9093C15.2567 11.4089 16.6627 14.798 16.6667 18.333V33.333H6.66667C4.89856 33.333 3.20286 32.6306 1.95262 31.3804C0.702379 30.1301 0 28.4345 0 26.6663Z" fill="white"/>
                    <path d="M30 33.333C28.2319 33.333 26.5362 32.6306 25.2859 31.3804C24.0357 30.1301 23.3333 28.4345 23.3333 26.6663V16.6663H36.5166C36.1212 14.3388 34.9158 12.2259 33.1134 10.701C31.311 9.17612 29.0276 8.33739 26.6666 8.333V4.99967C30.2016 5.00364 33.5907 6.40968 36.0904 8.9093C38.59 11.4089 39.996 14.798 40 18.333V33.333H30Z" fill="white"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Summary Paragraph */}
          <footer
            id="lets-connect-footer"
            className="flex flex-col items-center text-center gap-1.5 max-w-[747px] w-full"
          >
            <p
              className="
                font-sans font-normal text-[#141414]/75
                text-[clamp(14px,13.1px+0.2vw,16px)]
                leading-[140%] text-center max-w-[404px] m-0
              "
            >
              And that is the space I hope to create through my work.
            </p>
            <p
              className="
                font-sans font-normal text-[#141414]/75
                text-[clamp(14px,13.1px+0.2vw,16px)]
                leading-[140%] text-center m-0
              "
            >
              So, whether you are trying to make a change in your own life, grow as a leader, navigate a challenge in your business, or transform your organisation, perhaps we can begin with a conversation.
            </p>
          </footer>
        </motion.div>
      </div>
    </section>
  );
}
