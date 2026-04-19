import type { Metadata } from "next";
import {
  Montserrat, Marcellus, Cormorant_Garamond, Playfair_Display,
  Libre_Baskerville, Lato, Cinzel, EB_Garamond, DM_Serif_Display, Spectral,
  Italiana, Bodoni_Moda, Josefin_Sans, Forum, Yeseva_One,
  Philosopher, Raleway, Jost, Big_Shoulders_Display, Cardo,
} from "next/font/google";
import { Toaster } from "sonner";
import DisclaimerModal from "@/components/public/DisclaimerModal";
import CustomCursor from "@/components/public/CustomCursor";
import ScrollProgress from "@/components/public/ScrollProgress";
import PageTransition from "@/components/public/PageTransition";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-serif",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cinzel",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-eb-garamond",
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-serif",
});

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-spectral",
});

const italiana = Italiana({ subsets: ["latin"], weight: ["400"], variable: "--font-italiana" });
const bodoni = Bodoni_Moda({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"], variable: "--font-bodoni" });
const josefinSans = Josefin_Sans({ subsets: ["latin"], weight: ["100", "200", "300", "400", "600", "700"], variable: "--font-josefin" });
const forum = Forum({ subsets: ["latin"], weight: ["400"], variable: "--font-forum" });
const yesevaOne = Yeseva_One({ subsets: ["latin"], weight: ["400"], variable: "--font-yeseva" });
const philosopher = Philosopher({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-philosopher" });
const raleway = Raleway({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], variable: "--font-raleway" });
const jost = Jost({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700"], variable: "--font-jost" });
const bigShoulders = Big_Shoulders_Display({ subsets: ["latin"], weight: ["100", "300", "400", "500", "600", "700", "800", "900"], variable: "--font-big-shoulders" });
const cardo = Cardo({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-cardo" });

export const metadata: Metadata = {
  title: "Jiya & Associates | Legal Excellence",
  description: "Jiya & Associates — a trusted law firm providing expert legal counsel in advisory, compliance, taxation, regulatory and litigation matters.",
  icons: {
    icon: "/images/jiya.png",
    apple: "/images/jiya.png",
  },
  openGraph: {
    title: "Jiya & Associates | Legal Excellence",
    description: "Advisory. Compliance. Execution. — A trusted law firm with decades of experience across tax, regulatory and dispute resolution.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${marcellus.variable} ${cormorant.variable} ${playfair.variable} ${libreBaskerville.variable} ${lato.variable} ${cinzel.variable} ${ebGaramond.variable} ${dmSerifDisplay.variable} ${spectral.variable} ${italiana.variable} ${bodoni.variable} ${josefinSans.variable} ${forum.variable} ${yesevaOne.variable} ${philosopher.variable} ${raleway.variable} ${jost.variable} ${bigShoulders.variable} ${cardo.variable}`}>
      <body className="font-sans antialiased">
        <CustomCursor />
        <ScrollProgress />
        <DisclaimerModal />
        <PageTransition>{children}</PageTransition>
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
