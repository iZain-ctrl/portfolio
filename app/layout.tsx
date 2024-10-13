import type { Metadata } from "next";
import { Bricolage_Grotesque,Oswald } from "next/font/google";
import localfont from "next/font/local"
import "./globals.css";
import { cn} from "../lib/utils";
import GrainEffect from "@/components/visualEffects/grain-effect";
import  Cursor  from "@/components/visualEffects/cursor/cursor";

//FONTS
const mainfont = Bricolage_Grotesque({ subsets: ["latin"] });
const Oswaldfont = Bricolage_Grotesque({subsets:["latin"], variable: "--Oswald-font"});
const pixelfont=localfont({
  src:"../public/assets/fonts/pixel-font-7.ttf",
variable:"--font-pixel"
})

//Metadata
export const metadata: Metadata = {
  title: "Zain-Ul-Abideen",
  description: "Zain official",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={cn(
          mainfont.className,
          Oswaldfont.variable,
          pixelfont.variable
        )}
      >
        <GrainEffect />
        <Cursor color="#fff" />
        {children}
      </body>
    </html>
  );
}
