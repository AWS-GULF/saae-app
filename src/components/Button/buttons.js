
"use client"
import arrowRight from '@/Assets/icons/arrow-right.svg'
import arrowLight from '@/Assets/icons/arrow-right-light.svg'

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from '@/hooks/useLanguage';

export const RegularButtonWhiteBg = ({ href = "#", children }) => {
 const { t, locale, changeLanguage } = useLanguage();

  return (
    <Link
      href={href}
      className="cursor-pointer w-[235px] h-[64px] border-2 border-secondary rounded-2xl bg-white flex gap-4 justify-center items-center"
    >
      <span className="text-xl font-[500] text-secondary">{children || t('button_explore_more')}</span>
      <Image src={arrowRight} alt="arrow right" className={locale === 'ar' ? 'rotate-180' : ''} />
    </Link>
  );
};
export const RegularButtonSecondaryBg = ({ href = "#", children }) => {
 const { t, locale, changeLanguage } = useLanguage();

  return (
    <Link
      href={href}
      className="cursor-pointer w-[235px] h-[64px] border-2 bg-secondary border-secondary rounded-2xl flex gap-4 justify-center items-center"
    >
      <span className="text-xl font-[500] text-white">{children || t('button_explore_more')}</span>
      <Image src={arrowLight} alt="arrow right"  className={locale === 'ar' ? 'rotate-180' : ''}/>
    </Link>
  );
};
export const BackToHomeButton = ({ href = "#", children }) => {
 const { t, locale, changeLanguage } = useLanguage();

  return (
    <Link
      href={href}
      className="cursor-pointer w-[185px] h-[45px] border-2 bg-secondary border-secondary rounded-2xl flex gap-4 justify-center items-center"
    >
      <span className="text-xl font-[500] text-white">{children || t('button_back_to_home')}</span>
      <Image src={arrowLight} alt="arrow right"  className={locale === 'ar' ? 'rotate-180' : ''}/>
    </Link>
  );
};
export const LargeButton = ({ href = "#", children }) => {
  const { t } = useLanguage();
  return (
    <Link
      href={href}
      className="cursor-pointer w-[300px] leading-32  h-[64px] border-2 bg-secondary border-secondary rounded-2xl flex gap-4 justify-center items-center"
    >
      <span className="text-xl font-bold text-white ">{children || t('button_request_consultation')}</span>
 
    </Link>
  );
};


