import React from "react";

export default function CredentialTag({ id, label }) {
  return (
    <div
      id={id}
      className="inline-flex items-center gap-2.5 px-1.5 h-[26px] pb-2 border-b border-[#D07578]/25 w-fit"
    >
      {/* Bullet Dot */}
      <span
        className="w-1.5 h-1.5 rounded-full bg-[#141414] translate-y-[1px] shrink-0"
        aria-hidden="true"
      />
      {/* Label Text */}
      <span className="font-serif font-bold italic text-[18px] xl:text-[20px] text-[#141414] leading-none whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}
