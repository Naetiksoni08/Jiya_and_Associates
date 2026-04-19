import Navbar from "@/components/public/Navbar";
import ContactForm from "@/components/public/ContactForm";
import Footer from "@/components/public/Footer";

export const metadata = {
  title: "Contact | Jiya & Associates",
  description: "Get in touch with Jiya & Associates for a free consultation.",
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-24">
        <ContactForm />
      </div>
      <Footer />
    </main>
  );
}
