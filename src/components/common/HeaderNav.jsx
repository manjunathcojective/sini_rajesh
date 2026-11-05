"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import { SERVICES_LIST } from "@/lib/data";
import styles from "./HeaderNav.module.css";

export default function HeaderNav({
  className = "",
  ctaHref = "/contact",
  onMenuStateChange,
}) {
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
    setIsMobileServicesOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      const next = !prev;
      if (!next) {
        setIsMobileServicesOpen(false);
      }
      return next;
    });
  };

  useEffect(() => {
    onMenuStateChange?.({ isMenuOpen, isMobileServicesOpen });
  }, [isMenuOpen, isMobileServicesOpen, onMenuStateChange]);

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
      <div
        id="frame3"
        className={`${styles.headerFrame3} ${isMenuOpen
            ? `${styles.headerFrame3Open} max-lg:!absolute max-lg:!top-0 max-lg:!left-0 max-lg:!right-0 max-lg:!w-full max-lg:!bg-[#FEFEFE] max-lg:!z-50`
            : className
          }`}
      >
        {/* Brand Logo Lockup: Sini Rajesh with Igniting Mindz centered underneath */}
        <Link
          href="/"
          prefetch={false}
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
            prefetch={false}
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
            prefetch={false}
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
            className={`relative ${isServicesOpen ? "z-50" : ""}`}
          >
            <div
              id="nav-comp-11"
              onClick={() => setIsServicesOpen((prev) => !prev)}
              className={`group ${styles.headerNavItem} ${styles.headerNavItemServices} !w-auto !min-w-[96px] !px-2.5 cursor-pointer ${isServices ? styles.headerNavItemActive : ""}`}
            >
              <div className="flex items-center gap-1.5 h-[16px]">
                <Link href="/services" prefetch={false} onClick={closeMenu} className={`${styles.headerNavLabel} select-none hover:text-[#D07578]`}>Services</Link>
                <span
                  aria-expanded={isServicesOpen}
                  aria-haspopup="true"
                  aria-label="Toggle services menu"
                  className="text-white/80 group-hover:text-[#D07578] transition-colors flex items-center justify-center focus:outline-none"
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
                    className={`transition-transform duration-200 ${isServicesOpen ? "rotate-180 !text-[#D07578]" : ""}`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
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
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-[999] min-w-[275px] w-max max-w-[320px]"
                >
                  <div className="bg-[#FEFEFE] rounded-[12px] shadow-[0_12px_36px_rgba(208,117,120,0.12)] border border-[#D07578]/25 p-2 overflow-hidden flex flex-col gap-0.5">
                    <Link href="/services" prefetch={false} onClick={() => { setIsServicesOpen(false); closeMenu(); }} className="flex items-center justify-between px-3 py-2 rounded-[8px] text-[14px] font-sans font-semibold text-[#D07578] bg-[#FDF7F2] hover:bg-[#F8EFEA] border-b border-[#D07578]/20 mb-1 transition-all group/all"><span>All Services Overview</span><span className="text-[12px] group-hover/all:translate-x-1 transition-transform">→</span></Link>
                    {SERVICES_LIST.map((service) => (
                      <Link
                        key={service.id}
                        href={service.href}
                        prefetch={false}
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
            prefetch={false}
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
            onClick={toggleMenu}
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
              prefetch={false}
              onClick={closeMenu}
              className={`${styles.mobileDrawerItem} ${pathname === "/" ? styles.mobileDrawerItemActive : ""}`}
            >
              <span className={styles.mobileDrawerText}>Home</span>
            </Link>
            <Link
              href="/about"
              prefetch={false}
              onClick={closeMenu}
              className={`${styles.mobileDrawerItem} ${pathname?.startsWith("/about") ? styles.mobileDrawerItemActive : ""}`}
            >
              <span className={styles.mobileDrawerText}>My Story</span>
            </Link>

            {/* Services with Mobile Accordion Dropdown */}
            <div className="flex flex-col w-full">
              <div
                role="button"
                tabIndex={0}
                onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setIsMobileServicesOpen((prev) => !prev);
                  }
                }}
                className={`${styles.mobileDrawerItem} justify-between cursor-pointer group/services-toggle focus:outline-none`}
              >
                <span
                  className={`${styles.mobileDrawerText} ${pathname?.startsWith("/services") ? "!text-[#D07578]" : ""} group-hover/services-toggle:text-[#D07578] transition-colors select-none`}
                >
                  Services
                </span>
                <span
                  aria-expanded={isMobileServicesOpen}
                  aria-label="Toggle Services submenu"
                  className="p-1.5 -mr-1 text-[#141414] group-hover/services-toggle:text-[#D07578] transition-colors flex items-center justify-center"
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
                </span>
              </div>

              {/* All Services List (Smooth Animated Expansion) */}
              <AnimatePresence initial={false}>
                {isMobileServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col w-full">
                      <Link
                        href="/services"
                        prefetch={false}
                        onClick={closeMenu}
                        className={`${styles.mobileDrawerSubItem} ${pathname === "/services" ? styles.mobileDrawerSubItemActive : ""} !text-[#D07578] font-semibold flex items-center justify-between`}
                      >
                        <span className={`${styles.mobileDrawerSubText} !text-[#D07578] font-semibold`}>
                          All Services Overview
                        </span>
                        <span className="text-[13px] text-[#D07578] pr-1">→</span>
                      </Link>
                      {SERVICES_LIST.map((service) => (
                        <Link
                          key={service.id}
                          href={service.href}
                          prefetch={false}
                          onClick={closeMenu}
                          className={`${styles.mobileDrawerSubItem} ${pathname === service.href ? styles.mobileDrawerSubItemActive : ""}`}
                        >
                          <span className={styles.mobileDrawerSubText}>{service.label}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/blogs"
              prefetch={false}
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
