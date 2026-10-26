import PageHero from "@/components/common/PageHero";
import {
  MyJourney,
  PeopleCalling,
  NewChapter,
  StartingOut,
  AlwaysCurious,
  AskingWhy,
  MyApproach,
  MyPurpose,
  LifelongLearning,
  VisionMission,
  Values,
  LetsConnect,
} from "@/components/about";
import SayHello from "@/components/home/SayHello";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: "My Story | Dr. Sini Rajesh",
  description: "Discover the journey, experience, and story of Dr. Sini Rajesh, Founder of Igniting Mindz.",
};

const storyHeroInfo = `Hi, I’m Dr. Sini Rajesh, and this is my story: a journey that began as a trainee and, through nearly three decades of learning, exploring, leading and working with people, eventually led me to become the Founder of **Igniting Mindz**.

It is a journey shaped by opportunities, experiences, people and, perhaps most importantly, a willingness to keep learning and give new things a try.`;

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen bg-[#FEFEFE]">
      {/* Subpage Hero for My Story */}
      <PageHero
        card={true}
        heading="My Story"
        title={"A Journey Shaped by\nCuriosity and People"}
        info={storyHeroInfo}
        indent="7ch"
        bgColor="bg-[#BA676A]"
        bgImage="/images/hero-bg-image.png"
        bgPosition="center 20%"
      />

      {/* 1. My Professional Journey */}
      <MyJourney />

      {/* 2. When People Became My Calling */}
      <PeopleCalling />

      {/* 3. A New Chapter */}
      <NewChapter />

      {/* 4. Starting Out - Consulting Practice */}
      <StartingOut />

      {/* 5. Always Curious - Continuous Discovery */}
      <AlwaysCurious />

      {/* 6. Asking Why - Doctoral Research */}
      <AskingWhy />

      {/* 7. My Approach - The TEA Framework */}
      <MyApproach />

      {/* 8. My Purpose - Igniting Mindz */}
      <MyPurpose />

      {/* 9. Lifelong Learning - Qualifications & 4 Pillars */}
      <LifelongLearning />

      {/* 10. Vision & Mission */}
      <VisionMission />

      {/* 11. Core Values */}
      <Values />

      {/* 12. Let's Connect */}
      <LetsConnect />

      {/* 13. Say Hello CTA */}
      <SayHello />

      <Footer />
    </main>
  );
}
