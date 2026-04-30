import Navbar from "@/components/public/Navbar";
import HeroSection from "@/components/public/HeroSection";
import AboutSnippet from "@/components/public/AboutSnippet";
import PracticeAreas from "@/components/public/PracticeAreas";
import AboutSection from "@/components/public/AboutSection";
import FoundationSection from "@/components/public/FoundationSection";
import ClientBelt from "@/components/public/ClientBelt";
import ClientTestimonials from "@/components/public/ClientTestimonials";
import TrustedPartnership from "@/components/public/TrustedPartnership";
import ContactForm from "@/components/public/ContactForm";
import Footer from "@/components/public/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSnippet />
      <PracticeAreas />
      <ClientBelt />
      <FoundationSection />
      <AboutSection />
      <ClientTestimonials />
      <TrustedPartnership />
      <ContactForm />
      <Footer />
    </main>
  );
}
