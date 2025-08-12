'use client'

import PagesHero from '@/components/ui/PagesHero'
import React from 'react'
import MarginedSection from '@/components/ui/MarginedSection'
import servicesPageHero from "@/Assets/images/servicesPageHero.svg"
import digitealTrans from "@/Assets/images/digitealTrans.jpg"
import hrCons from "@/Assets/images/hrCons.jpg"
import stratrgicPlanning from "@/Assets/images/stratrgicPlanning.jpg"
import Gover from "@/Assets/images/Gover-c.png"
import RiskManagment from "@/Assets/images/RiskManagment.svg"
import marketingIntelligence from "@/Assets/images/marketingIntelligence.svg"
import organizationDesign from "@/Assets/images/organizationDesign.svg"
import financialAdvisory from "@/Assets/images/financialAdvisory.svg"
import newInvestor from "@/Assets/images/newInvestor.svg"
import last from "@/Assets/images/last.svg"
import sales from "@/Assets/images/sales.svg"
import { RegularButtonSecondaryBg } from '@/components/Button/buttons'
import Image from 'next/image'
import { useLanguage } from '@/hooks/useLanguage'
import Link from 'next/link'

export default function Services() {
  const { t } = useLanguage();

  const servicesData = [
    {
      id: "strategic-planning",
      img: stratrgicPlanning,
      title: t('services_strategic_planning_title'),
      desc: t('services_strategic_planning_desc'),
    },
    {
      id: "risk-management",
      img: RiskManagment,
      title: t('services_risk_management_title'),
      desc: t('services_risk_management_desc'),
    },
    {
      id: "corporate-governance",
      img: Gover,
      title: t('services_corporate_governance_title'),
      desc: t('services_corporate_governance_desc'),
    },
    {
      id: "organization-design",
      img: organizationDesign,
      title: t('services_organization_design_title'),
      desc: t('services_organization_design_desc'),
    },
    {
      id: "marketing-intelligence-digital-marketing",
      img: marketingIntelligence,
      title: t('services_marketing_intelligence_title'),
      desc: t('services_marketing_intelligence_desc'),
    },
    {
      id: "digital-transformation",
      img: digitealTrans,
      title: t('services_digital_transformation_title'),
      desc: t('services_digital_transformation_desc'),
    },
    {
      id: "sales-development",
      img: sales,
      title: t('services_sales_development_title'),
      desc: t('services_sales_development_desc'),
    },
    {
      id: "financial-advisory-consultation",
      img: financialAdvisory,
      title: t('services_financial_advisory_title'),
      desc: t('services_financial_advisory_desc'),
    },
    {
      id: "human-resource-consulting",
      img: hrCons,
      title: t('services_hr_consulting_title'),
      desc: t('services_hr_consulting_desc'),
    },
    {
      id: "New-Investor-Services",
      img: newInvestor,
      title: "New Investor Services",
      desc: "SAEE streamlines market entry with full setup, compliance, and local support.",
    },
    {
      id: "Industrial-Services-Studies",
      img: last,
      title: "Industrial Services & Studies",
      desc: "SAEE improves industrial performance with lean systems, data insights, and process optimization.",
    },
    
  ];
  return (
    <div>
      <PagesHero bg={servicesPageHero} alt={"servicesPageHero"}  title={t('services')}/>
      <MarginedSection>
        {/* Why SAEE Section */}
        <div>
          <h2 className="text-base sm:text-2xl lg:text-4xl font-bold leading-tight mb-2">
            {t('why_saee_title')}
          </h2>
          <p className="lg:text-[28px] sm:text-xl text-xl font-[500] leading-[42px] mb-8 text-justify">
            {t('why_saee_desc')}
          </p>
        </div>

        {/* Title */}
        <div className="sm:mb-5 mb-4 mt-10">
          <h2 className="text-base sm:text-2xl lg:text-4xl font-bold leading-tight mb-2">
            {t('services_explore_title')}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {servicesData.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* صورة بدائرة + جريدينت */}
              <div className="relative w-78 h-78 z-10">
                <div className="rounded-full overflow-hidden w-full h-full relative border-8 border-[#EEEEEE]">
                  <Image
                    src={service.img}
                    alt={service.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(118,72,149,0.4)_0%,rgba(118,72,149,0.4)_100%)]"></div>
                </div>
              </div>

              {/* خلفية الكارد تبدأ من منتصف الصورة */}
              <div className="-mt-40 bg-[#EEEEEE] rounded-2xl pt-40 px-6 pb-6 flex flex-col items-start h-[420px]">
                <h3 className="text-[24px] font-bold mt-2 mb-2 text-[#280659] text-start">
                  {service.title}
                </h3>
                <p className="   mb-6 text-[22px] h-[200px]">{service.desc}</p>
                <div className='m-auto'>
                  <RegularButtonSecondaryBg href={`/services/${service.id}`} text={t('button_explore_more')} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </MarginedSection>
    </div>
  )
}
