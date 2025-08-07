"use client"
import React, { useState, useEffect } from 'react'
import Hero1 from "@/Assets/images/Hero1.svg"
import Hero2 from "@/Assets/images/Hero2.svg"
import Hero3 from "@/Assets/images/Hero3.svg"
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../../components/ui/carousel";
import { useLanguage } from '@/hooks/useLanguage';
import { LargeButton, RegularButtonWhiteBg } from '../../../components/Button/buttons'

export default function Hero() {
    const [api, setApi] = useState(null)
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)
    const { dir, t } = useLanguage();

    useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    const showPrevious = current > 1
    const showNext = current < count

    return (
        <div className='w-screen   '>
            <Carousel
                className="w-full  "
                setApi={setApi}
                dir={dir}
                opts={{
                    align: "start",
                    loop: false,
                }}
            >
                <CarouselContent className="w-full -ml-0">
                    <CarouselItem className="w-full pl-0">
                        <div className='relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-blue-100 '>
                            <Image
                                src={Hero1}
                                alt='hero section first image'
                                className='object-cover'
                                fill
                                sizes="100vw"
                                priority
                            />
                            <div className="absolute inset-0 bg-[linear-gradient(0deg,_rgba(118,72,149,0.4)_0%,_rgba(118,72,149,0.4)_100%)]"></div>
                            <div className='absolute left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2  w-full'>
                                <div className="flex  w-full justify-center items-center flex-col ">
                                    <h1 className='font-bold text-base sm:text-[28px] lg:text-[40px] text-white pb-6 text-center '>{t('hero_slide1_title')}</h1>
                                   <p className='font-normal  lg:text-3xl text-base sm:text-[20px]  text-white pb-10 text-center w-[400px] sm:w-[600px] lg:w-full'>{t('hero_slide1_desc')}</p>
                                       <div className="flex gap-4 flex-col sm:flex-row justify-center items-center">
                                        <LargeButton />
                                        <RegularButtonWhiteBg />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </CarouselItem>
                    <CarouselItem className="w-full pl-0">
                        <div className='relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-green-100'>
                            <Image
                                src={Hero2}
                                alt='hero section second image'
                                className='object-cover'
                                fill
                                sizes="100vw"
                            />
                            <div className="absolute inset-0 bg-[linear-gradient(0deg,_rgba(118,72,149,0.4)_0%,_rgba(118,72,149,0.4)_100%)]"></div>
     <div className='absolute left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2  w-full'>
                                <div className="flex  w-full justify-center items-center flex-col ">
                                    <h1 className='font-bold text-base sm:text-[28px] lg:text-[40px] text-white pb-6 text-center '>{t('hero_slide2_title')}</h1>
                                   <p className='font-normal w-[400px] sm:w-[500px] lg:w-[900px] xl:w-full lg:text-3xl text-base sm:text-[20px]    text-white pb-10 text-center leading-10 '>{t('hero_slide2_desc')}</p>
                                      <div className="flex gap-4 flex-col sm:flex-row justify-center items-center">
                                        <LargeButton />
                                        <RegularButtonWhiteBg />
                                    </div>
                                </div>
                            </div>
                        </div>



                    </CarouselItem>
                    <CarouselItem className="w-full pl-0">
                        <div className='relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-purple-100'>
                            <Image
                                src={Hero3}
                                alt='hero section third image'
                                className='object-cover'
                                fill
                                sizes="100vw"
                            />
                            <div className="absolute inset-0 bg-[linear-gradient(0deg,_rgba(118,72,149,0.3)_0%,_rgba(118,72,149,0.7)_100%)]"></div>
     <div className='absolute left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2  w-full'>
                                <div className="flex  w-full justify-center items-center flex-col ">
                                    <h1 className='font-bold text-base sm:text-[28px] lg:text-[40px] text-white pb-6 text-center '>{t('hero_slide3_title')}</h1>
                                   <p className='font-normal w-[400px] sm:w-[500px] lg:w-[900px] xl:w-full lg:text-3xl text-base sm:text-[20px]    text-white pb-10 text-center leading-10 '>{t('hero_slide3_desc')}</p>
                                    <div className="flex gap-4 flex-col sm:flex-row justify-center items-center">
                                        <LargeButton />
                                        <RegularButtonWhiteBg />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                {showPrevious && (
                    <CarouselPrevious className={`${dir === 'rtl' ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 border-0 shadow-lg`} />
                )}
                {showNext && (
                    <CarouselNext className={`${dir === 'rtl' ? 'left-4' : 'right-4'} top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 border-0 shadow-lg`} />
                )}
            </Carousel>
        </div>
    )
}
