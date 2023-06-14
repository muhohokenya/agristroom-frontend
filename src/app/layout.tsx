import { Metadata } from "next";
import Navbar from "../components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agristroom",
  description: "An agribusiness startup",
  icons: '/logo-box.png'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col items-start bg-[#FAFAFA] w-full max-w-[1440px] mx-auto`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
