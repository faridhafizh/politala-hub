import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Politeknik Negeri Tanah Laut",
  description: "Perguruan Tinggi Vokasi Negeri di Kalimantan Selatan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
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