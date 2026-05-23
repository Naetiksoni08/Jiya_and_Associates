import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team | Jiya & Associates",
  description: "Meet the practitioners behind Jiya & Associates — experienced across corporate, taxation, intellectual property and litigation matters.",
  keywords: [
    "Jiya and Associates team",
    "lawyers at Jiya and Associates",
    "Ravi Prakash Verma advocate Delhi",
    "tax lawyer Delhi",
    "litigation lawyer Delhi",
    "chartered accountant Delhi",
    "experienced lawyers India",
    "legal practitioners Delhi NCR",
    "corporate tax advocate India",
    "IP lawyer Delhi",
  ],
};

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
