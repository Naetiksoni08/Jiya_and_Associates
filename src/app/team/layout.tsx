import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team | Jiya & Associates",
  description: "Meet the practitioners behind Jiya & Associates — experienced across corporate, taxation, intellectual property and litigation matters.",
};

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
