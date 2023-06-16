import { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ManagedUIProvider } from "../hooks/useModalContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agristroom",
  description: "An agribusiness startup",
  icons: "/logo-box.png",
  keywords: ["Agristroom", "Apple Farming", "Communities", "Guides", "MasterClasses"]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen flex flex-col items-start bg-[#FAFAFA] w-full`}
      >
        <ManagedUIProvider>{children}</ManagedUIProvider>
      </body>
    </html>
  );
}
