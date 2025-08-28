'use client'

import React from 'react'
import { services } from '../data/services'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { useLanguage } from '@/hooks/useLanguage'
import { ServiceButton, RegularButtonSecondaryBg } from '@/components/Button/buttons'
import Link from 'next/link'
import PagesHero from '@/components/ui/PagesHero'
import MarginedSection from '@/components/ui/MarginedSection'
import { use } from 'react' // ⬅ هانستخدم use
import arrowPurple from '@/Assets/icons/arrowPurple.svg'

export default function ServicePage({ params }) {
    const { t, locale } = useLanguage();
    const { id } = use(params) // ⬅ نفك الـ Promise

    // البحث عن الخدمة
    const service = services.find(s => s.id === id);

    if (!service) {
        notFound();
    }

    return (
        <div>
            {/* Hero Section */}
            <PagesHero
                bg={service.image}
                alt={t(service.title)}
                title={t(service.title)}
            />

            <MarginedSection>
                <div className='flex flex-col justify-start items-start gap-6'>
                    <p className="lg:text-[26px] sm:text-xl text-[21px]  font-[500]   leading-[42px]  ">
                        {t(service.description)}
                    </p>
                    <ServiceButton href="/contactus">
                        {t(service.button)}
                    </ServiceButton>
                </div>

                {/* why  Section */}
                <section className="lg:mt-10 mt-5 pb-10">
                    <div className="">
                        <div className="flex flex-col lg:flex-row items-start justify-center gap-10 ">
                            {/* Text Content */}
                            <div className="lg:w-2/3 ">
                                <h2 className="text-2xl lg:text-3xl font-bold leading-tight mb-2 ">
                                    {t(service.question)}
                                </h2>

                                <p className="lg:text-[26px] sm:text-xl text-[21px]  font-[500]   leading-[42px] lg:mb-8">
                                    {t(service.longDescription)}
                                </p>
                                <div className='flex justify-center sm:justify-start'>


                                </div>
                            </div>

                            {/* Image */}
                            <div className="lg:w-1/3 w-full flex items-center justify-center ">
                                <div className=" ">
                                    <Image
                                        src={service.sectionImage}
                                        alt="Business team working with charts and analytics"

                                        className="rounded-full object-cover shadow-lg w-[250px] h-[250px] "
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* delivery Section */}
                <div className="social lg:mb-20 sm:mb-10 mb-5">
                    <h2 className="text-2xl lg:text-3xl font-bold leading-tight mb-4">
                        {t('what_we_deliver_title')}
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
                        {service.deliveryElements.map((item, index) => {
                            return (
                                <div key={index} className="flex flex-col justify-start items-center border-4 border-[#764895] rounded-[80px]  text-center sm:h-[300px] h-fit min-h-[200px] px-5 pb-6 sm:pb-0  ">
                                    <div className="mt-6 mb-4 ">
                                        <Image src={item.icon} alt={t(item.title)} width={68} height={68} />
                                    </div>
                                    <h3 className="text-[21px] sm:text-xl lg:text-[24px] font-bold leading-[150%] mb-2 text-primary">{t(item.title)}</h3>
                                    <p className="text-[#30086B] font-[500] text-xl lg:text-2xl">{t(item.description)}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                {/* values Section */}
                <div className="values lg:mb-20 sm:mb-10 mb-5">
                    <h2 className="text-2xl lg:text-3xl font-bold leading-tight mb-4 ">
                        {t('how_service_creates_value_title')}
                    </h2>

                    {service.benefits.map((item, index) => {
                        return <div className={`flex  gap-2 sm:justify-start sm:items-center items-start mb-1 `} key={index}>
                            <Image
                                src={arrowPurple}
                                alt="arrow right"
                                width={25}
                                height={25}
                                className={`${locale === 'ar' ? 'rotate-180' : ''} mt-[6px] lg:mt-0`}
                            />
                            <p className=" leading-[150%] font-[500] lg:text-[26px] sm:text-xl text-[12px]" key={index}>{t(item)}</p>
                        </div>
                    })


                    }




                </div>
                {/* why this service Section */}
                <div className="why lg:mb-20 sm:mb-10 mb-5">
                    <h2 className="text-2xl lg:text-3xl font-bold leading-tight mb-4 ">
                        {t('who_should_use_service_title')}
                    </h2>

                    <div className=" flex justify-center items-center sm:scale-90 lg:scale-100 ">
                        <Image
                            src={locale === 'ar' ? service.servicePcAr : service.servicePc}
                            alt="arrow right"
                        />
                    </div>





                </div>
                {/* What You Will Receive */}
                <div className="whatYouWillReceive  lg:mb-20 sm:mb-10 mb-5">
                    <h2 className="text-2xl lg:mb-10 lg:text-3xl font-bold leading-tight mb-4 ">
                        {t('what_you_will_receive_title')}
                    </h2>
                    <div className="flex gap-4  justify-center items-center lg:justify-center lg:flex-row flex-col flex-wrap  ">
                        {service.recievElements.map((item, index) => {
                            return <div className="bg-gradient-to-t from-[#280659] to-[#764895]  rounded-full flex flex-col gap-4 items-center text-center justify-start m-8 w-[200px] h-[200px]  sm:w-[250px] sm:h-[250px]" key={index}>
                                <Image
                                    src={item.icon}
                                    alt={t(item.title)}
                                    width={80}
                                    height={80}
                                    className='mt-6 '
                                />
                                <p className='px-6 sm:px-10 text-white sm:text-xl text-[14px] '>{t(item.title)}</p>
                            </div>
                        })}
                    </div>




                </div>







            </MarginedSection>
        </div>
    )
}
