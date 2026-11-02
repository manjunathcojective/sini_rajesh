"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    name: "Sarah Thompson",
    role: "CEO - Apple INC",
    avatar: "/images/testimonial-image.png",
    quote: "Working with Dr. Sini Rajesh gave our executive team the clarity and alignment we needed during high-growth scaling.",
    rating: "5.0",
  },
  {
    name: "David Chen",
    role: "VP People - TechGlobal",
    avatar: "/images/testimonial-image.png",
    quote: "Her organisation development interventions completely reshaped our leadership pipeline and cultural cohesion.",
    rating: "5.0",
  },
  {
    name: "Aarti Sharma",
    role: "Director of HR - FinCorp",
    avatar: "/images/testimonial-image.png",
    quote: "The TEA of Your Life coaching framework helped me unlock personal clarity and lead with authentic empathy.",
    rating: "5.0",
  },
  {
    name: "Michael Roberts",
    role: "Managing Director - Apex Group",
    avatar: "/images/testimonial-image.png",
    quote: "Incredible depth and pragmatic wisdom. Sini brings a rare combination of empathy and strategic acumen.",
    rating: "5.0",
  },
  {
    name: "Priya Nair",
    role: "Founder - Elevate Studios",
    avatar: "/images/testimonial-image.png",
    quote: "Transformative coaching that goes far beyond surface-level advice. It shifted how I see myself and my business.",
    rating: "5.0",
  },
  {
    name: "James Wilson",
    role: "Chief People Officer - Lumina",
    avatar: "/images/testimonial-image.png",
    quote: "Dr. Sini Rajesh is an extraordinary mentor and sounding board. Her workshops ignited real, lasting change.",
    rating: "5.0",
  },
  {
    name: "Ananya Deshmukh",
    role: "Head of Talent - Innovate Labs",
    avatar: "/images/testimonial-image.png",
    quote: "The clarity and psychological safety she creates in leadership teams is unlike anything I have seen.",
    rating: "5.0",
  },
  {
    name: "Robert Taylor",
    role: "Board Member & Advisor",
    avatar: "/images/testimonial-image.png",
    quote: "Her strategic counsel on board dynamics and leadership succession has been invaluable to our enterprise.",
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
                  className="snap-start flex flex-col justify-between w-[clamp(260px,20.3vw,292px)] h-[clamp(290px,21.6vw,311px)] p-[clamp(16px,1.4vw,20px)] rounded-[clamp(10px,0.85vw,12px)] bg-[#FDF7F2] border border-transparent shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(208,117,120,0.12)] hover:border-[#D07578]/30 hover:-translate-y-1 transition-all duration-300 shrink-0 select-none"
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
                    <p className="font-sans font-normal text-[clamp(13.5px,1.1vw,16px)] leading-[140%] text-[#141414] m-0 line-clamp-4">
                      {item.quote}
                    </p>
                  </div>

                  {/* Card Author Footer */}
                  <footer
                    id={`testimonial-author-footer-${index}`}
                    className="flex items-center w-full gap-[clamp(10px,1vw,15px)] pt-[clamp(6px,0.7vw,10px)]"
                  >
                    {/* Testimonial Avatar Image */}
                    <div className="relative overflow-hidden shrink-0 w-[clamp(36px,2.8vw,40px)] h-[clamp(36px,2.8vw,40px)] rounded-[2px] bg-[#E9E5D2]">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>

                    {/* Author Metadata */}
                    <div
                      id={`testimonial-author-meta-${index}`}
                      className="flex flex-col justify-center gap-[clamp(2px,0.28vw,4px)] min-w-0 flex-1"
                    >
                      <div className="font-sans font-semibold text-[clamp(14px,1.1vw,16px)] text-[#141414] leading-tight truncate">
                        {item.name}
                      </div>
                      <div className="font-sans font-normal text-[clamp(12px,0.97vw,14px)] text-[#141414]/75 leading-tight truncate">
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
