import PageHero from "@/components/common/PageHero";
import { ServicesList } from "@/components/services";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: "Services | Dr. Sini Rajesh",
  description: "Explore services and transformation programs offered by Dr. Sini Rajesh.",
};

const servicesHeroInfo = `Empowering individuals, mentoring leaders, and building robust human systems for organisations to create meaningful, lasting transformation.`;

export default function ServicesPage() {
  return (
    <main className="w-full min-h-screen bg-[#FEFEFE]">
      {/* Services Page Hero matching Blogs Page Hero */}
      <PageHero
        card={true}
        heading="Services"
        title={"Transformative Interventions\nfor Growth"}
        info={servicesHeroInfo}
        indent={false}
        bgColor="bg-[#BA676A]"
        bgImage="/images/hero-bg-image.png"
        bgPosition="center 20%"
        tags={["Coaching & Mentoring", "Leadership Development", "Organisation Development"]}
      />

      <ServicesList />

      <Footer />
    </main>
  );
}
