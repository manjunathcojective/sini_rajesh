import React from "react";
import Image from "next/image";
import { quoteContent } from "@/lib/data";

export default function TrustedByCard({ className = "" }) {
  const { title, clientCount, avatars } = quoteContent.trustedBy;

  return (
    <div
      className={`w-[175px] h-[112px] bg-[#E9E5D2] rounded-[12px] py-[12px] px-[24px] flex flex-col justify-between shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 select-none ${className}`}
    >
      {/* Row 1: Title */}
      <div className="w-[127px] h-[12px] flex items-center">
        <span className="font-sans font-medium text-[16px] leading-none text-[#141414]">
          {title}
        </span>
      </div>

      {/* Row 2: Avatar Stack */}
      <ul
        className="flex items-center list-none p-0 m-0"
        aria-label="Trusted by 100k+ clients"
      >
        {avatars.map((avatar, index) => (
          <li
            key={avatar.id}
            className={`relative rounded-full overflow-hidden w-[40px] h-[40px] border-2 border-white shrink-0 transition-transform duration-300 hover:scale-110 hover:!z-10 cursor-pointer ${
              index > 0 ? "-ml-[12px]" : ""
            }`}
            style={{ zIndex: index + 1 }}
          >
            <Image
              src={avatar.src}
              alt={avatar.alt}
              width={40}
              height={40}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </li>
        ))}

        {/* 4th Plus Indicator Circle */}
        <li
          className="relative rounded-full w-[40px] h-[40px] bg-[#D07578] border-2 border-white flex items-center justify-center shrink-0 -ml-[12px] text-white transition-transform duration-300 hover:scale-110 hover:!z-10 cursor-pointer z-[4]"
          aria-hidden="true"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[16px] h-[16px] text-white"
          >
            <path
              d="M8 3.5V12.5M3.5 8H12.5"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </li>
      </ul>

      {/* Row 3: Rating & Client Count */}
      <div className="flex items-center gap-1 leading-none">
        <svg
          width="14"
          height="13"
          viewBox="0 0 14 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="shrink-0 w-[14px] h-[13px]"
        >
          <path
            d="M6.65723 0L8.22882 4.83688H13.3146L9.20013 7.82624L10.7717 12.6631L6.65723 9.67376L2.54273 12.6631L4.11433 7.82624L-0.000169277 4.83688H5.08563L6.65723 0Z"
            fill="#FFCC00"
          />
        </svg>
        <span className="font-sans font-normal text-[14px] leading-none text-[#141414]">
          {clientCount}
        </span>
      </div>
    </div>
  );
}
