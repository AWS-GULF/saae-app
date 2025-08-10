import MarginedSection from '@/components/ui/MarginedSection'
import React from 'react'
import Image from 'next/image'
import digitealTrans from "@/Assets/images/digitealTrans.jpg"
import hrCons from "@/Assets/images/hrCons.jpg"
import stratrgicPlanning from "@/Assets/images/stratrgicPlanning.jpg"
import Gover from "@/Assets/images/Gover-c.png"
import { RegularButtonSecondaryBg } from '@/components/Button/buttons'

const items = [
  {
    img: stratrgicPlanning,
    title: "Strategic Planning",
  },
  {
    img: digitealTrans,
    title: "Digital Transformation",
  },
  {
    img: hrCons,
    title: "HR Consulting",
  },
  {
    img: Gover,
    title: "Corporate Governance",
  }
]

export default function WhatWeCan() {
  return (
    <MarginedSection>
      <section className="lg:mt-10 mt-5 pb-10 text-start">
        <h2 className="text-base sm:text-2xl lg:text-4xl font-bold leading-tight mb-2 ">What We Can Do</h2>
        <p className="lg:text-[28px] sm:text-xl text-xl font-[500]   leading-[42px] mb-8 text-justify">
          Driving measurable results through strategic insight, innovation, and customized solutions.
        </p>

        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 justify-items-center mb-8 ">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="relative w-40 h-40 md:w-74 md:h-74 rounded-full overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[linear-gradient(0deg,_rgba(118,72,149,0.4)_0%,_rgba(118,72,149,0.4)_100%)]"></div>

              {/* Title */}
              <span className="absolute inset-0 flex items-center justify-center text-base lg:text-2xl text-white font-bold text-center px-2 transition-transform duration-500 group-hover:scale-110">
                {item.title}
              </span>
            </div>
          ))}
        </div>

        {/* Button */}
<div className='flex justify-center items-center'>
         <RegularButtonSecondaryBg/>
</div>
      </section>
    </MarginedSection>
  )
}
