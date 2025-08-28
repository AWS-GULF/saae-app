"use client"
import Image from "next/image";
import Link from "next/link";
import logo from "@/Assets/images/light-logo.svg";
import facebook from "@/Assets/icons/fb.svg";
import instagram from "@/Assets/icons/insta.svg";
import X from "@/Assets/icons/X.svg";
import SnapchatLogo from "@/Assets/icons/SnapchatLogo.svg";
import Linkedin from "@/Assets/icons/Linkedin.svg";
import tiktok from "@/Assets/icons/tiktok.svg";
import { useLanguage } from "@/hooks/useLanguage";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-white pt-2 sm:pt-4 pb-4 px-4 mt-auto">
      <div className="flex flex-col items-center">
        {/* Logo */}
        <Image src={logo} alt="Logo" width={200} height={150} className="mb-4" />

        {/* Slogan */}
        <div className="text-center text-lg mb-4 font-light">
          {t('mainSlogan')}
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 sm:mb-4 mb-2 ">
          <Link href="https://www.facebook.com/profile.php?id=61577985857593" target="_blank" aria-label="Facebook">
            <Image src={facebook} alt="Facebook" width={24} height={24} />
          </Link>
          <Link href="https://t.snapchat.com/26TqT9xJ" target="_blank" aria-label="SnapchatLogo">
            <Image src={SnapchatLogo} alt="SnapchatLogo" width={24} height={24} />
          </Link>
          <Link href="https://x.com/saeebs_sa" target="_blank" aria-label="X">
            <Image src={X} alt="Telegram" width={24} height={24} />
          </Link>
          <Link href="https://www.instagram.com/saeebs_sa/?hl=en" target="_blank" aria-label="Instagram">
            <Image src={instagram} alt="Instagram" width={24} height={24} />
          </Link>
          <Link href="https://www.linkedin.com/company/saeebs/about/?viewAsMember=true" target="_blank" aria-label="Linkedin">
            <Image src={Linkedin} alt="Linkedin" width={24} height={24} />
          </Link>
          <Link href="https://www.tiktok.com/@saeebs_saeed" target="_blank" aria-label="tiktok">
            <Image src={tiktok} alt="tiktok" width={24} height={24} />
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
        <div className="text-center text-sm  lg:pb-2 ">
          {t('copyright')}
        </div>
      </div>
    </footer>
  );
}
