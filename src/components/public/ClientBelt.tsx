"use client";

import Image from "next/image";

const logos = [
  { name: "POSCO Group", src: "/images/clients/posco.png" },
  { name: "Sumikin Bussan", src: "/images/clients/sumikin.jpeg" },
  { name: "Adeka India", src: "/images/clients/adeka.png" },
  { name: "Marubeni India", src: "/images/clients/marubeni.png" },
  { name: "UPS SCS India", src: "/images/clients/ups.jpg" },
  { name: "Pride Hotels", src: "/images/clients/pride.jpg" },
  { name: "Apex Group", src: "/images/clients/apex.png" },
  { name: "Chokas Media", src: "/images/clients/chokas.jpg" },
  { name: "Airnet Digital", src: "/images/clients/aritel.png" },
  { name: "Bombay Shaving Co.", src: "/images/clients/bombay.png" },
  { name: "Moneyboxx Finance", src: "/images/clients/moneybox.png" },
  { name: "GD Goenka", src: "/images/clients/gdgoneka.jpg" },
  { name: "Vidya Jain School", src: "/images/clients/vidyajain.webp" },
  { name: "AKG India", src: "/images/clients/akg.jpg" },
];

export default function ClientBelt() {
  return (
    <div className="bg-white py-10 overflow-hidden border-y border-gray-100">
      <p className="text-center text-md tracking-[0.3em] uppercase text-gold font-bold mb-8">
        Clients &amp; Associations
      </p>
      <div className="relative flex">
        {/* Two copies for seamless loop */}
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex items-center gap-16 animate-marquee shrink-0"
            aria-hidden={copy === 1}
          >
            {logos.map((logo) => (
              <div key={logo.name} className="flex items-center justify-center w-56 h-28">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={220}
                  height={110}
                  className="object-contain max-h-24 w-auto"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
