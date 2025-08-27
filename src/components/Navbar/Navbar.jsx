"use client"

import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"
import logo from "@/Assets/images/logo-light.svg"
import global from "@/Assets/icons/global.svg"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from "next/image"
import Menu from "@/Assets/icons/menu-ham.svg"
import { useLanguage } from "@/hooks/useLanguage"
import { services } from "@/app/services/data/services"
import { usePathname } from "next/navigation"

export function MobileNavbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [aboutOpen, setAboutOpen] = React.useState(false);
    const [servicesOpen, setServicesOpen] = React.useState(false);
    const pathname = usePathname();
    const { t, locale, changeLanguage } = useLanguage();

    // منع السكرول في الصفحة عند فتح المينو
    React.useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // تنظيف عند إغلاق المكون
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setAboutOpen(false);
        setServicesOpen(false);
    };

    const toggleLanguage = () => {
        const newLocale = locale === 'en' ? 'ar' : 'en';
        changeLanguage(newLocale);
    };

    // عناصر About - تنقل داخل صفحة About بدون تغيير الترجمات
    const aboutItems = [
        { title: t('about_company_overview_title'), href: "/about#company-overview" },
        { title: t('about_vision_mission_title'), href: "/about#vision-mission" },
        { title: t('about_core_values_title'), href: "/about#core-values" },
        { title: t('about_social_responsibility_title'), href: "/about#social-responsibility" },
        { title: t('about_how_we_work_title'), href: "/about#how-we-work" },
        { title: t('about_client_segments_title'), href: "/about#client-segments" },
    ];

    // Services for mobile: from real services data
    const mobileServices = services.map((s) => ({ title: t(s.title), href: `/services/${s.id}` }))



    return (
        <div className="bg-white shadow-sm px-4 py-3 fixed top-0 left-0 right-0 z-50 ">
            {/* Blur overlay for the whole page when menu is open */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-30 backdrop-blur-md bg-white/30 pointer-events-none "></div>
            )}

            {/* Header (logo + menu) with blur when menu is open */}
            <div className={`flex items-center justify-between transition-all duration-200 ${isMenuOpen ? 'backdrop-blur-md bg-white/60' : ''} relative z-50 `}>
                <span className={isMenuOpen ? 'blur-sm' : ''}>
                    <Image
                        src={logo}
                        alt="Logo"
                        width={200}
                        height={80}
                        className="" />
                </span>
                {/* Hamburger Menu */}
                <button
                    onClick={toggleMenu}
                    className="p-2 relative"
                >
                    <span className={isMenuOpen ? 'blur-sm' : ''}>
                        <Image
                            src={Menu}
                            alt="menu icon"
                        />
                    </span>
                </button>
            </div>

            {/* Mobile Menu - Side Panel */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-40 flex overflow-y-auto">
                    {/* Left side - transparent, click to close */}
                    <div className="flex-1" onClick={toggleMenu}></div>
                    {/* Right side - Menu panel */}
                    <div className="w-1/2 pt-10 bg-white h-screen flex flex-col overflow-y-scroll">
                        {/* Menu Items */}
                        <div className="flex-1 pt-8  px-6" key={pathname}>
                            <Link href="/" className={`block py-4 text-lg font-medium ${pathname === "/" ? "text-purple-600" : "text-black"}`} onClick={toggleMenu}>{t('home')}</Link>

                            {/* About Dropdown */}
                            <div
                                className={`block py-4 text-lg font-medium cursor-pointer select-none ${pathname === "/about" ? "text-purple-600" : "text-black"}`}
                                onMouseEnter={() => setAboutOpen(true)}
                                onMouseLeave={() => setAboutOpen(false)}
                                onClick={() => setAboutOpen((v) => !v)}
                            >
                                <div className="flex items-center justify-between ">
                                    {t('about')}
                                    <svg className={`w-4 h-4 text-purple-900 transition-transform duration-300 ${aboutOpen ? (locale==="ar" ? '-rotate-270' : 'rotate-90') : (locale==="ar" ? 'rotate-180' : '')}` } fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </div>
                                {aboutOpen && (
                                    <div className="pl-4 mt-2 animate-in slide-in-from-top-2 duration-200 overflow-y-auto">
                                        {aboutItems.map((item) => (
                                            <Link
                                                key={item.title}
                                                href={item.href}
                                                className="block py-2 text-[12px] text-gray-700 hover:text-purple-600"
                                                onClick={toggleMenu}
                                            >
                                                {item.title}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Services Dropdown */}
                            <div
                                className={`block py-4 text-lg font-medium cursor-pointer select-none ${pathname === "/services" ? "text-purple-600" : "text-black"}`}
                                onMouseEnter={() => setServicesOpen(true)}
                                onMouseLeave={() => setServicesOpen(false)}
                                onClick={() => setServicesOpen((v) => !v)}
                            >
                                <div className="flex items-center justify-between">
                                    {t('services')}
                                    <svg className={`w-4 h-4 text-purple-900 transition-transform duration-300 ${servicesOpen ? (locale==="ar" ? '-rotate-270' : 'rotate-90') : (locale==="ar" ? 'rotate-180' : '')}` } fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </div>
                                {servicesOpen && (
                                    <div className="pl-4 mt-2 animate-in slide-in-from-top-2 duration-200 overflow-y-auto">
                                        {mobileServices.map((item) => (
                                            <Link
                                                key={item.title}
                                                href={item.href}
                                                className="block py-2 text-[12px] text-gray-700 hover:text-purple-600"
                                                onClick={toggleMenu}
                                            >
                                                {item.title}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <Link href="/casestudies" className={`block py-4 text-lg font-medium ${pathname === "/casestudies" ? "text-purple-600" : "text-black"}`} onClick={toggleMenu}>{t('caseStudies')}</Link>
                            <Link href="/ourteam" className={`block py-4 text-lg font-medium ${pathname === "/ourteam" ? "text-purple-600" : "text-black"}`} onClick={toggleMenu}>{t('ourTeam')}</Link>
                            <Link href="/careers" className={`block py-4 text-lg font-medium ${pathname === "/careers" ? "text-purple-600" : "text-black"}`} onClick={toggleMenu}>{t('career')}</Link>
                            <Link href="/contactus" className={`block py-4 text-lg font-medium ${pathname === "/contactus" ? "text-purple-600" : "text-black"}`} onClick={toggleMenu}>{t('contactUs')}</Link>
                     
                     
                        {/* Language Selector at Bottom */}
                        <div className=" h-48   flex items-end ">
                            <button
                                className="flex items-start gap-3 w-full justify-start "
                                onClick={toggleLanguage}
                            >
                                <Image
                                    src={global}
                                    alt="Language"
                                    width={20}
                                    height={20}
                                />
                                <span className="text-black text-lg flex justify-start items-start">{t('language')}</span>
                            </button>
                        </div>
                     
                        </div>

                     
                    </div>
                </div>
            )}
        </div>
    );
}

const components = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
]

export function Navbar() {
    const pathname = usePathname();
    const [aboutDropdownOpen, setAboutDropdownOpen] = React.useState(false);
    const [servicesDropdownOpen, setServicesDropdownOpen] = React.useState(false);
    const { t, locale, changeLanguage } = useLanguage();

    const toggleLanguage = () => {
        const newLocale = locale === 'en' ? 'ar' : 'en';
        changeLanguage(newLocale);
    };

    // عناصر About - Desktop: روابط لأقسام صفحة About
    const aboutItems = [
        { title: t('about_company_overview_title'), href: "/about#company-overview" },
        { title: t('about_vision_mission_title'), href: "/about#vision-mission" },
        { title: t('about_core_values_title'), href: "/about#core-values" },
        { title: t('about_social_responsibility_title'), href: "/about#social-responsibility" },
        { title: t('about_how_we_work_title'), href: "/about#how-we-work" },
        { title: t('about_client_segments_title'), href: "/about#client-segments" },
    ];

    // Services (desktop): from real services data
    const servicesItems = services.map((s) => ({ title: t(s.title), href: `/services/${s.id}` }))



    return (
        <>
            <div className="hidden sm:flex">
                <NavigationMenu className={`lg:px-20 px-4 hidden md:flex ${locale==="ar" && "md:flex-row-reverse md:flex"}`}>
                    <Image
                        src={logo}
                        alt="Logo"
                        // width={245}
                        // height={80}
                        className="lg:w-[245px] lg:h-[80px] sm:w-[150px] h-[80px]"
                    />
                    <NavigationMenuList className={`${locale==="ar" && "flex-row-reverse flex"}`} key={pathname}>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className="bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent">
                                <Link href="/" className={`lg:px-4 sm:px-2 py-2 rounded-none sm:text-[10px] md:text-[10px] xl:text-base  font-medium transition-colors duration-200 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent ${pathname === "/" ? "text-purple-600" : "text-black"}`}>{t('home')}</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        {/* About Dropdown - Desktop */}
                        <NavigationMenuItem
                            onMouseEnter={() => setAboutDropdownOpen(true)}
                            onMouseLeave={() => setAboutDropdownOpen(false)}
                        >
                            <NavigationMenuLink asChild className="bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent">
                                <Link
                                    href="/about"
                                    className={`lg:px-4 sm:px-2 py-2 rounded-none sm:text-[10px] md:text-[10px] xl:text-base  font-medium transition-colors duration-200 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent ${aboutDropdownOpen || pathname === "/about" ? "text-purple-600" : "text-black"}`}
                                >
                                    {t('about')}
                                </Link>
                            </NavigationMenuLink>
                            {aboutDropdownOpen && (
                                <div className="absolute mt-0 z-50">
                                    <div className="bg-[#F3F3F3] rounded-2xl shadow-lg px-8 py-6 min-w-[360px]">
                                        <div className="flex flex-col gap-4">
                                            {aboutItems.map((item) => (
                                                <Link
                                                    key={item.title}
                                                    href={item.href}
                                                    className="text-black hover:text-purple-600 text-lg leading-7"
                                                >
                                                    {item.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </NavigationMenuItem>

                        {/* Services Dropdown - Desktop */}
                        <NavigationMenuItem
                            onMouseEnter={() => setServicesDropdownOpen(true)}
                            onMouseLeave={() => setServicesDropdownOpen(false)}
                        >
                            <NavigationMenuLink asChild className="bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent">
                                <Link
                                    href="/services"
                                    className={`lg:px-4 sm:px-2 py-2 rounded-none sm:text-[10px] md:text-[10px] xl:text-base    text-medium font-medium transition-colors duration-200 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent ${servicesDropdownOpen || pathname === "/services" ? "text-purple-600" : "text-black"}`}
                                >
                                    {t('services')}
                                </Link>
                            </NavigationMenuLink>
                            {servicesDropdownOpen && (
                                <div className="absolute mt-0 z-50">
                                    <div className="bg-[#F3F3F3] rounded-2xl shadow-lg px-8 py-6 min-w-[640px]">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-16">
                                            {servicesItems.map((item) => (
                                                <Link
                                                    key={item.title}
                                                    href={item.href}
                                                    className="text-black hover:text-purple-600 text-sm leading-7"
                                                >
                                                    {item.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className="bg-transparent md:sm:text-[10px] md:text-[10px] xl:text-base  hover:bg-transparent focus:bg-transparent active:bg-transparent">
                                <Link href="/casestudies" className={`lg:px-4 sm:px-2 py-2 rounded-none text-base font-medium transition-colors duration-200 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent ${pathname === "/casestudies" ? "text-purple-600" : "text-black"}`}>{t('caseStudies')}</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className="bg-transparent md:sm:text-[10px] md:text-[10px] xl:text-base  hover:bg-transparent focus:bg-transparent active:bg-transparent">
                                <Link href="/ourteam" className={`lg:px-4 sm:px-2 py-2 rounded-none text-base font-medium transition-colors duration-200 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent ${pathname === "/ourteam" ? "text-purple-600" : "text-black"}`}>{t('ourTeam')}</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className="bg-transparent md:sm:text-[10px] md:text-[10px] xl:text-base  hover:bg-transparent focus:bg-transparent active:bg-transparent">
                                <Link href="/careers" className={`lg:px-4 sm:px-2 py-2 rounded-none text-base font-medium transition-colors duration-200 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent ${pathname === "/careers" ? "text-purple-600" : "text-black"}`}>{t('career')}</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className="bg-transparent md:sm:text-[10px] md:text-[10px] xl:text-base  hover:bg-transparent focus:bg-transparent active:bg-transparent">
                                <Link href="/contactus" className={`lg:px-4 sm:px-2 py-2 rounded-none text-base font-medium transition-colors duration-200 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent ${pathname === "/contactus" ? "text-purple-600" : "text-black"}`}>{t('contactUs')}</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                    <button
                        className="flex items-center gap-2"
                        onClick={toggleLanguage}
                    >
                        <Image
                            src={global}
                            alt="Logo"
                        />
                        <span>{t('language')}</span>
                    </button>
                </NavigationMenu>
            </div>
            <div className="md:hidden block">
                <MobileNavbar />
            </div>
        </>
    );
}

function ListItem({
    title,
    children,
    href,
    ...props
}) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href}>
                    <div className="text-sm leading-none font-medium">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}













