import React from "react";
import { taglineItems } from "@/lib/data";
import { Dot } from "@/components/ui/Button";

export default function TaglineRow({
  className = "",
  isMobileGrid = false,
}) {
  const delays = [
    "delay-450",
    "delay-500",
    "delay-550",
    "delay-600",
    "delay-650",
    "delay-700",
  ];

  if (isMobileGrid) {
    return (
      <ul
        className={`grid grid-cols-2 gap-x-4 gap-y-3 w-full py-4 ${className}`}
        aria-label="Professional Roles and Specializations"
      >
        {taglineItems.map((item, index) => (
          <li
            key={item.id}
            className={`flex items-center gap-2 text-white font-serif italic font-bold text-[16px] sm:text-[18px] leading-none tracking-normal animate-fade-up ${
              delays[index % delays.length]
            }`}
          >
            <Dot />
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul
      className={`w-full flex flex-wrap items-center justify-between gap-x-4 gap-y-2 list-none p-0 m-0 ${className}`}
      aria-label="Professional Roles and Specializations"
    >
      {taglineItems.map((item, index) => (
        <li
          key={item.id}
          className={`flex items-center gap-2 text-white font-serif italic font-bold text-[18px] xl:text-[20px] leading-none tracking-normal whitespace-nowrap transition-all duration-300 hover:translate-y-[-2px] hover:text-white hover:drop-shadow-[0_2px_8px_rgba(255,255,255,0.4)] cursor-default animate-fade-up ${
            delays[index % delays.length]
          }`}
        >
          <Dot />
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  );
}
