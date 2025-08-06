"use client"
import Image from "next/image";
import Link from "next/link";
import logo from "@/Assets/images/light-logo.svg";
import facebook from "@/Assets/icons/fb.svg";
import telegram from "@/Assets/icons/telegram.svg";
import whatsapp from "@/Assets/icons/whats.svg";
import twitter from "@/Assets/icons/twitter.svg";
import instagram from "@/Assets/icons/insta.svg";
import { useLanguage } from "@/hooks/useLanguage";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-white pt-12 pb-4 px-4 mt-auto">
      <div className="flex flex-col items-center">
        {/* Logo */}
        <Image src={logo} alt="Logo" width={200} height={150} className="mb-4" />

        {/* Slogan */}
        <div className="text-center text-lg mb-4 font-light">
          {t('mainSlogan')}
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 sm:mb-4 mb-2 ">
          <Link href="#" aria-label="Facebook">
            <Image src={facebook} alt="Facebook" width={24} height={24} />
          </Link>
          <Link href="#" aria-label="WhatsApp">
            <Image src={whatsapp} alt="WhatsApp" width={24} height={24} />
          </Link>
          <Link href="#" aria-label="Telegram">
            <Image src={telegram} alt="Telegram" width={24} height={24} />
          </Link>
          <Link href="#" aria-label="Instagram">
            <Image src={instagram} alt="Instagram" width={24} height={24} />
          </Link>
          <Link href="#" aria-label="Twitter">
            <Image src={twitter} alt="Twitter" width={24} height={24} />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className=" flex-wrap justify-center gap-8 mb-2 text-base hidden md:flex">
          <Link href="/" className="hover:underline">{t('home')}</Link>
          <Link href="/about" className="hover:underline">{t('about')}</Link>
          <Link href="/services" className="hover:underline">{t('services')}</Link>
          <Link href="/ourteam" className="hover:underline">{t('ourTeam')}</Link>
          <Link href="/careers" className="hover:underline">{t('career')}</Link>
          <Link href="/contactus" className="hover:underline">{t('contactUs')}</Link>
        </nav>

        {/* Divider */}
        <div className="w-full border-t border-white/40 my-4"></div>

        {/* Copyright */}
        <div className="text-center text-sm  pb-10">
          {t('copyright')}
        </div>
      </div>
    </footer>
  );
}
