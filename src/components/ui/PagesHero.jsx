
"use client"
import Image from 'next/image'
import React from 'react'

export default function PagesHero({ bg, alt ,title ,style}) {
    return (
        <div className='w-full mb-6 sm:mb-5 lg:mb-10 relative  '>
            <Image
                src={bg}
                alt={alt}
                className={`w-full h-[320px] sm:h-[300px] lg:h-[420px] object-cover ${style}`}
            />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(118,72,149,0.4)_0%,rgba(118,72,149,0.4)_100%)]"></div>
            <div className="absolute left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2   text-white lg:text-[40px] sm:text-4xl text-2xl font-bold text-center"><span className=' bg-[#764895]/20 p-2' >{title}</span></div>



        </div>
    )
}
