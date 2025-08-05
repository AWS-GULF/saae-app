// import Image from "next/image";
// import Link from "next/link";
// import logo from "@/Assets/images/logo-light.svg";
// // استورد أيقونات السوشيال ميديا حسب مساراتك
// import facebook from "@/Assets/icons/fb.svg";
// import whatsapp from "@/Assets/icons/whats.svg";
// import telegram from "@/Assets/icons/telegram.svg";
// import instagram from "@/Assets/icons/insta.svg";
// import twitter from "@/Assets/icons/twitter.svg";

// export default function Footer() {
//   return (
//     <footer className="bg-primary text-white pt-12 pb-4 px-4">
//       <div className="flex flex-col items-center">
//         {/* Logo */}
//         <Image src={logo} alt="Logo" width={100} height={100} className="mb-4" />

//         {/* Company Name & Slogan */}
//         <div className="text-center mb-4">
//           <div className="font-bold tracking-wide">SAEE BUSINESS SOLUTIONS</div>
//           <div className="tracking-wide">سعي حلول الأعمال</div>
//           <div className="text-xs tracking-widest mt-1">EMPOWERING SOLUTIONS</div>
//         </div>

//         {/* Slogan */}
//         <div className="text-center text-lg mb-4 font-light">
//           Empowering organizations through insight, innovation, and impact.
//         </div>

//         {/* Social Icons */}
//         <div className="flex gap-4 mb-4">
//           <Link href="#" aria-label="Facebook">
//             <Image src={facebook} alt="Facebook" width={24} height={24} />
//           </Link>
//           <Link href="#" aria-label="WhatsApp">
//             <Image src={whatsapp} alt="WhatsApp" width={24} height={24} />
//           </Link>
//           <Link href="#" aria-label="Telegram">
//             <Image src={telegram} alt="Telegram" width={24} height={24} />
//           </Link>
//           <Link href="#" aria-label="Instagram">
//             <Image src={instagram} alt="Instagram" width={24} height={24} />
//           </Link>
//           <Link href="#" aria-label="Twitter">
//             <Image src={twitter} alt="Twitter" width={24} height={24} />
//           </Link>
//         </div>

//         {/* Navigation Links */}
//         <nav className="flex flex-wrap justify-center gap-8 mb-4 text-base">
//           <Link href="/" className="hover:underline">Home</Link>
//           <Link href="/about" className="hover:underline">About</Link>
//           <Link href="/services" className="hover:underline">Services</Link>
//           <Link href="/ourteam" className="hover:underline">Our Team</Link>
//           <Link href="/careers" className="hover:underline">Career</Link>
//           <Link href="/contactus" className="hover:underline">Contact us</Link>
//         </nav>

//         {/* Divider */}
//         <div className="w-full border-t border-white/40 my-4"></div>

//         {/* Copyright */}
//         <div className="text-center text-sm">
//           Copyright © 2025. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// }