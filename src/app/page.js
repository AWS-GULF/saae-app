import {  BackToHomeButton, LargeButton, RegularButton, RegularButtonSecondaryBg, RegularButtonWhiteBg } from "@/components/Button/buttons.js";
import { Navbar } from "@/components/Navbar/Navbar";
import Image from "next/image";
import HomeContent from "./Home/Home";
import About from "./Home/ui/about";
import SaeeNumbers from "./Home/ui/SaeeNumbers";
import WhatWeCan from "./Home/ui/WhatWeCan";
import LogosCarousel from "./Home/ui/Swiper";
import ContactOurTeam from "./Home/ui/ContactOurTeam";
import Feedback from "./Home/ui/Feedback";


export default function Home() {
  return (
    <div className="w-full ">
      
<HomeContent/>
<About/>
<SaeeNumbers/>
<WhatWeCan/>
<LogosCarousel/>
<ContactOurTeam/>
<Feedback/>
   
    </div>
  );
}
