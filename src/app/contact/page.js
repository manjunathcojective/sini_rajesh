import { ContactHero, ContactForm } from "@/components/contact";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: "Contact | Dr. Sini Rajesh",
  description: "Book a complimentary 30-minute exploratory call with Dr. Sini Rajesh.",
};

export default function ContactPage() {
  return (
    <main className="w-full min-h-screen bg-[#FEFEFE]">
      <ContactHero
        badge="Contact Us"
        title="An Invitation to Connect"
        description="Whether you have a question, would like to explore working together, or simply want to connect, I’d be happy to hear from you."
      />

      {/* Contact Form Section */}
      <ContactForm />

      <Footer />
    </main>
  );
}
