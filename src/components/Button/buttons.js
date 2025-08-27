"use client"
import arrowRight from '@/Assets/icons/arrow-right.svg'
import arrowLight from '@/Assets/icons/arrow-right-light.svg'

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from '@/hooks/useLanguage';

// ✅ White background button
export const RegularButtonWhiteBg = ({ href = "#", children }) => {
  const { t, locale } = useLanguage();

  return (
    <div className="flex justify-center items-center">
      <Link
        href={href}
        className="cursor-pointer w-[235px] h-[64px] border-2 border-secondary rounded-2xl bg-white flex justify-center items-center"
      >
        <div className="flex items-center gap-2 ">
          <p className="text-xl font-medium text-secondary leading-none flex items-center justify-center sm:pt-0 pt-[5px]">
            {children || t('button_explore_more')}
          </p>
          <Image
            src={arrowRight}
            alt="arrow right"
            className={`${locale === 'ar' ? 'rotate-180' : ''} w-5 h-5 object-fit`}
          />
        </div>
      </Link>
    </div>
  );
};

// ✅ Secondary background button
export const RegularButtonSecondaryBg = ({ href = "#", children }) => {
  const { t, locale } = useLanguage();

  return (
    <div className="flex justify-center items-center">
      <Link
        href={href}
        className="cursor-pointer w-[235px] h-[64px] border-2 bg-secondary border-secondary rounded-2xl flex justify-center items-center"
      >
        <div className="flex items-center gap-3 lg:gap-4">
          <span className="text-xl font-medium text-white leading-none sm:pt-0 pt-[5px]">
            {children || t('button_explore_more')}
          </span>
          <Image
            src={arrowLight}
            alt="arrow right"
            className={`${locale === 'ar' ? 'rotate-180' : ''} w-5 h-5 object-contain`}
          />
        </div>
      </Link>
    </div>
  );
};

// ✅ Back to home button
export const BackToHomeButton = ({ href = "#", children }) => {
  const { t, locale } = useLanguage();

  return (
    <Link
      href={href}
      className="cursor-pointer w-[185px] h-[45px] border-2 bg-secondary border-secondary rounded-2xl flex justify-center items-center"
    >
      <div className="flex items-center gap-3">
        <span className="text-xl font-medium text-white leading-none">
          {children || t('button_back_to_home')}
        </span>
        <Image
          src={arrowLight}
          alt="arrow right"
          className={`${locale === 'ar' ? 'rotate-180' : ''} w-5 h-5 object-contain`}
        />
      </div>
    </Link>
  );
};

// ✅ Large button
export const LargeButton = ({ href = "#", children, img }) => {
  const { t } = useLanguage();

  return (
    <Link
      href={href}
      className="cursor-pointer w-[300px] h-[64px] border-2 bg-secondary border-secondary rounded-2xl flex justify-center items-center"
    >
      <div className="flex items-center gap-3 lg:gap-4">
        <span className="text-xl font-bold text-white leading-none sm:pt-0 pt-[5px]">
          {children || t('button_request_consultation')}
        </span>
        {img && (
          <Image
            src={img}
            alt="arrow right"
            className="w-5 h-5 object-contain"
          />
        )}
      </div>
    </Link>
  );
};

// ✅ Service button
export const ServiceButton = ({ href = "#", children, img }) => {
  const { t } = useLanguage();

  return (
    <Link
      href={href}
      className="cursor-pointer lg:w-[400px] w-[320px] h-[64px] border-2 bg-secondary border-secondary rounded-2xl flex justify-center items-center"
    >
      <div className="flex items-center gap-3 lg:gap-4">
        <span className="text-xl font-bold text-white leading-none sm:pt-0 pt-[5px]">
          {children || t('button_request_consultation')}
        </span>
        {img && (
          <Image
            src={img}
            alt="arrow right"
            className="w-5 h-5 object-contain"
          />
        )}
      </div>
    </Link>
  );
};

// ✅ Submit button
export const Submit = ({ children, disabled = false }) => {
  const { t } = useLanguage();

  return (
    <button
      type="submit"
      disabled={disabled}
      aria-disabled={disabled}
      className={`${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} w-[185px] h-[45px] border-2 ${disabled ? 'bg-gray-300 border-gray-300' : 'bg-secondary border-secondary'} rounded-2xl flex justify-center items-center`}
    >
      <div className="flex items-center gap-3">
        <span className="text-xl font-medium text-white leading-none">
          {children || t('button_back_to_home')}
        </span>
      </div>
    </button>
  );
};

