"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui";

export default function AskingWhy() {
  return (
    <section
      id="asking-why-section"
      aria-label="The Question That Changed The Way I Looked At People"
      className="w-full bg-[#FEFEFE] overflow-hidden"
    >
      <div
        id="asking-why-layout"
        className="
          w-full max-w-[1440px] mx-auto
          px-[clamp(20px,6.94vw,100px)]
          py-[clamp(40px,4.17vw,60px)]
          flex flex-col
          items-center
          gap-[clamp(36px,4.17vw,60px)]
        "
      >
        {/* Header */}
        <motion.header
          id="asking-why-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="
            w-full max-w-[844px]
            flex flex-col items-center
            gap-[clamp(16px,2.08vw,30px)]
            text-center
          "
        >
          <Badge text="Asking Why" id="badge-asking-why" />

          <div id="asking-why-heading-group" className="w-full flex justify-center">
            <h2
              className="
                font-serif font-bold italic
                text-[clamp(28px,20px+1.5vw,41.62px)]
                leading-tight lg:leading-[45px]
                tracking-normal text-[#141414]
                m-0 text-center
                max-w-[499px]
              "
            >
              The Question That Changed The Way I Looked At People
            </h2>
          </div>
        </motion.header>

        {/* 3 Inquiry Cards */}
        <motion.div
          id="asking-why-cards-grid"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="
            w-full
            grid grid-cols-1 lg:grid-cols-3
            gap-[clamp(20px,1.67vw,24px)]
          "
        >
          {/* Card 1: Sunset Perspective */}
          <article
            id="card-sunset-perspective"
            className="
              box-border
              w-full
              bg-[#FEFEFE]
              rounded-[16px]
              border border-[#D07578]/50
              p-[clamp(24px,2.5vw,36px)_clamp(20px,1.67vw,24px)_clamp(24px,1.94vw,28px)]
              flex flex-col justify-start
              gap-[clamp(28px,4vw,58px)]
              transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
              hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(208,117,120,0.15)] hover:border-[#D07578]/90
            "
          >
            <div className="w-10 h-10 flex-shrink-0" aria-hidden="true">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 5.2085V8.3335M20 8.3335V11.4585M20 8.3335H17.5M20 8.3335H22.5M25 8.3335L22.8312 7.61055C21.8358 7.27876 21.0547 6.49771 20.723 5.50236L20 3.3335L19.277 5.50236C18.9453 6.49771 18.1642 7.27876 17.1688 7.61055L15 8.3335L17.1688 9.05645C18.1642 9.38823 18.9453 10.1693 19.277 11.1646L20 13.3335L20.723 11.1646C21.0547 10.1693 21.8358 9.38823 22.8312 9.05645L25 8.3335Z" stroke="#D07578" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M32.5 23.3333C34.8012 23.3333 36.6667 21.4679 36.6667 19.1667C36.6667 16.8655 34.8012 15 32.5 15C30.1988 15 28.3333 16.8655 28.3333 19.1667C28.3333 21.4679 30.1988 23.3333 32.5 23.3333Z" stroke="#D07578" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M36.6667 36.6665V32.1882C36.6667 29.3675 36.6667 27.957 36.114 26.8813C35.6367 25.9525 34.8807 25.1965 33.9518 24.7192C32.876 24.1665 31.4657 24.1665 28.645 24.1665C27.9093 24.1665 27.5415 24.1665 27.1915 24.0903C26.8865 24.024 26.5925 23.9153 26.3178 23.7672C26.0025 23.5972 25.7232 23.3578 25.1647 22.879L21.3458 19.6058C21.0152 19.3223 20.5938 19.1665 20.1583 19.1665C19.1503 19.1665 18.3333 19.9835 18.3333 20.9915V21.189C18.3333 21.503 18.4043 21.8132 18.554 22.0892C19.4663 23.7718 21.255 26.367 23.6582 28.5635C25.2863 30.0517 26.1003 30.7957 26.3835 31.4382C26.6667 32.0805 26.6667 32.923 26.6667 34.6078V36.6665" stroke="#D07578" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3.33333 36.6643V32.1862C3.33333 29.3653 3.33333 27.955 3.88606 26.8792C4.36331 25.9505 5.11939 25.1943 6.04819 24.7172C7.12391 24.1643 8.53429 24.1643 11.355 24.1643C12.0907 24.1643 12.4585 24.1643 12.8086 24.0883C13.1135 24.022 13.4076 23.9132 13.6822 23.765C13.8396 23.6802 13.988 23.578 14.1667 23.4375M13.3333 36.6643V34.6057C13.3333 32.9208 13.3333 32.0783 13.6165 31.436C13.8996 30.7937 14.7137 30.0495 16.3419 28.5613C16.4514 28.4612 16.5597 28.3602 16.6667 28.2585" stroke="#D07578" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3.33333 19.1667C3.33333 21.4678 5.19881 23.3333 7.49999 23.3333C9.80118 23.3333 11.6667 21.4678 11.6667 19.1667C11.6667 16.8655 9.80118 15 7.49999 15C5.19881 15 3.33333 16.8655 3.33333 19.1667Z" stroke="#D07578" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="flex flex-col gap-[clamp(16px,1.67vw,24px)] w-full">
              <h3
                className="
                  font-serif font-semibold italic text-[#D07578]
                  text-[clamp(20px,18px+0.54vw,25.81px)]
                  leading-[110%] tracking-normal m-0
                  lg:min-h-[58px]
                  flex items-start
                "
              >
                Why can the same sunset feel so different to two people?
              </h3>

              <div className="flex flex-col gap-3 w-full">
                <p
                  className="
                    font-sans font-normal text-[#141414]/75
                    text-[clamp(14px,13.1px+0.2vw,16px)]
                    leading-[140%] tracking-normal m-0
                  "
                >
                  I remember looking at a beautiful sunset one day and thinking about how differently two people could experience the same moment. One person might see its beauty, feel peaceful and uplifted, while another might experience sadness, fear or melancholy.
                </p>
              </div>
            </div>
          </article>

          {/* Card 2: Organisational Mirror */}
          <article
            id="card-org-mirror"
            className="
              box-border
              w-full
              bg-[#FEFEFE]
              rounded-[16px]
              border border-[#D07578]/50
              p-[clamp(24px,2.5vw,36px)_clamp(20px,1.67vw,24px)_clamp(24px,1.94vw,28px)]
              flex flex-col justify-start
              gap-[clamp(28px,4vw,58px)]
              transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
              hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(208,117,120,0.15)] hover:border-[#D07578]/90
            "
          >
            <div className="w-10 h-10 flex-shrink-0" aria-hidden="true">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.6666 20.8233C26.6666 17.1415 23.6818 14.1567 20 14.1567C16.3181 14.1567 13.3333 17.1415 13.3333 20.8233" stroke="#D07578" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.66669 30.8335H23.3334" stroke="#D07578" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.66669 25.8335H33.3334" stroke="#D07578" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16.6667 35.8335H33.3334" stroke="#D07578" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3.33331 20.8248H6.66665M33.3333 20.8248H36.6666M19.9916 7.49984V4.1665M29.4221 11.4006L31.7791 9.0436M10.566 11.4138L8.20901 9.05675" stroke="#D07578" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="flex flex-col gap-[clamp(16px,1.67vw,24px)] w-full">
              <h3
                className="
                  font-serif font-semibold italic text-[#D07578]
                  text-[clamp(20px,18px+0.54vw,25.81px)]
                  leading-[110%] tracking-normal m-0
                  lg:min-h-[58px]
                  flex items-start
                "
              >
                The sunset hadn’t changed. So, what had happened?
              </h3>

              <div className="flex flex-col gap-3 w-full">
                <p
                  className="
                    font-sans font-normal text-[#141414]/75
                    text-[clamp(14px,13.1px+0.2vw,16px)]
                    leading-[140%] tracking-normal m-0
                  "
                >
                  I began noticing the same phenomenon in organisations. Two people could experience very similar situations, receive the same feedback or face the same challenge and yet perceive, feel and respond to them differently.
                </p>
              </div>
            </div>
          </article>

          {/* Card 3: Deep Research Inquiry */}
          <article
            id="card-research-inquiry"
            className="
              box-border
              w-full
              bg-[#FEFEFE]
              rounded-[16px]
              border border-[#D07578]/50
              p-[clamp(24px,2.5vw,36px)_clamp(20px,1.67vw,24px)_clamp(24px,1.94vw,28px)]
              flex flex-col justify-start
              gap-[clamp(28px,4vw,58px)]
              transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
              hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(208,117,120,0.15)] hover:border-[#D07578]/90
            "
          >
            <div className="w-10 h-10 flex-shrink-0" aria-hidden="true">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.1667 14.1657C22.7215 14.8882 18.5197 16.112 14.3861 15.99C13.3 15.9579 12.5 15.0253 12.5 13.9387C12.5 13.0653 13.0172 12.2722 13.8013 11.8876C15.4736 11.0673 18.1117 9.69647 20.4515 8.43097C21.8722 7.66267 22.5825 7.2785 23.121 7.09665C24.5638 6.60939 25.7252 6.59072 27.1828 7.03139C27.727 7.19584 28.3805 7.52259 29.6873 8.17605L31.1945 8.92962C31.314 8.98937 31.3738 9.01925 31.435 9.04402C31.5925 9.10775 31.7588 9.14702 31.9282 9.16045C31.994 9.16569 32.0608 9.16569 32.1945 9.16569C33.2537 9.16569 33.7832 9.16569 34.217 9.28495C35.3503 9.59657 36.2358 10.482 36.5473 11.6153C36.6667 12.0491 36.6667 12.5787 36.6667 13.6378V22.8562C36.6667 24.0397 35.7073 24.999 34.5238 24.999C34.292 24.999 34.0663 25.0742 33.881 25.2133L33.3333 25.624C32.1777 26.4907 31.5998 26.9242 30.9373 27.175C30.8118 27.2225 30.6847 27.2648 30.5558 27.3022C29.8752 27.499 29.1528 27.499 27.7083 27.499H23.3333" stroke="#D07578" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M24.1666 14.165L29.2855 19.9625C30.152 20.9157 30.1171 22.3812 29.2063 23.292C28.264 24.2345 26.736 24.2345 25.7936 23.292C26.7141 24.2125 26.7538 25.7445 25.8333 26.665C24.9128 27.5855 23.4205 27.5855 22.5 26.665L21.6666 25.8317C22.5871 26.7522 22.5871 28.2445 21.6666 29.165C20.7461 30.0855 19.2538 30.0855 18.3333 29.165C19.2538 30.0855 19.2538 31.5778 18.3333 32.4983L18.2321 32.5995C17.7633 33.0683 17.1275 33.3317 16.4644 33.3317H16.25C15.4496 33.3317 14.682 33.0138 14.1161 32.4478L7.357 25.6887C6.91498 25.2467 6.31546 24.9983 5.69033 24.9983C4.3886 24.9983 3.33331 23.9432 3.33331 22.6413V15.8317C3.33331 12.689 3.33331 11.1177 4.30963 10.1414C5.28593 9.16504 6.85728 9.16504 9.99998 9.16504H18.3333" stroke="#D07578" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="flex flex-col gap-[clamp(16px,1.67vw,24px)] w-full">
              <h3
                className="
                  font-serif font-semibold italic text-[#D07578]
                  text-[clamp(20px,18px+0.54vw,25.81px)]
                  leading-[110%] tracking-normal m-0
                  lg:min-h-[58px]
                  flex items-start
                "
              >
                This left me wondering, Why do we behave the way we behave?
              </h3>

              <div className="flex flex-col gap-3 w-full">
                <p
                  className="
                    font-sans font-normal text-[#141414]/75
                    text-[clamp(14px,13.1px+0.2vw,16px)]
                    leading-[140%] tracking-normal m-0
                  "
                >
                  The more I explored this question, the more interested I became in the connection between mindset, thoughts, emotions &amp; behaviour. What began as curiosity gradually developed into a deeper area of study &amp; eventually became the focus of my doctoral research.
                </p>
              </div>
            </div>
          </article>
        </motion.div>

        {/* Bottom Area: Doctoral Research Takeaways */}
        <motion.footer
          id="asking-why-footer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="
            w-full max-w-[802px]
            flex flex-col items-center
            gap-[clamp(6px,0.55vw,10px)]
            text-center
          "
        >
          <p
            className="
              font-sans font-normal text-[#141414]/75
              text-[clamp(14px,13.1px+0.2vw,16px)]
              leading-[130%] tracking-normal m-0
              text-center w-full
            "
          >
            I pursued my <strong>Doctorate in Business Administration from SSBM Geneva</strong>, researching the <strong><em>role of mindset in human behaviour in relation to leadership and Organisation Development</em></strong>.
          </p>

          <p
            className="
              font-sans font-normal text-[#141414]/75
              text-[clamp(14px,13.1px+0.2vw,16px)]
              leading-[130%] tracking-normal m-0
              text-center w-full
            "
          >
            The journey strengthened something I had increasingly begun to understand through my own experiences and work with people:{" "}
            <span className="font-sans font-semibold text-[#141414]/85">
              <br /><em>The way we see the world influences the way we experience it</em>.
            </span>
          </p>

          <p
            className="
              font-sans font-normal text-[#141414]/75
              text-[clamp(14px,13.1px+0.2vw,16px)]
              leading-[130%] tracking-normal m-0
              text-center w-full
            "
          >
            And sometimes, creating change around us begins with becoming more aware of what is happening within us.
          </p>
        </motion.footer>
      </div>
    </section>
  );
}
