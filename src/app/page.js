import {  BackToHomeButton, LargeButton, RegularButton, RegularButtonSecondaryBg, RegularButtonWhiteBg } from "@/components/Button/buttons.js";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 p-8">
      

      
    <RegularButtonWhiteBg href="/contactus"  children="show More" />
    <RegularButtonSecondaryBg href="/contactus"  children="show More" />
  <BackToHomeButton href="/" children="Back to Home" />
  <BackToHomeButton href="/" children="See More" />
    <LargeButton href="/contactus" />
    </div>
  );
}
