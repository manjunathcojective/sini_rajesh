"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, heroContent, SERVICES_LIST } from "@/lib/data";
import Button from "@/components/ui/Button";
import styles from "./Navbar.module.css";

export default function Navbar({
  variant = "transparent",
  className = "",
  showCta = true,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    setMobileMenuOpen(false);
  }, [pathname]);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  const getVariantClass = () => {
    switch (variant) {
      case "dark":
        return styles.themeDark;
      case "green":
        return styles.themeDarkGreen;
      case "light":
        return styles.themeLight;
      case "transparent":
      default:
        return styles.themeTransparent;
    }
  };

  return (
    <header className={`${styles.navHeader} ${getVariantClass()} ${className}`}>
      <div className={styles.navContainer}>
        {/* Left: Brand Logo */}
        <Link
          href="/"
          className={styles.logo}
          aria-label={`${heroContent.logo} - Igniting Mindz - Home`}
          onClick={closeMobileMenu}
        >
          <span className={styles.logoTitle}>{heroContent.logo}</span>
          <span className={styles.logoSubtitle}>Igniting Mindz</span>
        </Link>

        {/* Center/Right: Desktop Navigation Links with animated red glow underline */}
        <nav className={styles.desktopNav} aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive =
              link.href !== "/" &&
              (pathname === link.href || pathname?.startsWith(link.href));

            if (link.label === "Services") {
              return (
                <div
                  key={link.label}
                  ref={dropdownRef}
                  className="relative"
                >
                  <div
                    className={`${styles.navItem} !w-auto !min-w-[96px] !px-2.5 ${isActive ? styles.navItemActive : ""}`}
                  >
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`${styles.navLabel} select-none`}
                      >
                        {link.label}
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
                        className="p-1 text-current opacity-80 hover:opacity-100 hover:text-[#D07578] transition-colors flex items-center justify-center focus:outline-none cursor-pointer rounded"
                      >
                        <ChevronDown
                          size={13}
                          className={`transition-transform duration-200 ${isServicesOpen ? "rotate-180 text-[#D07578]" : ""}`}
                        />
                      </button>
                    </div>
                    <div className={styles.navUnderlineTrack}>
                      <div className={styles.navUnderlineGlow} />
                      <div className={styles.navUnderlineSolid} />
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
                                closeMobileMenu();
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
              );
            }

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`${styles.navItem} ${isActive ? styles.navItemActive : ""}`}
              >
                <span className={styles.navLabel}>{link.label}</span>
                <div className={styles.navUnderlineTrack}>
                  <div className={styles.navUnderlineGlow} />
                  <div className={styles.navUnderlineSolid} />
                </div>
              </Link>
            );
          })}
        </nav>

        {/* Right: Get In Touch Animated Button */}
        {showCta && (
          <div className={styles.navBtnWrapper}>
            <Button
              href={heroContent.cta.href || "/contact"}
              size="nav"
              ariaLabel={heroContent.cta.navbar || "Get In Touch"}
            >
              {heroContent.cta.navbar || "Get In Touch"}
            </Button>
          </div>
        )}

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={toggleMobileMenu}
          className={styles.mobileMenuButton}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Slide-down Drawer */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          {navLinks.map((link) => {
            if (link.label === "Services") {
              return (
                <div key={link.label} className="flex flex-col w-full border-b border-white/10">
                  <div className="flex items-center justify-between w-full py-2.5">
                    <span
                      className={`${styles.mobileNavItem} select-none`}
                      style={{ borderBottom: "none", padding: 0 }}
                    >
                      {link.label}
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                      aria-expanded={isMobileServicesOpen}
                      aria-label="Toggle Services submenu"
                      className="p-1.5 text-white hover:text-[#D07578] transition-colors focus:outline-none"
                    >
                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180 text-[#D07578]" : ""}`}
                      />
                    </button>
                  </div>

                  {isMobileServicesOpen && (
                    <div className="flex flex-col pl-3 pb-3 gap-1">
                      {SERVICES_LIST.map((service) => (
                        <Link
                          key={service.id}
                          href={service.href}
                          onClick={closeMobileMenu}
                          className="py-2 px-3 text-[15px] font-sans font-medium text-white/90 hover:text-[#D07578] hover:bg-white/10 rounded-[6px] transition-colors flex items-center justify-between"
                        >
                          <span>{service.label}</span>
                          <span className="text-[#D07578] text-sm">→</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMobileMenu}
                className={styles.mobileNavItem}
              >
                {link.label}
              </Link>
            );
          })}

          {showCta && (
            <Link
              href={heroContent.cta.href || "/contact"}
              onClick={closeMobileMenu}
              className={styles.mobileCtaBtn}
            >
              {heroContent.cta.navbar || "Get In Touch"}
            </Link>
          )}
        </div>
      )}
    </header>
  );
}
