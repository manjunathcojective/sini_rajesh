"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import { SERVICES_LIST } from "@/lib/data";
import styles from "./HeaderNav.module.css";

export default function HeaderNav({ className = "", ctaHref = "/contact" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef(null);

  // Route active flags: only non-home routes show active underline on desktop
  const isHome = false;
  const isAbout = pathname === "/about" || pathname?.startsWith("/about");
  const isServices = pathname === "/services" || pathname?.startsWith("/services");
  const isBlogs = pathname === "/blogs" || pathname?.startsWith("/blogs");

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    setIsServicesOpen(false);
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <div id="frame3" className={`${styles.headerFrame3} ${isMenuOpen ? styles.headerFrame3Open : ""} ${className}`}>
        {/* Brand Logo Lockup: Sini Rajesh with Igniting Mindz centered underneath */}
        <Link
          href="/"
          onClick={closeMenu}
          className={`${styles.headerLogo} ${isMenuOpen ? styles.headerLogoOpen : ""}`}
          aria-label="Dr. Sini Rajesh - Igniting Mindz"
        >
          <span className={styles.headerLogoTitle}>Sini Rajesh</span>
          <span className={styles.headerLogoSubtitle}>Igniting Mindz</span>
        </Link>

        {/* Navigation Links & CTA Container */}
        <div id="frame3-nav-container" className={styles.headerNavContainer}>
          <Link
            href="/"
            id="nav-comp-13"
            className={`group ${styles.headerNavItem} ${styles.headerNavItemHome} ${isHome ? styles.headerNavItemActive : ""}`}
          >
            <span className={styles.headerNavLabel}>Home</span>
            <div className={styles.headerNavUnderlineTrack}>
              <div className={styles.headerNavUnderlineGlow} />
              <div className={styles.headerNavUnderlineSolid} />
            </div>
          </Link>

          <Link
            href="/about"
            id="nav-comp-10"
            className={`group ${styles.headerNavItem} ${styles.headerNavItemAbout} ${isAbout ? styles.headerNavItemActive : ""}`}
          >
            <span className={styles.headerNavLabel}>My Story</span>
            <div className={styles.headerNavUnderlineTrack}>
              <div className={styles.headerNavUnderlineGlow} />
              <div className={styles.headerNavUnderlineSolid} />
            </div>
          </Link>

          {/* Services Nav Item with Dropdown Button */}
          <div
            ref={dropdownRef}
            className="relative"
          >
            <div
              id="nav-comp-11"
              className={`group ${styles.headerNavItem} ${styles.headerNavItemServices} !w-auto !min-w-[96px] !px-2.5 ${isServices ? styles.headerNavItemActive : ""}`}
            >
              <div className="flex items-center gap-1.5">
                <span
                  className={`${styles.headerNavLabel} select-none`}
                >
                  Services
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    setIsServicesOpen((prev) => !prev);
                  }}
                  aria-expanded={isServicesOpen}
                  aria-haspopup="true"
                  aria-label="Toggle services menu"
                  className="p-1 text-white/80 hover:text-[#D07578] transition-colors flex items-center justify-center focus:outline-none cursor-pointer rounded"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-200 ${isServicesOpen ? "rotate-180 text-[#D07578]" : ""}`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
              </div>
              <div className={styles.headerNavUnderlineTrack}>
                <div className={styles.headerNavUnderlineGlow} />
                <div className={styles.headerNavUnderlineSolid} />
              </div>
            </div>

            {/* Desktop Dropdown Menu */}
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.96 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 min-w-[275px] w-max max-w-[320px]"
                >
                  <div className="bg-[#FEFEFE] rounded-[12px] shadow-[0_12px_36px_rgba(20,20,20,0.12)] border border-[#D07578]/25 p-2 overflow-hidden flex flex-col gap-0.5">
                    <div className="px-3 py-1.5 text-[11px] font-sans font-semibold uppercase tracking-wider text-[#D07578]/80 border-b border-[#D07578]/15 mb-1">
                      Our Services
                    </div>
                    {SERVICES_LIST.map((service) => (
                      <Link
                        key={service.id}
                        href={service.href}
                        onClick={() => {
                          setIsServicesOpen(false);
                          closeMenu();
                        }}
                        className="flex items-center justify-between px-3 py-2 rounded-[8px] text-[14px] font-sans font-medium text-[#141414] hover:text-[#D07578] hover:bg-[#FDF7F2] transition-all group/item"
                      >
                        <span>{service.label}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D07578] opacity-0 group-hover/item:opacity-100 transition-opacity" />
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/blogs"
            id="nav-comp-12"
            className={`group ${styles.headerNavItem} ${styles.headerNavItemBlogs} ${isBlogs ? styles.headerNavItemActive : ""}`}
          >
            <span className={styles.headerNavLabel}>Blogs</span>
            <div className={styles.headerNavUnderlineTrack}>
              <div className={styles.headerNavUnderlineGlow} />
              <div className={styles.headerNavUnderlineSolid} />
            </div>
          </Link>

          {/* Get In Touch Button */}
          <div id="nav-comp-16" className={styles.headerNavBtnWrapper}>
            <Button
              href={ctaHref}
              onClick={closeMenu}
              size="nav"
              ariaLabel="Get In Touch"
              className={styles.headerCtaButton}
            >
              Get In Touch
            </Button>
          </div>

          {/* Hamburger Menu / Close Button (Tablet & Mobile) */}
          <button
            type="button"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`${styles.headerMenuBtn} ${isMenuOpen ? styles.headerMenuBtnOpen : ""}`}
          >
            {isMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="#D07578" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 6L18 18" stroke="#D07578" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 5H20" stroke="#FEFEFE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 12H20" stroke="#FEFEFE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 19H14" stroke="#FEFEFE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Full landing page height white background navigation overlay for Tablet/Mobile */}
      <div
        className={`${styles.mobileDrawerOverlay} ${isMenuOpen ? styles.mobileDrawerOverlayOpen : ""}`}
        aria-hidden={!isMenuOpen}
      >
        <div className={styles.mobileDrawerContent}>
          <nav className={styles.mobileDrawerNav}>
            <Link
              href="/"
              onClick={closeMenu}
              className={`${styles.mobileDrawerItem} ${pathname === "/" ? styles.mobileDrawerItemActive : ""}`}
            >
              <span className={styles.mobileDrawerText}>Home</span>
            </Link>
            <Link
              href="/about"
              onClick={closeMenu}
              className={`${styles.mobileDrawerItem} ${pathname?.startsWith("/about") ? styles.mobileDrawerItemActive : ""}`}
            >
              <span className={styles.mobileDrawerText}>My Story</span>
            </Link>

            {/* Services with Mobile Accordion Dropdown */}
            <div className="flex flex-col w-full border-b border-[#D07578]/25">
              <div className="flex items-center justify-between w-full py-[18px]">
                <span
                  className={`${styles.mobileDrawerText} ${pathname?.startsWith("/services") ? "!text-[#D07578]" : ""} select-none`}
                >
                  Services
                </span>
                <button
                  type="button"
                  onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                  aria-expanded={isMobileServicesOpen}
                  aria-label="Toggle Services submenu"
                  className="p-1.5 -mr-1 text-[#141414] hover:text-[#D07578] transition-colors focus:outline-none"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180 text-[#D07578]" : ""}`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
              </div>

              {isMobileServicesOpen && (
                <div className="flex flex-col pl-3 pb-3 gap-1">
                  {SERVICES_LIST.map((service) => (
                    <Link
                      key={service.id}
                      href={service.href}
                      onClick={closeMenu}
                      className="py-2 px-3 text-[15px] font-sans font-medium text-[#141414]/85 hover:text-[#D07578] hover:bg-[#FDF7F2] rounded-[6px] transition-colors flex items-center justify-between"
                    >
                      <span>{service.label}</span>
                      <span className="text-[#D07578] text-sm">→</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/blogs"
              onClick={closeMenu}
              className={`${styles.mobileDrawerItem} ${pathname?.startsWith("/blogs") ? styles.mobileDrawerItemActive : ""}`}
            >
              <span className={styles.mobileDrawerText}>Blogs</span>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
