"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Ams from "@/Assets/images/Ams.svg";
import elkham from "@/Assets/images/elkham.svg";
import elego from "@/Assets/images/elego.svg";
import aie from "@/Assets/images/aie.svg";
import afaq from "@/Assets/images/afaq.svg";
import alamia from "@/Assets/images/alamia.svg";
import whats from "@/Assets/images/whats.svg";
import rafco from "@/Assets/images/rafco.svg";

const LogosCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 4, // يفضل ٤ زي ما هو على اللابتوب
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024, // تابلت
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // موبايل
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const logos = [Ams, elkham, elego, aie, afaq, alamia, whats, rafco];

  return (
    <div className="w-full overflow-hidden py-6 bg-[#DFDAE6]">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex justify-center items-center px-4 h-[70px]"
          >
            {/* كونتينر ثابت الحجم + Responsive */}
            <div className="w-[100px] h-[80px] md:w-[180px] md:h-[180px] sm:w-[100px] sm:h-[100px] flex justify-center items-center">
              <Image
                src={logo}
                alt={`logo-${index}`}
                width={180}
                height={80}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogosCarousel;
