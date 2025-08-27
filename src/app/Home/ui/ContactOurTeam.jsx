"use client"
import { RegularButtonSecondaryBg } from '@/components/Button/buttons'
import keyboard from "@/Assets/images/keyboard.svg"
import MarginedSection from '@/components/ui/MarginedSection'
import { useLanguage } from '@/hooks/useLanguage'

export default function ContactOurTeam() {
  const { t } = useLanguage();

  return (
    <div
      className='relative w-auto  bg-center   bg-cover  bg-no-repeat  '
      style={{ backgroundImage: `url(${keyboard.src}  ) ` }}
    >
      {/* overlay فوق الصورة */}
      <div className='absolute inset-0 bg-[linear-gradient(0deg,rgba(118,72,149,0.4)_0%,rgba(118,72,149,0.4)_100%)]'></div>

      {/* المحتوى */}
    <MarginedSection>
          <div className='relative flex flex-col justify-center items-center w-full h-full py-20 text-center text-white'>
        <h3 className='text-2xl md:text-3xl font-bold mb-4'>
          {t("contact_our_team_title")}
        </h3>

        <p className='lg:mb-16 mb-12 max-w-2xl'>
          {t("contact_our_team_desc")}
        </p>

        <RegularButtonSecondaryBg href='/contactus'  >
          <p>{t("contact_our_team_button")}</p>
        </RegularButtonSecondaryBg>
      </div>
    </MarginedSection>
    </div>
  )
}
