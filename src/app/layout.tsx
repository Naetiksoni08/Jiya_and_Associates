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
  title: "Jiya & Associates | Legal & Compliance Experts",
  description: "Jiya & Associates — a multidisciplinary legal and compliance practice advising on taxation, regulatory, commercial and dispute matters with strategic, business-focused legal solutions.",
  keywords: [
    "Jiya and Associates",
    "law firm Delhi",
    "legal compliance experts India",
    "tax lawyer Delhi",
    "GST consultant India",
    "corporate lawyer Delhi",
    "trademark registration India",
    "legal advisory India",
    "regulatory compliance lawyer",
    "Laxmi Nagar law firm",
  ],
  verification: {
    google: "_TrqagIjarLxtCCZWFMNRV1I6IaGlGy2I-IopARl5bw",  // ← add this
  },
  icons: {
    icon: "/images/jiya.png",
    apple: "/images/jiya.png",
  },
  openGraph: {
    title: "Jiya & Associates | Legal & Compliance Experts",
    description: "Jiya & Associates — a multidisciplinary legal and compliance practice advising on taxation, regulatory, commercial and dispute matters with strategic, business-focused legal solutions.",
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
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-2FHZTC5V0L"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2FHZTC5V0L');
          `
        }} />
      </head>
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
