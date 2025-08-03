import arrowRight from '@/Assets/icons/arrow-right.svg'
import arrowLight from '@/Assets/icons/arrow-right-light.svg'

import Link from "next/link";
import Image from "next/image";


export const RegularButtonWhiteBg = ({ href = "#", children = "Explore More" }) => {
  return (
    <Link
      href={href}
      className="cursor-pointer w-[235px] h-[64px] border-2 border-secondary rounded-2xl flex gap-4 justify-center items-center"
    >
      <span className="text-xl font-[500] text-secondary">{children}</span>
      <Image src={arrowRight} alt="arrow right" />
    </Link>
  );
};
export const RegularButtonSecondaryBg = ({ href = "#", children = "Explore More" }) => {
  return (
    <Link
      href={href}
      className="cursor-pointer w-[235px] h-[64px] border-2 bg-secondary border-secondary rounded-2xl flex gap-4 justify-center items-center"
    >
      <span className="text-xl font-[500] text-white">{children}</span>
      <Image src={arrowLight} alt="arrow right" />
    </Link>
  );
};
export const BackToHomeButton = ({ href = "#", children = "Back To Home" }) => {
  return (
    <Link
      href={href}
      className="cursor-pointer w-[185px] h-[45px] border-2 bg-secondary border-secondary rounded-2xl flex gap-4 justify-center items-center"
    >
      <span className="text-xl font-[500] text-white">{children}</span>
      <Image src={arrowLight} alt="arrow right" />
    </Link>
  );
};

export const LargeButton = ({ href = "#", children = "Request a Consultation " }) => {
  return (
    <Link
      href={href}
      className="cursor-pointer w-[300px] leading-32  h-[64px] border-2 bg-secondary border-secondary rounded-2xl flex gap-4 justify-center items-center"
    >
      <span className="text-xl font-bold text-white ">{children}</span>
 
    </Link>
  );
};


