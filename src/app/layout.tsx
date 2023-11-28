import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Notification from "@/components/Notification";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frango de Garagem",
  description: "Frango de Garagem",
  keywords: [
    "frango",
    "natal",
    "itapoã",
    "belo",
    "horizonte",
    "assados",
    "barbecue",
    "churrasco",
    "festa",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div>
          <Notification />
          <Navbar />
          {children}
          <Footer />
          <ToastContainer
            position="bottom-right"
            theme="dark"
            autoClose={3000}
          />
        </div>
      </body>
    </html>
  );
}
