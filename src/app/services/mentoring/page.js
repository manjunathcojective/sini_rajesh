import PageHero from "@/components/common/PageHero";
import Button from "@/components/ui/Button";
import { SayHello } from "@/components/home";
import { LetsConnect } from "@/components/about";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: "Mentoring | Dr. Sini Rajesh",
  description: "Executive advisory, career mentorship, and leadership guidance by Dr. Sini Rajesh.",
};

const MENTORING_INTERVENTION_CARDS = [
  {
    number: "01",
    title: "What Can Mentoring Help You Accomplish?",
    description: [
      "Mentoring provides you with the guidance, perspective and support to navigate your journey with greater clarity and confidence.",
    ],
    pointsTitle: "It can help you:",
    points: [
      "Gain clarity about your aspirations and the way forward",
      "Navigate challenges, transitions and important decisions",
      "Identify limiting beliefs and recognise strengths and untapped potential",
      "Gain new perspectives and strengthen your capabilities",
      "Translate insights and aspirations into meaningful action",
    ],
    image: "/images/mentoring -card-1.png",
  },
  {
    number: "02",
    title: "Why Mentor With Me?",
    description: [
      "My mentoring brings together extensive professional and leadership experience, research into mindset and human behaviour, and a deep understanding of people and business.",
      "I take the time to listen and understand your aspirations and challenges, share relevant experiences and perspectives, and provide practical guidance and handholding throughout your journey. Guided by my signature framework, The TEA of Your Life, I also help you develop greater awareness of your Thoughts, Emotions and Actions, enabling you to make more conscious choices and move forward with greater clarity and confidence.",
    ],
    pointsTitle: "",
    points: [],
    image: "/images/mentoring -card-2.png",
  },
  {
    number: "03",
    title: "Who Can Benefit?",
    description: [],
    pointsTitle: "These sessions are designed for individuals who are looking for greater clarity, growth and guidance in their personal or professional journey, including:",
    points: [
      {
        bold: "CXOs, leaders and people managers",
        text: " seeking to strengthen their leadership effectiveness and impact",
      },
      {
        bold: "Business owners and entrepreneurs",
        text: " navigating opportunities, challenges or important decisions",
      },
      {
        bold: "Professionals",
        text: " exploring career growth, transition or their next step",
      },
      {
        bold: "Individuals",
        text: " navigating challenges or seeking greater clarity, personal growth and self-mastery",
      },
    ],
    image: "/images/mentoring -card-3.png",
  },
];

