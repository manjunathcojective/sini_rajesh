"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const SERVICES_DATA = [
  {
    id: "coaching",
    title: "Coaching",
    subtitle: "Personal Clarity & High-Performance Executive Coaching",
    description:
      "Unlock your authentic voice, dismantle self-limiting patterns, and lead with profound purpose through personalized 1-on-1 coaching grounded in The TEA of Your Life framework.",
    points: [
      "Executive & Leadership Coaching",
      "Personal Transformation & Growth",
      "The TEA of Your Life Framework",
    ],
    badge: "Individual & Leadership",
  },
  {
    id: "organization-development",
    title: "Organization Development",
    subtitle: "Culture, Change & High-Impact Human Systems",
    description:
      "Holistic organizational interventions that align business strategy with human potential, cultivating high-trust cultures, psychological safety, and resilient team dynamics.",
    points: [
      "Culture Transformation & Change Management",
      "Team Alignment & Dynamics",
      "Strategic People Architectures",
    ],
    badge: "Enterprise & Scale",
  },
  {
    id: "hr-consultancy",
    title: "HR Consultancy",
    subtitle: "Strategic People Practices & Compliance Excellence",
    description:
      "Advising forward-thinking organizations on talent acquisition pipelines, performance management systems, PoSH governance, and agile HR operating models.",
    points: [
      "Strategic People Management",
      "PoSH Compliance & POSH TTT",
      "Performance Systems & Policy Design",
    ],
    badge: "Strategic Advisory",
  },
  {
    id: "happiness-coaching",
    title: "Happiness Coaching",
    subtitle: "Science of Well-being & Meaningful Fulfillment",
    description:
      "Evidence-backed coaching rooted in positive psychology and mindful resilience, helping professionals cultivate joyful productivity, inner equilibrium, and work-life harmony.",
    points: [
      "Workplace Well-being & Resilience",
      "Emotional Balance & Mindset Shifts",
      "Positive Psychology Frameworks",
    ],
    badge: "Well-Being & Mindset",
  },
  {
    id: "mentoring",
    title: "Mentoring",
    subtitle: "Long-Term Wisdom, Guidance & Sounding Board",
    description:
      "A trusted advisory partnership for senior executives, women leaders, and founders seeking pragmatic perspective, strategic foresight, and sounding-board clarity.",
    points: [
      "C-Suite & Board Mentorship",
      "Career Trajectory Acceleration",
      "Women in Leadership Mentoring",
    ],
    badge: "Executive Advisory",
  },
  {
    id: "leadership-development",
    title: "Leadership Development",
    subtitle: "Empowering Authentic, Empathetic Leaders",
    description:
      "Custom leadership development workshops and cohort programs designed to transform managers into empathetic, strategic, and inspiring leaders who elevate their teams.",
    points: [
      "Empathetic Leadership Programs",
      "Executive Presence & Influence",
      "Next-Gen Leadership Pipeline",
    ],
    badge: "Workshops & Cohorts",
  },
  {
    id: "not-sure-yet",
    title: "Not Sure Yet, Would Like To Explore",
    subtitle: "Complimentary Discovery Conversation",
    description:
      "Every journey begins with curiosity. If you are exploring how Dr. Sini Rajesh can partner with you or your organisation, let’s begin with a thoughtful 30-minute exploratory conversation.",
    points: [
      "Open-ended Needs Assessment",
      "Tailored Transformation Roadmap",
      "No-obligation Exploratory Call",
    ],
    badge: "Exploratory Call",
  },
  {
    id: "other",
    title: "Other / Custom Interventions",
    subtitle: "Bespoke Consulting & Keynote Engagements",
    description:
      "Have a unique organizational challenge, speaking engagement, or custom transformation requirement? Let us design a bespoke intervention tailored to your exact needs.",
    points: [
      "Keynote Speaking & Masterclasses",
      "Custom Corporate Retreats",
      "Bespoke Advisory Engagements",
    ],
    badge: "Custom Solutions",
  },
];

export default function ServicesList() {
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const serviceParam = params.get("service");
      if (serviceParam) {
        const found = SERVICES_DATA.find(
          (s) =>
            s.id.toLowerCase() === serviceParam.toLowerCase() ||
            s.title.toLowerCase().includes(serviceParam.toLowerCase())
        );
        if (found) {
          setSelectedService(found.id);
          const el = document.getElementById(found.id);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }
      }
    }
  }, []);

  return (
    <section
      id="services-list-section"
      className="w-full flex justify-center bg-[#FEFEFE] px-[clamp(16px,5.55vw,80px)] py-[clamp(48px,6vw,88px)]"
      aria-labelledby="services-list-heading"
    >
      <div className="w-full max-w-[1240px] flex flex-col items-center gap-[clamp(36px,4.5vw,60px)]">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-[720px] gap-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D07578]" />
            <span className="font-serif font-bold italic text-[clamp(18px,1.4vw,20px)] text-[#D07578]">
              Interventions & Offerings
            </span>
          </div>
          <h2
            id="services-list-heading"
            className="font-serif font-bold italic text-[clamp(28px,3vw,42px)] leading-[clamp(34px,3.4vw,48px)] text-[#141414] m-0"
          >
            Tailored Pathways to Clarity, Leadership & Organizational Impact
          </h2>
          <p className="font-sans font-normal text-[clamp(14px,1.1vw,16px)] leading-[150%] text-[#141414]/80 m-0">
            Whether you are an individual stepping into authentic leadership or an enterprise reimagining your culture, explore the avenues through which we can collaborate.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(20px,2vw,30px)] w-full">
          {SERVICES_DATA.map((service, index) => {
            const isHighlighted = selectedService === service.id;

            return (
              <motion.article
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`flex flex-col justify-between p-[clamp(24px,3vw,36px)] rounded-[14px] bg-[#FDF7F2] transition-all duration-300 border ${
                  isHighlighted
                    ? "border-[#D07578] shadow-[0_12px_36px_rgba(208,117,120,0.2)] ring-2 ring-[#D07578]/30"
                    : "border-transparent shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(208,117,120,0.12)] hover:border-[#D07578]/30 hover:-translate-y-1"
                }`}
              >
                <div className="flex flex-col gap-4">
                  {/* Badge & Title */}
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-block px-3 py-1 rounded-full text-[12px] font-sans font-semibold tracking-wide text-[#D07578] bg-[#D07578]/10">
                      {service.badge}
                    </span>
                    <span className="text-[12px] font-sans font-medium text-[#141414]/50">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold italic text-[clamp(22px,2vw,28px)] text-[#141414] leading-tight m-0">
                    {service.title}
                  </h3>

                  <p className="font-sans font-medium text-[clamp(13.5px,1vw,15px)] text-[#D07578] m-0">
                    {service.subtitle}
                  </p>

                  <p className="font-sans font-normal text-[clamp(14px,1vw,15.5px)] text-[#141414]/85 leading-[160%] m-0">
                    {service.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="flex flex-col gap-2 pt-2 border-t border-[#D07578]/20 m-0 p-0 list-none">
                    {service.points.map((pt, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2.5 text-[13.5px] font-sans font-normal text-[#141414]/90"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D07578] shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <div className="pt-6 mt-4 border-t border-[#D07578]/15 flex items-center justify-between">
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center gap-2 text-[14px] font-sans font-semibold text-[#D07578] hover:text-[#C25F69] transition-colors group/btn"
                  >
                    <span>Connect Regarding {service.title}</span>
                    <span className="group-hover/btn:translate-x-1 transition-transform">
                      →
                    </span>
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
