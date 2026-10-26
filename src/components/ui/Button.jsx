import React from "react";
import Link from "next/link";
import styles from "./Button.module.css";

/**
 * Dot component preserved for backward compatibility
 * (used in tagline rows, metadata, and badge bullets)
 */
export function Dot({ className = "" }) {
  return (
    <span
      className={`inline-block w-[6px] h-[6px] rounded-full bg-white flex-shrink-0 animate-dot-pulse ${className}`}
      aria-hidden="true"
    />
  );
}

const VARIANT_MAP = {
  primary: styles.variantPrimary,
  dark: styles.variantDark,
  outline: styles.variantOutline,
  white: styles.variantWhite,
};

const SIZE_MAP = {
  sm: styles.sizeSm,
  md: styles.sizeMd,
  lg: styles.sizeLg,
  nav: styles.sizeNav,
  full: styles.sizeFull,
};

/**
 * Unified, Polymorphic Button Component (Figma Component 4 Spec)
 *
 * Variants:
 *  - "primary": Signature Dr. Sini Rose (#D07578) with expanding white liquid dot
 *  - "dark": Deep obsidian (#141414) with expanding white liquid dot
 *  - "outline": Transparent with #D07578 border and expanding rose liquid dot
 *  - "white": Clean white card button with expanding rose liquid dot
 *
 * Sizes:
 *  - "sm": 38px height (compact, e.g. "View All" blogs)
 *  - "md": 44px height (standard Figma button)
 *  - "lg": 48px height (prominent CTA)
 *  - "nav": 140px fixed width x 44px height (Navbar CTA)
 *  - "full": 100% full width x 44px height (Mobile / Forms)
 */
export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  showDot = true,
  className = "",
  ariaLabel,
  type = "button",
  disabled = false,
  target,
  rel,
  id,
  style,
  ...props
}) {
  const variantClass = VARIANT_MAP[variant] || styles.variantPrimary;
  const sizeClass = SIZE_MAP[size] || styles.sizeMd;
  const dotModifier = showDot ? styles.hasDot : "";

  const combinedClasses = [
    styles.btnBase,
    variantClass,
    sizeClass,
    dotModifier,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <span className={styles.btnContent}>
      {showDot && <span className={styles.liquidDot} aria-hidden="true" />}
      <span className={styles.btnText}>{children}</span>
    </span>
  );

  if (href && !disabled) {
    const isExternal = href.startsWith("http") || href.startsWith("//");
    const linkRel = rel || (isExternal ? "noopener noreferrer" : undefined);
    const linkTarget = target || (isExternal ? "_blank" : undefined);

    return (
      <Link
        href={href}
        id={id}
        style={style}
        className={combinedClasses}
        aria-label={ariaLabel}
        onClick={onClick}
        target={linkTarget}
        rel={linkRel}
        {...props}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      id={id}
      style={style}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      aria-label={ariaLabel}
      {...props}
    >
      {content}
    </button>
  );
}
