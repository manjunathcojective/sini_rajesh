import PageHero from "@/components/common/PageHero";
import Button from "@/components/ui/Button";
import { SayHello } from "@/components/home";
import { LetsConnect } from "@/components/about";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: "Happiness Coaching | Dr. Sini Rajesh",
  description: "Fostering happiness as a strategic advantage—helping individuals and teams thrive, build resilience, and discover lasting joy at work and in life.",
};

const HAPPINESS_INTERVENTION_CARDS = [
  {
    number: "01",
    title: "Personal Happiness",
    description: [
      "This offering is designed for individuals who would like to understand and enhance happiness in their personal and professional lives.",
    ],
    pointsTitle: "This includes, but is not limited to:",
    points: [

      "Understanding personal happiness and the 4 Zones of Happiness",
      "Discovering key roadblocks to happiness and ways to work through them",
      "Exploring tools to navigate challenging emotions and experiences in personal and professional life",
    ],
    image: "/images/HAPPINESS-COACHING-CARD-1.png",
  },
  {
    number: "02",
    title: "Workplace Happiness",
    description: [
      "Happy people create happier workplaces and happier workplaces create an environment where people can connect, contribute and grow.",
      "This offering focuses on extending the principles of personal happiness into the workplace and exploring how individuals can contribute towards creating a happier and more positive work environment.",
    ],
    pointsTitle: "This includes, but is not limited to:",
    points: [
      "Exploring frameworks for happiness at the workplace",
      "Understanding how individual happiness can positively influence people, relationships and teams and their work environment",
      "Developing ways to encourage greater connection, positivity and happiness within the workplace",
    ],
    image: "/images/HAPPINESS-COACHING-CARD-2.png",
  },
  {
    number: "03",
    title: "Becoming Happypreneurs",
    description: [
      "A Happypreneur is someone who understands the meaning of true happiness and has the ability to help others discover and radiate their own happiness.",
      "This offering brings together the understanding of personal and workplace happiness and takes the journey a step further developing the understanding and capability to help others discover and radiate their own happiness.",
    ],
    pointsTitle: "This includes, but is not limited to:",
    points: [
      "Exploring the  Happiness at Work Framework",
      "Designing an organisation  or department-level Happiness Initiative Roadmap",
      "Learning Happiness Coaching approaches and methodologies that can be applied to help others in their happiness journey",
    ],
    image: "/images/HAPPINESS-COACHING-CARD-3.png",
  },
];

