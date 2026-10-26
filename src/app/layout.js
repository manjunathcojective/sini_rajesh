import { Cormorant_Garamond, Manrope, Instrument_Sans } from "next/font/google";
import "@/styles/globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata = {
  title: "Dr. Sini Rajesh | Founder of Igniting Mindz",
  description:
    "Transform from Within, Grow with Clarity, Create Lasting Impact. Dr. Sini Rajesh - Mentor, HR Expert, Board Advisor, Organisation Development Specialist, Life Coach, Happypreneur.",
  keywords: [
    "Sini Rajesh",
    "Igniting Mindz",
    "Life Coach",
    "HR Expert",
    "Mentor",
    "Board Advisor",
    "Organisation Development Specialist",
    "Happypreneur",
  ],
  authors: [{ name: "Dr. Sini Rajesh" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cormorantGaramond.variable} ${manrope.variable} ${instrumentSans.variable}`}
    >
      <body
        suppressHydrationWarning
        className="bg-[#FEFEFE] text-[#141414] antialiased font-sans"
      >
        {children}
      </body>
    </html>
  );
}
