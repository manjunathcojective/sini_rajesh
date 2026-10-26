import {
  Hero,
  InspirationQuote,
  AboutMe,
  Philosophy,
  HowCanIHelp,
  Transform,
  Experience,
  Testimonials,
  SayHello,
} from "@/components/home";
import Footer from "@/components/common/Footer";

export default function HomePage() {
  return (
    <main className="w-full min-h-screen bg-[#FEFEFE] overflow-x-hidden">
      <Hero />
      <InspirationQuote />
      <AboutMe />
      <Philosophy />
      <HowCanIHelp />
      <Transform />
      <Experience />
      <Testimonials />
      <SayHello />
      <Footer />
    </main>
  );
}
