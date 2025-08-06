"use client"
import React, { useState, useEffect } from 'react'
import Hero1 from "@/Assets/images/Hero1.svg"
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./carousel";
import { useLanguage } from '@/hooks/useLanguage';

export default function Hero() {
    const [api, setApi] = useState(null)
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)
    const { dir } = useLanguage();

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
        <div className='w-screen  '>
            <Carousel 
                className="w-full"
                setApi={setApi}
                dir={dir}
                opts={{
                    align: "start",
                    loop: false,
                }}
            >
                <CarouselContent className="w-full -ml-0">
                    <CarouselItem className="w-full pl-0">
                        <div className='relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-blue-100'>
                            <Image
                                src={Hero1}
                                alt='hero section first image'
                                className='object-cover'
                                fill
                                sizes="100vw"
                                priority
                            />
                        </div>
                    </CarouselItem>
                    <CarouselItem className="w-full pl-0">
                        <div className='relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-green-100'>
                            <Image
                                src={Hero1}
                                alt='hero section second image'
                                className='object-cover'
                                fill
                                sizes="100vw"
                            />
                        </div>
                    </CarouselItem>
                    <CarouselItem className="w-full pl-0">
                        <div className='relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-purple-100'>
                            <Image
                                src={Hero1}
                                alt='hero section third image'
                                className='object-cover'
                                fill
                                sizes="100vw"
                            />
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
