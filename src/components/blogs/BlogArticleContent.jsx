"use client";

import React from "react";
import { motion } from "framer-motion";

export default function BlogArticleContent({
  sections = [],
  rawHtml = "",
  slug = "",
}) {
  return (
    <section
      id="blog-article-content"
      className="w-full bg-[#FEFEFE] flex justify-center py-[clamp(28px,4vw,60px)] px-[clamp(16px,5.5vw,100px)]"
    >
      {/* 1240px wide inner content container with 100% fluid responsiveness */}
      <div id="frame18" className="w-full max-w-[1240px] flex flex-col">
        {sections && sections.length > 0 ? (
          sections.map((section, idx) => (
            <React.Fragment key={idx}>
              <motion.div
                id={`article-section-${idx + 1}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="w-full flex flex-col"
              >
                {/* Section Heading (H2) */}
                {section.heading && (
                  <h2 className="font-serif font-bold italic text-[clamp(24px,1.8vw+18px,32.77px)] leading-[1.15] text-[#141414] pb-[clamp(10px,1.2vw,16px)] m-0">
                    {section.heading}
                  </h2>
                )}

                {/* Optional Subheading (H3) */}
                {section.subheading && (
                  <h3 className="font-serif font-bold italic text-[clamp(19px,1.2vw+15px,24px)] leading-[1.25] text-[#141414] pb-[clamp(8px,1vw,12px)] m-0">
                    {section.subheading}
                  </h3>
                )}

                {/* Section Paragraphs */}
                {section.paragraphs &&
                  section.paragraphs.map((p, pIdx) => (
                    <p
                      key={pIdx}
                      className="font-sans font-normal text-[clamp(15px,0.25vw+14px,16px)] leading-[1.6] text-[#141414] pb-[clamp(8px,0.8vw,10px)] last:pb-0 m-0"
                    >
                      {p}
                    </p>
                  ))}

                {/* Optional Sub-intro / Prompt Text */}
                {section.prompt && (
                  <p className="font-serif font-bold italic text-[clamp(18px,1.2vw+14px,22px)] leading-[1.3] text-[#141414] my-[clamp(6px,0.8vw,10px)] m-0">
                    {section.prompt}
                  </p>
                )}

                {/* Optional Bullet Points List */}
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="flex flex-col gap-0 p-0 m-0 my-2 list-none">
                    {section.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="inline-flex items-center w-fit min-w-[min(100%,356px)] max-w-full min-h-[26px] py-2 px-1.5 gap-2.5 border-b border-[#D07578]/25 box-border font-serif text-[clamp(17px,1vw+14px,20px)] font-normal italic leading-none text-[#141414]"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#141414] shrink-0" />
                        <span className="w-auto max-w-full font-serif italic text-[#141414]">
                          {typeof bullet === "string" ? (
                            bullet
                          ) : (
                            <>
                              {bullet.key && (
                                <strong className="font-bold italic text-[#141414]">
                                  {bullet.key} -{" "}
                                </strong>
                              )}
                              {bullet.text}
                            </>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Optional Concluding Paragraph */}
                {section.conclusion && (
                  <p className="font-sans font-normal text-[clamp(15px,0.25vw+14px,16px)] leading-[1.6] text-[#141414] pt-2 m-0">
                    {section.conclusion}
                  </p>
                )}
              </motion.div>

              {/* Separator Line after each section */}
              {idx < sections.length - 1 && (
                <div className="w-full h-[1px] bg-[#D07578]/50 my-[clamp(24px,3.5vw,40px)] border-none" />
              )}
            </React.Fragment>
          ))
        ) : rawHtml ? (
          <div
            className="w-full flex flex-col gap-4 text-[#141414] font-sans"
            dangerouslySetInnerHTML={{ __html: rawHtml }}
          />
        ) : null}
      </div>
    </section>
  );
}
