"use client"
import PagesHero from '@/components/ui/PagesHero'
import React from 'react'
import aboutPageHero from "@/Assets/images/aboutPageHero.svg"
import SocialDesktop from "@/Assets/images/SocialResponsibility.png"
import SocialMobile from "@/Assets/images/Social-Responsibility-mobile.svg"
import clientdesktop from "@/Assets/images/client-desktop.png"
import clientmob from "@/Assets/images/client-mobile.png"
import vmimg from "@/Assets/images/v-m-img.svg"
import download from "@/Assets/icons/download.svg"
import Adroitness from "@/Assets/icons/Adroitness.svg"
import Elegance from "@/Assets/icons/Elegance.svg"
import Trust from "@/Assets/icons/Trust.svg"
import Empowerment from "@/Assets/icons/Empowerment.svg"
import Community from "@/Assets/icons/Community.svg"
import Enviroment from "@/Assets/icons/Enviroment.svg"
import people from "@/Assets/icons/people.svg"
import MarginedSection from '@/components/ui/MarginedSection'
import { LargeButton } from '@/components/Button/buttons'
import Image from 'next/image'
import { useLanguage } from '@/hooks/useLanguage'

export default function About() {
  const { t } = useLanguage();
  return (
    <>



      <PagesHero
        title={t('about')}
        alt={t('about_hero_alt')}
        bg={aboutPageHero}
      ></PagesHero>

      <MarginedSection>
        {/* company overview Section */}
        <div className='lg:mb-20 sm:mb-10 mb-5 '>
          <h2 className="text-2xl mt-10 sm:mt-0 sm:text-2xl lg:text-4xl font-bold leading-tight mb-2">
            {t('about_company_overview_title')}
          </h2>
          <p className="lg:text-[28px] sm:text-xl text-xl font-[500] leading-[42px] mb-8 text-justify">
            {t('about_company_overview_desc')}
          </p>
          <LargeButton img={download}>
            <p>{t('button_download_company_profile')}</p>

          </LargeButton>


        </div>



{/* vision and mission */}
<div className="flex sm:flex-row flex-col justify-between items-center lg:mb-10 sm:mb-5 mb-5 ">
  <div className=' sm:w-2/3 w-full'>
          <h2 className="text-xl  sm:text-2xl lg:text-4xl font-bold leading-tight sm:mb-2 mb-6  mt-5 sm:mt-0 ">
            {t('about_vision_mission_title')}
          </h2>
          <h3 className="text-lg sm:text-xl lg:text-[32px] font-bold leading-tight mb-2 text-primary">
            {t('about_vision_title')}
          </h3>
          <p className="lg:text-[28px] sm:text-xl text-xl font-[500] leading-[42px] mb-8 text-justify">
            {t('about_vision_desc')}
          </p>
          <h3 className="text-lg sm:text-xl lg:text-[32px] font-bold leading-tight mb-2 text-primary">
            {t('about_mission_title')}
          </h3>
          <p className="lg:text-[28px] sm:text-xl text-xl font-[500] leading-[42px] mb-8 text-justify">
            {t('about_mission_desc')}
          </p>

        </div>
        
<div className='w-full sm:w-1/3 flex justify-end items-center'>
  <Image src={vmimg} alt="vision and mission"/>
</div>

</div>
        
        
    <div className="lg:mb-20 sm:mb-10 mb-5">
  {/* Mobile ترتيب جديد */}
  <div className="flex flex-col lg:hidden gap-6 items-center">
    {/* Core Value */}
    <div className="relative flex justify-center items-center">
      <div className="absolute w-[230px] h-[230px] border-[6px] border-[#5B0F8B] rounded-full border-l-transparent border-t-transparent rotate-[320deg]"></div>
      <div className="w-[200px] h-[200px] m-2 rounded-full bg-gradient-to-t from-[#29083e] to-[#8e50cf] flex flex-col justify-center items-center text-white font-bold text-[36px] text-center leading-tight">
        {t('about_core_values_title')}
      </div>
    </div>

    {/* الخدمات 4 فوق بعض */}
    {[
      {
        title: t('about_core_sagacity_title'),
        desc: t('about_core_sagacity_desc'),
        icon: Trust
      },
      {
        title: t('about_core_adroitness_title'),
        desc: t('about_core_adroitness_desc'),
        icon: Adroitness
      },
      {
        title: t('about_core_elegance_title'),
        desc: t('about_core_elegance_desc'),
        icon: Elegance
      },
      {
        title: t('about_core_empowerment_title'),
        desc: t('about_core_empowerment_desc'),
        icon: Empowerment
      }
    ].map((service, i) => (
      <div key={i} className="flex items-start gap-3 w-full">
        <div className="flex justify-center items-center border-4 border-[#5B0F8B] rounded-full p-4">
          <Image src={service.icon} alt={`${service.title} Icon`} width={36} />
        </div>
        <div>
          <p className="text-primary font-bold">{service.title} :</p>
          <p className="text-lg">{service.desc}</p>
        </div>
      </div>
    ))}
  </div>

  {/* Desktop layout القديم */}
  <div className="hidden lg:flex flex-col">
    {/* Service 1 */}
    <div className="flex items-start gap-3 ps-20">
      <div className="flex justify-center items-center border-4 border-[#5B0F8B] rounded-full p-4">
        <Image src={Trust} alt="Sagacity Icon" width={36} />
      </div>
      <div>
                <p className="text-primary font-bold">{t('about_core_sagacity_title')} :</p>
                <p className="text-lg">{t('about_core_sagacity_desc')}</p>
      </div>
    </div>

    {/* Core Value مع الخدمات الجانبية */}
    <div className="coreValues flex items-center justify-start">
      <div className="flex flex-col w-full">
        <div className="flex my-6 justify-start items-center w-full">
          <div className="w-fit relative flex justify-start items-center">
            <div className="absolute w-[230px] h-[230px] border-[6px] border-[#5B0F8B] rounded-full border-l-transparent border-t-transparent rotate-[320deg]"></div>
            <div className="w-[200px] h-[200px] m-2 rounded-full bg-gradient-to-t from-[#29083e] to-[#8e50cf] flex flex-col justify-center items-center text-white font-bold text-[36px] text-center leading-tight">
              {t('about_core_values_title')}
            </div>
          </div>

          <div className="flex-col justify-center items-center space-y-8 mx-10  w-1/2">
            {/* Adroitness */}
            <div className="flex items-start justify-center gap-3">
              <div className="flex justify-center items-center border-4 border-[#5B0F8B] rounded-full p-4">
                <Image src={Adroitness} alt="Adroitness Icon" width={36} />
              </div>
              <div>
                <p className="text-primary font-bold">{t('about_core_adroitness_title')} :</p>
                <p className="text-lg">{t('about_core_adroitness_desc')}</p>
              </div>
            </div>

            {/* Elegance */}
            <div className="flex items-start justify-center gap-3">
              <div className="flex justify-center items-center border-4 border-[#5B0F8B] rounded-full p-4">
                <Image src={Elegance} alt="Elegance Icon" width={36} />
              </div>
              <div>
                <p className="text-primary font-bold">{t('about_core_elegance_title')} :</p>
                <p className="text-lg">{t('about_core_elegance_desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Empowerment */}
    <div className="flex items-start gap-3 ps-20">
      <div className="flex justify-center items-center border-4 border-[#5B0F8B] rounded-full p-4">
        <Image src={Empowerment} alt="Empowerment Icon" width={36} />
      </div>
      <div>
        <p className="text-primary font-bold">{t('about_core_empowerment_title')} :</p>
        <p className="text-lg">{t('about_core_empowerment_desc')}</p>
      </div>
    </div>
  </div>
</div>




{/* social responsibility Section */}

<div className="social lg:mb-20 sm:mb-10 mb-5">
  <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold leading-tight mb-2">
    {t('about_social_responsibility_title')}
  </h2>
  <p className="lg:text-[20px] sm:text-lg text-base mb-10 font-[500]">
    {t('about_social_responsibility_desc')}
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      {
        title: t('about_social_people_title'),
        desc: t('about_social_people_desc'),
        icon: people
      },
      {
        title: t('about_social_community_title'),
        desc: t('about_social_community_desc'),
        icon: Community
      },
      {
        title: t('about_social_environment_title'),
        desc: t('about_social_environment_desc'),
        icon: Enviroment
      }
    ].map((item, index) => (
      <div
        key={index}
        className="flex flex-col items-center text-center border-6 border-[#5B0F8B] rounded-[150px] lg:w-[400px] px-6 py-8"
      >
        <div className=" bg-gradient-to-t from-[#29083e] to-[#8e50cf] w-[70px] h-[70px]  p-4 rounded-[25px] mb-2">
          <Image src={item.icon} alt={`${item.title} icon`} width={36} height={36} />
        </div>
        <p className="text-primary font-bold text-2xl mb-4">{item.title}</p>
         <p className="text-base sm:text-[24px] lg:text-[28px] font-[500] leading-[160%]">{item.desc}</p>
      </div>
    ))}
  </div>
</div>
{/* How We Work */}
<div className="howWeWork lg:mb-20 sm:mb-10 mb-5">
  <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold leading-tight mb-4">
    {t('about_how_we_work_title')}
  </h2>
  <p className="lg:text-[20px] sm:text-lg text-base mb-10 font-[500]">{t('about_how_we_work_desc')}</p>

  {/* Desktop Version */}
  <div className="hidden lg:block">
    <Image 
      src={SocialDesktop} 
      alt={t('about_how_we_work_desktop_alt')} 
      className="w-full h-auto"
    />
  </div>

  {/* Mobile Version */}
  <div className="block lg:hidden">
    <Image 
      src={SocialMobile} 
      alt={t('about_how_we_work_mobile_alt')} 
      className="w-full h-auto"
    />
  </div>
</div>

{/* client */}
<div className="client lg:mb-20 sm:mb-10 mb-5">
  <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold leading-tight mb-4">
    {t('about_client_segments_title')}
  </h2>
  <p className="lg:text-[20px] sm:text-lg text-base mb-10 font-[500]">{t('about_client_segments_desc')}</p>

  {/* Desktop Version */}
  <div className="hidden lg:block ">
    <Image 
      src={clientmob} 
      width={500}
      height={500}
      alt={t('about_client_desktop_alt')} 
      className="w-full h-auto"
    />
  </div>

  {/* Mobile Version */}
  <div className="block lg:hidden">
    <Image 
      src={clientmob} 
      alt={t('about_client_mobile_alt')} 
      className="w-full h-auto"
    />
  </div>
</div>





      </MarginedSection>

    </>







  )
}
