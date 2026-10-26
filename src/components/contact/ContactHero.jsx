"use client";

import React from "react";
import Image from "next/image";
import HeaderNav from "@/components/common/HeaderNav";

const CONTACT_ITEMS = [
  {
    label: "+91 89516 98013",
    href: "tel:+918951698013",
    external: false,
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path
          d="M13.6994 19.2034L16.0465 16.8563C16.5253 16.3776 16.6909 15.6701 16.4973 15.0213C16.3459 14.514 16.1753 13.9041 16.0619 13.3826C15.957 12.9002 15.5337 12.5 15.0401 12.5H13.6994C12.7122 12.5 11.9014 13.3034 12.0097 14.2847C12.833 21.7441 18.7559 27.667 26.2153 28.4903C27.1966 28.5985 28 27.7878 28 26.8005V25.4599C28 24.9663 27.5981 24.5613 27.1124 24.473C26.5767 24.3755 26.0099 24.2159 25.5356 24.0647C24.8543 23.8474 24.097 24.0002 23.5914 24.5058L21.2966 26.8005"
          stroke="white"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "connect@sinirajesh.com",
    href: "mailto:connect@sinirajesh.com",
    external: false,
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path
          d="M23.2 17.3003V21.3003C23.2 22.6258 24.2745 23.7003 25.6 23.7003C26.9255 23.7003 28 22.6258 28 21.3003V20.5C28 16.0817 24.4183 12.5 20 12.5C15.5817 12.5 12 16.0817 12 20.5C12 24.9183 15.5817 28.5 20 28.5C21.8013 28.5 23.4636 27.9046 24.8008 26.9M23.2 20.5003C23.2 22.2676 21.7673 23.7003 20 23.7003C18.2327 23.7003 16.8 22.2676 16.8 20.5003C16.8 18.733 18.2327 17.3003 20 17.3003C21.7673 17.3003 23.2 18.733 23.2 20.5003Z"
          stroke="white"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    external: true,
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path
          d="M22.815 12.5C20.515 12.5 19.1662 13.615 19.1662 16.1562V18.3925H16.25V21.0712H19.1662V27.5H22.0837V21.0712H24.4163L25 18.3925H22.0837V16.61C22.0837 15.6525 22.4238 15.1787 23.4013 15.1787H25V12.61C24.7238 12.575 23.9175 12.5 22.815 12.5Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "http://www.linkedin.com/in/sini-rajesh",
    external: true,
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path
          d="M15.7613 26.875H12.5V17.5H15.7613V26.875ZM14.1312 16.25C13.23 16.25 12.5 15.5512 12.5 14.6875C12.5 13.825 13.23 13.125 14.1312 13.125C15.0312 13.125 15.7613 13.825 15.7613 14.6875C15.7613 15.5512 15.0325 16.2513 14.1312 16.25ZM27.5 26.875H24.365V22.3125C24.365 21.225 24.3438 19.825 22.735 19.825C21.1025 19.825 20.8513 21.01 20.8513 22.2338V26.875H17.7175V17.4937H20.7262V18.775H20.7687C21.1875 18.0375 22.2112 17.26 23.7375 17.26C26.9125 17.26 27.5 19.2037 27.5 21.73V26.875Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    external: true,
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path
          d="M16.6662 12.5C14.365 12.5 12.5 14.365 12.5 16.6662V23.3337C12.5 25.635 14.365 27.5 16.6662 27.5H23.3337C25.635 27.5 27.5 25.635 27.5 23.3337V16.6662C27.5 14.365 25.635 12.5 23.3337 12.5H16.6662ZM25 14.1662C25.46 14.1662 25.8337 14.54 25.8337 15C25.8337 15.46 25.46 15.8338 25 15.8338C24.54 15.8338 24.1663 15.46 24.1663 15C24.1663 14.54 24.54 14.1662 25 14.1662ZM20 15.8338C22.3012 15.8338 24.1675 17.7 24.1663 20.0012C24.1663 22.3025 22.3 24.1675 19.9988 24.1675C17.6975 24.1675 15.8325 22.3012 15.8325 20C15.8325 17.6988 17.6988 15.8325 20 15.8338ZM20 17.5C18.6188 17.5 17.5 18.6188 17.5 20C17.5 21.3813 18.6188 22.5 20 22.5C21.3813 22.5 22.5 21.3813 22.5 20C22.5 18.6188 21.3813 17.5 20 17.5Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    label: "Youtube",
    href: "https://youtube.com",
    external: true,
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path
          d="M20 28.5C21.8097 28.5 23.5451 28.3212 25.1534 27.9934C27.1623 27.5839 28.1668 27.3791 29.0834 26.2006C30 25.0221 30 23.6693 30 20.9635V19.0365C30 16.3307 30 14.9779 29.0834 13.7994C28.1668 12.6209 27.1623 12.4161 25.1534 12.0066C23.5451 11.6788 21.8097 11.5 20 11.5C18.1903 11.5 16.4549 11.6788 14.8466 12.0066C12.8377 12.4161 11.8332 12.6209 10.9166 13.7994C10 14.9779 10 16.3307 10 19.0365V20.9635C10 23.6693 10 25.0221 10.9166 26.2006C11.8332 27.3791 12.8377 27.5839 14.8466 27.9934C16.4549 28.3212 18.1903 28.5 20 28.5Z"
          fill="white"
        />
        <path
          d="M23.9621 20.3129C23.8137 20.9187 23.0241 21.3538 21.4449 22.2241C19.7272 23.1705 18.8684 23.6438 18.1728 23.4615C17.9372 23.3997 17.7202 23.2911 17.538 23.1438C17 22.7089 17 21.8059 17 20C17 18.1941 17 17.2911 17.538 16.8562C17.7202 16.7089 17.9372 16.6003 18.1728 16.5385C18.8684 16.3562 19.7272 16.8294 21.4449 17.7759C23.0241 18.6462 23.8137 19.0813 23.9621 19.6871C24.0126 19.8933 24.0126 20.1067 23.9621 20.3129Z"
          stroke="#D07578"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function ContactHero({
  badge = "Contact Us",
  title = "An Invitation to Connect",
  description = "Whether you have a question, would like to explore working together, or simply want to connect, I’d be happy to hear from you.",
}) {
  return (
    <div className="w-full bg-[#FEFEFE] flex justify-center px-[clamp(10px,2.5vw,20px)] pt-[clamp(10px,2.5vw,20px)] overflow-hidden">
      <section
        id="contact-hero"
        className="relative w-full max-w-[1400px] overflow-hidden bg-[#627861] rounded-[12px] flex justify-center h-auto min-h-[380px] sm:min-h-[420px] lg:min-h-[440px]"
        aria-labelledby="contact-hero-heading"
      >
        {/* Hero Background Texture */}
        <div
          id="hero-bg"
          className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden"
        >
          <Image
            src="/images/bg.png"
            alt="Hero Background"
            fill
            priority
            loading="eager"
            className="object-cover"
            sizes="100vw"
            style={{ objectPosition: "center 28%" }}
          />
        </div>

        {/* Inner Fluid Container */}
        <div
          id="frame2"
          className="relative z-10 w-full flex flex-col justify-between h-auto pt-4 sm:pt-5 lg:pt-5"
        >
          {/* Top Navigation */}
          <HeaderNav className="!relative !top-0 !left-0 !w-full !transform-none !px-[clamp(20px,6.94vw,100px)] !h-auto !min-h-[44px]" />

          {/* Main 2-Column Content: Left (Heading + Title + Desc) | Right (Grid of Contact Icons) */}
          <div
            id="contact-hero-content"
            className="relative z-20 w-full px-[clamp(20px,6.94vw,100px)] mt-[clamp(28px,4vw,60px)] pb-[clamp(32px,4vw+10px,60px)] flex flex-col lg:flex-row justify-between items-start lg:items-center gap-[clamp(28px,3vw+12px,50px)]"
          >
            {/* Left Column: Heading, Title, Description */}
            <div className="w-full min-w-0 max-w-full lg:max-w-[540px] xl:max-w-[600px] flex flex-col justify-start gap-[clamp(12px,1vw+6px,20px)]">
              {/* Badge: Contact Us */}
              {badge && (
                <div
                  id="frame4"
                  className="inline-flex items-center gap-[clamp(8px,0.5vw+6px,10px)] h-auto"
                >
                  <div className="w-[clamp(5px,0.4vw+3px,6px)] h-[clamp(5px,0.4vw+3px,6px)] rounded-full bg-white shrink-0 translate-y-[1px]" />
                  <span className="font-serif font-bold italic text-white text-[clamp(15px,0.35vw+13.5px,20px)] leading-none whitespace-nowrap">
                    {badge}
                  </span>
                </div>
              )}

              {/* Title */}
              <h1
                id="contact-hero-heading"
                className="font-serif font-bold italic text-white text-[clamp(28px,2.15vw+21.9px,52.86px)] leading-[1.08] lg:leading-[1.02] tracking-normal m-0 !max-w-full !h-auto"
              >
                {typeof title === "string" && title.includes("\n")
                  ? title.split("\n").map((line, i) => (
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
                  : title}
              </h1>

              {/* Description / Page Hero Info with Fluid Clamps */}
              <div
                id="page-hero-info"
                className="w-full min-w-0 max-w-full lg:max-w-[480px] xl:max-w-[540px] font-sans font-normal not-italic text-white/95 text-[clamp(14px,0.35vw+12.5px,16px)] lg:text-[16px] leading-[1.45] lg:leading-[140%] tracking-[0%] m-0"
              >
                {typeof description === "string" ? (
                  description.split("\n\n").map((para, i) => (
                    <p key={i} className="m-0">
                      {para}
                    </p>
                  ))
                ) : (
                  description
                )}
              </div>
            </div>

            {/* Right Column: Contact Icons Grid (2 Columns across all viewports including Mobile) */}
            <div
              id="contact-icons-grid"
              className="w-full lg:w-auto lg:min-w-[420px] xl:min-w-[460px] grid grid-cols-2 gap-x-[clamp(10px,2vw,28px)] gap-y-[clamp(10px,1.5vw,18px)]"
            >
              {CONTACT_ITEMS.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-[clamp(8px,1vw,14px)] text-white no-underline transition-all duration-200 hover:opacity-90 hover:translate-x-1 min-w-0"
                >
                  {/* Icon Box */}
                  <div className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] lg:w-[44px] lg:h-[44px] rounded-[6px] bg-white/25 flex items-center justify-center shrink-0 transition-all duration-200 group-hover:bg-white/35 group-hover:scale-105">
                    {item.icon}
                  </div>

                  {/* Text Label */}
                  <span className="font-sans font-normal text-white text-[clamp(11.5px,0.25vw+11px,16px)] leading-tight truncate group-hover:text-white/95 min-w-0">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
