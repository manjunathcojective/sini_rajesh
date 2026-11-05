"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export const SERVICES = [
  {
    id: "organisational-diagnostic-study",
    slug: "organisational-diagnostic-study",
    title: "Organisation Development",
    category: "Diagnostic & Systems",
    tagline: "Culture & Leadership",
    description:
      "Comprehensive diagnostic studies to uncover underlying dynamics, align human systems, and drive lasting cultural change.",
    image: "/images/organization-development-card.png",
    href: "/services/organisational-diagnostic-study",
    buttonLabel: "Explore Organisation Development",
  },
  {
    id: "coaching",
    slug: "coaching",
    title: "Coaching",
    category: "1-on-1 & Group Coaching",
    tagline: "The TEA Framework",
    description:
      "Executive and personal transformation coaching grounded in The TEA of Your Life framework to unlock clarity and purpose.",
    image: "/images/coaching-card.png",
    href: "/services/coaching",
    buttonLabel: "Explore Coaching",
  },
  {
    id: "hr-consultancy",
    slug: "hr-consultancy",
    title: "HR Consultancy",
    category: "Strategic HR Advisory",
    tagline: "People Architecture",
    description:
      "Strategic people practices, department structuring, policy architectures, and hands-on guidance for sustainable scaling.",
    image: "/images/hr-consultancy-card.png",
    href: "/services/hr-consultancy",
    buttonLabel: "Explore HR Consultancy",
  },
  {
    id: "happiness-coaching",
    slug: "happiness-coaching",
    title: "Happiness Coaching",
    category: "Mindset & Well-being",
    tagline: "Workplace & Personal",
    description:
      "Fostering happiness as a strategic advantage—helping individuals and teams thrive, build resilience, and discover joy.",
    image: "/images/happiness-coaching-card.png",
    href: "/services/happiness-coaching",
    buttonLabel: "Explore Happiness Coaching",
  },
  {
    id: "mentoring",
    slug: "mentoring",
    title: "Mentoring",
    category: "Executive Mentorship",
    tagline: "Career & Leadership",
    description:
      "Executive advisory, career mentorship, and leadership sounding board grounded in nearly three decades of experience.",
    image: "/images/mentoring-card.png",
    href: "/services/mentoring",
    buttonLabel: "Explore Mentoring",
  },
];

