export const dynamic = "force-dynamic";
import type { Metadata } from "next";
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
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Jiya & Associates | Legal & Compliance Experts",
  description: "Jiya & Associates — a multidisciplinary legal and compliance practice advising on taxation, regulatory, commercial and dispute matters with strategic, business-focused legal solutions.",
  keywords: [
    "Jiya and Associates law firm",
    "best law firm Delhi",
    "tax litigation lawyer India",
    "GST lawyer Laxmi Nagar",
    "income tax lawyer Delhi",
    "corporate legal advisory India",
    "compliance law firm Delhi NCR",
    "FEMA lawyer India",
    "trademark lawyer Delhi",
    "real estate lawyer Delhi",
  ],
};

export default function HomePage() {
  if (process.env.MAINTENANCE_MODE === "true") {
    redirect("/maintenance");
  }
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSnippet />
      <PracticeAreas />
      <FoundationSection />
      <AboutSection />
      <ClientTestimonials />
      <ClientBelt />
      <TrustedPartnership />
      <ContactForm />
      <Footer />
    </main>
  );
}