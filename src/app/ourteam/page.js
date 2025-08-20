"use client"
import React from "react"
import Image from "next/image"
import { useLanguage } from "@/hooks/useLanguage"

import outTeam from "@/Assets/images/outTeam.svg"
import PagesHero from "@/components/ui/PagesHero"
import MarginedSection from "@/components/ui/MarginedSection"
import ourteamLinked from "@/Assets/icons/ourteamLinked.svg"
import ourteamMsg from "@/Assets/icons/ourteamMsg.svg"
import ourteamPhone from "@/Assets/icons/ourteamPhone.svg"

const teamMembers = [
  {
    name: "Name",
    title: "Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut risus dui. Nulla sit amet felis et libero scelerisque hendrerit ut id quam. Sed elit elit, consectetur at risus eu, tristique maximus diam.",
    img: outTeam,
    reverse: false,
  },
  {
    name: "Name",
    title: "Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut risus dui. Nulla sit amet felis et libero scelerisque hendrerit ut id quam. Sed elit elit, consectetur at risus eu, tristique maximus diam.",
    img: outTeam,
    reverse: true,
  },
  {
    name: "Name",
    title: "Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut risus dui. Nulla sit amet felis et libero scelerisque hendrerit ut id quam. Sed elit elit, consectetur at risus eu, tristique maximus diam.",
    img: outTeam,
    reverse: false,
  },
  {
    name: "Name",
    title: "Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut risus dui. Nulla sit amet felis et libero scelerisque hendrerit ut id quam. Sed elit elit, consectetur at risus eu, tristique maximus diam.",
    img: outTeam,
    reverse: true,
  },
]

export default function page() {
  const { dir } = useLanguage()
  return (
    <div>
      <PagesHero bg={outTeam} alt={"outTeam"} title={"Our Team"} />

      <MarginedSection>
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold leading-tight mb-2">
            Meet Our Team
          </h2>
          <p className="lg:text-[26px] sm:text-xl text-[21px] font-[500] leading-[42px] mb-8">
            At SAEE, we believe that people are our most valuable asset. Our
            team brings together diverse expertise across strategy, business,
            technology, and operations all working toward one goal: delivering
            real, sustainable impact.
          </p>
        </div>

        <div>
          <h2 className="text-2xl lg:text-3xl font-bold leading-tight mb-8">
            Get to know the people behind SAEE’s impact
          </h2>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-10 mb-10">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className={`flex flex-col lg:flex-row items-center relative rounded-3xl 
              ${member.reverse ? "lg:flex-row-reverse" : ""}`}
            >
              {/* الصورة */}
              <div className="flex-shrink-0 relative z-10 flex justify-center lg:block">
                <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[330px] lg:h-[330px] rounded-full bg-[#EAE3F3] flex items-center justify-center my-4">
                  <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[330px] lg:h-[330px] rounded-full overflow-hidden bg-[#8D79A6] relative border-[6px] border-[#EAE3F3]">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* الباكجراوند و النص */}

     {/* laptop */}
          <div className="hidden lg:block">
               <div
                className={`flex-1 p-6 bg-[#EAE3F3] rounded-2xl relative z-0  
                text-center lg:text-left 
                ${member.reverse
                    ? (dir === 'rtl' ? "lg:-ml-32 lg:mr-0 pe-40" : "lg:-mr-32 lg:ml-0 pe-40")
                    : (dir === 'rtl' ? "lg:-mr-32 ps-40" : "lg:-ml-32 ps-40")
                  } `}
              >
                <div className={`${member.reverse ? "lg:pe-32" : "lg:ps-32"}`}>
                  <h3 className="text-2xl lg:text-3xl font-bold leading-tight">
                    {member.name}
                  </h3>
                  <p className="lg:text-[26px] sm:text-xl text-[21px] font-[400] leading-[42px]">
                    {member.title}
                  </p>
                  <p className="lg:text-[26px] sm:text-xl text-[21px] font-[400] leading-[42px] ">
                    {member.desc}
                  </p>

                  {/* أيقونات */}
                  <div className="flex justify-center lg:justify-start gap-4 mt-4">
                    <Image
                      src={ourteamPhone}
                      alt="Phone"
                      className="cursor-pointer"
                      width={40}
                      height={40}
                    />
                    <Image
                      src={ourteamMsg}
                      alt="Message"
                      className="cursor-pointer"
                      width={40}
                      height={40}
                    />
                    <Image
                      src={ourteamLinked}
                      alt="LinkedIn"
                      className="cursor-pointer"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
              </div> 
          </div>

          {/* mobile & tablet */}

      <div className="block lg:hidden">
               <div
                className={`flex-1 p-6 bg-[#EAE3F3] rounded-2xl relative z-0  
                text-center lg:text-left 
                ${member.reverse
                    ? (dir === 'rtl' ? "lg:-ml-32 lg:mr-0 " : "lg:-mr-32 lg:ml-0 ")
                    : (dir === 'rtl' ? "lg:-mr-32 " : "lg:-ml-32 ")
                  } `}
              >
                <div className={`${member.reverse ? "lg:pe-32" : "lg:ps-32"}`}>
                  <h3 className="text-2xl lg:text-3xl font-bold leading-tight">
                    {member.name}
                  </h3>
                  <p className="lg:text-[26px] sm:text-xl text-[21px] font-[400] leading-[42px]">
                    {member.title}
                  </p>
                  <p className="lg:text-[26px] sm:text-xl text-[21px] font-[400] leading-[42px] ">
                    {member.desc}
                  </p>

                  {/* أيقونات */}
                  <div className="flex justify-center lg:justify-start gap-4 mt-4">
                    <Image
                      src={ourteamPhone}
                      alt="Phone"
                      className="cursor-pointer"
                      width={40}
                      height={40}
                    />
                    <Image
                      src={ourteamMsg}
                      alt="Message"
                      className="cursor-pointer"
                      width={40}
                      height={40}
                    />
                    <Image
                      src={ourteamLinked}
                      alt="LinkedIn"
                      className="cursor-pointer"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
              </div> 
          </div>






            </div>
          ))}
        </div>
      </MarginedSection>
    </div>
  )
}
