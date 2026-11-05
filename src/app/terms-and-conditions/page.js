import React from "react";
import PageHero from "@/components/common/PageHero";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: "Terms and Conditions | Dr. Sini Rajesh - Igniting Mindz",
  description:
    "Terms and Conditions governing the use of the website and services offered by Dr. Sini Rajesh and Igniting Mindz.",
};

export default function TermsAndConditionsPage() {
  return (
    <main className="w-full min-h-screen bg-[#FEFEFE]">
      {/* Page Hero */}
      <PageHero
        card={true}
        heading="Legal"
        title="Terms and Conditions"
        info="Guidelines and standard terms governing your engagement with our website and advisory offerings."
        height="clamp(220px, 18.61vw, 268px)"
        cardClassName="!h-[clamp(220px,18.61vw,268px)] !min-h-[clamp(220px,18.61vw,268px)]"
        bgColor="bg-[#BA676A]"
        bgImage="/images/hero-bg-image.png"
        bgPosition="center 24%"
      />

      {/* Main Content */}
      <section className="w-full max-w-[1240px] mx-auto px-[clamp(16px,5vw,80px)] py-[clamp(44px,6vw,84px)] text-[#141414]">
        <div className="max-w-[840px] mx-auto flex flex-col gap-10">
          {/* Last Updated */}
          <div className="pb-4 border-b border-[#D07578]/40 flex items-center justify-between text-[14px] text-[#141414]/70 font-sans">
            <span>Effective Date: November 2026</span>
            <span className="font-medium text-[#D07578]">Igniting Mindz</span>
          </div>

          {/* Section 1 */}
          <div className="flex flex-col gap-3">
            <h2 className="font-serif font-bold italic text-[clamp(22px,1.5vw+16px,28px)] text-[#141414] leading-[1.2] m-0">
              1. Acceptance of Terms
            </h2>
            <p className="font-sans font-normal text-[15px] sm:text-[16px] leading-[1.65] text-[#141414]/80 m-0">
              Welcome to the website of <strong className="font-semibold text-[#141414]">Dr. Sini Rajesh / Igniting Mindz</strong>. By accessing or using this website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please refrain from using this website.
            </p>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col gap-3">
            <h2 className="font-serif font-bold italic text-[clamp(22px,1.5vw+16px,28px)] text-[#141414] leading-[1.2] m-0">
              2. Nature of Professional Services
            </h2>
            <p className="font-sans font-normal text-[15px] sm:text-[16px] leading-[1.65] text-[#141414]/80 m-0">
              The services provided by Dr. Sini Rajesh through Igniting Mindz encompass executive coaching, personal transformation coaching, mentoring, human resources advisory, and organization development diagnostics.
            </p>
            <div className="p-4 bg-[#FDF7F2] rounded-[8px] border-l-4 border-[#D07578] font-sans text-[14.5px] leading-[1.6] text-[#141414]/85">
              <strong className="font-semibold text-[#141414]">Important Developmental Disclaimer:</strong> Coaching and mentoring are developmental and educational processes aimed at personal clarity, leadership evolution, and professional effectiveness. They do not constitute clinical psychotherapy, psychological counseling, medical treatment, or legal/financial advice. Clients remain solely responsible for their personal decisions, actions, and outcomes.
            </div>
          </div>

          {/* Section 3 */}
          <div className="flex flex-col gap-3">
            <h2 className="font-serif font-bold italic text-[clamp(22px,1.5vw+16px,28px)] text-[#141414] leading-[1.2] m-0">
              3. Intellectual Property Rights
            </h2>
            <p className="font-sans font-normal text-[15px] sm:text-[16px] leading-[1.65] text-[#141414]/80 m-0">
              All materials published on this website—including articles, reflections, frameworks (notably <em className="italic font-medium">The TEA of Your Life</em> framework), logos, graphics, visual designs, and copy—are the proprietary intellectual property of Dr. Sini Rajesh and Igniting Mindz, protected under applicable copyright and intellectual property laws.
            </p>
            <p className="font-sans font-normal text-[15px] sm:text-[16px] leading-[1.65] text-[#141414]/80 m-0">
              No content from this website may be reproduced, distributed, modified, transmitted, or republished for commercial purposes without prior written authorization from Dr. Sini Rajesh.
            </p>
          </div>

          {/* Section 4 */}
          <div className="flex flex-col gap-3">
            <h2 className="font-serif font-bold italic text-[clamp(22px,1.5vw+16px,28px)] text-[#141414] leading-[1.2] m-0">
              4. Engagement Agreements &amp; Cancellations
            </h2>
            <p className="font-sans font-normal text-[15px] sm:text-[16px] leading-[1.65] text-[#141414]/80 m-0">
              Formal coaching packages, advisory engagements, and organizational interventions are subject to specific written service agreements outlining objectives, deliverables, schedules, fees, and rescheduling/cancellation terms agreed upon mutually prior to commencement.
            </p>
          </div>

          {/* Section 5 */}
          <div className="flex flex-col gap-3">
            <h2 className="font-serif font-bold italic text-[clamp(22px,1.5vw+16px,28px)] text-[#141414] leading-[1.2] m-0">
              5. Website Use &amp; Conduct
            </h2>
            <p className="font-sans font-normal text-[15px] sm:text-[16px] leading-[1.65] text-[#141414]/80 m-0">
              Users agree to use this website in a respectful and lawful manner. You agree not to submit fraudulent or misleading information, transmit any disruptive code, or attempt unauthorized access to website administrative systems.
            </p>
          </div>

          {/* Section 6 */}
          <div className="flex flex-col gap-3">
            <h2 className="font-serif font-bold italic text-[clamp(22px,1.5vw+16px,28px)] text-[#141414] leading-[1.2] m-0">
              6. Limitation of Liability
            </h2>
            <p className="font-sans font-normal text-[15px] sm:text-[16px] leading-[1.65] text-[#141414]/80 m-0">
              To the fullest extent permitted by law, Dr. Sini Rajesh and Igniting Mindz shall not be liable for any indirect, incidental, or consequential damages resulting from the use of, or inability to use, this website or the information contained herein. Information provided on this site is for general informational purposes and should not be relied upon as definitive professional advice without direct engagement.
            </p>
          </div>

          {/* Section 7 */}
          <div className="flex flex-col gap-3">
            <h2 className="font-serif font-bold italic text-[clamp(22px,1.5vw+16px,28px)] text-[#141414] leading-[1.2] m-0">
              7. Governing Law &amp; Jurisdiction
            </h2>
            <p className="font-sans font-normal text-[15px] sm:text-[16px] leading-[1.65] text-[#141414]/80 m-0">
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts in Bengaluru, Karnataka, India.
            </p>
          </div>

          {/* Section 8 */}
          <div className="flex flex-col gap-3 pt-6 border-t border-[#D07578]/30">
            <h2 className="font-serif font-bold italic text-[clamp(22px,1.5vw+16px,28px)] text-[#141414] leading-[1.2] m-0">
              8. Contact Details
            </h2>
            <p className="font-sans font-normal text-[15px] sm:text-[16px] leading-[1.65] text-[#141414]/80 m-0">
              For any questions regarding these Terms and Conditions, please contact:
            </p>
            <div className="mt-2 p-5 bg-[#FDF7F2] rounded-[10px] border border-[#D07578]/30 font-sans text-[15px] text-[#141414]/90 flex flex-col gap-1.5">
              <span className="font-semibold text-[#141414]">Igniting Mindz — Dr. Sini Rajesh</span>
              <span>Bengaluru, Karnataka, India</span>
              <span>
                Email:{" "}
                <a href="mailto:connect@sinirajesh.com" className="text-[#D07578] hover:underline font-medium">
                  connect@sinirajesh.com
                </a>
              </span>
              <span>
                Phone:{" "}
                <a href="tel:+918951698013" className="text-[#D07578] hover:underline font-medium">
                  +91 89516 98013
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

