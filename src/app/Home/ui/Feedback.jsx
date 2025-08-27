"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import v from "@/Assets/images/v.svg";
import sahim from "@/Assets/images/sahim.svg";
import nama from "@/Assets/images/nama.svg";
import MarginedSection from "@/components/ui/MarginedSection";
import Image from "next/image";
import { useLanguage } from '@/hooks/useLanguage';

export default function Feedback() {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);

  const feedbacks = [
    {
      text: t("feedback_almithaq_text"),
      name: t("feedback_almithaq_name"),
      role: t("feedback_almithaq_role"),
      logo: v,
    },
    {
      text: t("feedback_sahim_text"),
      name: t("feedback_sahim_name"),
      role: t("feedback_sahim_role"),
      logo: sahim,
    },
    {
      text: t("feedback_namaa_text"),
      name: t("feedback_namaa_name"),
      role: t("feedback_namaa_role"),
      logo: nama,
    },
  ];

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % feedbacks.length);
  };

  return (
    <MarginedSection>
      <>
        <div className=" hidden lg:grid mt-10 mb-10 py-10 px-4 sm:px-6 md:px-12  grid-cols-1 lg:grid-cols-2 lgap-10 items-center justify-center">
          {/* الجزء الشمال */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-2">
              {t("client_feedback_title")}
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-[28px] font-[500] pe-2 leading-[28px] sm:leading-[34px] md:leading-[38px] lg:leading-[42px] mb-8">
              {t("client_feedback_desc")}
            </p>
          </div>

          {/* الجزء اليمين */}
          <div
            className="relative h-[180px] sm:h-[200px] md:h-[220px] flex justify-center cursor-pointer"
            onClick={nextSlide}
          >
            <AnimatePresence>
              {feedbacks.map((item, i) => {
                const isActive = i === index;
                const position = (i - index + feedbacks.length) % feedbacks.length;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20, }}
                    animate={{
                      opacity: isActive ? 1 : 0.3,
                      scale: isActive ? 1 : 0.9,
                      x: position * -24,
                      y: position * -9,
                      zIndex: feedbacks.length - position,
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="
                    absolute top-0 
                    left-1/2 -translate-x-1/2
                    w-full max-w-[320px] sm:max-w-[450px] md:max-w-[625px]
                    h-[140px] sm:h-[160px]
                    rounded-2xl p-4 sm:p-6 
                    text-white shadow-lg 
                    flex items-center justify-between
                  "
                    style={{
                      background:
                        "linear-gradient(270deg, #764895 0%, #280659 100%)",
                    }}
                  >
                    {/* النصوص على الشمال */}
                    <div className="flex flex-col max-w-[65%] sm:max-w-[70%]">
                      <p className="text-[10px]  sm:text-base md:text-lg mb-2 sm:mb-3 leading-snug">
                        {item.text}
                      </p>
                      <div>
                        <h4 className="font-bold text-[10px]  sm:text-base md:text-lg">
                          {item.name}
                        </h4>
                        <p className="text-[10px]  sm:text-sm opacity-80">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    {/* اللوجو على اليمين */}
                    <div className="flex-shrink-0 opacity-">
                      <Image
                        src={item.logo.src}
                        alt={item.name}
                        width={100}
                        height={100}
                        className="w-[100px] h-[100px] sm:w-[80px] sm:h-[80px] md:w-[120px] md:h-[120px]"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>



        <div className=" lg:hidden grid  mt-10 mb-4 py-5 px-4 sm:px-6 md:px-12  grid-cols-1 lg:grid-cols-2 gap-5 items-center justify-center">
          {/* الجزء الشمال */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-2">
              {t("client_feedback_title")}
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-[28px] font-[500] pe-2 leading-[28px] sm:leading-[34px] md:leading-[38px] lg:leading-[42px] mb-8">
              {t("client_feedback_desc")}
            </p>
          </div>

          {/* الجزء اليمين */}
          <div
            className="relative h-[180px] sm:h-[200px] md:h-[220px] flex justify-center ms-20  cursor-pointer"
            onClick={nextSlide}
          >
            <AnimatePresence>
              {feedbacks.map((item, i) => {
                const isActive = i === index;
                const position = (i - index + feedbacks.length) % feedbacks.length;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20, }}
                    animate={{
                      opacity: isActive ? 1 : 0.3,
                      scale: isActive ? 1 : 0.9,
                      x: position * -35,
                      y: position * -20,
                      zIndex: feedbacks.length - position,
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="
                    absolute top-0 
                    left-1/2 -translate-x-1/2
                    w-full max-w-[320px] sm:max-w-[450px] md:max-w-[625px]
                    h-[140px] sm:h-[160px]
                    rounded-2xl p-4 sm:p-6 
                    text-white shadow-lg 
                    flex items-center justify-between
                  "
                    style={{
                      background:
                        "linear-gradient(270deg, #764895 0%, #280659 100%)",
                    }}
                  >
                    {/* النصوص على الشمال */}
                    <div className="flex flex-col max-w-[65%] sm:max-w-[70%]">
                      <p className="text-[10px]  sm:text-base md:text-lg mb-2 sm:mb-3 leading-snug">
                        {item.text}
                      </p>
                      <div>
                        <h4 className="font-bold text-[10px]  sm:text-base md:text-lg">
                          {item.name}
                        </h4>
                        <p className="text-[10px]  sm:text-sm opacity-80">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    {/* اللوجو على اليمين */}
                    <div className="flex-shrink-0 opacity-">
                      <Image
                        src={item.logo.src}
                        alt={item.name}
                        width={100}
                        height={100}
                        className="w-[100px] h-[100px] sm:w-[80px] sm:h-[80px] md:w-[120px] md:h-[120px]"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </>

    </MarginedSection>
  );
}
