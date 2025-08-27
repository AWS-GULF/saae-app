"use client"
import MarginedSection from '@/components/ui/MarginedSection'
import React from 'react'
import Image from 'next/image'
import digitealTrans from "@/Assets/images/digitealTrans.jpg"
import hrCons from "@/Assets/images/hrCons.jpg"
import stratrgicPlanning from "@/Assets/images/stratrgicPlanning.jpg"
import Gover from "@/Assets/images/Gover-c.png"
import { RegularButtonSecondaryBg } from '@/components/Button/buttons'
import Link from 'next/link'
import { useLanguage } from '@/hooks/useLanguage'

export default function WhatWeCan() {
  const { t } = useLanguage();

  const items = [
    {
      img: stratrgicPlanning,
      title: t("strategic_planning"),
      id: 'strategic-planning'
    },
    {
      img: digitealTrans,
      title: t("digital_transformation"),
      id: 'digital-transformation'
    },
    {
      img: hrCons,
      title: t("hr_consulting"),
      id: 'human-resource-consulting'
    },
    {
      img: Gover,
      title: t("corporate_governance"),
      id: 'corporate-governance'
    }
  ]

  return (
    <MarginedSection>
      <section className="lg:mt-10 mt-5 pb-10 text-start">
        <h2 className="text-2xl lg:text-3xl font-bold leading-tight mb-2  ">{t("what_we_can_do_title")}</h2>
        <p className="lg:text-[28px] sm:text-xl text-xl font-[500]   leading-[42px] mb-8 ">
          {t("what_we_can_do_desc")}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 justify-items-center mb-8 ">
          {items.map((item, idx) => (
            <Link key={idx} href={`/services/${item.id}`} className="relative w-68 h-68 md:w-68 md:h-68 rounded-full overflow-hidden group cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500">
              {/* Image */}
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 opacity-100 group-hover:opacity-100 transition-opacity duration-500 bg-[linear-gradient(0deg,_rgba(118,72,149,0.4)_0%,_rgba(118,72,149,0.7)_100%)]"></div>

              {/* Title */}
              <span className="absolute inset-0 flex items-center justify-center text-base lg:text-2xl text-white font-bold text-center px-2 transition-transform duration-500 group-hover:scale-110">
                {item.title}
              </span>
            </Link>
          ))}
        </div>

        {/* Button */}
<div className='flex justify-center items-center '>
         <RegularButtonSecondaryBg href='/services'/>
</div>
      </section>
    </MarginedSection>
  )
}
