import Navbar from "@/components/public/Navbar";
import AboutPageContent from "@/components/public/AboutPage";
import Footer from "@/components/public/Footer";

export const metadata = {
  title: "About | Jiya & Associates",
  description: "A long-standing legal practice built on continuity, trust and sustained experience across corporate, taxation, IP and regulatory matters.",
  openGraph: {
    title: "About Jiya & Associates",
    description: "A trusted law firm providing expert legal counsel across practice areas — advisory, compliance and execution.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <AboutPageContent />
      <Footer />
    </main>
  );
}
