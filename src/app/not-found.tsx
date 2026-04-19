import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy flex flex-col items-center justify-center text-cream">
      <h1 className="font-serif text-8xl font-bold text-gold mb-4">404</h1>
      <p className="text-xl mb-8 text-cream/70">This page could not be found.</p>
      <Link
        href="/"
        className="border border-gold text-gold px-6 py-3 hover:bg-gold hover:text-navy transition-colors duration-300"
      >
        Return Home
      </Link>
    </div>
  );
}
