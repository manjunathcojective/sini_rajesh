import PageHero from "@/components/common/PageHero";
import Button from "@/components/ui/Button";
import { SayHello } from "@/components/home";
import { LetsConnect } from "@/components/about";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: "Organization Development | Dr. Sini Rajesh",
  description: "Comprehensive organisational diagnostic studies to uncover underlying dynamics, align human systems, and drive lasting change.",
};

const OD_INTERVENTION_CARDS = [
  {
    number: "01",
    title: "Organisational Diagnostic Study",
    description:
      "A comprehensive assessment of the organisation to understand its current state, identify opportunities for development, and recommend areas for strengthening and growth. The diagnostic may cover organisation structure, leadership, HR, employee practices, communication, culture, systems and processes, statutory compliance, and other relevant organisational areas.",
    image: "/images/org-dev-card-1.png",
  },
  {
    number: "02",
    title: "Employee Lifecycle & People Practices",
    description:
      "Reviewing the complete employee lifecycle—from recruitment through separation and recommending, designing or strengthening HR systems, processes and people practices where required.",
    image: "/images/org-dev-card-2.png",
  },
  {
    number: "03",
    title: "Leadership & People Manager Development",
    description:
      "Coaching and mentoring management teams, leadership teams and people managers to strengthen self-awareness, leadership effectiveness and the way they lead and engage their people, primarily guided by the principles of my signature framework, The TEA of Your Life.",
    image: "/images/org-dev-card-3.png",
  },
  {
    number: "04",
    title: "HR Processes & Procedures",
    description:
      "Strengthening HR processes and procedures through thoughtful review, practical recommendations, appropriate design and ongoing professional guidance.",
    image: "/images/org-dev-card-4.png",
  },
];

const OD_CONNECT_POINTS = [
  {
    id: "point-change-1",
    text: "Perhaps you already know what to change",
  },
  {
    id: "point-change-2",
    text: "Perhaps you simply know that something needs to change",
  },
  {
    id: "point-change-3",
    text: "Either way, you don't need to have all the answers before you begin",
  },
  {
    id: "point-change-4",
    text: "Sometimes, the first step is simply having the right conversation",
  },
];

