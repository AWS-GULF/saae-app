"use client"

import keyboard from "@/Assets/images/keyboard2.svg"
import Image from "next/image"
import PagesHero from "@/components/ui/PagesHero"
import MarginedSection from "@/components/ui/MarginedSection"
import { useLanguage } from "@/hooks/useLanguage"

import ourteamLinked from "@/Assets/icons/ourteamLinked.svg"
import ourteamMsg from "@/Assets/icons/ourteamMsg.svg"
import ourteamPhone from "@/Assets/icons/ourteamPhone.svg"
import instaIcon from "@/Assets/icons/instaIcon.svg"
import faceIcon from "@/Assets/icons/faceIcon.svg"
import locationIcon from "@/Assets/icons/locationIcon.svg"
import xIcon from "@/Assets/icons/xIcon.svg"
import saudiArabiaIcon from "@/Assets/icons/saudiArabiaIcon.svg"
import Link from "next/link"
import { Submit } from "@/components/Button/buttons"

export default function Page() {
  const { t, dir } = useLanguage();

  return (
    <>
      <PagesHero bg={keyboard} alt={"keyboard"} title={t("contact_hero_title")} />

      <MarginedSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-48  lg:p-10">
          {/* Left Section */}
          <div className="space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold leading-tight mb-2">{t("contact_get_in_touch_title")}</h2>
            <p className="lg:text-[26px] sm:text-lg text-[18px] font-[500] leading-[42px] mb-8">
              {t("contact_get_in_touch_desc")}
            </p>

            {/* Address */}
            <div className="flex items-center gap-3">
              <Image src={locationIcon} alt="Address" width={45} height={45} />
              <div className="flex flex-col justify-center items-start">
                <p className="text-xl lg:text-2xl font-bold leading-tight">{t("contact_address_label")}</p>
                <p className="font-[500] text-md">{t("contact_address_value")}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <Image src={ourteamPhone} alt="Phone" width={45} height={45} />
              <div className="flex flex-col justify-center items-start">
                <p className="text-xl lg:text-2xl font-bold leading-tight text-start">{t("contact_phone_label")}</p>
                <p className="font-[500] text-md">{t("contact_phone_value")}</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <Image src={ourteamMsg} alt="Email" width={45} height={45} />
              <div>
                <p className="text-xl lg:text-2xl font-bold leading-tight text-start">{t("contact_email_label")}</p>
                <p className="font-[500] text-md">{t("contact_email_value")}</p>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <p className="text-xl lg:text-2xl font-bold leading-tight text-start py-4 border-[#EEE] border-t">{t("contact_follow_us_title")}</p>
              <div className="flex gap-3">
                <Link href="https://www.linkedin.com/company/saeebs/about/?viewAsMember=true" target="_blank" aria-label="LinkedIn">
                  <Image src={ourteamLinked} alt="LinkedIn" width={45} height={45} />
                </Link>
                <Link href="https://x.com/saeebs_sa" target="_blank" aria-label="X">
                  <Image src={xIcon} alt="X" width={45} height={45} />
                </Link>
                <Link href="https://www.facebook.com/profile.php?id=61577985857593" target="_blank" aria-label="Facebook">
                  <Image src={faceIcon} alt="Facebook" width={45} height={45} />
                </Link>
                <Link href="https://www.instagram.com/saeebs_sa/?hl=en" target="_blank" aria-label="Instagram">
                  <Image src={instaIcon} alt="Instagram" width={45} height={45} />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="bg-[#F9F7F3] shadow-md rounded-2xl p-6 border mt-6 md:mt-12 lg:mt-0">
            <h2 className="text-[21px] font-bold mb-4">{t("contact_request_consultation_title")}</h2>

            <form className="space-y-4">
              {/* First Row - Full Name and Subject */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder={t("contact_full_name_placeholder")}
                  className="w-full border-[#AAAAAA] border rounded-[10px] p-2 text-sm"
                  dir={dir}
                />
                <input
                  type="text"
                  placeholder={t("contact_subject_placeholder")}
                  className="w-full border-[#AAAAAA] border rounded-[10px] p-2 text-sm"
                  dir={dir}
                />
              </div>

              {/* Second Row - Email + Phone + Request */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Email and Phone Column */}
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder={t("contact_email_placeholder")}
                    className="w-full border-[#AAAAAA] border rounded-[10px] p-2 text-sm"
                    dir={dir}
                  />

                  {/* Phone with country code */}
                  <div className="flex border-[#AAAAAA] border rounded-[10px] overflow-hidden">
                    <div className="px-2 text-sm border-[#AAAAAA] border-r flex items-center gap-1 min-w-[70px]">
                      <Image src={saudiArabiaIcon} alt="Saudi Arabia" width={16} height={16} />
                      <span>+966</span>
                    </div>
                    <input
                      type="text"
                      placeholder={t("contact_phone_placeholder")}
                      className="flex-1 p-2 text-sm outline-none"
                      dir={dir}
                    />
                  </div>
                </div>

                {/* Request textarea */}
                <textarea
                  placeholder={t("contact_request_placeholder")}
                  className="w-full border-[#AAAAAA] border rounded-[10px] p-2 text-sm h-23 resize-none"
                  dir={dir}
                ></textarea>
              </div>

              {/* Privacy Notice */}
              <p className="text-[18px] font-[400] mt-8">
                {t("contact_privacy_notice")}{" "}
                <Link href="#" className="text-[#764895] font-[500]">
                  {t("contact_privacy_notice_link")}
                </Link>.
              </p>

              {/* Checkbox */}
              <div className="flex items-center gap-2 mt-8">
                <input type="checkbox" className="w-4 h-4" />
                <label className="text-md">
                  {t("contact_checkbox_label")}
                </label>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center items-center mt-16">
                <Submit>{t("contact_submit_button")}</Submit>
              </div>
            </form>
          </div>
        </div>

        {/* Google Maps */}
        <div className="my-20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.699739648789!2d46.675296!3d24.713551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f038d90f5c8f5%3A0x3fda6b4f3c0f3d2c!2sRiyadh!5e0!3m2!1sen!2ssa!4v1699989999999!5m2!1sen!2ssa"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-2xl"
          ></iframe>
        </div>
      </MarginedSection>
    </>
  )
}
