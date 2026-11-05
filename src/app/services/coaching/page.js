
import PageHero from "@/components/common/PageHero";
import Button from "@/components/ui/Button";
import { SayHello } from "@/components/home";
import { LetsConnect } from "@/components/about";
import Footer from "@/components/common/Footer";
import CoachingFaq from "@/components/services/CoachingFaq";

export const metadata = {
  title: "Coaching | Dr. Sini Rajesh",
  description: "Executive and personal transformation coaching grounded in The TEA of Your Life framework.",
};

const COACHING_CONNECT_POINTS = [
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

export default function CoachingPage() {
  return (
    <main className="w-full min-h-screen bg-[#FEFEFE]">
      <PageHero
        card={true}
        heading="Services"
        title="Coaching"
        height="clamp(220px, 18.61vw, 268px)"
        cardClassName="!h-[clamp(220px,18.61vw,268px)] !min-h-[clamp(220px,18.61vw,268px)]"
        bgColor="bg-[#BA676A]"
        bgImage="/images/hero-bg-image.png"
        bgPosition="center 24%"
      />

      {/* Section below page hero (1440 x 559 layout with fluid clamps) */}
      <section
        id="coaching-intro"
        className="w-full max-w-[1440px] mx-auto min-h-[clamp(420px,38.82vw,559px)] px-[clamp(16px,6.94vw,100px)] py-[clamp(36px,4.17vw,60px)] gap-[clamp(8px,0.69vw,10px)] flex flex-col items-center justify-center bg-[#FEFEFE] opacity-100"
      >
        {/* ========================================================================= */}
        {/* 1. DESKTOP LAYOUT (>= 1024px): Side-by-Side 660px Content + 540px Image   */}
        {/* ========================================================================= */}
        <div
          id="coaching-container-desktop"
          className="hidden lg:flex w-full max-w-[1240px] h-[clamp(360px,30.49vw,439px)] items-stretch justify-between gap-[clamp(24px,2.78vw,40px)] opacity-100"
        >
          {/* Content Column (Width: 660px, Height: matches image 439px at 1440 layout) */}
          <div
            id="coaching-content"
            className="w-[clamp(440px,45.83vw,660px)] h-full flex flex-col gap-[clamp(18px,2vw,28px)] opacity-100"
          >
            {/* Top Heading Block (same typography) */}
            <div className="w-full">
              <h2 className="font-serif font-bold italic text-[#141414] text-[clamp(26px,1.8vw+14px,38px)] leading-[1.15] m-0">
                The answers we seek often lie within us. Sometimes, all we need is the right space, thoughtful questions and a fresh perspective to find clarity.
              </h2>
            </div>

            {/* Bottom Block (Button positioned with natural gap below paragraphs) */}
            <div
              id="coaching-bottom-block"
              className="w-full flex-1 flex flex-col justify-start gap-[clamp(20px,2vw,28px)] pt-[clamp(14px,1.11vw,18px)] border-t border-[#D07578] opacity-100"
            >
              {/* Paragraphs Area (Manrope, 400, 16px, line-height 100%/readable, rgba(20,20,20,0.75)) */}
              <div className="flex flex-col gap-2.5 font-sans font-normal text-[clamp(14px,0.2vw+12.8px,15.5px)] leading-[1.42] text-[rgba(20,20,20,0.75)]">
                <p className="m-0">
                  Through coaching, I ignite minds to discover what is possible, develop the confidence and capability to pursue it, and create transformation that makes a meaningful difference. My coaching approach is guided by my signature framework, The TEA of Your Life.
                </p>
                <p className="m-0">
                  I offer both 1-on-1 Coaching and Group Coaching, based on individual preferences and needs.
                </p>
              </div>

              {/* Button with Liquid Dot ("Know More") */}
              <div>
                <Button
                  id="coaching-know-more-btn"
                  href="#coaching-details-section"
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
            id="coaching-image-wrapper"
            className="w-[clamp(380px,37.5vw,540px)] h-full relative rounded-[20px] overflow-hidden bg-[#ECE8E1] flex-shrink-0 group/photo"
          >
            <img
              src="/images/coaching.png"
              alt="Coaching"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/photo:scale-105 hover:scale-105"
            />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. TABLET & MOBILE LAYOUT (< 1024px): Heading -> Image -> Bottom Details  */}
        {/* ========================================================================= */}
        <div
          id="coaching-container-mobile"
          className="flex lg:hidden flex-col w-full max-w-[668px] gap-6 md:gap-7 opacity-100"
        >
          {/* 1. Heading */}
          <h2 className="font-serif font-bold italic text-[#141414] text-[clamp(28px,3.5vw+12px,38px)] leading-[1.18] m-0">
            The answers we seek often lie within us. Sometimes, all we need is the right space, thoughtful questions and a fresh perspective to find clarity.
          </h2>

          {/* 2. Image directly after Heading */}
          {/* Tablet aspect ratio (height:width = 5:6.68 -> aspect-[6.68/5]) */}
          {/* Mobile aspect ratio (height:width = 4.39:3.85 -> aspect-[3.85/4.39]) */}
          <div
            id="coaching-image-mobile"
            className="w-full rounded-[16px] md:rounded-[20px] overflow-hidden bg-[#ECE8E1] relative aspect-[3.85/4.39] md:aspect-[6.68/5] group/photo"
          >
            <img
              src="/images/coaching.png"
              alt="Coaching"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/photo:scale-105 hover:scale-105"
            />
          </div>

          {/* 3. Bottom Block (Border top, description text, Know More button) */}
          <div
            id="coaching-bottom-mobile"
            className="w-full pt-4 md:pt-5 border-t border-[#D07578] flex flex-col gap-4 md:gap-5"
          >
            <div className="flex flex-col gap-3 font-sans font-normal text-[clamp(14.5px,0.5vw+12px,16px)] leading-[1.48] text-[rgba(20,20,20,0.75)]">
              <p className="m-0">
                Through coaching, I ignite minds to discover what is possible, develop the confidence and capability to pursue it, and create transformation that makes a meaningful difference. My coaching approach is guided by my signature framework, The TEA of Your Life.
              </p>
              <p className="m-0">
                I offer both 1-on-1 Coaching and Group Coaching, based on individual preferences and needs.
              </p>
            </div>

            <div>
              <Button
                id="coaching-know-more-btn-mobile"
                href="#coaching-details-section"
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
      {/* Coaching Options for You Section: 1440 x 1670 Layout with Fluid Clamps     */}
      {/* ========================================================================= */}
      <section
        id="coaching-details-section"
        className="w-full max-w-[1440px] mx-auto min-h-0 px-[clamp(16px,6.94vw,100px)] py-[clamp(36px,4.17vw,60px)] gap-[clamp(8px,0.69vw,10px)] flex flex-col items-center justify-start bg-[#FEFEFE] opacity-100"
      >
        {/* Inner Container: 1240 max-width, gap: 60px */}
        <div
          id="coaching-details-container"
          className="w-full max-w-[1240px] min-h-0 flex flex-col gap-[clamp(32px,4.17vw,60px)] opacity-100"
        >
          {/* Top Block: width 649px, gap 30px, opacity 1 */}
          <div
            id="coaching-details-header"
            className="w-full max-w-[649px] mx-auto flex flex-col items-center text-center gap-[clamp(16px,2.08vw,30px)] opacity-100"
          >
            {/* Title & Badge Group */}
            <div className="flex flex-col items-center gap-[clamp(10px,1vw,14px)] w-full">
              <div
                id="coaching-details-badge"
                className="inline-flex items-center justify-center gap-2.5 h-[clamp(13px,1.2vw,16px)]"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#D07578] shrink-0"
                  aria-hidden="true"
                />
                <span className="font-serif font-bold italic text-[clamp(17px,1.2vw+12px,20px)] leading-none text-[#D07578] whitespace-nowrap">
                  Unlock Your Potential
                </span>
              </div>

              {/* Main Heading */}
              <h2
                id="coaching-details-heading"
                className="w-full font-serif font-bold italic text-[clamp(28px,2.2vw+16px,41.62px)] leading-[1.08] lg:leading-[45px] text-[#141414] text-center m-0"
              >
                Coaching Options for You
              </h2>
            </div>

            {/* Description Subtext */}
            <p
              id="coaching-details-description"
              className="w-full font-sans font-normal text-[clamp(14px,0.25vw+13px,16px)] leading-[1.45] sm:leading-[1.5] text-[#141414] text-center m-0"
            >
              Whether through personalised one-on-one coaching or the shared experience of group coaching, you can choose the space that best supports your growth and aspirations.
            </p>
          </div>

          {/* Main Content Block: width 1240px, height 932px, gap 40px, opacity 1 */}
          <div
            id="coaching-details-content"
            className="w-full max-w-[1240px] min-h-[clamp(650px,64.72vw,932px)] flex flex-col gap-[clamp(24px,2.78vw,40px)] opacity-100"
          >
            {/* ========================================================================= */}
            {/* 1A. DESKTOP LAYOUT (>= 1280px): Side-by-Side (609px Left + 591px Right Image) */}
            {/* ========================================================================= */}
            <div
              id="coaching-option-1-desktop"
              className="hidden xl:flex w-full max-w-[1240px] items-stretch justify-between gap-[40px] opacity-100"
            >
              {/* Left Column: width 609px, height 452px, flex-between to align card to bottom */}
              <div
                id="coaching-option-1-left"
                className="w-[609px] h-[452px] flex flex-col justify-between opacity-100"
              >
                {/* Top Section: Title & FAQ Questions */}
                <div className="w-full flex flex-col gap-4">
                  {/* Heading: 01.  1-on-1 Coaching (Cormorant Garamond, 700, Italic, 32.77px) */}
                  <h3
                    id="coaching-option-1-title"
                    className="w-full font-serif font-bold italic text-[#141414] text-[32.77px] leading-none m-0"
                  >
                    01.&nbsp;&nbsp;1-on-1 Coaching
                  </h3>

                  {/* FAQ Questions with Dropdown */}
                  <CoachingFaq />
                </div>

                {/* Coral Callout Card: width 609px, height 240px, border-radius 12px, padding 24px, gap 24px, bg #D07578 */}
                <div
                  id="coaching-next-step-card-desktop"
                  className="w-[609px] h-[240px] rounded-[12px] p-[24px] bg-[#D07578] text-white flex flex-col justify-between opacity-100 shadow-[0_8px_24px_rgba(208,117,120,0.18)]"
                >
                  {/* Upper Layout: width 561px, height 124px */}
                  <div className="w-[561px] h-[124px] flex flex-col justify-between">
                    {/* Heading: Next Step Forward! (width: 181px, height: 16px, Cormorant Garamond 600 Italic 25.81px, white) */}
                    <h4 className="w-fit font-serif font-semibold italic text-[25.81px] leading-none text-white m-0">
                      Next Step Forward!
                    </h4>

                    {/* Paragraph: width 561px, height 56px, Manrope 400 16px, white */}
                    <p className="w-[561px] font-sans font-normal text-[16px] leading-[1.3] text-white m-0">
                      Your first step is a complimentary 30-minute exploratory call where we can understand what you would like to work on and see if we are a good fit to work together.
                    </p>

                    {/* Tagline: width 561px, height 12px, Manrope 600 16px, white */}
                    <p className="w-[561px] font-sans font-semibold text-[16px] leading-none text-white m-0">
                      “Book Your Complimentary Exploratory Call”
                    </p>
                  </div>

                  {/* Book Now Button: width 139px, height 44px, border-radius 6px */}
                  <div className="w-full">
                    <Button
                      variant="white"
                      href="/contact"
                      ariaLabel="Book Now"
                      className="!w-[139px] !h-[44px] !min-w-[139px] !rounded-[6px] shadow-sm font-sans font-semibold text-[14px]"
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right Column: Image width 591px, height 452px, border-radius 12px */}
              <div
                id="coaching-option-1-img-desktop"
                className="w-[591px] h-[452px] rounded-[12px] overflow-hidden bg-[#ECE8E1] flex-shrink-0 relative shadow-sm group/photo"
              >
                <img
                  src="/images/one-on-one.png"
                  alt="1-on-1 Coaching"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/photo:scale-105 hover:scale-105"
                />
              </div>
            </div>

            {/* ========================================================================= */}
            {/* 1B. TABLET, MOBILE & 1024 LAPTOP LAYOUT (< 1280px):                      */}
            {/* Heading -> Image (after Heading) -> FAQ -> Next Step Card                 */}
            {/* ========================================================================= */}
            <div
              id="coaching-option-1-tablet-mobile"
              className="flex xl:hidden flex-col w-full max-w-[668px] mx-auto gap-[clamp(20px,2.5vw,28px)] opacity-100"
            >
              {/* 1. Heading */}
              <h3
                id="coaching-option-1-title-mobile"
                className="w-full font-serif font-bold italic text-[#141414] text-[clamp(26px,2.5vw+12px,32.77px)] leading-tight m-0"
              >
                01.&nbsp;&nbsp;1-on-1 Coaching
              </h3>

              {/* 2. Visual Image directly after the Heading */}
              {/* 1024 Laptop & Tablet aspect ratio (height:width = 4.52:6.68 -> aspect-[6.68/4.52]) */}
              {/* Mobile aspect ratio (height:width = 3:3.85 -> aspect-[3.85/3]) */}
              <div
                id="coaching-option-1-img-tablet-mobile"
                className="w-full rounded-[12px] md:rounded-[16px] overflow-hidden bg-[#ECE8E1] relative aspect-[3.85/3] md:aspect-[6.68/4.52] shadow-sm group/photo"
              >
                <img
                  src="/images/one-on-one.png"
                  alt="1-on-1 Coaching"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/photo:scale-105 hover:scale-105"
                />
              </div>

              {/* 3. FAQ Questions with Dropdown */}
              <div className="w-full">
                <CoachingFaq />
              </div>

              {/* 4. Coral Next Step Forward Card */}
              <div
                id="coaching-next-step-card-tablet-mobile"
                className="w-full rounded-[12px] p-[clamp(20px,2.5vw,24px)] bg-[#D07578] text-white flex flex-col gap-[clamp(18px,2vw,24px)] opacity-100 shadow-[0_8px_24px_rgba(208,117,120,0.18)]"
              >
                <div className="w-full flex flex-col gap-[clamp(10px,1.2vw,14px)]">
                  <h4 className="w-fit font-serif font-semibold italic text-[clamp(22px,2vw+10px,25.81px)] leading-none text-white m-0">
                    Next Step Forward!
                  </h4>
                  <p className="w-full font-sans font-normal text-[clamp(14px,0.5vw+12px,16px)] leading-[1.38] text-white m-0">
                    Your first step is a complimentary 30-minute exploratory call where we can understand what you would like to work on and see if we are a good fit to work together.
                  </p>
                  <p className="w-full font-sans font-semibold text-[clamp(14px,0.5vw+12px,16px)] leading-normal text-white m-0">
                    “Book Your Complimentary Exploratory Call”
                  </p>
                </div>

                <div>
                  <Button
                    variant="white"
                    href="/contact"
                    ariaLabel="Book Now"
                    className="!w-[139px] !h-[44px] !min-w-[139px] !rounded-[6px] shadow-sm font-sans font-semibold text-[14px]"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>

            {/* Separator Line: width 1240px, height 0px, border 1px solid rgba(208, 117, 120, 1) */}
            <div
              id="coaching-options-separator"
              className="w-full max-w-[1240px] h-0 border-t border-[#D07578] opacity-100"
              aria-hidden="true"
            />

            {/* ========================================================================= */}
            {/* 2A. DESKTOP & 1024 LAPTOP LAYOUT (>= 1024px): Side-by-Side (571px Image Left + 609px Right) */}
            {/* ========================================================================= */}
            <div
              id="coaching-option-2-desktop"
              className="hidden lg:flex w-full max-w-[1240px] min-h-[360px] lg:h-[400px] items-center justify-between gap-[clamp(24px,2.78vw,40px)] opacity-100"
            >
              {/* Left Column: Image width 571px, height 400px, border-radius 12px */}
              <div
                id="coaching-option-2-img-desktop"
                className="w-[clamp(360px,44vw,571px)] xl:w-[571px] h-[clamp(320px,30vw,400px)] lg:h-[400px] rounded-[12px] overflow-hidden bg-[#ECE8E1] flex-shrink-0 relative shadow-sm group/photo"
              >
                <img
                  src="/images/group-coaching.png"
                  alt="Group Coaching"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/photo:scale-105 hover:scale-105"
                />
              </div>

              {/* Right Column: width 609px, vertically centered to the image */}
              <div
                id="coaching-option-2-right"
                className="w-[clamp(440px,50vw,609px)] xl:w-[609px] flex flex-col gap-[clamp(16px,1.5vw,20px)] opacity-100"
              >
                {/* Heading: 02.  Group Coaching (width: 609px, height: 20px, Cormorant Garamond 700 Italic 32.77px) */}
                <h3
                  id="coaching-option-2-title"
                  className="w-full font-serif font-bold italic text-[#141414] text-[clamp(28px,2.2vw+10px,32.77px)] leading-none m-0"
                >
                  02.&nbsp;&nbsp;Group Coaching
                </h3>

                {/* Content text without top separator line */}
                <div
                  id="coaching-option-2-content"
                  className="w-full flex flex-col gap-[16px] opacity-100"
                >
                  <p className="w-full font-sans font-normal text-[clamp(14.5px,0.25vw+13px,16px)] leading-[1.5] text-[#141414]/75 m-0">
                    Group Coaching brings individuals together in a shared space for reflection, learning and growth. Through guided conversations, experiential activities and practical tools, participants have the opportunity to build greater self-awareness, learn from different perspectives and apply their insights to their own lives.
                  </p>
                  <p className="w-full font-sans font-normal text-[clamp(14.5px,0.25vw+13px,16px)] leading-[1.5] text-[#141414]/75 m-0">
                    Group Coaching sessions can be designed around specific themes or developmental areas and customised to the needs of the group.
                  </p>
                </div>
              </div>
            </div>

            {/* ========================================================================= */}
            {/* 2B. TABLET & MOBILE LAYOUT (< 1024px):                                    */}
            {/* Heading -> Image (after Heading) -> Content Block                         */}
            {/* ========================================================================= */}
            <div
              id="coaching-option-2-tablet-mobile"
              className="flex lg:hidden flex-col w-full max-w-[668px] mx-auto gap-[clamp(20px,2.5vw,28px)] opacity-100"
            >
              {/* 1. Heading */}
              <h3
                id="coaching-option-2-title-mobile"
                className="w-full font-serif font-bold italic text-[#141414] text-[clamp(26px,2.5vw+12px,32.77px)] leading-tight m-0"
              >
                02.&nbsp;&nbsp;Group Coaching
              </h3>

              {/* 2. Visual Image directly after the Heading */}
              {/* Tablet aspect ratio (height:width = 4:6.68 -> aspect-[6.68/4]) */}
              {/* Mobile aspect ratio (height:width = 3:3.85 -> aspect-[3.85/3]) */}
              <div
                id="coaching-option-2-img-tablet-mobile"
                className="w-full rounded-[12px] md:rounded-[16px] overflow-hidden bg-[#ECE8E1] relative aspect-[3.85/3] md:aspect-[6.68/4] shadow-sm group/photo"
              >
                <img
                  src="/images/group-coaching.png"
                  alt="Group Coaching"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/photo:scale-105 hover:scale-105"
                />
              </div>

              {/* 3. Content Block without top separator line */}
              <div
                id="coaching-option-2-content-mobile"
                className="w-full flex flex-col gap-[clamp(12px,1.2vw,16px)]"
              >
                <p className="w-full font-sans font-normal text-[clamp(14.5px,0.5vw+12px,16px)] leading-[1.48] text-[#141414]/75 m-0">
                  Group Coaching brings individuals together in a shared space for reflection, learning and growth. Through guided conversations, experiential activities and practical tools, participants have the opportunity to build greater self-awareness, learn from different perspectives and apply their insights to their own lives.
                </p>
                <p className="w-full font-sans font-normal text-[clamp(14.5px,0.5vw+12px,16px)] leading-[1.48] text-[#141414]/75 m-0">
                  Group Coaching sessions can be designed around specific themes or developmental areas and customised to the needs of the group.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Would You Like to Change, Grow or Transform? (Let's Connect Section) */}
      <LetsConnect
        heading="What Would You Like to Change, Grow or Transform?"
        description="If there is one thing my journey has taught me, it is that there is so much more within each of us than we sometimes realise."
        points={COACHING_CONNECT_POINTS}
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
