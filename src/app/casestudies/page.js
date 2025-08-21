"use client"
import React from "react"
import Image from "next/image"
import { useLanguage } from "@/hooks/useLanguage"

import caseStudiesPage from "@/Assets/images/caseStudiesPage.svg"
import PagesHero from "@/components/ui/PagesHero"
import MarginedSection from "@/components/ui/MarginedSection"
import arrowIcon from "@/Assets/icons/arrowCase.svg"
import { RegularButtonSecondaryBg } from "@/components/Button/buttons"


const caseStudies = [
  {
    client: "Manufacturing Company - Dammam, KSA",
    service: "HR Structure, Policy Development & HRIS Implementation",
    challenge: "Outdated HR policies and manual processes.",
    solution:
      "SAEE restructured the HR department, digitized HR workflows, and aligned policies with Saudi Labor Law.",
    impact: [
      "HR processing time cut by 50%",
      "Full compliance with local regulations",
      "Better employee experience",
    ],
    img: caseStudiesPage,
    reverse: false,
  },
  {
    client: "Banking Sector - Riyadh, KSA",
    service: "Leadership Development & Change Management",
    challenge: "Low leadership engagement and resistance to organizational changes.",
    solution:
      "SAEE delivered customized leadership development programs and implemented structured change management frameworks.",
    impact: [
      "Stronger leadership alignment",
      "Smoother change adoption",
      "Improved organizational resilience",
    ],
    img: caseStudiesPage,
    reverse: true,
  },
  {
    client: "Retail Group - Jeddah, KSA",
    service: "Performance Management System Implementation",
    challenge: "No clear KPIs and lack of structured performance review processes.",
    solution:
      "SAEE designed and rolled out a performance management system aligned with business objectives.",
    impact: [
      "Enhanced employee accountability",
      "Improved goal tracking",
      "Higher productivity across teams",
    ],
    img: caseStudiesPage,
    reverse: false,
  },
  {
    client: "Healthcare Organization - Eastern Province, KSA",
    service: "HR Digitalization & Employee Engagement",
    challenge: "Paper-based HR processes and low employee engagement.",
    solution:
      "SAEE implemented digital HR solutions, employee self-service portals, and engagement programs.",
    impact: [
      "Faster HR transactions",
      "Greater transparency",
      "Higher employee satisfaction",
    ],
    img: caseStudiesPage,
    reverse: true,
  },
]

