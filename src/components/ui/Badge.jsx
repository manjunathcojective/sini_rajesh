import React from "react";

/**
 * Reusable Section / Category Badge (Dot + Italic Heading)
 */
export default function Badge({
  children,
  text = "My Journey",
  color = "#D07578",
  dotColor,
  id = "frame4",
  className = "",
  style = {},
  ...props
}) {
  const activeDotColor = dotColor || color;
  const content = text || children;

  return (
    <div
      id={id}
      className={`inline-flex items-center gap-[10px] w-fit leading-none ${className}`}
      style={style}
      {...props}
    >
      <span
        className="w-[6px] h-[6px] rounded-full shrink-0"
        style={{ backgroundColor: activeDotColor }}
        aria-hidden="true"
      />
      <span
        className="font-serif italic font-bold text-[20px] leading-none whitespace-nowrap"
        style={{ color }}
      >
        {content}
      </span>
    </div>
  );
}
