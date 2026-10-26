"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
];

const SOCIAL_LINKS = [
  { id: "facebook", icon: "/images/fb-icon.png", alt: "Facebook", href: "https://facebook.com" },
  { id: "linkedin", icon: "/images/linkedin-icon.png", alt: "LinkedIn", href: "http://www.linkedin.com/in/sini-rajesh" },
  { id: "instagram", icon: "/images/instagram-icon.png", alt: "Instagram", href: "https://instagram.com" },
];

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
          src="/images/hero-bg-image.png"
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
          <div>
            <h2 className="font-serif font-bold italic text-[clamp(26px,3vw,32px)] text-white leading-tight m-0">
              Sini Rajesh
            </h2>
            <p className="font-sans font-normal text-[clamp(13px,1vw+8px,15px)] text-white/80 leading-normal m-0 mt-0.5">
              Founder – Igniting Mindz
            </p>
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
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 w-full">
            {/* Quick Links Column */}
            <div className="flex flex-col gap-3.5">
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
            <div className="flex flex-col gap-3.5">
              <h3 className="font-serif font-bold italic text-[20px] text-white m-0">
                Information
              </h3>
              <div className="flex flex-col gap-2 font-sans font-normal text-[14px] text-white/90 leading-[135%]">
                <div>
                  ABC Address ,<br />
                  Bengaluru, Karnataka
                </div>
                <a href="tel:+918951698013" className="hover:text-white transition-colors mt-0.5">
                  +91 89516 98013
                </a>
                <a href="mailto:connect@sinirajesh.com" className="hover:text-white transition-colors break-all">
                  connect@sinirajesh.com
                </a>
              </div>
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
          <div className="flex flex-col gap-4">
            <h3 className="font-serif font-bold italic text-[22px] text-white m-0">
              Information
            </h3>
            <div className="flex flex-col gap-2.5 font-sans font-normal text-[15px] text-white/90 leading-[135%]">
              <div>
                ABC Address ,<br />
                Bengaluru, Karnataka
              </div>
              <a href="tel:+918951698013" className="hover:text-white transition-colors mt-0.5">
                +91 89516 98013
              </a>
              <a href="mailto:connect@sinirajesh.com" className="hover:text-white transition-colors">
                connect@sinirajesh.com
              </a>
            </div>
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
            <div>
              <h2 className="font-serif font-bold italic text-[32px] text-white leading-tight m-0">
                Sini Rajesh
              </h2>
              <p className="font-sans font-normal text-[15px] text-white/80 leading-normal m-0 mt-1">
                Founder – Igniting Mindz
              </p>
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
                    className="font-sans font-normal text-[15px] text-white/90 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Information */}
            <div className="flex flex-col gap-4">
              <h3 className="font-serif font-bold italic text-[22px] text-white m-0">
                Information
              </h3>
              <div className="flex flex-col gap-3 font-sans font-normal text-[15px] text-white/90 leading-[135%]">
                <div>
                  ABC Address ,<br />
                  Bengaluru, Karnataka
                </div>
                <a href="tel:+918951698013" className="hover:text-white transition-colors mt-0.5">
                  +91 89516 98013
                </a>
                <a href="mailto:connect@sinirajesh.com" className="hover:text-white transition-colors">
                  connect@sinirajesh.com
                </a>
              </div>
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
          className="w-full text-center font-serif font-bold italic text-[clamp(54px,12vw,170px)] leading-[1.05] text-white select-none pointer-events-none tracking-tight overflow-hidden my-[clamp(12px,2vw,24px)] whitespace-nowrap"
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
              <Link href="#privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="mx-2 text-white/40">|</span>
              <Link href="#terms" className="hover:text-white transition-colors">
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
                <Link href="#privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <span className="mx-2.5 text-white/40">|</span>
                <Link href="#terms" className="hover:text-white transition-colors">
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
              <Link href="#privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="mx-2.5 text-white/40">|</span>
              <Link href="#terms" className="hover:text-white transition-colors">
                Terms and Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
