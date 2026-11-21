"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "My Story", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
];

const SOCIAL_LINKS = [
  { id: "linkedin", icon: "/images/linkedin-icon.webp", alt: "LinkedIn", href: "http://www.linkedin.com/in/sini-rajesh" },
  { id: "facebook", icon: "/images/fb-icon.webp", alt: "Facebook", href: "https://www.facebook.com/share/1A6RGC7PUn/" },
  { id: "instagram", icon: "/images/instagram-icon.webp", alt: "Instagram", href: "https://instagram.com" },
];

function InformationItems({ className = "", isMobile = false }) {
  return (
    <div className={`flex flex-col font-sans font-normal text-white/90 leading-[135%] w-fit min-w-[calc(max-content+2ch)] ${className}`}>
      {/* Address */}
      <div className="flex items-start gap-2 whitespace-nowrap">
        <svg
          className="w-[1em] h-[1em] shrink-0 mt-[0.2em] text-white/85"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        <span>
          Igniting Mindz,<br />
          Bengaluru, Karnataka
        </span>
      </div>

      {/* Number */}
      <a
        href="tel:+918951698013"
        className="flex items-center gap-2 hover:text-white transition-colors group mt-0.5 whitespace-nowrap"
      >
        <svg
          className="w-[1em] h-[1em] shrink-0 text-white/85 group-hover:text-white transition-colors"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        <span>+91 89516 98013</span>
      </a>

      {/* Email */}
      <a
        href="mailto:connect@sinirajesh.com"
        className="flex items-center gap-2 hover:text-white transition-colors group whitespace-nowrap"
      >
        <svg
          className="w-[1em] h-[1em] shrink-0 text-white/85 group-hover:text-white transition-colors"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
        <span>connect@sinirajesh.com</span>
      </a>
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative w-full overflow-hidden bg-[#FEFEFE] flex justify-center"
      aria-label="Site Footer"
    >
      {/* Background Graphic & Warm Gradient Overlay matching Figma */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <Image
          src="/images/hero-bg-image.webp"
          alt="Footer Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          id="rectangle20"
          className="absolute inset-0 bg-gradient-to-t from-[#D07578]/55 via-[#D07578]/40 to-[#F8EFDE]/10 pointer-events-none"
        />
      </div>

      {/* Main Fluid Content Container */}
      <div
        id="frame120"
        className="relative z-10 flex flex-col justify-between w-full max-w-[1440px] mx-auto min-h-0 pt-[clamp(36px,4.5vw,60px)] pb-[clamp(20px,2.5vw,28px)] px-[clamp(20px,6.94vw,100px)] gap-[clamp(24px,3vw,44px)]"
      >
        {/* ========================================================================= */}
        {/* 1. TABLET & MOBILE TOP BRAND HEADER (Figma Exact: Full Width at Top)       */}
        {/* ========================================================================= */}
        <div className="flex lg:hidden flex-col w-full gap-2.5">
          <div className="flex items-center gap-3.5">
            <div className="relative h-[40px] w-[62px] sm:h-[45px] sm:w-[70px] shrink-0">
              <Image
                src="/images/footer-logo.webp"
                alt="Igniting Mindz Logo"
                fill
                sizes="(max-width: 640px) 62px, 70px"
                className="object-contain object-left"
              />
            </div>
            <div>
              <h2 className="font-serif font-bold italic text-[clamp(26px,3vw,32px)] text-white leading-tight m-0">
                Sini Rajesh
              </h2>
              <p className="font-sans font-normal text-[clamp(13px,1vw+8px,15px)] text-white/80 leading-normal m-0 mt-0.5 whitespace-nowrap">
                Founder – Igniting Mindz
              </p>
            </div>
          </div>
          <div className="w-full h-[1px] bg-white/20 my-1" />
          <p className="font-sans font-normal text-[clamp(13.5px,1vw+8px,15px)] text-white/95 leading-[145%] m-0">
            Sometimes, the biggest shift begins with a simple change in the way we think.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 2. MIDDLE LINKS SECTION                                                    */}
        {/* ========================================================================= */}

        {/* --- A. MOBILE LAYOUT (< 768px): 2 columns + Follow us below --- */}
        <div className="flex md:hidden flex-col gap-6 w-full">
          {/* Row 1: Quick Links & Information side-by-side */}
          <div className="flex justify-between items-start gap-x-4 gap-y-4 w-full">
            {/* Quick Links Column */}
            <div className="flex flex-col gap-3.5 shrink-0">
              <h3 className="font-serif font-bold italic text-[20px] text-white m-0">
                Quick Links
              </h3>
              <div className="flex flex-col gap-2">
                {QUICK_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="font-sans font-normal text-[14px] text-white/90 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Information Column */}
            <div className="flex flex-col gap-3.5 w-fit min-w-[calc(max-content+2ch)] max-w-full">
              <h3 className="font-serif font-bold italic text-[20px] text-white m-0">
                Information
              </h3>
              <InformationItems className="gap-2 text-[14px]" isMobile={true} />
            </div>
          </div>

          {/* Row 2: Follow us */}
          <div className="flex flex-col gap-3 w-full">
            <h3 className="font-serif font-bold italic text-[20px] text-white m-0">
              Follow us
            </h3>
            <div className="flex items-center gap-2.5">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.alt}
                  className="flex items-center justify-center w-10 h-10 rounded-[8px] bg-white/25 hover:bg-white/40 backdrop-blur-sm transition-all hover:scale-105 p-2.5"
                >
                  <Image
                    src={social.icon}
                    alt={social.alt}
                    width={20}
                    height={20}
                    className="w-5 h-5 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* --- B. TABLET LAYOUT (768px - 1023px): 3 columns in a row --- */}
        <div className="hidden md:grid lg:hidden grid-cols-3 gap-8 w-full">
          {/* Column 1: Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif font-bold italic text-[22px] text-white m-0">
              Quick Links
            </h3>
            <div className="flex flex-col gap-2.5">
              {QUICK_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-sans font-normal text-[15px] text-white/90 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Information */}
          <div className="flex flex-col gap-4 w-fit min-w-[calc(max-content+2ch)]">
            <h3 className="font-serif font-bold italic text-[22px] text-white m-0">
              Information
            </h3>
            <InformationItems className="gap-2.5 text-[15px]" />
          </div>

          {/* Column 3: Follow us */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif font-bold italic text-[22px] text-white m-0">
              Follow us
            </h3>
            <div className="flex items-center gap-2.5">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.alt}
                  className="flex items-center justify-center w-10 h-10 rounded-[8px] bg-white/25 hover:bg-white/40 backdrop-blur-sm transition-all hover:scale-105 p-2.5"
                >
                  <Image
                    src={social.icon}
                    alt={social.alt}
                    width={20}
                    height={20}
                    className="w-5 h-5 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* --- C. DESKTOP LAYOUT (>= 1024px): Brand on Left, 3 Columns on Right --- */}
        <div className="hidden lg:flex flex-row justify-between items-start gap-12 xl:gap-[100px] w-full">
          {/* Brand Left Column */}
          <div className="flex flex-col w-[320px] xl:w-[350px] shrink-0 gap-3">
            <div className="flex items-center gap-3.5">
              <div className="relative h-[46px] w-[72px] shrink-0">
                <Image
                  src="/images/footer-logo.webp"
                  alt="Igniting Mindz Logo"
                  fill
                  sizes="72px"
                  className="object-contain object-left"
                />
              </div>
              <div>
                <h2 className="font-serif font-bold italic text-[32px] text-white leading-tight m-0 whitespace-nowrap">
                  Sini Rajesh
                </h2>
                <p className="font-sans font-normal text-[15px] text-white/80 leading-normal m-0 mt-0.5 whitespace-nowrap">
                  Founder – Igniting Mindz
                </p>
              </div>
            </div>
            <div className="w-full h-[1px] bg-white/20 my-2" />
            <p className="font-sans font-normal text-[15px] text-white/95 leading-[140%] m-0">
              Sometimes, the biggest shift begins with a simple change in the way we think.
            </p>
          </div>

          {/* 3 Links Columns on Right */}
          <div className="flex-1 flex justify-between gap-8 xl:gap-[70px]">
            {/* Quick Links */}
            <div className="flex flex-col gap-4">
              <h3 className="font-serif font-bold italic text-[22px] text-white m-0">
                Quick Links
              </h3>
              <div className="flex flex-col gap-3">
                {QUICK_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    prefetch={false}
                    className="font-sans font-normal text-[15px] text-white/90 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Information */}
            <div className="flex flex-col gap-4 w-fit min-w-[calc(max-content+2ch)]">
              <h3 className="font-serif font-bold italic text-[22px] text-white m-0">
                Information
              </h3>
              <InformationItems className="gap-3 text-[15px]" />
            </div>

            {/* Follow us */}
            <div className="flex flex-col gap-4">
              <h3 className="font-serif font-bold italic text-[22px] text-white m-0">
                Follow us
              </h3>
              <div className="flex items-center gap-2.5">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.alt}
                    className="flex items-center justify-center w-10 h-10 rounded-[8px] bg-white/25 hover:bg-white/40 backdrop-blur-sm transition-all hover:scale-105 p-2.5"
                  >
                    <Image
                      src={social.icon}
                      alt={social.alt}
                      width={20}
                      height={20}
                      className="w-5 h-5 object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. BIG FLUID WATERMARK SIGNATURE TITLE (Figma Exact)                      */}
        {/* ========================================================================= */}
        <div
          id="sini-rajesh-title"
          className="w-full text-center font-serif font-bold italic text-[clamp(54px,12vw,170px)] leading-none text-white select-none pointer-events-none tracking-tight overflow-visible mt-[clamp(4px,1vw,12px)] -mb-[clamp(6px,1.2vw,16px)] whitespace-nowrap"
        >
          Sini Rajesh
        </div>

        {/* ========================================================================= */}
        {/* 4. BOTTOM LEGAL & COPYRIGHT BAR (Figma Exact)                             */}
        {/* ========================================================================= */}
        <div className="w-full flex flex-col gap-3 pt-3 border-t border-white/20">
          {/* Mobile Layout: 3 centered lines */}
          <div className="flex md:hidden flex-col items-center gap-2 text-center text-[13px] text-white/85">
            <div>
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="mx-2 text-white/40">|</span>
              <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
                Terms and Conditions
              </Link>
            </div>
            <div>
              © Sini Rajesh <span className="mx-1 text-white/40">|</span> All Rights Reserved
            </div>
            <div className="text-white/70 text-[12px]">
              Her Story, Designed &amp; Coded by Cojective
            </div>
          </div>

          {/* Tablet Layout (768px - 1023px): Row + centered attribution below (Kept as is) */}
          <div className="hidden md:flex lg:hidden flex-col gap-2.5 w-full text-[14px] text-white/85">
            <div className="flex flex-row justify-between items-center w-full">
              <div>
                © Sini Rajesh <span className="mx-1.5 text-white/40">|</span> All Rights Reserved
              </div>
              <div>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <span className="mx-2.5 text-white/40">|</span>
                <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
                  Terms and Conditions
                </Link>
              </div>
            </div>
            <div className="text-center text-white/70 text-[12.5px]">
              Her Story, Designed &amp; Coded by Cojective
            </div>
          </div>

          {/* Desktop Layout (>= 1024px): All items aligned in a single horizontal line */}
          <div className="hidden lg:flex flex-row justify-between items-center w-full text-[14px] text-white/85">
            <div>
              © Sini Rajesh <span className="mx-1.5 text-white/40">|</span> All Rights Reserved
            </div>
            <div className="text-white/70 text-[13px]">
              Her Story, Designed &amp; Coded by Cojective
            </div>
            <div>
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="mx-2.5 text-white/40">|</span>
              <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
                Terms and Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
