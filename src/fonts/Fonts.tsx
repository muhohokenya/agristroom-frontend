import localFont from "next/font/local";
import { Jost } from "next/font/google";

export const jost = Jost({
    weight: ["500", "600", "800"],
    style: "normal",
    subsets: ["latin"],
  });
  
 export  const satoshi = localFont({
    src: [
      {
        path: "../../public/fonts/Satoshi-Regular.otf",
        weight: "400",
      },
    ],
  });