export default function Page() {
  const { dir } = useLanguage()
  return (
    <>

      <div className="hidden lg:block">
        <PagesHero bg={caseStudiesPage} alt={"caseStudiesPage"} title={"case studies"} />

        <MarginedSection>
          <div >
            <h2 className="text-2xl lg:text-3xl font-bold leading-tight mb-2">
            </h2>
            <p className="lg:text-[26px] sm:text-xl text-[21px] font-[500] leading-[42px] mb-8">
              At SAEE, we define success by measurable outcomes. This page features a selection of case studies from our work across industries. Each example highlights how our tailored solutions addressed real challenges and delivered tangible business results.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold leading-tight ">
              Our Case Studies
            </h2>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-10 mb-10">
            {caseStudies.map((study, idx) => (
              <div
                key={idx}
                className={`flex flex-col lg:flex-row items-center relative rounded-3xl 
                ${study.reverse ? "lg:flex-row-reverse" : ""}`}
              >
                {/* الصورة */}
                <div className="flex-shrink-0 relative z-10 flex justify-center lg:block">
                  <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[220px] lg:h-[167px] rounded-full bg-[#EAE3F3] flex items-center justify-center my-4">
                    <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[330px] lg:h-[380px] rounded-full overflow-hidden bg-[#8D79A6] relative border-[6px] border-[#EAE3F3]">
                      <Image
                        src={study.img}
                        alt={study.client}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* النصوص */}
                <div className="w-full">
                  <div
                    className={`flex-1 p-6 bg-[#EAE3F3] rounded-2xl relative z-0  
                  text-left ${study.reverse
                        ? (dir === 'rtl' ? "lg:-ml-32 lg:mr-0 pe-40" : "lg:-mr-32 lg:ml-0 pe-40")
                        : (dir === 'rtl' ? "lg:-mr-32 ps-40" : "lg:-ml-32 ps-40")
                      } `}
                  >
                    {/* Client */}
                    <p className="font-bold">
                      Client:{" "}
                      <span className="font-normal">{study.client}</span>
                    </p>

                    {/* Service */}
                    <p className="font-bold mt-2">
                      Service:{" "}
                      <span className="font-normal">{study.service}</span>
                    </p>

                    {/* Challenge */}
                    <h4 className="mt-4 font-semibold">Challenge</h4>
                    <p>{study.challenge}</p>

                    {/* Solution */}
                    <h4 className="mt-4 font-semibold">Solution</h4>
                    <p>{study.solution}</p>

                    {/* Impact */}
                    <h4 className="mt-4 font-semibold">Impact</h4>
                    <ul className="mt-2 space-y-2">
                      {study.impact.map((point, i) => (
                        <li key={i} className={`flex ${dir === 'rtl' ? 'flex-row-reverse' : ''} gap-2`}>
                          <Image
                            src={arrowIcon}
                            alt="bullet"
                            width={16}
                            height={16}
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className=" mb-16 flex justify-center items-center">
            <RegularButtonSecondaryBg >
              See More
            </RegularButtonSecondaryBg>
          </div>

        </MarginedSection>
      </div>



      <div className="lg:hidden block">
        <PagesHero bg={caseStudiesPage} alt={"caseStudiesPage"} title={"case studies"} />

        <MarginedSection>
          <div >
            <h2 className="text-2xl lg:text-3xl font-bold leading-tight mb-2">
            </h2>
            <p className="lg:text-[26px] sm:text-xl text-[21px] font-[500] leading-[42px] mb-8">
              At SAEE, we define success by measurable outcomes. This page features a selection of case studies from our work across industries. Each example highlights how our tailored solutions addressed real challenges and delivered tangible business results.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold leading-tight ">
              Our Case Studies
            </h2>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-10 mb-10">
            {caseStudies.map((study, idx) => (
              <div
                key={idx}
                className={`flex flex-col lg:flex-row items-center relative rounded-3xl 
                ${study.reverse ? "lg:flex-row-reverse" : ""}`}
              >
                {/* الصورة */}
                <div className="flex-shrink-0 relative z-10 flex justify-center lg:block">
                  <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[220px] lg:h-[167px] rounded-full bg-[#EAE3F3] flex items-center justify-center my-4">
                    <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[330px] lg:h-[380px] rounded-full overflow-hidden bg-[#8D79A6] relative border-[6px] border-[#EAE3F3]">
                      <Image
                        src={study.img}
                        alt={study.client}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* النصوص */}
                <div className="w-full">
                  <div
                    className={`flex-1 p-6 bg-[#EAE3F3] rounded-2xl relative z-0  
                  text-left ${study.reverse
                        ? (dir === 'rtl' ? "lg:-ml-32 lg:mr-0 " : "lg:-mr-32 lg:ml-0 ")
                        : (dir === 'rtl' ? "lg:-mr-32 " : "lg:-ml-32 ")
                      } `}
                  >
                    {/* Client */}
                    <p className="font-bold">
                      Client:{" "}
                      <span className="font-normal">{study.client}</span>
                    </p>

                    {/* Service */}
                    <p className="font-bold mt-2">
                      Service:{" "}
                      <span className="font-normal">{study.service}</span>
                    </p>

                    {/* Challenge */}
                    <h4 className="mt-4 font-semibold">Challenge</h4>
                    <p>{study.challenge}</p>

                    {/* Solution */}
                    <h4 className="mt-4 font-semibold">Solution</h4>
                    <p>{study.solution}</p>

                    {/* Impact */}
                    <h4 className="mt-4 font-semibold">Impact</h4>
                    <ul className="mt-2 space-y-2">
                      {study.impact.map((point, i) => (
                        <li key={i} className={`flex ${dir === 'rtl' ? 'flex-row-reverse' : ''} gap-2`}>
                          <Image
                            src={arrowIcon}
                            alt="bullet"
                            width={16}
                            height={16}
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}


            <div className="flex justify-center items-center">
              <RegularButtonSecondaryBg >
                See More
              </RegularButtonSecondaryBg>
            </div>
          </div>
        </MarginedSection>
      </div>
    </>

  )
}
