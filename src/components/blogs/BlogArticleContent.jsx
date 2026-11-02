"use client";

import React from "react";
import { motion } from "framer-motion";

export default function BlogArticleContent({
  elements = [],
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
        {elements && elements.length > 0 ? (
          <div className="w-full flex flex-col">
            {elements.map((el, idx) => {
              if (el.type === "takeaway") {
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    className="w-full border-t border-[#D9A5AB] mt-10 pt-7 mb-4 flex flex-col gap-2.5"
                  >
                    <h3 className="font-serif font-bold italic text-[clamp(22px,1.4vw+18px,28px)] leading-[1.2] text-[#1A1A1A] m-0">
                      {el.heading || "One thought to take with you:"}
                    </h3>
                    {el.question && (
                      <p className="font-sans font-normal text-[clamp(15px,0.2vw+14px,16px)] leading-[1.75] text-[#1A1A1A] m-0">
                        {el.question}
                      </p>
                    )}
                  </motion.div>
                );
              }

              if (el.type === "bullet_quote") {
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.4 }}
                    className="flex items-start w-full py-3 border-b border-[#E6E6E6] my-1"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A] shrink-0 mt-[9px] mr-3"
                      aria-hidden="true"
                    />
                    <p className="font-serif font-normal italic text-[clamp(17px,0.8vw+14px,20px)] leading-[1.45] text-[#1A1A1A] m-0">
                      {el.text}
                    </p>
                  </motion.div>
                );
              }

              if (el.type === "subheading") {
                return (
                  <motion.h2
                    key={idx}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.4 }}
                    className="font-serif font-bold italic text-[clamp(20px,1.3vw+16px,24px)] leading-[1.3] text-[#1A1A1A] mt-7 mb-3.5 m-0"
                  >
                    {el.text}
                  </motion.h2>
                );
              }

              // Default: Regular paragraph with inline run styling
              return (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.4 }}
                  className="font-sans font-normal text-[clamp(15px,0.2vw+14px,16px)] leading-[1.75] text-[#1A1A1A] mb-5 m-0"
                >
                  {el.runs && el.runs.length > 0 ? (
                    el.runs.map((r, rIdx) => {
                      if (r.isItalic && r.isBold) {
                        return (
                          <strong key={rIdx} className="font-bold italic text-[#1A1A1A]">
                            {r.text}
                          </strong>
                        );
                      }
                      if (r.isItalic) {
                        return (
                          <em key={rIdx} className="italic text-[#1A1A1A]">
                            {r.text}
                          </em>
                        );
                      }
                      if (r.isBold) {
                        return (
                          <strong key={rIdx} className="font-bold text-[#1A1A1A]">
                            {r.text}
                          </strong>
                        );
                      }
                      return <span key={rIdx}>{r.text}</span>;
                    })
                  ) : (
                    el.text
                  )}
                </motion.p>
              );
            })}
          </div>
        ) : sections && sections.length > 0 ? (
          /* Legacy sections fallback */
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
                {section.heading && (
                  <h2 className="font-serif font-bold italic text-[clamp(24px,1.8vw+18px,32.77px)] leading-[1.15] text-[#141414] pb-[clamp(10px,1.2vw,16px)] m-0">
                    {section.heading}
                  </h2>
                )}
                {section.subheading && (
                  <h3 className="font-serif font-bold italic text-[clamp(19px,1.2vw+15px,24px)] leading-[1.25] text-[#141414] pb-[clamp(8px,1vw,12px)] m-0">
                    {section.subheading}
                  </h3>
                )}
                {section.paragraphs &&
                  section.paragraphs.map((p, pIdx) => (
                    <p
                      key={pIdx}
                      className="font-sans font-normal text-[clamp(15px,0.25vw+14px,16px)] leading-[1.6] text-[#141414] pb-[clamp(8px,0.8vw,10px)] last:pb-0 m-0"
                    >
                      {p}
                    </p>
                  ))}
                {section.prompt && (
                  <p className="font-serif font-bold italic text-[clamp(18px,1.2vw+14px,22px)] leading-[1.3] text-[#141414] my-[clamp(6px,0.8vw,10px)] m-0">
                    {section.prompt}
                  </p>
                )}
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="flex flex-col gap-0 p-0 m-0 my-2 list-none">
                    {section.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="inline-flex items-center w-fit min-w-[min(100%,356px)] max-w-full min-h-[26px] py-2 px-1.5 gap-2.5 border-b border-[#D07578]/25 box-border font-serif text-[clamp(17px,1vw+14px,20px)] font-normal italic leading-none text-[#141414]"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#141414] shrink-0" />
                        <span className="w-auto max-w-full font-serif italic text-[#141414]">
                          {typeof bullet === "string" ? bullet : bullet.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.conclusion && (
                  <p className="font-sans font-normal text-[clamp(15px,0.25vw+14px,16px)] leading-[1.6] text-[#141414] pt-2 m-0">
                    {section.conclusion}
                  </p>
                )}
              </motion.div>
              {idx < sections.length - 1 && (
                <div className="w-full h-[1px] bg-[#D07578]/50 my-[clamp(24px,3.5vw,40px)] border-none" />
              )}
            </React.Fragment>
          ))
        ) : rawHtml ? (
          <div
            className="wp-blog-content w-full flex flex-col"
            dangerouslySetInnerHTML={{ __html: rawHtml }}
          />
        ) : null}
      </div>
    </section>
  );
}
