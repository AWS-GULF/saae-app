"use client"
import PagesHero from '@/components/ui/PagesHero'
import React from 'react'
import aboutPageHero from "@/Assets/images/aboutPageHero.svg"
import SocialDesktop from "@/Assets/images/SocialDesktop.svg"
import SocialDesktopAr from "@/Assets/images/SocialDesktopAr.svg"
import SocialDesktopArMob from "@/Assets/images/SocialDesktopArMob.svg"
import SocialMobile from "@/Assets/images/Social-Responsibility-mobile.svg"
import sagityArabic from "@/Assets/images/sagityArabic.svg"
import clientmob from "@/Assets/images/clientmob.svg"
import clientmobAr from "@/Assets/images/clientmobAr.svg"
import vmimg from "@/Assets/images/v-m-img.svg"
import download from "@/Assets/icons/download.svg"
import Community from "@/Assets/icons/Community.svg"
import Enviroment from "@/Assets/icons/Enviroment.svg"
import people from "@/Assets/icons/people.svg"
import MarginedSection from '@/components/ui/MarginedSection'
import { LargeButton } from '@/components/Button/buttons'
import Image from 'next/image'
import { useLanguage } from '@/hooks/useLanguage'
import sagityEnglish from "@/Assets/images/sagityEnglish.svg"

export default function About() {
  const { t, locale } = useLanguage();
  return (
    <>



      <PagesHero
        title={t('about')}
        alt={t('about_hero_alt')}
        bg={aboutPageHero}
      ></PagesHero>

      <MarginedSection>
        {/* company overview Section */}
        <div id="company-overview" className='lg:mb-20 sm:mb-10 mb-5 '>
          <h2 className="text-2xl lg:text-3xl font-bold leading-tight mb-2">
            {t('about_company_overview_title')}
          </h2>
          <p className="lg:text-[28px] sm:text-xl text-[21px]  font-[500]   leading-[42px] mb-8">
            {t('about_company_overview_desc')}
          </p>
          <LargeButton img={download}>
            <p>{t('button_download_company_profile')}</p>

          </LargeButton>


        </div>



        {/* vision and mission */}
        <div id="vision-mission" className="flex sm:flex-row flex-col justify-between items-center lg:mb-10 sm:mb-5 mb-5 ">
          <div className=' sm:w-2/3 w-full'>
            <h2 className="text-2xl lg:text-3xl font-bold leading-tight mb-4 sm:mt-0 ">
              {t('about_vision_mission_title')}
            </h2>
            <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-2 text-primary">
              {t('about_vision_title')}
            </h3>
            <p className="lg:text-[28px] sm:text-xl text-[21px]  font-[500]   leading-[42px] mb-8">
              {t('about_vision_desc')}
            </p>
            <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-2 text-primary">
              {t('about_mission_title')}
            </h3>
            <p className="lg:text-[28px] sm:text-xl text-[21px]  font-[500]   leading-[42px] mb-8">
              {t('about_mission_desc')}
            </p>

          </div>

          <div className='w-full sm:w-1/3 flex justify-end items-center'>
            <Image src={vmimg} alt="vision and mission" />
          </div>

        </div>


        <div id="core-values" className="flex justify-center items-center lg:mb-10 sm:mb-5 mb-5">
          <Image src={locale === 'ar' ? sagityArabic : sagityEnglish} alt="sagity section" className='w-full object-cover scale-120 sm:scale-100  my-10' />

        </div>




        {/* social responsibility Section */}

        <div id="social-responsibility" className="social lg:mb-20 sm:mb-10 mb-5">
          <h2 className="text-2xl lg:text-3xl font-bold leading-tight mb-2">
            {t('about_social_responsibility_title')}
          </h2>
          <p className="lg:text-[26px] sm:text-xl text-[21px]  font-[500]   leading-[42px] mb-8">
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
                className="flex flex-col items-center text-center border-6 border-[#5B0F8B] rounded-[90px] sm:rounded-[120px] lg:w-[400px] px-6 py-8"
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
        <div id="how-we-work" className="howWeWork lg:mb-20 sm:mb-10 mb-5">
          <h2 className="text-2xl lg:text-3xl font-bold leading-tight mb-2">
            {t('about_how_we_work_title')}
          </h2>
          <p className="lg:text-[26px] sm:text-xl text-[21px]  font-[500]   leading-[42px] mb-8">{t('about_how_we_work_desc')}</p>

          {/* Desktop Version */}
          <div className="hidden lg:block">
            <Image
              src={locale === 'ar' ? SocialDesktopAr : SocialDesktop}
              alt={t('about_how_we_work_desktop_alt')}
              className="w-full h-auto"
            />
          </div>

          {/* Mobile Version */}
          <div className="block lg:hidden">
            <Image
              src={locale === 'ar' ? SocialDesktopArMob : SocialMobile}
              alt={t('about_how_we_work_mobile_alt')}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* client */}
        <div id="client-segments" className="client lg:mb-20 sm:mb-10 mb-5">
          <h2 className="text-2xl lg:text-3xl font-bold leading-tight mb-2">
            {t('about_client_segments_title')}
          </h2>
          <p className="lg:text-[26px] sm:text-xl text-[21px]  font-[500]   leading-[42px] mb-8">{t('about_client_segments_desc')}</p>

          {/* Desktop Version */}
          <div className="hidden lg:block ">
            <Image
              src={locale === 'ar' ? clientmobAr : clientmob}
              width={500}
              height={500}
              alt={t('about_client_desktop_alt')}
              className="w-full h-auto"
            />
          </div>

          {/* Mobile Version */}
          <div className="block lg:hidden  mb-4">
            <Image
              src={locale === 'ar' ? clientmobAr : clientmob}
              alt={t('about_client_mobile_alt')}
              className="w-full h-auto scale-110"
            />
          </div>
        </div>





      </MarginedSection>

    </>







  )
}
