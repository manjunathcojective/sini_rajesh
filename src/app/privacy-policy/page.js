import React from "react";
import PageHero from "@/components/common/PageHero";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: "Privacy Policy | Dr. Sini Rajesh - Igniting Mindz",
  description:
    "Privacy Policy for Dr. Sini Rajesh and Igniting Mindz. Learn how we collect, protect, and respect your personal information and confidentiality.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full min-h-screen bg-[#FEFEFE]">
      {/* Page Hero */}
      <PageHero
        card={true}
        heading="Legal"
        title="Privacy Policy"
        info="Your privacy, trust, and confidentiality are foundational to everything we do at Igniting Mindz."
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
              1. Introduction &amp; Commitment to Privacy
            </h2>
            <p className="font-sans font-normal text-[15px] sm:text-[16px] leading-[1.65] text-[#141414]/80 m-0">
              At <strong className="font-semibold text-[#141414]">Igniting Mindz</strong> (represented by Dr. Sini Rajesh), we are dedicated to maintaining the trust and confidence of our visitors, clients, and partners. This Privacy Policy describes how your personal information is collected, used, and safeguarded when you visit our website, submit inquiries, schedule exploratory conversations, or engage in our coaching, mentoring, and advisory services.
            </p>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col gap-3">
            <h2 className="font-serif font-bold italic text-[clamp(22px,1.5vw+16px,28px)] text-[#141414] leading-[1.2] m-0">
              2. Information We Collect
            </h2>
            <p className="font-sans font-normal text-[15px] sm:text-[16px] leading-[1.65] text-[#141414]/80 m-0">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2 font-sans font-normal text-[15px] sm:text-[16px] leading-[1.65] text-[#141414]/80 m-0">
              <li>
                <strong className="font-semibold text-[#141414]">Contact &amp; Inquiry Data:</strong> Your name, email address, phone number, organization name, and any contextual notes you provide when reaching out via our contact forms or exploratory session bookings.
              </li>
              <li>
                <strong className="font-semibold text-[#141414]">Professional &amp; Developmental Context:</strong> Background details shared during preliminary discussions or engagements to tailor coaching, leadership development, or organizational diagnostic interventions.
              </li>
              <li>
                <strong className="font-semibold text-[#141414]">Technical &amp; Usage Information:</strong> Basic device type, browser information, pages visited, and general browsing statistics collected via standard server logs and cookies to improve website performance and user experience.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="flex flex-col gap-3">
            <h2 className="font-serif font-bold italic text-[clamp(22px,1.5vw+16px,28px)] text-[#141414] leading-[1.2] m-0">
              3. How We Use Your Information
            </h2>
            <p className="font-sans font-normal text-[15px] sm:text-[16px] leading-[1.65] text-[#141414]/80 m-0">
              We use the collected information solely for legitimate professional purposes, including:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2 font-sans font-normal text-[15px] sm:text-[16px] leading-[1.65] text-[#141414]/80 m-0">
              <li>Responding to your inquiries and scheduling conversations.</li>
              <li>Designing, customizing, and delivering coaching, mentoring, HR consultancy, and organizational development interventions.</li>
              <li>Providing informative reflections, publications, and updates (you may unsubscribe from non-essential communications at any time).</li>
              <li>Ensuring security, troubleshooting errors, and optimizing our website’s functionality.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="flex flex-col gap-3">
            <h2 className="font-serif font-bold italic text-[clamp(22px,1.5vw+16px,28px)] text-[#141414] leading-[1.2] m-0">
              4. Coaching Confidentiality
            </h2>
            <p className="font-sans font-normal text-[15px] sm:text-[16px] leading-[1.65] text-[#141414]/80 m-0">
              Confidentiality is the cornerstone of professional coaching and organizational advisory work. All conversations, insights, diagnostics, and documentation shared within coaching and consulting engagements are treated with absolute confidentiality, in adherence to established professional coaching ethics and standards. We do not disclose client identities or session content without prior explicit consent.
            </p>
          </div>

          {/* Section 5 */}
          <div className="flex flex-col gap-3">
            <h2 className="font-serif font-bold italic text-[clamp(22px,1.5vw+16px,28px)] text-[#141414] leading-[1.2] m-0">
              5. Data Protection &amp; Third Parties
            </h2>
            <p className="font-sans font-normal text-[15px] sm:text-[16px] leading-[1.65] text-[#141414]/80 m-0">
              We implement reasonable administrative, technical, and physical safeguards to protect your personal information against unauthorized access, loss, or misuse. We never sell, rent, or trade your personal information. We may share essential data with trusted service providers (such as hosting, email delivery, or form processing services) strictly to the extent required to operate our website and services, under confidentiality obligations.
            </p>
          </div>

          {/* Section 6 */}
          <div className="flex flex-col gap-3">
            <h2 className="font-serif font-bold italic text-[clamp(22px,1.5vw+16px,28px)] text-[#141414] leading-[1.2] m-0">
              6. Your Rights
            </h2>
            <p className="font-sans font-normal text-[15px] sm:text-[16px] leading-[1.65] text-[#141414]/80 m-0">
              You have the right to request access to the personal information we hold about you, request corrections or updates, or ask us to delete your personal data from our active systems. To exercise these rights, please contact us directly using the details below.
            </p>
          </div>

          {/* Section 7 */}
          <div className="flex flex-col gap-3 pt-6 border-t border-[#D07578]/30">
            <h2 className="font-serif font-bold italic text-[clamp(22px,1.5vw+16px,28px)] text-[#141414] leading-[1.2] m-0">
              7. Contact Information
            </h2>
            <p className="font-sans font-normal text-[15px] sm:text-[16px] leading-[1.65] text-[#141414]/80 m-0">
              If you have any questions or concerns regarding this Privacy Policy or your personal information, please reach out to us at:
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

