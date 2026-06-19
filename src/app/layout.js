import { Inter, Playfair_Display } from "next/font/google";
import "../styles/globals.css";
import SmoothScrollProvider from "../components/common/SmoothScrollProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair"
});

export const metadata = {
  title: "Northstar Systems | B2B Scale Infrastructure",
  description: "A premium B2B startup website concept built with Next.js, Tailwind CSS, and GSAP."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
