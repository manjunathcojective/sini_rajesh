import React from "react";
import Link from "next/link";
import PageHero from "@/components/common/PageHero";
import Footer from "@/components/common/Footer";

export default function NotFound() {
  return (
    <main className="w-full min-h-screen bg-[#FEFEFE] flex flex-col justify-between">
      <PageHero
        card={true}
        heading="404"
        title="Page Not Found"
        height="clamp(220px, 18.61vw, 268px)"
        cardClassName="!h-[clamp(220px,18.61vw,268px)] !min-h-[clamp(220px,18.61vw,268px)]"
        bgColor="bg-[#BA676A]"
        bgImage="/images/hero-bg-image.png"
        bgPosition="center 24%"
      />

      <section className="w-full max-w-[1240px] mx-auto py-20 px-6 flex flex-col items-center justify-center text-center">
        <h2 className="font-serif italic font-bold text-3xl md:text-4xl text-[#141414] mb-4">
          This reflection could not be found
        </h2>
        <p className="font-sans text-[#141414]/75 text-base max-w-md mb-8">
          The blog post you are looking for is not published or has been moved.
        </p>
        <Link
          href="/blogs"
          className="inline-flex items-center justify-center h-11 px-6 rounded-[6px] bg-[#D07578] hover:bg-[#C25F69] text-white font-sans font-medium transition-colors"
        >
          Back to Blogs
        </Link>
      </section>

      <Footer />
    </main>
  );
}