const MENTORING_CONNECT_POINTS = [
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

export default function MentoringPage() {
  return (
    <main className="w-full min-h-screen bg-[#FEFEFE]">
      {/* Page Hero matching previous service pages */}
      <PageHero
        card={true}
        heading="Services"
        title="Mentoring"
        height="clamp(220px, 18.61vw, 268px)"
        cardClassName="!h-[clamp(220px,18.61vw,268px)] !min-h-[clamp(220px,18.61vw,268px)]"
        bgColor="bg-[#BA676A]"
        bgImage="/images/hero-bg-image.png"
        bgPosition="center 24%"
      />

      {/* Section below page hero (1440 x 559 layout with fluid clamps) */}
      <section
        id="mentoring-intro"
        className="w-full max-w-[1440px] mx-auto min-h-0 px-[clamp(16px,6.94vw,100px)] py-[clamp(44px,5vw,72px)] gap-[clamp(8px,0.69vw,10px)] flex flex-col items-center justify-center bg-[#FEFEFE] opacity-100"
      >
        {/* ========================================================================= */}
        {/* 1. DESKTOP LAYOUT (>= 1024px): Side-by-Side 660px Content + 540px Image   */}
        {/* ========================================================================= */}
        <div
          id="mentoring-container-desktop"
          className="hidden lg:flex w-full max-w-[1240px] min-h-[395px] h-auto items-stretch justify-between gap-[clamp(24px,2.78vw,40px)] opacity-100 rotate-0"
        >
          {/* Content Column (Width: 660px, Height: matches image at 1440 layout) */}
          <div
            id="mentoring-content"
            className="w-[clamp(440px,45.83vw,660px)] flex flex-col justify-between gap-[clamp(16px,1.6vw,24px)] opacity-100 rotate-0"
          >
            {/* Top Heading Block */}
            <div className="w-full">
              <h2 className="font-serif font-bold italic text-[#141414] text-[clamp(26px,1.8vw+14px,38px)] leading-[1.15] m-0">
                Sometimes, having the right person alongside you can make the journey clearer and more meaningful.
              </h2>
            </div>

            {/* Bottom Block */}
            <div
              id="mentoring-bottom-block"
              className="w-full max-w-[660px] flex-1 flex flex-col justify-start gap-[clamp(20px,2vw,28px)] pt-[clamp(14px,1.39vw,20px)] border-t border-[#D07578] opacity-100 rotate-0"
            >
              {/* Paragraphs Group under the line */}
              <div className="w-full flex flex-col gap-2.5">
                <p className="w-full max-w-[660px] font-sans font-normal text-[clamp(14.5px,0.25vw+13px,16px)] leading-[1.45] text-[rgba(20,20,20,0.75)] m-0">
                  Mentoring is a journey of learning, sharing experiences and discovering new possibilities. Through meaningful conversations, practical insights and personalised guidance, mentoring creates a supportive space to explore aspirations, gain clarity, build confidence and navigate professional and personal growth. It is about drawing on experience and perspectives to empower individuals to make informed choices and move forward with purpose.
                </p>
                <p className="w-full max-w-[660px] font-sans font-normal text-[clamp(14.5px,0.25vw+13px,16px)] leading-[1.45] text-[rgba(20,20,20,0.75)] m-0">
                  Guided by my signature framework, <strong className="font-semibold text-[#141414]">The TEA of Your Life</strong>, I provide trusted handholding to help you navigate transitions, unlock untapped potential, and translate insights into lasting impact.
                </p>
              </div>

              {/* Button with Liquid Dot ("Know More") */}
              <div>
                <Button
                  id="mentoring-know-more-btn"
                  href="#mentoring-details-section"
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

          {/* Image Frame (Width: 540px, Height: 395px at 1440 layout, border-radius: 24px) */}
          <div
            id="mentoring-image-wrapper"
            className="w-[clamp(360px,37.5vw,540px)] min-h-[395px] self-stretch relative rounded-[24px] overflow-hidden bg-[#ECE8E1] flex-shrink-0 opacity-100 rotate-0 shadow-sm group/photo"
          >
            <img
              src="/images/mentoring.png"
              alt="Mentoring"
              className="w-full h-full object-cover rounded-[24px] opacity-100 rotate-0 transition-transform duration-700 ease-out group-hover/photo:scale-105 hover:scale-105"
              style={{ objectPosition: "center 14%" }}
            />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. TABLET & MOBILE LAYOUT (< 1024px): Heading -> Image -> Bottom Details  */}
        {/* ========================================================================= */}
        <div
          id="mentoring-container-mobile"
          className="flex lg:hidden flex-col w-full max-w-[668px] gap-6 md:gap-7 opacity-100"
        >
          {/* 1. Heading */}
          <h2 className="font-serif font-bold italic text-[#141414] text-[clamp(28px,3.5vw+12px,38px)] leading-[1.18] m-0">
            Sometimes, having the right person alongside you can make the journey clearer and more meaningful.
          </h2>

          {/* 2. Image directly after Heading */}
          <div
            id="mentoring-image-mobile"
            className="w-full rounded-[20px] md:rounded-[24px] overflow-hidden bg-[#ECE8E1] relative aspect-[540/395] group/photo"
          >
            <img
              src="/images/mentoring.png"
              alt="Mentoring"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/photo:scale-105 hover:scale-105"
              style={{ objectPosition: "center 14%" }}
            />
          </div>

          {/* 3. Bottom Block */}
          <div
            id="mentoring-bottom-mobile"
            className="w-full pt-4 md:pt-5 border-t border-[#D07578] flex flex-col gap-4 md:gap-5"
          >
            <div className="flex flex-col gap-2.5 font-sans font-normal text-[clamp(14.5px,0.5vw+12px,16px)] leading-[1.45] text-[rgba(20,20,20,0.75)]">
              <p className="m-0">
                Mentoring is a journey of learning, sharing experiences and discovering new possibilities. Through meaningful conversations, practical insights and personalised guidance, mentoring creates a supportive space to explore aspirations, gain clarity, build confidence and navigate professional and personal growth. It is about drawing on experience and perspectives to empower individuals to make informed choices and move forward with purpose.
              </p>
              <p className="m-0">
                Guided by my signature framework, <strong className="font-semibold text-[#141414]">The TEA of Your Life</strong>, I provide trusted handholding to help you navigate transitions, unlock untapped potential, and translate insights into lasting impact.
              </p>
            </div>

            <div>
              <Button
                id="mentoring-know-more-btn-mobile"
                href="#mentoring-details-section"
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
      {/* Interventions Section (3 Cards)                                           */}
      {/* ========================================================================= */}
      <section
        id="mentoring-details-section"
        className="w-full max-w-[1440px] mx-auto min-h-0 px-[clamp(16px,6.94vw,100px)] py-[clamp(44px,5vw,72px)] gap-[clamp(8px,0.69vw,10px)] flex flex-col items-center justify-start bg-[#FEFEFE] opacity-100"
      >
        {/* Inner Container: 1240 max-width, gap: 60px */}
        <div
          id="mentoring-details-container"
          className="w-full max-w-[1240px] min-h-0 flex flex-col gap-[clamp(32px,4.17vw,60px)] opacity-100"
        >
          {/* Top Block: 1240 x 178, gap: 30px */}
          <div
            id="mentoring-details-header"
            className="w-full max-w-[1240px] min-h-0 flex flex-col items-center text-center gap-[clamp(16px,2.08vw,30px)] opacity-100"
          >
            {/* Title & Badge Group */}
            <div className="flex flex-col items-center gap-[clamp(10px,1vw,14px)] w-full">
              {/* Badge: "Let's Connect" */}
              <div
                id="mentoring-details-badge"
                className="inline-flex items-center justify-center gap-2.5 h-[clamp(13px,1.2vw,16px)]"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#D07578] shrink-0"
                  aria-hidden="true"
                />
                <span className="font-serif font-bold italic text-[clamp(17px,1.2vw+12px,20px)] leading-none text-[#D07578] whitespace-nowrap">
                  Find Your Direction
                </span>
              </div>

              {/* Main Heading */}
              <h2
                id="mentoring-details-heading"
                className="w-full max-w-[980px] font-serif font-bold italic text-[clamp(33.97px,0.73vw+31.13px,41.62px)] leading-[clamp(36px,2.38vw+26.72px,45px)] text-[#141414] text-center tracking-normal m-0 opacity-100"
              >
                Every mentoring journey begins with understanding where you are and where you would like to go.
              </h2>
            </div>

            {/* Description Subtext */}
            <p
              id="mentoring-details-description"
              className="w-full max-w-[840px] font-sans font-normal text-[clamp(14.5px,0.25vw+13px,16px)] leading-[1.5] text-[rgba(20,20,20,0.75)] text-center tracking-normal m-0 opacity-100"
            >
              Let’s begin with <strong className="font-semibold text-[#141414]">a complimentary 30-minute exploratory call</strong> to understand your aspirations and needs and see if we are a good fit to work together.
            </p>
          </div>

          {/* Cards Block: 3 cards with width 1240, height 453, border-radius 12px, padding 20px, gap 40px */}
          <div
            id="mentoring-details-content"
            className="w-full max-w-[1240px] flex flex-col gap-[clamp(24px,2.78vw,40px)] opacity-100"
          >
            {MENTORING_INTERVENTION_CARDS.map((card, idx) => {
              const hasBullets = Boolean(card.points && card.points.length > 0);
              return (
                <div
                  key={card.number}
                  id={`mentoring-card-${idx + 1}`}
                  className="w-full max-w-[1240px] min-h-[clamp(320px,31.45vw,453px)] lg:min-h-[453px] lg:h-auto p-[20px] rounded-[12px] bg-[#FBF2F2] flex flex-col lg:flex-row items-center justify-start gap-[40px] opacity-100 rotate-0 transition-all duration-300 hover:shadow-[0_8px_24px_rgba(208,117,120,0.12)] group/card"
                >
                  {/* 1. Image on the LEFT SIDE: width: 580, height: 413, border-radius: 12px, angle: 0 deg, opacity: 1 */}
                  <div
                    id={`mentoring-card-${idx + 1}-img-wrapper`}
                    className="w-full max-w-[580px] lg:w-[580px] h-auto lg:h-[413px] aspect-[580/413] lg:aspect-auto rounded-[12px] overflow-hidden bg-[#ECE8E1] flex-shrink-0 relative opacity-100 rotate-0 shadow-sm self-center"
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover rounded-[12px] opacity-100 rotate-0 transition-transform duration-700 ease-out group-hover/card:scale-105 hover:scale-105"
                    />
                  </div>

                  {/* 2. Text Content Column on the RIGHT SIDE: vertically center aligned */}
                  <div
                    id={`mentoring-card-${idx + 1}-content`}
                    className="w-full lg:w-[580px] lg:flex-1 pt-0 flex flex-col justify-center gap-[clamp(14px,1.4vw,18px)] opacity-100 rotate-0 lg:self-center lg:my-auto"
                  >
                    {/* Number & Heading Group */}
                    <div className="w-full flex flex-col gap-[22px] opacity-100 rotate-0">
                      <span className="w-full font-serif font-normal italic text-[#141414] text-[clamp(24px,2.2vw+14px,32.77px)] leading-none m-0">
                        {card.number}
                      </span>

                      <h3 className="w-full font-serif font-semibold italic text-[#141414] text-[clamp(20px,1.5vw+12px,25.81px)] leading-[1.15] m-0">
                        {card.title}
                      </h3>
                    </div>

                    {/* Sentences below heading (width: 580, Manrope 400 16px, rgba(20,20,20,0.75)) */}
                    {card.description && card.description.length > 0 && (
                      <div className="w-full max-w-[580px] flex flex-col gap-2.5 opacity-100 rotate-0">
                        {card.description.map((desc, dIdx) => (
                          <p
                            key={dIdx}
                            className="font-sans font-normal text-[clamp(14.5px,0.2vw+13px,16px)] leading-[1.35] text-[rgba(20,20,20,0.75)] m-0 opacity-100 rotate-0"
                          >
                            {desc}
                          </p>
                        ))}
                      </div>
                    )}

                    {/* Bullet Points Layout (width: 580, gap: 20px) */}
                    {card.points && card.points.length > 0 && (
                      <div
                        id={`mentoring-card-${idx + 1}-points-block`}
                        className="w-full max-w-[580px] flex flex-col gap-[18px] opacity-100 rotate-0"
                      >
                        {/* Sub-heading: (Cormorant Garamond 700 Italic 20px, #141414, leading-[1.25]) */}
                        <h4 className="w-full max-w-[580px] font-serif font-bold italic text-[20px] leading-[1.25] text-[#141414] m-0 opacity-100 rotate-0">
                          {card.pointsTitle || "This includes, but is not limited to:"}
                        </h4>

                        {/* Bullet list container (gap: 8px) */}
                        <div className="w-full max-w-[580px] flex flex-col gap-[8px] opacity-100 rotate-0">
                          {card.points.map((point, pIdx) => {
                            const isLast = pIdx === card.points.length - 1;
                            return (
                              <div
                                key={pIdx}
                                className={`w-full max-w-[580px] flex items-start gap-[10px] px-[6px] ${isLast ? "pb-0 border-b-0" : "pb-[8px] border-b border-[#f0d2d3]"
                                  } opacity-100 rotate-0`}
                              >
                                <span
                                  className="w-1.5 h-1.5 rounded-full bg-[#141414] shrink-0 mt-[6px]"
                                  aria-hidden="true"
                                />
                                <p className="w-full max-w-[552px] font-sans font-normal text-[clamp(14.5px,0.2vw+13px,16px)] leading-[1.35] text-[rgba(20,20,20,0.75)] m-0 opacity-100 rotate-0">
                                  {typeof point === "object" && point?.bold ? (
                                    <>
                                      <strong className="font-semibold text-[#141414]">{point.bold}</strong>
                                      {point.text}
                                    </>
                                  ) : (
                                    point
                                  )}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Let's Connect Section */}
      <LetsConnect
        heading="What Would You Like to Change, Grow or Transform?"
        description="If there is one thing my journey has taught me, it is that there is so much more within each of us than we sometimes realise."
        points={MENTORING_CONNECT_POINTS}
        fullWidthCardText="Let's explore where you are today, where you would like to go, and what might help you get there."
      />

      {/* Say Hello Section matching previous pages */}
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
