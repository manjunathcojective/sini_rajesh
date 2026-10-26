"use client";
import React from "react";
import Image from "next/image";
import HeaderNav from "@/components/common/HeaderNav";
import Button from "@/components/ui/Button";

const TAGLINE_ITEMS = [
  { id: "frame5", text: "Mentor" },
  { id: "frame6", text: "HR Expert" },
  { id: "frame7", text: "Board Advisor" },
  { id: "frame8", text: "Organisation Development Specialist" },
  { id: "frame9", text: "Life Coach" },
  { id: "frame10", text: "Happypreneur" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="w-full bg-[#FEFEFE] flex justify-center px-[clamp(10px,2.5vw,20px)] pt-[clamp(10px,2.5vw,20px)] pb-[clamp(12px,3vw,24px)] overflow-hidden"
    >
      {/* Frame 2: Main Hero Card */}
      <div
        id="frame2"
        className="relative w-full max-w-[1400px] overflow-hidden rounded-[12px] bg-[#627861] lg:h-[clamp(650px,53vw,760px)] md:max-lg:h-[clamp(920px,120vw,984px)] max-md:flex max-md:flex-col max-md:aspect-[1/2.11764705882] max-md:min-h-0 max-md:h-auto"
      >
        {/* Background Image */}
        <div
          id="hero-bg"
          className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden"
        >
          <Image
            src="/images/bg.png"
            alt="Hero Background"
            width={1440}
            height={1013}
            priority
            className="w-full h-full object-cover object-center md:max-lg:object-[94%_6%] lg:object-center transition-all duration-700 ease-out"
          />
        </div>

        {/* Top Navigation Bar: Reusable HeaderNav */}
        <HeaderNav />

        {/* Desktop Portrait Image (lg: >= 1024px: Laptops & Desktop) */}
        <div
          id="hero-portrait"
          className="hidden lg:block absolute z-5 pointer-events-none select-none bottom-0 left-[clamp(280px,30.2%,423px)] w-[clamp(370px,37.8%,529px)] h-[clamp(460px,46.6vw,653px)] transition-all duration-700 ease-out"
        >
          <Image
            src="/images/portrait.png"
            alt="Dr. Sini Rajesh"
            width={529}
            height={653}
            priority
            loading="eager"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Tablet Portrait Image (md:max-lg: 768px - 1023px) */}
        <div
          id="hero-tablet-portrait"
          className="hidden md:max-lg:block absolute z-5 pointer-events-none select-none top-[clamp(140px,20vw,200px)] left-1/2 -translate-x-1/2 w-[clamp(560px,78vw,760px)] h-[clamp(720px,95vw,946px)] transition-all duration-700 ease-out"
        >
          <Image
            src="/images/tablet-portrait.png"
            alt="Dr. Sini Rajesh"
            width={760}
            height={946}
            priority
            loading="eager"
            className="w-full h-full object-contain object-top scale-[1.14] origin-top transition-transform duration-500"
          />
        </div>

        {/* Mobile Portrait Image (max-md: < 768px: Proportional zoom and positioning) */}
        <div
          id="hero-mobile-portrait"
          className="block md:hidden absolute z-5 pointer-events-none select-none top-[clamp(95px,28vw,165px)] left-1/2 -translate-x-1/2 w-[clamp(425px,133vw,1000px)] h-[clamp(638px,200vw,1500px)]"
        >
          <Image
            src="/images/Hero-Portrait-Mobile.png"
            alt="Dr. Sini Rajesh"
            width={700}
            height={1050}
            priority
            loading="eager"
            className="w-full h-full object-contain object-top scale-[1.38] origin-top transition-transform duration-500"
          />
        </div>

        {/* Badge */}
        <div
          id="frame4"
          className="z-20 flex items-center gap-[clamp(6px,2vw,12px)] 
            lg:absolute lg:left-[clamp(24px,3.8%,53px)] lg:top-[clamp(290px,29vw,410px)] 
            md:max-lg:absolute md:max-lg:left-[clamp(30px,5vw,50px)] md:max-lg:top-[clamp(440px,52vw,525px)] 
            max-md:relative max-md:mt-auto max-md:px-[clamp(16px,5vw,36px)]"
        >
          <div className="w-[clamp(4.5px,1.4vw,7px)] h-[clamp(4.5px,1.4vw,7px)] rounded-full bg-white flex-shrink-0 translate-y-[1px]" />
          <div className="font-serif font-bold italic text-white text-[clamp(14px,1.4vw,20px)] md:max-lg:text-[clamp(16px,2.2vw,20px)] max-md:text-[clamp(11.5px,3.6vw,22px)] leading-none select-none whitespace-nowrap max-md:whitespace-normal">
            Hi, I’m Dr. Sini Rajesh Founder of Igniting Mindz
          </div>
        </div>

        {/* Main Heading */}
        <h1
          id="hero-heading"
          className="z-20 font-serif font-bold italic text-white m-0 
            lg:absolute lg:left-[clamp(24px,3.8%,53px)] lg:top-[clamp(330px,32vw,456px)] lg:max-w-[clamp(340px,35%,494px)] lg:text-[clamp(28px,3.67vw,52.86px)] lg:leading-[105%] 
            md:max-lg:absolute md:max-lg:left-[clamp(30px,5vw,50px)] md:max-lg:top-[clamp(480px,56.5vw,568px)] md:max-lg:max-w-[clamp(320px,43vw,427px)] md:max-lg:text-[clamp(32px,4.5vw,45px)] md:max-lg:leading-[105%] 
            max-md:relative max-md:mt-[clamp(8px,2.5vw,16px)] max-md:px-[clamp(16px,5vw,36px)] max-md:max-w-[96%] max-md:text-[clamp(22px,6.9vw,48px)] max-md:leading-[1.12]"
        >
          <span className="max-md:block">Transform from Within, </span>
          <span className="max-md:block">Grow with Clarity, </span>
          <span className="max-md:block">Create Lasting Impact</span>
        </h1>

        {/* Paragraph Description */}
        <p
          id="hero-description"
          className="z-20 font-sans font-normal text-white m-0 
            lg:absolute lg:left-[clamp(560px,62%,878px)] lg:top-[clamp(340px,34vw,482px)] lg:max-w-[clamp(320px,32%,458px)] lg:text-[clamp(13px,1.11vw,16px)] lg:leading-[125%] lg:indent-[clamp(2ch,3.5vw,5.5ch)] 
            md:max-lg:absolute md:max-lg:left-[clamp(30px,5vw,50px)] md:max-lg:top-[clamp(630px,73vw,736px)] md:max-lg:max-w-[clamp(340px,55vw,494px)] md:max-lg:text-[clamp(14px,1.8vw,16px)] md:max-lg:leading-[135%] md:max-lg:indent-0 
            max-md:relative max-md:mt-[clamp(8px,2.5vw,16px)] max-md:px-[clamp(16px,5vw,36px)] max-md:max-w-[96%] max-md:text-[clamp(11.5px,3.6vw,22px)] max-md:leading-[1.38] max-md:indent-0 max-md:text-white/95"
        >
          I inspire individuals, leaders, and organisations to discover their potential, gain clarity, prune limiting beliefs, and create meaningful transformation from the inside out.
        </p>

        {/* CTA Button: Let’s Talk */}
        <div
          id="component4"
          className="z-20 
            lg:absolute lg:left-[clamp(560px,62%,878px)] lg:top-[clamp(410px,40vw,565px)] lg:w-[134px] 
            md:max-lg:absolute md:max-lg:left-[clamp(30px,5vw,50px)] md:max-lg:top-[clamp(710px,81vw,820px)] md:max-lg:w-[134px] 
            max-md:relative max-md:mt-[clamp(10px,3.2vw,20px)] max-md:px-[clamp(16px,5vw,36px)] max-md:w-fit"
        >
          <Button
            href="/contact"
            ariaLabel="Let’s Talk"
            className="w-[134px] max-md:!h-[clamp(32px,10vw,48px)] max-md:!min-h-[clamp(32px,10vw,48px)] max-md:!w-[clamp(108px,34vw,160px)] max-md:!text-[clamp(12px,3.75vw,18px)] max-md:!px-[clamp(8px,2.5vw,16px)]"
          >
            Let’s Talk
          </Button>
        </div>

        {/* Gradient Overlay */}
        <div
          id="hero-gradient-overlay"
          className="absolute inset-x-0 bottom-0 pointer-events-none z-10 
            lg:h-[clamp(240px,29.5vw,413px)] 
            md:max-lg:h-[clamp(360px,53vw,533px)] 
            max-md:h-[clamp(460px,68%,540px)] 
            bg-gradient-to-b from-transparent via-[#9B6052]/80 to-[#925648]/95"
        />

        {/* Bottom Specializations Row: Infinite Rightward Marquee Carousel */}
        <div
          id="hero-tagline-row"
          aria-label="Areas of Specialization"
          className="z-20 select-none w-full overflow-hidden
            lg:absolute lg:bottom-[clamp(16px,1.8vw,24px)] lg:left-0 lg:right-0 
            md:max-lg:absolute md:max-lg:bottom-[clamp(14px,2vw,20px)] md:max-lg:left-0 md:max-lg:right-0 
            max-md:relative max-md:mt-[clamp(14px,4.8vw,30px)] max-md:mb-[clamp(10px,3.4vw,22px)]
            [mask-image:linear-gradient(to_right,transparent,black_32px,black_calc(100%-32px),transparent)]"
        >
          <div className="animate-tagline-left flex items-center">
            {/* Unit A: Responsive fluid gaps (mobile: 3 points visible, tablet: 4 points visible, desktop: consistent 110px) */}
            <div className="flex items-center gap-[clamp(24px,7vw,38px)] md:gap-[clamp(55px,7.5vw,75px)] lg:gap-[clamp(85px,7vw,110px)] shrink-0 pr-[clamp(24px,7vw,38px)] md:pr-[clamp(55px,7.5vw,75px)] lg:pr-[clamp(85px,7vw,110px)]">
              {TAGLINE_ITEMS.map((item) => (
                <div
                  key={`tagline-a-${item.id}`}
                  className="flex items-center gap-[clamp(6px,0.5vw+4px,8px)] cursor-default transition-all duration-300 flex-shrink-0 group py-1"
                >
                  <div className="w-[clamp(4.5px,0.4vw+3px,6.5px)] h-[clamp(4.5px,0.4vw+3px,6.5px)] rounded-full bg-white flex-shrink-0 translate-y-[1px] group-hover:shadow-[0_0_6px_rgba(255,255,255,0.9)] group-hover:scale-125 transition-all duration-300" />
                  <span className="font-serif font-bold italic text-white text-[clamp(13.5px,0.5vw+11.5px,16.5px)] leading-none whitespace-nowrap">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Unit B: Exact duplicate set for continuous seamless leftward loop */}
            <div
              className="flex items-center gap-[clamp(24px,7vw,38px)] md:gap-[clamp(55px,7.5vw,75px)] lg:gap-[clamp(85px,7vw,110px)] shrink-0 pr-[clamp(24px,7vw,38px)] md:pr-[clamp(55px,7.5vw,75px)] lg:pr-[clamp(85px,7vw,110px)]"
              aria-hidden="true"
            >
              {TAGLINE_ITEMS.map((item) => (
                <div
                  key={`tagline-b-${item.id}`}
                  className="flex items-center gap-[clamp(6px,0.5vw+4px,8px)] cursor-default transition-all duration-300 flex-shrink-0 group py-1"
                >
                  <div className="w-[clamp(4.5px,0.4vw+3px,6.5px)] h-[clamp(4.5px,0.4vw+3px,6.5px)] rounded-full bg-white flex-shrink-0 translate-y-[1px] group-hover:shadow-[0_0_6px_rgba(255,255,255,0.9)] group-hover:scale-125 transition-all duration-300" />
                  <span className="font-serif font-bold italic text-white text-[clamp(13.5px,0.5vw+11.5px,16.5px)] leading-none whitespace-nowrap">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