const HAPPINESS_CONNECT_POINTS = [
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

export default function HappinessCoachingPage() {
  return (
    <main className="w-full min-h-screen bg-[#FEFEFE]">
      {/* Page Hero matching previous service pages */}
      <PageHero
        card={true}
        heading="Services"
        title="Happiness Coaching"
        height="clamp(220px, 18.61vw, 268px)"
        cardClassName="!h-[clamp(220px,18.61vw,268px)] !min-h-[clamp(220px,18.61vw,268px)]"
        bgColor="bg-[#BA676A]"
        bgImage="/images/hero-bg-image.png"
        bgPosition="center 24%"
      />

      {/* Section below page hero (1440 x 559 layout with fluid clamps) */}
      <section
        id="happiness-coaching-intro"
        className="w-full max-w-[1440px] mx-auto min-h-0 px-[clamp(16px,6.94vw,100px)] py-[clamp(44px,5vw,72px)] gap-[clamp(8px,0.69vw,10px)] flex flex-col items-center justify-center bg-[#FEFEFE] opacity-100"
      >
        {/* ========================================================================= */}
        {/* 1. DESKTOP LAYOUT (>= 1024px): Side-by-Side 660px Content + 540px Image   */}
        {/* ========================================================================= */}
        <div
          id="happiness-coaching-container-desktop"
          className="hidden lg:flex w-full max-w-[1240px] min-h-[487px] h-auto items-stretch justify-between gap-[clamp(24px,2.78vw,40px)] opacity-100"
        >
          {/* Content Column (Width: 660px, Height: matches image 487px at 1440 layout) */}
          <div
            id="happiness-coaching-content"
            className="w-[clamp(440px,45.83vw,660px)] flex flex-col justify-between gap-[clamp(16px,1.6vw,24px)] opacity-100"
          >
            {/* Top Heading Block */}
            <div className="w-full">
              <h2 className="font-serif font-bold italic text-[#141414] text-[clamp(26px,1.8vw+14px,38px)] leading-[1.15] m-0">
                Happiness begins within and has the power to positively influence the people around us.
              </h2>
            </div>

            {/* Bottom Block */}
            <div
              id="happiness-coaching-bottom-block"
              className="w-full max-w-[660px] flex-1 flex flex-col justify-start gap-[clamp(20px,2vw,28px)] pt-[clamp(14px,1.39vw,20px)] border-t border-[#D07578] opacity-100"
            >
              {/* Inner Content Group */}
              <div className="w-full flex flex-col gap-[clamp(14px,1.5vw,22px)]">
                {/* Paragraphs Group (Tight, natural gap between sentences) */}
                <div className="w-full flex flex-col gap-2.5">
                  {/* Paragraph 1 (Width: 660px, Height: 78px, Manrope 400 16px, rgba(20,20,20,0.75)) */}
                  <p className="w-full max-w-[660px] font-sans font-normal text-[clamp(14.5px,0.25vw+13px,16px)] leading-[1.35] text-[rgba(20,20,20,0.75)] m-0">
                    Through experiential learning, practical frameworks and guided activities, my Happiness Coaching interventions help individuals explore the meaning of true happiness, learn to navigate emotions and experiences more positively, and discover practical ways to bring greater happiness into their personal and professional lives.
                  </p>

                  {/* Paragraph 2 (Width: 660px, Height: 56px, Manrope 400 16px, rgba(20,20,20,0.75)) */}
                  <p className="w-full max-w-[660px] font-sans font-normal text-[clamp(14.5px,0.25vw+13px,16px)] leading-[1.35] text-[rgba(20,20,20,0.75)] m-0">
                    For organisations, the journey extends into the workplace—helping people connect, contribute and grow, while recognising that business success can go hand in hand with people, passion and purpose.
                  </p>
                </div>

                {/* Sub-Layout 3 (Gap matching the sentences above: gap-2.5, leading-[1.35]) */}
                <div
                  id="happiness-coaching-sub-block-3"
                  className="w-full max-w-[660px] flex flex-col gap-2.5 opacity-100"
                >
                  {/* Label: My Happiness Coaching is offered across three areas: */}
                  <p className="w-full max-w-[660px] font-sans font-normal text-[clamp(14.5px,0.25vw+13px,16px)] leading-[1.35] text-[#141414] m-0 sm:whitespace-nowrap">
                    My Happiness Coaching is offered across three areas:
                  </p>

                  {/* Horizontal Bullet Points with Black Bullets (Width: 601px, Height: 26px, gap: 20px, Cormorant Garamond 700 Italic 20px) */}
                  <div className="w-full max-w-[601px] flex flex-wrap items-center gap-x-[clamp(14px,1.39vw,20px)] gap-y-2 opacity-100">
                    <div className="inline-flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#141414] shrink-0" aria-hidden="true" />
                      <span className="font-serif font-bold italic text-[#141414] text-[clamp(17px,1.2vw+12px,20px)] leading-none whitespace-nowrap">
                        Personal Happiness,
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#141414] shrink-0" aria-hidden="true" />
                      <span className="font-serif font-bold italic text-[#141414] text-[clamp(17px,1.2vw+12px,20px)] leading-none whitespace-nowrap">
                        Workplace Happiness,
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#141414] shrink-0" aria-hidden="true" />
                      <span className="font-serif font-bold italic text-[#141414] text-[clamp(17px,1.2vw+12px,20px)] leading-none whitespace-nowrap">
                        Becoming Happypreneurs
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Button with Liquid Dot ("Know More") */}
              <div>
                <Button
                  id="happiness-coaching-know-more-btn"
                  href="#happiness-coaching-details-section"
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

          {/* Image Frame (Width: 540px, Height: matches container at 1440 layout, border-radius: 24px) */}
          <div
            id="happiness-coaching-image-wrapper"
            className="w-[clamp(360px,37.5vw,540px)] min-h-[487px] self-stretch relative rounded-[24px] overflow-hidden bg-[#ECE8E1] flex-shrink-0 group/photo"
          >
            <img
              src="/images/happiness-coaching.png"
              alt="Happiness Coaching"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/photo:scale-105 hover:scale-105"
            />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. TABLET & MOBILE LAYOUT (< 1024px): Heading -> Image -> Bottom Details  */}
        {/* ========================================================================= */}
        <div
          id="happiness-coaching-container-mobile"
          className="flex lg:hidden flex-col w-full max-w-[668px] gap-6 md:gap-7 opacity-100"
        >
          {/* 1. Heading */}
          <h2 className="font-serif font-bold italic text-[#141414] text-[clamp(28px,3.5vw+12px,38px)] leading-[1.18] m-0">
            Happiness begins within and has the power to positively influence the people around us.
          </h2>

          {/* 2. Image directly after Heading */}
          <div
            id="happiness-coaching-image-mobile"
            className="w-full rounded-[20px] md:rounded-[24px] overflow-hidden bg-[#ECE8E1] relative aspect-[540/487] group/photo"
          >
            <img
              src="/images/happiness-coaching.png"
              alt="Happiness Coaching"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/photo:scale-105 hover:scale-105"
            />
          </div>

          {/* 3. Bottom Block */}
          <div
            id="happiness-coaching-bottom-mobile"
            className="w-full pt-4 md:pt-5 border-t border-[#D07578] flex flex-col gap-4 md:gap-5"
          >
            <div className="flex flex-col gap-2.5 font-sans font-normal text-[clamp(14.5px,0.5vw+12px,16px)] leading-[1.4] text-[rgba(20,20,20,0.75)]">
              <p className="m-0">
                Through experiential learning, practical frameworks and guided activities, my Happiness Coaching interventions help individuals explore the meaning of true happiness, learn to navigate emotions and experiences more positively, and discover practical ways to bring greater happiness into their personal and professional lives.
              </p>
              <p className="m-0">
                For organisations, the journey extends into the workplace—helping people connect, contribute and grow, while recognising that business success can go hand in hand with people, passion and purpose.
              </p>
            </div>

            {/* Sub-Layout 3 for Mobile */}
            <div
              id="happiness-coaching-sub-block-3-mobile"
              className="w-full flex flex-col gap-2.5 opacity-100"
            >
              <p className="font-sans font-normal text-[15px] leading-[1.4] text-[#141414] m-0">
                My Happiness Coaching is offered across three areas:
              </p>

              <div className="w-full flex flex-wrap items-center gap-x-4 gap-y-2 opacity-100">
                <div className="inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#141414] shrink-0" aria-hidden="true" />
                  <span className="font-serif font-bold italic text-[#141414] text-[18px] leading-none whitespace-nowrap">
                    Personal Happiness,
                  </span>
                </div>

                <div className="inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#141414] shrink-0" aria-hidden="true" />
                  <span className="font-serif font-bold italic text-[#141414] text-[18px] leading-none whitespace-nowrap">
                    Workplace Happiness,
                  </span>
                </div>

                <div className="inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#141414] shrink-0" aria-hidden="true" />
                  <span className="font-serif font-bold italic text-[#141414] text-[18px] leading-none whitespace-nowrap">
                    Becoming Happypreneurs
                  </span>
                </div>
              </div>
            </div>

            <div>
              <Button
                id="happiness-coaching-know-more-btn-mobile"
                href="#happiness-coaching-details-section"
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
      {/* Interventions Section (Brought from Organization Development)              */}
      {/* ========================================================================= */}
      <section
        id="happiness-coaching-details-section"
        className="w-full max-w-[1440px] mx-auto min-h-0 px-[clamp(16px,6.94vw,100px)] py-[clamp(44px,5vw,72px)] gap-[clamp(8px,0.69vw,10px)] flex flex-col items-center justify-start bg-[#FEFEFE] opacity-100"
      >
        {/* Inner Container: 1240 max-width, gap: 60px */}
        <div
          id="happiness-coaching-details-container"
          className="w-full max-w-[1240px] min-h-0 flex flex-col gap-[clamp(32px,4.17vw,60px)] opacity-100"
        >
          {/* Top Block: 1240 x 178, gap: 30px */}
          <div
            id="happiness-coaching-details-header"
            className="w-full max-w-[1240px] min-h-0 flex flex-col items-center text-center gap-[clamp(16px,2.08vw,30px)] opacity-100"
          >
            {/* Title & Badge Group */}
            <div className="flex flex-col items-center gap-[clamp(10px,1vw,14px)] w-full">
              {/* Badge: "Let's Connect" */}
              <div
                id="happiness-coaching-details-badge"
                className="inline-flex items-center justify-center gap-2.5 h-[clamp(13px,1.2vw,16px)]"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#D07578] shrink-0"
                  aria-hidden="true"
                />
                <span className="font-serif font-bold italic text-[clamp(17px,1.2vw+12px,20px)] leading-none text-[#D07578] whitespace-nowrap">
                  Begin Your Journey
                </span>
              </div>

              {/* Main Heading */}
              <h2
                id="happiness-coaching-details-heading"
                className="w-full lg:w-auto max-w-[640px] lg:max-w-none font-serif font-bold italic text-[clamp(33.97px,0.73vw+31.13px,41.62px)] leading-[clamp(36px,2.38vw+26.72px,45px)] tracking-normal text-[#141414] text-center lg:whitespace-nowrap m-0"
              >
                My Happiness Coaching is offered across three areas
              </h2>
            </div>

            {/* Description Subtext */}
            <p
              id="happiness-coaching-details-description"
              className="w-full max-w-[968px] font-sans font-normal text-[clamp(14px,0.25vw+13px,16px)] leading-[1.45] sm:leading-[1.5] text-[#141414] text-center m-0"
            >
              Lorem ipsum dolor sit amet consectetur adipiscing elit officia amet ad, non adipiscing et. Id officia ut consectetur exercitation excepteur irure ipsum
            </p>
          </div>

          {/* Cards Block: 3 cards with width 1240, height 453, border-radius 12px, padding 20px, gap 40px */}
          <div
            id="happiness-coaching-details-content"
            className="w-full max-w-[1240px] flex flex-col gap-[clamp(24px,2.78vw,40px)] opacity-100"
          >
            {HAPPINESS_INTERVENTION_CARDS.map((card, idx) => {
              const isFirstCard = idx === 0;
              return (
                <div
                  key={card.number}
                  id={`happiness-card-${idx + 1}`}
                  className="w-full max-w-[1240px] min-h-[clamp(320px,31.45vw,453px)] lg:min-h-[453px] lg:h-auto p-[20px] rounded-[12px] bg-[#FBF2F2] flex flex-col lg:flex-row items-center justify-start gap-[40px] opacity-100 rotate-0 transition-all duration-300 hover:shadow-[0_8px_24px_rgba(208,117,120,0.12)] group/card"
                >
                  {/* 1. Image on the LEFT SIDE: width: 580, height: 413, border-radius: 12px, angle: 0 deg, opacity: 1 */}
                  <div
                    id={`happiness-card-${idx + 1}-img-wrapper`}
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
                    id={`happiness-card-${idx + 1}-content`}
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
                    <div className="w-full max-w-[580px] flex flex-col gap-2.5 opacity-100 rotate-0">
                      {(Array.isArray(card.description) ? card.description : [card.description]).map((desc, dIdx) => (
                        <p
                          key={dIdx}
                          className="font-sans font-normal text-[clamp(14.5px,0.2vw+13px,16px)] leading-[1.35] text-[rgba(20,20,20,0.75)] m-0 opacity-100 rotate-0"
                        >
                          {desc}
                        </p>
                      ))}
                    </div>

                    {/* Bullet Points Layout (width: 580, gap: 18px) */}
                    {card.points && card.points.length > 0 && (
                      <div
                        id={`happiness-card-${idx + 1}-points-block`}
                        className="w-full max-w-[580px] flex flex-col gap-[18px] opacity-100 rotate-0"
                      >
                        {/* Sub-heading: This includes, but is not limited to: (width: 580, height: 13, Cormorant Garamond 700 Italic 20px, #141414) */}
                        <h4 className="w-full max-w-[580px] font-serif font-bold italic text-[20px] leading-none text-[#141414] m-0 opacity-100 rotate-0">
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
                                  {point}
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
        points={HAPPINESS_CONNECT_POINTS}
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
