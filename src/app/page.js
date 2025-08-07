import {  BackToHomeButton, LargeButton, RegularButton, RegularButtonSecondaryBg, RegularButtonWhiteBg } from "@/components/Button/buttons.js";
import { Navbar } from "@/components/Navbar/Navbar";
import Image from "next/image";
import HomeContent from "./Home/Home";
import About from "./Home/ui/about";
import SaeeNumbers from "./Home/ui/SaeeNumbers";

export default function Home() {
  return (
    <div className="w-full ">
      
<HomeContent/>
<About/>
<SaeeNumbers/>
   
    </div>
  );
}