export default function OrganisationalDiagnosticStudyPage() {
  return (
    <main className="w-full min-h-screen bg-[#FEFEFE]">
      <PageHero
        card={true}
        heading="Services"
        title="Organization Development"
        height="clamp(220px, 18.61vw, 268px)"
        cardClassName="!h-[clamp(220px,18.61vw,268px)] !min-h-[clamp(220px,18.61vw,268px)]"
        bgColor="bg-[#BA676A]"
        bgImage="/images/hero-bg-image.png"
        bgPosition="center 24%"
      />

      {/* Section below page hero (1440 x 559 layout with fluid clamps) */}
      <section
        id="organization-development-intro"
        className="w-full max-w-[1440px] mx-auto min-h-[clamp(420px,38.82vw,559px)] px-[clamp(16px,6.94vw,100px)] py-[clamp(36px,4.17vw,60px)] gap-[clamp(8px,0.69vw,10px)] flex flex-col items-center justify-center bg-[#FEFEFE] opacity-100"
      >
        {/* ========================================================================= */}
        {/* 1. DESKTOP LAYOUT (>= 1024px): Side-by-Side 660px Content + 540px Image   */}
        {/* ========================================================================= */}
        <div
          id="organization-development-container-desktop"
          className="hidden lg:flex w-full max-w-[1240px] h-[clamp(360px,30.49vw,439px)] items-stretch justify-between gap-[clamp(24px,2.78vw,40px)] opacity-100"
        >
          {/* Content Column (Width: 660px, Height: matches image 439px at 1440 layout) */}
          <div
            id="organization-development-content"
            className="w-[clamp(440px,45.83vw,660px)] h-full flex flex-col gap-[clamp(16px,1.6vw,24px)] opacity-100"
          >
            {/* Top Heading Block (same typography) */}
            <div className="w-full">
              <h2 className="font-serif font-bold italic text-[#141414] text-[clamp(26px,1.8vw+14px,38px)] leading-[1.15] m-0">
                Organisation Development creates the space to strengthen people, purpose and connections, nurture growth and enable lasting, positive change.
              </h2>
            </div>

            {/* Bottom Block (Line and paragraphs moved up; button flush at bottom matching image) */}
            <div
              id="organization-development-bottom-block"
              className="w-full flex-1 flex flex-col justify-between pt-[clamp(12px,1.11vw,16px)] border-t border-[#D07578] opacity-100"
            >
              {/* Paragraphs Area (Manrope, 400, 16px, line-height 100%/readable, rgba(20,20,20,0.75)) */}
              <div className="flex flex-col gap-2.5 font-sans font-normal text-[clamp(14px,0.2vw+12.8px,15.5px)] leading-[1.42] text-[rgba(20,20,20,0.75)]">
                <p className="m-0">
                  Organisational Diagnostic Studies provide leadership with deep, evidence-based insights into systemic patterns, team dynamics, and structural blockers before interventions are implemented.
                </p>
                <p className="m-0">
                  My approach combines organisational diagnosis with practical guidance, coaching and mentoring, helping organisations recognise their strengths, identify opportunities for development and build the capabilities needed to move forward with clarity and confidence.
                </p>
              </div>

              {/* Button with Liquid Dot ("Know More") - Bottom aligned with image */}
              <div className="pt-2">
                <Button
                  id="org-dev-know-more-btn"
                  href="/contact"
                  ariaLabel="Know More"
                  variant="primary"
                  size="md"
                  className="!w-fit !min-w-[144px] !h-[44px] shadow-sm hover:shadow-[0_8px_20px_rgba(208,117,120,0.35)] transition-all duration-300"
                >
                  Know More
                </Button>
              </div>
            </div>
          </div>

          {/* Image Frame (Width: 540px, Height: matches container exactly 439px at 1440 layout) */}
          <div
            id="organization-development-image-wrapper"
            className="w-[clamp(380px,37.5vw,540px)] h-full relative rounded-[20px] overflow-hidden bg-[#ECE8E1] flex-shrink-0 group/photo"
          >
            <img
              src="/images/organization-development.png"
              alt="Organization Development"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/photo:scale-105 hover:scale-105"
            />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. TABLET & MOBILE LAYOUT (< 1024px): Heading -> Image -> Bottom Details  */}
        {/* ========================================================================= */}
        <div
          id="organization-development-container-mobile"
          className="flex lg:hidden flex-col w-full max-w-[668px] gap-6 md:gap-7 opacity-100"
        >
          {/* 1. Heading */}
          <h2 className="font-serif font-bold italic text-[#141414] text-[clamp(28px,3.5vw+12px,38px)] leading-[1.18] m-0">
            Organisation Development creates the space to strengthen people, purpose and connections, nurture growth and enable lasting, positive change.
          </h2>

          {/* 2. Image directly after Heading */}
          {/* Tablet aspect ratio (height:width = 5:6.68 -> aspect-[6.68/5]) */}
          {/* Mobile aspect ratio (height:width = 4.39:3.85 -> aspect-[3.85/4.39]) */}
          <div
            id="organization-development-image-mobile"
            className="w-full rounded-[16px] md:rounded-[20px] overflow-hidden bg-[#ECE8E1] relative aspect-[3.85/4.39] md:aspect-[6.68/5] group/photo"
          >
            <img
              src="/images/organization-development.png"
              alt="Organization Development"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/photo:scale-105 hover:scale-105"
            />
          </div>

          {/* 3. Bottom Block (Border top, description text, Know More button) */}
          <div
            id="organization-development-bottom-mobile"
            className="w-full pt-4 md:pt-5 border-t border-[#D07578] flex flex-col gap-4 md:gap-5"
          >
            <div className="flex flex-col gap-3 font-sans font-normal text-[clamp(14.5px,0.5vw+12px,16px)] leading-[1.48] text-[rgba(20,20,20,0.75)]">
              <p className="m-0">
                Organisational Diagnostic Studies provide leadership with deep, evidence-based insights into systemic patterns, team dynamics, and structural blockers before interventions are implemented.
              </p>
              <p className="m-0">
                My approach combines organisational diagnosis with practical guidance, coaching and mentoring, helping organisations recognise their strengths, identify opportunities for development and build the capabilities needed to move forward with clarity and confidence.
              </p>
            </div>

            <div>
              <Button
                id="org-dev-know-more-btn-mobile"
                href="/contact"
                ariaLabel="Know More"
                variant="primary"
                size="md"
                className="!w-fit !min-w-[144px] !h-[44px] shadow-sm hover:shadow-[0_8px_20px_rgba(208,117,120,0.35)] transition-all duration-300"
              >
                Know More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* Next Section: 1440 x 1670 Layout with Fluid Clamps                        */}
      {/* Outer: 1440 x 1670, py: 60px, px: 100px, gap: 10px                        */}
      {/* ========================================================================= */}
      <section
        id="organization-development-details-section"
        className="w-full max-w-[1440px] mx-auto min-h-[clamp(800px,115.97vw,1670px)] px-[clamp(16px,6.94vw,100px)] py-[clamp(36px,4.17vw,60px)] gap-[clamp(8px,0.69vw,10px)] flex flex-col items-center justify-start bg-[#FEFEFE] opacity-100"
      >
        {/* Inner Container: 1240 x 1550, gap: 60px */}
        <div
          id="organization-development-details-container"
          className="w-full max-w-[1240px] min-h-[clamp(720px,107.64vw,1550px)] flex flex-col gap-[clamp(32px,4.17vw,60px)] opacity-100"
        >
          {/* Top Block: 1240 x 178, gap: 30px */}
          <div
            id="organization-development-details-header"
            className="w-full max-w-[1240px] min-h-[clamp(140px,12.36vw,178px)] flex flex-col items-center text-center gap-[clamp(16px,2.08vw,30px)] opacity-100"
          >
            {/* Title & Badge Group */}
            <div className="flex flex-col items-center gap-[clamp(10px,1vw,14px)] w-full">
              {/* Badge: "Let's Connect" (width: 97px, height: 13px, Cormorant Garamond 700 italic 20px, #D07578) */}
              <div
                id="org-dev-details-badge"
                className="inline-flex items-center justify-center gap-2.5 h-[clamp(13px,1.2vw,16px)]"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#D07578] shrink-0"
                  aria-hidden="true"
                />
                <span className="font-serif font-bold italic text-[clamp(17px,1.2vw+12px,20px)] leading-none text-[#D07578] whitespace-nowrap">
                  Let’s Connect
                </span>
              </div>

              {/* Main Heading (width: 609px, height: 71px at 1440, Cormorant Garamond 700 italic 41.62px, line-height 45px, #141414) */}
              <h2
                id="org-dev-details-heading"
                className="w-full max-w-[609px] font-serif font-bold italic text-[clamp(28px,2.2vw+16px,41.62px)] leading-[1.08] lg:leading-[45px] text-[#141414] text-center m-0"
              >
                My Organisation Development interventions focus on four key areas
              </h2>
            </div>

            {/* Description Subtext (width: 968px, height: 34px at 1440, Manrope 400 16px, #141414) */}
            <p
              id="org-dev-details-description"
              className="w-full max-w-[968px] font-sans font-normal text-[clamp(14px,0.25vw+13px,16px)] leading-[1.45] sm:leading-[1.5] text-[#141414] text-center m-0"
            >
              As an Organisation Development Specialist, I work with organisations to strengthen the connection between their people, leadership, systems and processes to support sustainable growth and organisational effectiveness.
            </p>
          </div>

          {/* Main Content Block: 1240 x 1312, containing 4 cards with 40px gap (4 * 298 + 3 * 40 = 1312px) */}
          <div
            id="organization-development-details-content"
            className="w-full max-w-[1240px] xl:max-w-[1261px] flex flex-col gap-[clamp(24px,2.78vw,40px)] opacity-100"
          >
            {OD_INTERVENTION_CARDS.map((card, idx) => (
              <div
                key={card.number}
                id={`org-dev-card-${idx + 1}`}
                className="w-full min-h-[clamp(260px,20.69vw,298px)] p-[clamp(16px,1.39vw,20px)] lg:pr-[clamp(6px,0.8vw,12px)] rounded-[12px] bg-[#FBF2F2] flex flex-col lg:flex-row items-stretch justify-start gap-[clamp(20px,2.78vw,40px)] opacity-100 transition-all duration-300 hover:shadow-[0_8px_24px_rgba(208,117,120,0.12)] group/card"
              >
                {/* 1. Card Image on the LEFT SIDE: Responsive height matching text beside it on desktop, aspect-ratio on mobile/tablet */}
                <div
                  id={`org-dev-card-${idx + 1}-img-wrapper`}
                  className="w-full aspect-[3.45/3] md:aspect-[6.28/3] lg:aspect-auto lg:w-[clamp(320px,30.9vw,445px)] lg:self-stretch min-h-[220px] rounded-[12px] overflow-hidden bg-[#ECE8E1] flex-shrink-0 relative shadow-sm"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-105 hover:scale-105"
                  />
                </div>

                {/* 2. Text Content Column on the RIGHT SIDE: Responsive width, pt: 20px, compact gap so last line shifts up by 1 line */}
                <div
                  id={`org-dev-card-${idx + 1}-content`}
                  className="w-full lg:flex-1 min-h-[clamp(160px,13.5vw,194px)] pt-0 lg:pt-[clamp(10px,1.25vw,18px)] flex flex-col justify-start gap-[clamp(14px,1.8vw,26px)] opacity-100"
                >
                  {/* 1. Number: Cormorant Garamond 400 Italic 32.77px (width: 736px, height: 20px) */}
                  <span className="w-full font-serif font-normal italic text-[#141414] text-[clamp(24px,2.2vw+14px,32.77px)] leading-none m-0">
                    {card.number}
                  </span>

                  {/* 2. Heading: Cormorant Garamond 600 Italic 25.81px (width: 736px, height: 16px, shifted up by 1-2px) */}
                  <h3 className="w-full font-serif font-semibold italic text-[#141414] text-[clamp(20px,1.5vw+12px,25.81px)] leading-[1.15] m-0 relative -top-[1.5px]">
                    {card.title}
                  </h3>

                  {/* 3. Paragraph Container: Width 736px, Height 78px at 1440, gap: 12px */}
                  <div className="w-full min-h-[clamp(64px,5.42vw,78px)] flex flex-col gap-[clamp(8px,0.83vw,12px)] opacity-100">
                    <p className="font-sans font-normal not-italic text-[clamp(14.5px,0.2vw+13px,16px)] leading-[1.3] lg:leading-[1.35] tracking-normal text-[rgba(20,20,20,0.75)] m-0 relative -top-[1px]">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Let's Connect Section */}
      <LetsConnect
        heading="What Would You Like to Change, Grow or Transform?"
        description="If there is one thing my journey has taught me, it is that there is so much more within each of us than we sometimes realise."
        points={OD_CONNECT_POINTS}
        fullWidthCardText="Let's explore where you are today, where you would like to go, and what might help you get there."
      />

      <SayHello
        badge="Say Hello!"
        heading={"Book a Complimentary 30-Minute Exploratory Call with \nDr. Sini Rajesh"}
        subtitle="Igniting Minds | Unlocking Potential | Empowering Transformation"
        buttonText="Book Now"
        buttonHref="/contact"
      />
      <Footer />
    </main>
  );
}
