import { Metadata } from "next";

import "primereact/resources/themes/mdc-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import "../styles/globals.css";
import { Inter } from "next/font/google";
import { ManagedUIProvider } from "../hooks/useModalContext";
import { Providers } from "../redux/provider";
import { Toaster } from "../components/ui/Toaster";
import FormProvider from "../context/formstate";
import {
  UseEditorModal,
  UseEditorModalProvider,
} from "../hooks/useEditorModalContext";
import SearchProvider from "../context/SearchState";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agristroom",
  description: "An agribusiness startup",
  icons: "/logo-box.png",
  keywords: [
    "Agristroom",
    "Apple Farming",
    "Communities",
    "Guides",
    "MasterClasses",
  ],
};

{/* <script src="https://cdn.ckeditor.com/ckeditor5/35.1.0/super-build/ckeditor.js"></script> */}

export default function RootLayout({
  children,
  modal,
  pageProps,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
  pageProps: any;
}) {
  return (
    <html lang="en">
      
      <body
        className={`${inter.className} min-h-screen flex flex-col bg-[#FAFAFA] w-full`}
      >
        <Providers>
          <ManagedUIProvider>
            <UseEditorModalProvider>
              <FormProvider>
                <SearchProvider>
                  {children}
                  {modal}
                </SearchProvider>
              </FormProvider>
            </UseEditorModalProvider>
          </ManagedUIProvider>
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
