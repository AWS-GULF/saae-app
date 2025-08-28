"use client"

import React from 'react'
import about from "@/Assets/images/about-sec.svg"
import Image from 'next/image'
import MarginedSection from '@/components/ui/MarginedSection'
import { RegularButtonSecondaryBg } from '@/components/Button/buttons'
import { useLanguage } from '@/hooks/useLanguage'

export default function About() {
  const { t } = useLanguage();
  return (
<MarginedSection>
        <section className="lg:mt-10 mt-5 pb-10">
      <div className="">
        <div className="flex flex-col lg:flex-row items-start justify-center gap-10 ">
          {/* Text Content */}
          <div className="lg:w-3/4 ">
            <h2 className="text-2xl lg:text-3xl font-bold leading-tight mb-2 ">
              {t('about_saee_title')}
            </h2>
            
            <p className="lg:text-[24px] sm:text-xl text-[21px]  font-[500]   leading-[42px] mb-8">
              {t('about_saee_desc')}
            </p>
            <div className='flex justify-center sm:justify-start'>

          <RegularButtonSecondaryBg  href='/about'/>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/4 w-full flex lg:justify-end justify-center ">
            <div className="relative">
              <Image
                src={about}
                alt="Business team working with charts and analytics"
                // width={500}
                // height={500}
                className="rounded-full object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
</MarginedSection>
  )
}