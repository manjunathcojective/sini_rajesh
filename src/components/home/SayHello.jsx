"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function SayHello() {
  return (
    <section
      id="say-hello-section"
      className="w-full flex justify-center overflow-hidden bg-[#FEFEFE]"
      aria-labelledby="say-hello-heading"
    >
      {/* Outer Container — capped at 1440px, fluid padding */}
      <div
        id="say-hello-container"
        className="relative flex flex-col items-center w-full max-w-[1440px] px-[clamp(16px,6.94vw,100px)] py-[clamp(40px,5vw,72px)]"
      >
        {/* Main Content Layout: stacked on mobile/tablet, side-by-side on desktop */}
        <div
          id="say-hello-wrapper"
          className="flex flex-col lg:flex-row w-full gap-[clamp(16px,2vw,30px)] items-stretch justify-between"
        >
          {/* ======================================================= */}
          {/* Left Card — Say Hello content                            */}
          {/* ======================================================= */}
          <motion.div
            id="say-hello-card"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden w-full lg:flex-[57] rounded-[12px] bg-[#D07578] flex flex-col justify-center px-[clamp(24px,5.2vw,75px)] py-[clamp(36px,4vw,56px)]"
          >
            {/* Decorative Leaves — Top Left */}
            <div className="absolute pointer-events-none top-0 left-0 -rotate-[5.4deg] opacity-40 md:opacity-75 lg:opacity-100 z-0">
              <svg
                width="108"
                height="82"
                viewBox="0 0 108 82"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M76.3522 45.5219C76.3522 45.5219 78.3316 35.0821 87.6609 31.5751C96.99 28.0686 104.34 35.0019 104.34 35.0019C104.34 35.0019 102.36 45.4422 93.0311 48.9487C83.7019 52.4552 76.3522 45.5219 76.3522 45.5219ZM76.3522 45.5219C76.9158 45.327 84.474 42.6913 88.1827 41.3978"
                  stroke="white"
                  strokeOpacity="0.25"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M76.7803 45.1925C63.8705 52.4915 34.7233 60.5277 21.4131 34.2785C4.77546 1.46669 -0.548619 -1.87711 -8.6673 -5.48452"
                  stroke="white"
                  strokeOpacity="0.25"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M9.5966 11.6247L8.93993 11.987C8.77397 11.6863 8.83358 11.3112 9.08459 11.0767L9.5966 11.6247ZM39.5291 16.3804L40.2005 16.0461C40.3608 16.3683 40.2698 16.7589 39.9836 16.9769L39.5291 16.3804ZM24.5426 12.5936C24.954 12.6411 25.2491 13.0132 25.2017 13.4246C25.1542 13.8361 24.7822 14.1312 24.3707 14.0838L24.4566 13.3387L24.5426 12.5936ZM9.5966 11.6247C10.2533 11.2624 10.2531 11.2621 10.253 11.2619C10.253 11.262 10.253 11.2618 10.253 11.2619C10.2531 11.262 10.2533 11.2624 10.2537 11.2631C10.2545 11.2645 10.2559 11.2671 10.258 11.2708C10.2621 11.2782 10.2689 11.29 10.2782 11.3062C10.2968 11.3386 10.3256 11.3881 10.3647 11.4533C10.4428 11.5835 10.5617 11.776 10.7207 12.0176C11.039 12.5013 11.5169 13.1804 12.1499 13.9523C13.4188 15.4997 15.2944 17.3995 17.7365 18.8514C20.1719 20.2993 23.1637 21.2983 26.6927 21.0691C30.2231 20.8397 34.3595 19.3765 39.0745 15.7838L39.5291 16.3804L39.9836 16.9769C35.0858 20.7089 30.6742 22.3136 26.7899 22.5659C22.9041 22.8184 19.6144 21.7129 16.9699 20.1407C14.3321 18.5725 12.3294 16.5367 10.99 14.9034C10.3188 14.085 9.81007 13.3625 9.46768 12.8422C9.29639 12.5819 9.16645 12.3717 9.07838 12.2249C9.03434 12.1515 9.00074 12.0938 8.97765 12.0537C8.9661 12.0336 8.95718 12.0178 8.95089 12.0067C8.94775 12.0011 8.94526 11.9966 8.94343 11.9934C8.94252 11.9917 8.94177 11.9904 8.94118 11.9893C8.94089 11.9888 8.94058 11.9882 8.94043 11.988C8.94016 11.9875 8.93993 11.987 9.5966 11.6247ZM39.5291 16.3804C38.8577 16.7146 38.8578 16.7149 38.8579 16.715C38.8578 16.715 38.8579 16.715 38.8578 16.7149C38.8577 16.7147 38.8574 16.7141 38.857 16.7132C38.856 16.7114 38.8545 16.7082 38.8522 16.7038C38.8477 16.6949 38.8405 16.6808 38.8307 16.6618C38.811 16.6238 38.7806 16.566 38.7397 16.4903C38.6579 16.3388 38.5341 16.116 38.369 15.8368C38.0387 15.2781 37.5445 14.4957 36.8935 13.6095C35.5874 11.8314 33.6707 9.66392 31.2052 8.0369C28.7478 6.41528 25.7646 5.34179 22.2874 5.69828C18.8054 6.05526 14.7288 7.85625 10.1086 12.1727L9.5966 11.6247L9.08459 11.0767C13.8716 6.60433 18.2401 4.60535 22.1344 4.20611C26.0333 3.80638 29.3574 5.02041 32.0313 6.78492C34.6971 8.54403 36.7359 10.8612 38.1024 12.7214C38.7877 13.6543 39.309 14.4794 39.6602 15.0734C39.8359 15.3705 39.9693 15.6103 40.0595 15.7775C40.1047 15.861 40.1391 15.9265 40.1626 15.9719C40.1743 15.9946 40.1834 16.0123 40.1897 16.0248C40.1929 16.031 40.1954 16.0359 40.1971 16.0395C40.198 16.0413 40.1988 16.0427 40.1993 16.0438C40.1996 16.0444 40.1999 16.045 40.2 16.0452C40.2003 16.0457 40.2005 16.0461 39.5291 16.3804ZM9.5966 11.6247L9.68254 10.8797L24.5426 12.5936L24.4566 13.3387L24.3707 14.0838L9.51066 12.3698L9.5966 11.6247Z"
                  fill="white"
                  fillOpacity="0.25"
                />
                <path
                  d="M18.4856 29.4222C18.4856 29.4222 32.6806 46.8695 10.5731 60.3086C10.5731 60.3086 -6.26586 41.402 18.4856 29.4222ZM18.4856 29.4222L14.8139 44.4528"
                  stroke="white"
                  strokeOpacity="0.25"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M50.4319 52.7661C50.4319 52.7661 74.2002 53.7846 69.8202 78.6749C69.8202 78.6749 43.0638 78.6343 50.4319 52.7661ZM50.4319 52.7661L60.1873 66.9786"
                  stroke="white"
                  strokeOpacity="0.25"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M35.1773 48.1238C35.1773 48.1238 58.1743 54.2144 61.3886 29.1471C61.3886 29.1471 35.8292 21.2345 35.1773 48.1238ZM35.1773 48.1238L48.153 38.4109"
                  stroke="white"
                  strokeOpacity="0.25"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Decorative Leaves — Bottom Right */}
            <div className="absolute pointer-events-none bottom-0 right-0 opacity-40 md:opacity-75 lg:opacity-100 z-0">
              <svg
                width="126"
                height="191"
                viewBox="0 0 126 191"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M55.7333 44.6188C55.7333 44.6188 73.0039 43.0058 80.1368 28.3829C87.2688 13.7601 77.1301 0.750231 77.1301 0.750231C77.1301 0.750231 59.8586 2.36326 52.7266 16.9861C45.5946 31.6089 55.7333 44.6188 55.7333 44.6188ZM55.7333 44.6188C56.1366 43.7328 61.5813 31.8543 64.2533 26.0257"
                  stroke="white"
                  strokeOpacity="0.25"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M56.3353 43.9727C42.4895 63.832 24.9512 109.967 65.5659 135.631C116.335 167.712 120.951 176.878 125.566 190.626"
                  stroke="white"
                  strokeOpacity="0.25"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M100.567 158.316C100.567 158.316 70.6751 137.934 97.4367 108.94C97.4367 108.94 132.024 130.44 100.567 158.316ZM100.567 158.316L100.064 133.903"
                  stroke="white"
                  strokeOpacity="0.25"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M73.0084 141.136C73.0084 141.136 46.8343 115.386 21.5968 149.25C21.5968 149.25 49.7363 179.521 73.0084 141.136ZM73.0084 141.136L48.0168 144.794"
                  stroke="white"
                  strokeOpacity="0.25"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M39.9783 85.6307C39.9783 85.6307 41.9747 46.8465 0.850725 50.1406C0.850725 50.1406 -3.194 93.6308 39.9783 85.6307ZM39.9783 85.6307L18.3793 67.5928"
                  stroke="white"
                  strokeOpacity="0.25"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M45.1788 111.136C45.1788 111.136 38.8138 72.8259 80.0463 71.4532C80.0463 71.4532 88.9788 114.208 45.1788 111.136ZM45.1788 111.136L62.9575 91.5403"
                  stroke="white"
                  strokeOpacity="0.25"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Card Content */}
            <div
              id="say-hello-card-content"
              className="relative z-10 flex flex-col w-full max-w-[558px] gap-[clamp(24px,3.5vw,40px)]"
            >
              <motion.div
                id="say-hello-text-group"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col w-full gap-[clamp(16px,2.5vw,30px)]"
              >
                {/* Badge */}
                <div id="say-hello-badge" className="flex items-center gap-[10px]">
                  <div className="w-[6px] h-[6px] rounded-full bg-white flex-shrink-0 translate-y-[1px]" />
                  <div className="font-serif font-bold italic text-[clamp(17px,1.2vw+12px,20px)] leading-none text-white whitespace-nowrap">
                    Say Hello!
                  </div>
                </div>

                {/* Heading */}
                <h2
                  id="say-hello-heading"
                  className="font-serif font-bold italic text-[clamp(28px,2vw+18px,41.62px)] leading-[1.1] text-white m-0"
                >
                  Let's Begin with a Conversation
                </h2>

                {/* Subtitle & Invitation */}
                <div
                  id="say-hello-paragraphs"
                  className="flex flex-col w-full gap-[clamp(10px,1vw,16px)]"
                >
                  <p className="font-sans font-normal text-[clamp(14.5px,0.4vw+13px,16px)] leading-[140%] text-white m-0">
                    Let's explore where you are today, where you would like to go, and what might help you get there.
                  </p>
                  <p className="font-sans font-semibold text-[clamp(14.5px,0.4vw+13px,16px)] leading-normal text-white m-0">
                    "Book a Complimentary 30-Minute Exploratory Call"
                  </p>
                </div>
              </motion.div>

              {/* Action Button */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.36, 1] }}
              >
                <Button
                  id="say-hello-cta-button"
                  href="/contact"
                  ariaLabel="Book Now"
                  variant="white"
                  size="nav"
                >
                  Book Now
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* ======================================================= */}
          {/* Right Image Banner                                       */}
          {/* ======================================================= */}
          <motion.div
            id="say-hello-image-banner"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden flex-shrink-0 w-full lg:flex-[43] h-[clamp(240px,38vw,400px)] rounded-[12px] group/photo"
          >
            <Image
              src="/images/say-hello.png"
              alt="Say Hello"
              fill
              priority
              sizes="(max-width: 767px) 100vw, (max-width: 1200px) 100vw, 43vw"
              className="object-cover transition-transform duration-700 ease-out group-hover/photo:scale-105"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
