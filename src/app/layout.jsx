import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import "./globals.css";
import { Providers } from "./providers";
import { Inter } from "next/font/google";

// ⚡ Bolt: Optimize font loading by self-hosting Google Fonts
// This removes a render-blocking request to fonts.googleapis.com
// and prevents layout shift during font load.
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Politeknik Negeri Tanah Laut",
  description: "Perguruan Tinggi Vokasi Negeri di Kalimantan Selatan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning className={inter.variable}>
      <body>
        <Providers>
          <div className="page-wrapper">
            <Navbar />
            <main className="main-content">{children}</main>
            <Footer />
            <Chatbot />
          </div>
        </Providers>
      </body>
    </html>
  );
}