"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Helper to compute 2-letter monogram initials (ignoring honorifics like Dr.)
function getInitials(name) {
  if (!name) return "";
  const clean = name.replace(/^(Dr\.|Mr\.|Mrs\.|Ms\.)\s+/i, "").trim();
  const parts = clean.split(/\s+/).filter(Boolean);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

// Sophisticated brand-consistent palette for monogram avatar badges
const AVATAR_PALETTE = [
  { bg: "bg-[#D07578]", text: "text-white" }, // Rose Terracotta
  { bg: "bg-[#BA676A]", text: "text-white" }, // Deep Terracotta
  { bg: "bg-[#C4865B]", text: "text-white" }, // Warm Ochre
  { bg: "bg-[#7A8B77]", text: "text-white" }, // Muted Sage
  { bg: "bg-[#556377]", text: "text-white" }, // Slate Blue
  { bg: "bg-[#8D566B]", text: "text-white" }, // Wine Berry
  { bg: "bg-[#9A7B56]", text: "text-white" }, // Warm Sandalwood
];

const TESTIMONIALS = [
  {
    name: "Dr. Bhawna Nigam",
    role: "Professor & DBA Coach",
    quote: "Dr. Sini Rajesh is an extraordinary mentor and sounding board. Her workshops ignite real, lasting change.",
    rating: "5.0",
  },
  {
    name: "Jyothi Kumar",
    role: "Sr. Manager HR at Celstream Technologies",
    quote: "Sini has the rare ability to connect mindset work with real-world results. After her coaching, I not only experienced personal growth but also became more effective as a leader in my organization.",
    rating: "4.9",
  },
  {
    name: "Preenand Premacharan",
    role: "ED & CEO at Hebron",
    quote: "Dr. Sini’s strategic counsel on board dynamics and leadership succession has been invaluable to our enterprise.",
    rating: "5.0",
  },
  {
    name: "Satish N",
    role: "Co-Founder & Director at Opt IT Technologies",
    quote: "Transformative coaching that goes far beyond surface-level advice. It shifted how I see myself and my business.",
    rating: "4.8",
  },
  {
    name: "Nanaiah Appanna",
    role: "Head of Business Development at Lodestar 3D",
    quote: "Incredible depth and pragmatic wisdom. Sini brings a rare combination of empathy and strategic acumen.",
    rating: "4.9",
  },
  {
    name: "Mini Thomas",
    role: "Principal, St. Joseph's College",
    quote: "Dr. Sini helped me see my potential in a way I hadn't before. Her guidance gave me the confidence to overcome my doubts and a clearer sense of direction in both my life and career.",
    rating: "5.0",
  },
  {
    name: "Santhosh Mogili",
    role: "Founder & CTO at Opt IT Technologies",
    quote: "Working with Dr. Sini Rajesh gave our executive team the clarity and alignment we need during high-growth scaling.",
    rating: "4.9",
  },
  {
    name: "Bhakti Vij",
    role: "Global HR Director at Widas Group",
    quote: "Sini is not just a coach, she is a mentor who genuinely cares. Her warmth, wisdom, and positive energy make every interaction inspiring. She has been a huge support in my growth journey.",
    rating: "5.0",
  },
  {
    name: "Thrishala",
    role: "HR Head at Opt IT Technologies",
    quote: "Working with Sini completely shifted how I see challenges and opportunities. Instead of feeling stuck, I now feel empowered to take action. Her coaching has been one of the best investments in myself.",
    rating: "4.8",
  },
  {
    name: "Rachana Upadhyay",
    role: "Entrepreneur",
    quote: "What I love about Dr. Sini’s coaching is that it’s not just theory—she gives you practical tools you can apply immediately. Her sessions are powerful, engaging, and leave you with actionable strategies to create real change.",
    rating: "5.0",
  },
  {
    name: "Ajith George",
    role: "Group Product Supervisor at Molex",
    quote: "Sini’s sessions are life-changing. She doesn’t just coach you for success; she coaches you for happiness. I feel more fulfilled, balanced, and at peace with myself after working with her.",
    rating: "4.9",
  },
  {
    name: "Akash Indrabab",
    role: "Service Portfolio Manager at Opt IT Technologies",
    quote: "In just a few sessions, Sini helped me achieve breakthroughs I had been struggling with for years. Her ability to guide you gently yet firmly towards transformation is remarkable.",
    rating: "4.9",
  },
  {
    name: "Lakshitha M.N",
    role: "Student - Bachelor of Arts, St. Joseph’s University",
    quote: "Dr. Sini helped me identify the limiting beliefs that were holding me back for years. With her guidance, I was able to reframe my thinking and take steps I never thought possible.",
    rating: "5.0",
  },
];

const DISPLAY_TESTIMONIALS = [...TESTIMONIALS, ...TESTIMONIALS];

export default function Testimonials() {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    if (typeof window !== "undefined" && window.innerWidth >= 1024) return;
    setIsDragging(true);
    if (carouselRef.current) {
      setStartX(e.pageX - carouselRef.current.offsetLeft);
      setScrollLeft(carouselRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || (typeof window !== "undefined" && window.innerWidth >= 1024)) return;
    e.preventDefault();
    if (carouselRef.current) {
      const x = e.pageX - carouselRef.current.offsetLeft;
      const walk = (x - startX) * 1.5;
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <section
      id="testimonials-section"
      className="w-full flex justify-center overflow-hidden bg-[#FEFEFE]"
      aria-labelledby="testimonials-heading"
    >
      {/* Testimonials Outer Container with Fluid Responsive Padding */}
      <div
        id="testimonials-container"
        className="relative flex flex-col items-center w-full max-w-[1440px] px-[clamp(16px,5.55vw,80px)] py-[clamp(44px,5vw,60px)]"
      >
        {/* Testimonials Content Wrapper */}
        <div
          id="testimonials-main-wrapper"
          className="flex flex-col items-center w-full gap-[clamp(32px,4.5vw,66px)]"
        >
          {/* Section Header */}
          <header
            id="testimonials-header"
            className="flex flex-col items-center w-full max-w-[clamp(320px,90vw,676px)] gap-[clamp(24px,2.8vw,40px)] text-center"
          >
            {/* Title & Badge Group */}
            <motion.div
              id="testimonials-title-group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center w-full gap-[clamp(16px,2.1vw,30px)]"
            >
              {/* Category Badge */}
              <div
                id="testimonials-badge"
                className="inline-flex items-center justify-center gap-[clamp(8px,0.7vw,10px)]"
              >
                <span
                  className="w-[clamp(5px,0.42vw,6px)] h-[clamp(5px,0.42vw,6px)] rounded-full bg-[#D07578] shrink-0"
                  aria-hidden="true"
                />
                <span className="font-serif font-bold italic text-[clamp(18px,1.4vw,20px)] text-[#D07578] leading-none whitespace-nowrap text-center">
                  Testimonials
                </span>
              </div>

              {/* Main Heading with Fluid Clamp Typography */}
              <h2
                id="testimonials-heading"
                className="font-serif font-bold italic text-[clamp(26px,2.9vw,41.62px)] leading-[clamp(32px,3.2vw,45px)] text-[#141414] text-center m-0 max-w-[676px]"
              >
                Transformation Is Best Told Through the People Who Experience It
              </h2>
            </motion.div>

            {/* Subheading / Description with Fluid Clamp */}
            <motion.p
              id="testimonials-description"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans font-normal text-[clamp(14px,1.1vw,16px)] leading-[clamp(20px,1.5vw,24px)] text-[#141414] text-center m-0 max-w-[clamp(300px,85vw,676px)]"
            >
              Every person and every organisation begins their journey from a different place.
            </motion.p>
          </header>

          {/* Testimonial Cards Carousel Row: Auto-scroll on Desktop, Swipable on Mobile & Tablet */}
          <div
            id="testimonials-carousel"
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="relative w-full overflow-x-auto lg:overflow-hidden py-[clamp(8px,1vw,14px)] scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden touch-pan-x cursor-grab active:cursor-grabbing lg:cursor-default"
            aria-label="Client Testimonials Carousel"
          >
            {/* Smooth Edge Fade Gradients (Desktop) */}
            <div
              className="hidden lg:block absolute left-0 top-0 bottom-0 w-[clamp(24px,5.5vw,80px)] bg-gradient-to-r from-[#FEFEFE] via-[#FEFEFE]/80 to-transparent z-10 pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="hidden lg:block absolute right-0 top-0 bottom-0 w-[clamp(24px,5.5vw,80px)] bg-gradient-to-l from-[#FEFEFE] via-[#FEFEFE]/80 to-transparent z-10 pointer-events-none"
              aria-hidden="true"
            />

            {/* Marquee Track: Automatic Infinite Animation on Desktop (lg:), Touch/Swipe on Mobile & Tablet */}
            <div
              id="testimonials-carousel-track"
              className="flex flex-row w-max desktop-marquee gap-[clamp(16px,1.67vw,24px)] px-4 lg:px-0"
              style={{
                "--carousel-gap": "clamp(16px, 1.67vw, 24px)",
              }}
            >
              {DISPLAY_TESTIMONIALS.map((item, index) => (
                <article
                  key={`${item.name}-${index}`}
                  id={`testimonial-card-${index}`}
                  className="snap-start flex flex-col justify-between w-[clamp(260px,21vw,300px)] min-h-[310px] h-auto p-[clamp(16px,1.4vw,20px)] rounded-[clamp(10px,0.85vw,12px)] bg-[#FDF7F2] border border-transparent shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(208,117,120,0.12)] hover:border-[#D07578]/30 hover:-translate-y-1 transition-all duration-300 shrink-0 select-none"
                  aria-label={`Testimonial from ${item.name}`}
                >
                  {/* Card Body: Rating & Quote */}
                  <div
                    id={`testimonial-body-${index}`}
                    className="flex flex-col w-full gap-[clamp(12px,1.1vw,16px)]"
                  >
                    {/* Star Rating Row */}
                    <div
                      id={`testimonial-rating-${index}`}
                      className="flex items-center gap-[clamp(6px,0.55vw,8px)] pb-[clamp(10px,0.85vw,12px)] border-b border-[#D07578]/25"
                      aria-label={`Rated ${item.rating} out of 5 stars`}
                    >
                      <svg
                        className="w-[clamp(14px,1.1vw,16px)] h-[clamp(13px,1.05vw,15px)] shrink-0"
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M7.6084 0L9.40451 5.52786H15.2169L10.5146 8.94427L12.3107 14.4721L7.6084 11.0557L2.90612 14.4721L4.70223 8.94427L-5.38826e-05 5.52786H5.81229L7.6084 0Z"
                          fill="#FFCC00"
                        />
                      </svg>
                      <span className="font-sans font-semibold text-[clamp(14px,1.1vw,16px)] text-[#D07578] leading-none">
                        {item.rating}
                      </span>
                    </div>

                    {/* Testimonial Quote */}
                    <p className="font-sans font-normal text-[clamp(13px,1vw,15px)] leading-[145%] text-[#141414] m-0 line-clamp-5">
                      {item.quote}
                    </p>
                  </div>

                  {/* Card Author Footer */}
                  <footer
                    id={`testimonial-author-footer-${index}`}
                    className="flex items-center w-full gap-[clamp(10px,1vw,15px)] pt-[clamp(6px,0.7vw,10px)]"
                  >
                    {/* Testimonial Monogram Initials Avatar */}
                    <div
                      className={`relative shrink-0 w-[clamp(38px,2.9vw,44px)] h-[clamp(38px,2.9vw,44px)] rounded-full flex items-center justify-center font-sans font-semibold text-[clamp(13px,1vw,15px)] tracking-wider shadow-sm select-none ${
                        AVATAR_PALETTE[index % AVATAR_PALETTE.length].bg
                      } text-white`}
                      aria-hidden="true"
                    >
                      {getInitials(item.name)}
                    </div>

                    {/* Author Metadata */}
                    <div
                      id={`testimonial-author-meta-${index}`}
                      className="flex flex-col justify-center gap-1 min-w-0 flex-1"
                    >
                      <div className="font-sans font-semibold text-[clamp(13.5px,1vw,15.5px)] text-[#141414] leading-tight">
                        {item.name}
                      </div>
                      <div className="font-sans font-normal text-[clamp(11.5px,0.85vw,13px)] text-[#141414]/75 leading-snug line-clamp-2 break-words">
                        {item.role}
                      </div>
                    </div>
                  </footer>
                </article>
              ))}
            </div>
          </div>

          {/* Mobile & Tablet Swipe Hint Indicator */}
          <div className="flex lg:hidden items-center justify-center gap-1.5 text-[13px] font-sans text-[#D07578]/80 select-none -mt-4">
            <span>Swipe to explore testimonials</span>
            <span aria-hidden="true">→</span>
          </div>
        </div>
      </div>
    </section>
  );
}
