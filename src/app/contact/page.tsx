import Navbar from "@/components/public/Navbar";
import ContactForm from "@/components/public/ContactForm";
import Footer from "@/components/public/Footer";

export const metadata = {
  title: "Contact | Jiya & Associates",
  description: "Get in touch with Jiya & Associates for a free consultation.",
  keywords: [
    "contact Jiya and Associates",
    "law firm consultation Delhi",
    "free legal consultation India",
    "tax lawyer consultation Delhi",
    "legal advice Delhi NCR",
    "Jiya Associates Laxmi Nagar",
    "law firm contact Delhi",
    "legal helpline India",
    "GST consultation Delhi",
    "trademark consultation India",
  ],
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
