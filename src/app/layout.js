import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  style: "normal",
  variable: "--font-lato",
});

export const metadata = {
  title: "Shapel Beauty Shop",
  description:
    "Shapel Beauty Shop, your go-to destination for premium beauty products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <main className="bg-primary-light text-tertiary font-lato">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
