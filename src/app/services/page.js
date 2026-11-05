import PageHero from "@/components/common/PageHero";
import { ServicesOverview } from "@/components/services";
import SayHello from "@/components/home/SayHello";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: "Services | Dr. Sini Rajesh",
  description:
    "Tailored pathways to clarity, leadership, and organizational impact. Explore Dr. Sini Rajesh's core offerings across Coaching, Organisation Development, HR Consultancy, Happiness Coaching, and Mentoring.",
  keywords: [
    "Coaching",
    "Executive Coaching",
    "Organisation Development",
    "Organisational Diagnostic Study",
    "HR Consultancy",
    "Happiness Coaching",
    "Mentoring",
    "Dr. Sini Rajesh",
    "Igniting Mindz",
    "The TEA of Your Life",
  ],
  openGraph: {
    title: "Services | Dr. Sini Rajesh - Igniting Mindz",
    description:
      "Tailored pathways to clarity, leadership, and organizational impact through coaching, mentoring, HR consultancy, and systemic diagnostics.",
    images: ["/images/organization-development.png"],
  },
};

const servicesHeroInfo = `Through coaching, mentoring, leadership development, HR consulting, and organisation development, I help individuals, leaders, and organisations turn potential into purposeful action and sustainable growth.`;

export default function ServicesPage() {
  return (
    <main className="w-full min-h-screen bg-[#FEFEFE]">
      {/* Services Hero Section */}
      <PageHero
        card={true}
        heading="Growth and Impact"
        title={"Holistic Pathways to\nClarity & Transformation"}
        info={servicesHeroInfo}
        indent={false}
        bgColor="bg-[#BA676A]"
        bgImage="/images/hero-bg-image.png"
        bgPosition="center 20%"
      />

      {/* Services Cards Grid with Inner Page Links & Filter */}
      <ServicesOverview badge="Our Approach" heading="Tailored Pathways to Clarity & Impact" />

      {/* Say Hello CTA Section */}
      <SayHello heading="Your next chapter may begin with a simple conversation." />

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
