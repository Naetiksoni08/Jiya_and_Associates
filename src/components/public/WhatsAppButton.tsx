"use client";

export default function WhatsAppButton() {
  return (
    <a
      href="mailto:contact@jiyaandassociates.com"
      aria-label="Email us"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-all duration-200"
    >
      <img src="/images/mail.png" alt="Email us" className="w-14 h-14 object-contain rounded-full" />
    </a>
  );
}
