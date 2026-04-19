"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Send, CheckCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  nature: z.string().min(1, "Please select the nature of matter"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=Jiya+and+Associates+Laxmi+Nagar+Delhi&output=embed&z=17&iwloc=near";

const MAPS_OPEN_URL =
  "https://www.google.com/maps/search/?api=1&query=Jiya+and+Associates+Laxmi+Nagar+Delhi";

function SuccessModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/50 backdrop-blur-sm">
      <div className="bg-white w-full max-w-md shadow-2xl rounded-lg p-10 flex flex-col items-center text-center relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-navy/30 hover:text-navy transition-colors"
        >
          <X size={18} />
        </button>

        <div className="mb-5">
          <CheckCircle size={48} className="text-gold" strokeWidth={1.5} />
        </div>

        <h3 className="font-serif text-2xl font-bold text-navy mb-3">
          Thank you for reaching out.
        </h3>

        <p className="text-navy/55 text-sm leading-relaxed mb-8">
          Your inquiry has been received. A member of our team will contact you within <span className="font-semibold text-navy/80">24 hours</span> to discuss your matter in confidence.
        </p>

        <button
          onClick={onClose}
          className="w-full bg-gold text-white py-3 font-semibold tracking-widest text-sm hover:bg-gold-dark transition-colors duration-200"
        >
          CLOSE
        </button>
      </div>
    </div>
  );
}

export default function ContactForm() {
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const STORAGE_KEY = "jiya_contact_form";

  // Restore saved form data on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved) as Partial<FormData>;
      (Object.keys(parsed) as (keyof FormData)[]).forEach((key) => {
        setValue(key, parsed[key] as string);
      });
    }
  }, [setValue]);

  // Persist form data on every change
  useEffect(() => {
    const subscription = watch((values) => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  async function onSubmit(data: FormData) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Submission failed");
      reset();
      localStorage.removeItem(STORAGE_KEY);
      setShowSuccess(true);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <>
      {showSuccess && <SuccessModal onClose={() => setShowSuccess(false)} />}

      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* ── LEFT: Office & Map ── */}
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-navy font-bold mb-2">
                Our Offices &amp; Consultation
              </h2>
              <div className="w-12 h-0.5 bg-gold mb-10" />

              {/* Office Address */}
              <div className="mb-8 flex items-start gap-4">
                <MapPin size={24} className="text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-sans font-bold text-xs tracking-widest text-navy uppercase mb-2">Office Address</p>
                  <p className="text-navy/55 text-sm leading-relaxed">
                    A-3/87, Office No. 101, Garg Complex<br />
                    Block J, Guru Nanak Pura, Laxmi Nagar<br />
                    Delhi – 110092
                  </p>
                </div>
              </div>

              {/* Telephone */}
              <div className="mb-8 flex items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="text-gold shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <div>
                  <p className="font-sans font-bold text-xs tracking-widest text-navy uppercase mb-2">Telephone</p>
                  <div className="flex flex-col gap-1">
                    <a href="tel:+919811251825" className="text-navy/55 text-sm hover:text-gold transition-colors">+91-9811251825</a>
                    <a href="tel:+919315413745" className="text-navy/55 text-sm hover:text-gold transition-colors">+91-9315413745</a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="mb-10 flex items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="text-gold shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <div>
                  <p className="font-sans font-bold text-xs tracking-widest text-navy uppercase mb-2">Email</p>
                  <a href="mailto:contact@jiyaandassociates.com" className="text-navy/55 text-sm hover:text-gold transition-colors">contact@jiyaandassociates.com</a>
                </div>
              </div>

              <div className="relative w-full overflow-hidden border border-gray-200 shadow-md" style={{ height: "380px" }}>
                <iframe
                  src={MAP_EMBED_URL}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Jiya & Associates Office Location"
                />
                <a
                  href={MAPS_OPEN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 left-3 bg-white text-navy text-xs font-semibold px-3 py-1.5 shadow flex items-center gap-1.5 hover:shadow-md hover:text-gold transition-all duration-200 z-10"
                >
                  <MapPin size={11} />
                  Open in Maps ↗
                </a>
              </div>
            </div>

            {/* ── RIGHT: Contact Form ── */}
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-navy font-bold mb-2">
                Contact Us
              </h2>
              <div className="w-12 h-0.5 bg-gold mb-10" />

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                <div>
                  <input
                    {...register("name")}
                    type="text"
                    placeholder="Name"
                    className={cn(
                      "w-full px-4 py-3.5 border bg-gray-50 text-navy placeholder-navy/40 focus:outline-none focus:border-gold transition-colors text-sm",
                      errors.name ? "border-red-400" : "border-gray-200"
                    )}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="Email"
                    className={cn(
                      "w-full px-4 py-3.5 border bg-gray-50 text-navy placeholder-navy/40 focus:outline-none focus:border-gold transition-colors text-sm",
                      errors.email ? "border-red-400" : "border-gray-200"
                    )}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <input
                    {...register("phone")}
                    type="tel"
                    placeholder="Phone Number"
                    className={cn(
                      "w-full px-4 py-3.5 border bg-gray-50 text-navy placeholder-navy/40 focus:outline-none focus:border-gold transition-colors text-sm",
                      errors.phone ? "border-red-400" : "border-gray-200"
                    )}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>

                <div>
                  <select
                    {...register("nature")}
                    className={cn(
                      "w-full px-4 py-3.5 border bg-gray-50 text-navy/70 focus:outline-none focus:border-gold transition-colors text-sm appearance-none",
                      errors.nature ? "border-red-400" : "border-gray-200"
                    )}
                    defaultValue=""
                  >
                    <option value="" disabled>Select the type of legal matter</option>
                    <option value="civil">Civil Litigation</option>
                    <option value="criminal">Criminal Law</option>
                    <option value="corporate">Corporate & Commercial</option>
                    <option value="family">Family Law</option>
                    <option value="property">Property & Real Estate</option>
                    <option value="arbitration">Arbitration & Dispute Resolution</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.nature && <p className="text-red-500 text-xs mt-1">{errors.nature.message}</p>}
                </div>

                <div>
                  <textarea
                    {...register("message")}
                    rows={5}
                    placeholder="Message"
                    className={cn(
                      "w-full px-4 py-3.5 border bg-gray-50 text-navy placeholder-navy/40 focus:outline-none focus:border-gold transition-colors resize-none text-sm",
                      errors.message ? "border-red-400" : "border-gray-200"
                    )}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold text-white py-4 font-semibold tracking-widest text-sm hover:bg-gold-dark transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? "Sending..." : (
                    <>Send Inquiry <Send size={16} /></>
                  )}
                </button>

              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