export default function ServicesOverview({
  badge = "Our Approach",
  heading = "Tailored Pathways to Clarity & Impact",
}) {
  const topRowServices = SERVICES.slice(0, 3);
  const bottomRowServices = SERVICES.slice(3, 5);

  const renderCardContent = (service, index) => (
    <div className="group w-full h-full min-h-[clamp(470px,46vw+100px,535px)] bg-white rounded-[clamp(14px,1vw+10px,16px)] p-[clamp(12px,0.8vw+9px,16px)] border border-[#D07578]/50 hover:border-[#D07578] hover:shadow-[0_16px_36px_rgba(208,117,120,0.18)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between gap-[clamp(12px,1.2vw+6px,18px)]">
      {/* Fluid Proportional Card Image */}
      <Link
        href={service.href}
        className="relative w-full aspect-[363/270] sm:aspect-[363/255] md:aspect-[324/245] lg:aspect-[363/270] min-h-[200px] max-h-[300px] rounded-[clamp(10px,0.6vw+8px,12px)] overflow-hidden bg-[#F4EAE6] shrink-0 block"
        aria-label={service.title}
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          priority={index === 0}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 767px) 94vw, (max-width: 1023px) 46vw, 397px"
        />
      </Link>

      {/* Card Content with Fluid Clamps */}
      <div className="w-full flex flex-col justify-between flex-grow gap-[clamp(8px,1vw,12px)] min-h-0">
        <Link href={service.href} className="block">
          <h3 className="font-sans font-bold text-[clamp(17px,0.35vw+15px,20.32px)] leading-[1.22] text-[#141414] group-hover:text-[#D07578] transition-colors line-clamp-1 m-0">
            {service.title}
          </h3>
        </Link>

        <p className="font-sans font-normal text-[clamp(13.5px,0.2vw+12.5px,16px)] leading-[1.38] text-[#141414]/80 line-clamp-2 m-0 h-[44px] overflow-hidden">
          {service.description}
        </p>

        {/* Meta: Category & Focus Tag */}
        <div className="w-full flex items-center justify-between pt-[clamp(8px,0.8vw+6px,12px)] border-t border-[#D07578]/50 text-[clamp(12px,0.2vw+12px,14px)] text-[#141414]/70 font-sans">
          <span className="font-sans font-normal text-[#141414]">
            {service.category}
          </span>
          <span className="font-sans font-normal text-[#141414]">
            {service.tagline}
          </span>
        </div>
      </div>

      {/* Explore Service / Read More Button with Fluid Clamps */}
      <Button
        href={service.href}
        variant="primary"
        size="full"
        showDot={true}
        className="!w-full !h-[clamp(40px,0.5vw+38px,44px)] !rounded-[6px] font-sans font-medium text-[clamp(14px,0.2vw+13px,16px)] flex items-center justify-center shrink-0"
        ariaLabel={`Explore ${service.title}`}
      >
        {service.buttonLabel || "Explore Service"}
      </Button>
    </div>
  );

  return (
    <section
      id="services-grid-section"
      className="w-full bg-[#FEFEFE] py-[clamp(44px,5.5vw,84px)] px-[clamp(16px,4vw,60px)] flex justify-center"
      aria-labelledby="services-grid-heading"
    >
      <div
        id="services-grid-container"
        className="w-full max-w-[1240px] flex flex-col items-center gap-[clamp(32px,3.8vw,56px)]"
      >
        {/* Header Block: Badge + Heading matching Blogs */}
        <motion.div
          id="services-grid-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[700px] flex flex-col items-center text-center gap-[clamp(12px,1.2vw+6px,20px)]"
        >
          {/* Badge: Interventions & Offerings */}
          <div
            id="services-grid-badge"
            className="inline-flex items-center gap-[clamp(6px,0.4vw+4px,10px)] justify-center"
          >
            <span className="w-[6px] h-[6px] rounded-full bg-[#D07578] shrink-0 translate-y-[1px]" />
            <span className="font-serif font-bold italic text-[#D07578] text-[clamp(16px,0.5vw+14px,20px)] leading-none whitespace-nowrap">
              {badge}
            </span>
          </div>

          {/* Heading */}
          <h2
            id="services-grid-heading"
            className="font-serif font-bold italic text-[#141414] text-[clamp(28px,1.8vw+20px,41.62px)] leading-[1.12] tracking-normal m-0"
          >
            {heading}
          </h2>
        </motion.div>

        {/* ========================================================================= */}
        {/* DESKTOP LAYOUT (>= 1024px): Row 1 has 3 cards, Row 2 has 2 cards centered */}
        {/* positioned right in between the cards in the upper section                */}
        {/* ========================================================================= */}
        <div className="hidden lg:flex flex-col w-full gap-[clamp(20px,2.5vw,30px)] items-center">
          {/* Row 1: Top 3 cards */}
          <div className="w-full grid grid-cols-3 gap-[clamp(20px,2.5vw,30px)] items-stretch">
            {topRowServices.map((service, index) => (
              <motion.article
                key={service.id}
                id={`service-card-${service.slug}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="w-full flex flex-col h-full"
              >
                {renderCardContent(service, index)}
              </motion.article>
            ))}
          </div>

          {/* Row 2: Bottom 2 cards aligned centered in between the upper 3 cards */}
          <div className="w-full flex justify-center gap-[clamp(20px,2.5vw,30px)] items-stretch">
            {bottomRowServices.map((service, index) => (
              <motion.article
                key={service.id}
                id={`service-card-${service.slug}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: (index + 3) * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="w-[calc((100%-60px)/3)] max-w-[393px] flex flex-col h-full"
              >
                {renderCardContent(service, index + 3)}
              </motion.article>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TABLET & MOBILE LAYOUT (< 1024px): Responsive 2 columns on tablet,        */}
        {/* 1 column on mobile with centered 5th card                                 */}
        {/* ========================================================================= */}
        <div className="flex lg:hidden flex-col md:grid md:grid-cols-2 gap-[clamp(20px,2.5vw,30px)] w-full justify-items-center">
          {SERVICES.map((service, index) => (
            <motion.article
              key={service.id}
              id={`service-card-mobile-${service.slug}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: (index % 2) * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`w-full max-w-[clamp(290px,94vw,420px)] flex flex-col h-full ${
                index === 4
                  ? "md:col-span-2 md:!w-[calc((100%-clamp(20px,2.5vw,30px))/2)] md:mx-auto md:justify-self-center"
                  : "md:max-w-none"
              }`}
            >
              {renderCardContent(service, index)}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
