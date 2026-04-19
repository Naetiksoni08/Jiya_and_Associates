"use client";

import { useState } from "react";

const points = [
  "The user is voluntarily using our website to gain information about us for their information and use. They also acknowledge that there has been no attempt by us to advertise or solicit work.",
  "Any information obtained or downloaded from our website does not lead to the creation of an attorney-client relationship between the Firm and the user.",
  "The content on this website is for informational purposes only and cannot be construed to be a form of legal opinion or legal advice.",
  "Jiya & Associates will not be held liable for any consequences from actions taken based on the materials or information provided on this website.",
  "The Bar Council of India prohibits advocates from engaging in any form of advertisement or solicitation. By accessing the Jiya & Associates website (our website), the user acknowledges that:",
  "The user is voluntarily using our website to gain information about us for their information and use. They also acknowledge that there has been no attempt by us to advertise or solicit work.",
  "Any information obtained or downloaded from our website does not lead to the creation of an attorney-client relationship between the Firm and the user.",
  "The content on this website is for informational purposes only and cannot be construed to be a form of legal opinion or legal advice.",
  "Jiya & Associates will not be held liable for any consequences from actions taken based on the materials or information provided on this website.",
];

export default function DisclaimerModal() {
  const [dismissed, setDismissed] = useState(false);

  function handleAgree() {
    setDismissed(true);
  }

  function handleDeny() {
    window.location.href = "https://www.google.com";
  }

  if (dismissed) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-3xl shadow-2xl flex flex-col max-h-[88vh] rounded-2xl overflow-hidden">

        {/* Scrollable body */}
        <div className="overflow-y-auto flex-1 px-10 pt-9 pb-6">

          {/* Title */}
          <h2 className="text-center font-serif text-2xl font-bold tracking-normal text-navy uppercase mb-6">
            Disclaimer
          </h2>

          {/* Intro paragraph */}
          <p className="text-[14px] text-navy leading-relaxed mb-5">
            The Bar Council of India prohibits advocates from engaging in any form of
            advertisement or solicitation. By accessing the Jiya & Associates website
            (our website), the user acknowledges that:
          </p>

          {/* Bullet points — inside a bordered box */}
          <div className="border border-gray-200 rounded-xl bg-gray-50 px-6 py-5">
            <ul className="list-disc list-outside pl-4 space-y-3">
              {points.map((point, i) => (
                <li key={i} className="text-[14px] text-navy leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex-shrink-0 px-10 py-6 flex justify-center gap-4">
          <button
            onClick={handleDeny}
            className="px-10 py-3 text-sm font-bold text-navy/50 border border-gray-300 rounded-full hover:border-navy/40 hover:text-navy/70 transition-all duration-200"
          >
            Deny
          </button>
          <button
            onClick={handleAgree}
            className="px-10 py-3 text-sm font-bold text-navy bg-gold rounded-full hover:bg-gold-light transition-all duration-200"
          >
            I Agree
          </button>
        </div>

      </div>
    </div>
  );
}
