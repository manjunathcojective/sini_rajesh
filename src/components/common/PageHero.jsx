"use client";

import React from "react";
import Image from "next/image";
import HeaderNav from "@/components/common/HeaderNav";

export default function PageHero({
  heading,
  badge,
  title,
  info,
  description,
  layout = "split", // "split" (default 2-column) | "stacked" (info below title)
  infoPosition = "right", // "right" | "below"
  tags = [],
  rightContent = null,
  bgImage = "/images/bg.png",
  bgPosition = "center 30%", // Shifting default Y from 50% to 30% moves the background image down inside the frame
  bgStyle = {},
  bgImageStyle = {},
  bgColor = "bg-[#627861]",
  overlay = null,
  fullWidth = false,
  card = true,
  cardClassName = "",
  containerClassName = "",
  indent = true,
  infoStyle = {},
  infoClassName = "",
  titleStyle = {},
  titleClassName = "",
  leftBlockStyle = {},
  leftBlockClassName = "",
  contentStyle = {},
  contentClassName = "",
  children,
  height,
}) {
  const heroHeading = heading || badge || "My Story";
  const heroTitle = title || "A Journey Shaped by Curiosity and People";
  const heroInfo = info || description;
  const isStacked = layout === "stacked" || infoPosition === "below";

  const heroSection = (
    <section
      id="page-hero"
      className={`relative w-full ${card ? "max-w-[1400px] rounded-[12px]" : ""} overflow-hidden ${bgColor} flex justify-center h-auto ${cardClassName}`}
    >
      {/* Hero Background Texture: Edge-to-edge spanning 100% without empty side margins */}
      <div
        id="hero-bg"
        className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden"
        style={bgStyle}
      >
        <Image
          src={bgImage || "/images/bg.png"}
          alt="Hero Background"
          fill
          priority
          loading="eager"
          className="object-cover"
          sizes="100vw"
          style={{
            objectPosition: bgPosition || "center 30%",
            ...bgImageStyle,
          }}
        />
      </div>

      {/* Background Dark Overlay */}
      {overlay && (
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{ backgroundColor: overlay }}
        />
      )}

      {/* Inner Fluid Container: Centered up to 1440px with zero empty outer margins */}
      <div
        id="frame2"
        className={`relative z-10 w-full flex flex-col justify-between h-auto min-h-[320px] sm:min-h-[360px] lg:min-h-[400px] pt-4 sm:pt-5 lg:pt-5 ${fullWidth ? "max-w-none" : "max-w-[1440px]"
          }`}
        style={{
          ...(height
            ? { minHeight: typeof height === "number" ? `${height}px` : height }
            : {}),
        }}
      >
        {/* Upper Section: Top Navigation Bar in natural document flow */}
        <HeaderNav className="!relative !top-0 !left-0 !w-full !transform-none !px-[clamp(20px,6.94vw,100px)] !h-auto !min-h-[44px]" />

        {/* Stacked Layout Variant (Info directly below Title) */}
        {isStacked ? (
          <div
            id="frame6-stacked"
            className={`relative z-20 w-full px-[clamp(20px,6.94vw,100px)] mt-[clamp(32px,5vw+12px,120px)] pb-[clamp(28px,2.5vw+16px,48px)] flex flex-col gap-[clamp(16px,2vw+8px,24px)] ${contentClassName}`}
            style={contentStyle}
          >
            <div className="flex flex-col gap-[clamp(12px,1vw+6px,24px)] w-full min-w-0 max-w-full lg:max-w-[900px]">
              {/* 1. Page Hero Heading */}
              {heroHeading && (
                <div
                  id="frame4"
                  className="inline-flex items-center gap-[clamp(8px,0.5vw+6px,10px)] h-auto"
                >
                  <div className="w-[clamp(5px,0.4vw+3px,6px)] h-[clamp(5px,0.4vw+3px,6px)] rounded-full bg-white shrink-0 translate-y-[1px]" />
                  <span className="font-serif font-bold italic text-white text-[clamp(15px,0.35vw+13.5px,20px)] leading-none whitespace-nowrap">
                    {heroHeading}
                  </span>
                </div>
              )}

              {/* 2. Page Hero Title */}
              {heroTitle && (
                <h1
                  className={`font-serif font-bold italic text-white text-[clamp(28px,2.15vw+21.9px,52.86px)] leading-[1.08] lg:leading-[1.02] tracking-normal m-0 !max-w-full !h-auto ${titleClassName}`}
                  style={titleStyle}
                >
                  {typeof heroTitle === "string" && heroTitle.includes("\n")
                    ? heroTitle.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {i > 0 && (
                          <>
                            <br className="block md:hidden" />
                            <span className="hidden md:inline">&nbsp;</span>
                          </>
                        )}
                        {line}
                      </React.Fragment>
                    ))
                    : heroTitle}
                </h1>
              )}
            </div>

            {/* 3. Page Hero Info */}
            {rightContent ? (
              rightContent
            ) : heroInfo ? (
              <div
                id="page-hero-info"
                className={`w-full min-w-0 max-w-full lg:max-w-[780px] font-sans font-normal not-italic text-white/95 text-[clamp(14px,0.25vw+12.4px,16px)] lg:text-[16px] leading-[1.4] lg:leading-[100%] tracking-[0%] m-0 flex flex-col gap-[clamp(12px,0.5vw+8px,16px)] ${infoClassName}`}
                style={infoStyle}
              >
                {typeof heroInfo === "string" ? (
                  heroInfo.split("\n\n").map((para, i) => (
                    <p
                      key={i}
                      style={i === 0 && indent ? { textIndent: typeof indent === "string" ? indent : "7ch" } : undefined}
                      className={`font-sans font-normal not-italic text-white/95 text-[clamp(14px,0.25vw+12.4px,16px)] lg:text-[16px] leading-[1.4] lg:leading-[100%] tracking-[0%] m-0 ${
                        indent ? "first-of-type:indent-[7ch]" : ""
                      }`}
                    >
                      {para.includes("**")
                        ? para.split(/(\*\*[^*]+\*\*)/g).map((chunk, ci) => {
                            if (chunk.startsWith("**") && chunk.endsWith("**")) {
                              return (
                                <strong key={ci} className="font-bold text-white">
                                  {chunk.slice(2, -2)}
                                </strong>
                              );
                            }
                            return chunk;
                          })
                        : para}
                    </p>
                  ))
                ) : (
                  heroInfo
                )}
              </div>
            ) : null}

            {children}
          </div>
        ) : (
          /* Classic Split Layout (2-Column on Desktop/Laptop; Fluid Column on Tablet & Mobile) */
          <div
            id="frame6"
            className={`relative z-20 w-full px-[clamp(20px,6.94vw,100px)] mt-[clamp(32px,5vw+12px,120px)] pb-[clamp(28px,2.5vw+16px,48px)] flex flex-col ${contentClassName}`}
            style={contentStyle}
          >
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-[clamp(24px,3vw+10px,50px)] w-full">
              {/* Frame 5: Heading & Title Block with 100% fluid responsive sizing */}
              <div
                id="frame5"
                className={`w-full min-w-0 max-w-full lg:max-w-[480px] xl:max-w-[520px] lg:shrink-0 !h-auto flex flex-col justify-start gap-[clamp(12px,1vw+6px,24px)] ${leftBlockClassName}`}
                style={leftBlockStyle}
              >
                {/* 1. Page Hero Heading */}
                {heroHeading && (
                  <div
                    id="frame4"
                    className="inline-flex items-center gap-[clamp(8px,0.5vw+6px,10px)] h-auto"
                  >
                    <div className="w-[clamp(5px,0.4vw+3px,6px)] h-[clamp(5px,0.4vw+3px,6px)] rounded-full bg-white shrink-0 translate-y-[1px]" />
                    <span className="font-serif font-bold italic text-white text-[clamp(15px,0.35vw+13.5px,20px)] leading-none whitespace-nowrap">
                      {heroHeading}
                    </span>
                  </div>
                )}

                {/* 2. Page Hero Title (Fluid Clamp: 28px Mobile -> 38.4px Tablet 768px -> 41.3px 901px -> 52.86px Desktop) */}
                {heroTitle && (
                  <h1
                    className={`font-serif font-bold italic text-white text-[clamp(28px,2.15vw+21.9px,52.86px)] leading-[1.08] lg:leading-[1.02] tracking-normal m-0 !max-w-full !h-auto ${titleClassName}`}
                    style={titleStyle}
                  >
                    {typeof heroTitle === "string" && heroTitle.includes("\n")
                      ? heroTitle.split("\n").map((line, i) => (
                        <React.Fragment key={i}>
                          {i > 0 && (
                            <>
                              <br className="block md:hidden" />
                              <span className="hidden md:inline">&nbsp;</span>
                            </>
                          )}
                          {line}
                        </React.Fragment>
                      ))
                      : heroTitle}
                  </h1>
                )}
              </div>

              {/* 3. Page Hero Info (100% fluid on mobile/tablet, max-w on desktop, vertically centered with left block on desktop) */}
              {rightContent ? (
                rightContent
              ) : heroInfo ? (
                <div
                  id="page-hero-info"
                  className={`w-full min-w-0 max-w-full lg:max-w-[500px] xl:max-w-[560px] flex flex-col gap-[clamp(12px,0.5vw+8px,16px)] font-sans font-normal not-italic text-white/95 text-[clamp(14px,0.25vw+12.4px,16px)] lg:text-[16px] leading-[1.4] lg:leading-[100%] tracking-[0%] m-0 ${infoClassName}`}
                  style={infoStyle}
                >
                  {typeof heroInfo === "string" ? (
                    heroInfo.split("\n\n").map((para, i) => (
                      <p
                        key={i}
                        style={i === 0 && indent ? { textIndent: typeof indent === "string" ? indent : "7ch" } : undefined}
                        className={`font-sans font-normal not-italic text-white/95 text-[clamp(14px,0.25vw+12.4px,16px)] lg:text-[16px] leading-[1.4] lg:leading-[100%] tracking-[0%] m-0 ${
                          indent ? "first-of-type:indent-[7ch]" : ""
                        }`}
                      >
                        {para.includes("**")
                          ? para.split(/(\*\*[^*]+\*\*)/g).map((chunk, ci) => {
                              if (chunk.startsWith("**") && chunk.endsWith("**")) {
                                return (
                                  <strong key={ci} className="font-bold text-white">
                                    {chunk.slice(2, -2)}
                                  </strong>
                                );
                              }
                              return chunk;
                            })
                          : para}
                      </p>
                    ))
                  ) : (
                    heroInfo
                  )}
                </div>
              ) : null}

              {children}
            </div>
          </div>
        )}

        {/* Optional Bottom Tagline Bar */}
        {tags && tags.length > 0 && (
          <div
            id="frame15"
            className="relative z-20 flex items-center justify-between flex-wrap gap-[clamp(12px,1.5vw+6px,20px)] w-full px-[clamp(20px,6.94vw,100px)] pb-[clamp(14px,1vw+10px,20px)] pt-[clamp(12px,0.8vw+8px,16px)] border-t border-white/15 select-none mt-auto"
          >
            {tags.map((tag, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-[clamp(6px,0.4vw+4px,8px)]"
              >
                <div className="w-[clamp(4px,0.3vw+3px,6px)] h-[clamp(4px,0.3vw+3px,6px)] rounded-full bg-white shrink-0 translate-y-[1px]" />
                <span className="font-serif font-bold italic text-white text-[clamp(13px,0.4vw+12px,18px)] leading-none whitespace-nowrap">
                  {tag}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );

  if (card) {
    return (
      <div
        className={`w-full bg-[#FEFEFE] flex justify-center px-[clamp(10px,2.5vw,20px)] pt-[clamp(10px,2.5vw,20px)] overflow-hidden ${containerClassName}`}
      >
        {heroSection}
      </div>
    );
  }

  return heroSection;
}
