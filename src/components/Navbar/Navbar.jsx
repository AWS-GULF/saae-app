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
import { usePathname } from "next/navigation"

export function MobileNavbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [aboutOpen, setAboutOpen] = React.useState(false);
    const [servicesOpen, setServicesOpen] = React.useState(false);
    const pathname = usePathname();
    const { t, locale, changeLanguage } = useLanguage();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setAboutOpen(false);
        setServicesOpen(false);
    };

    const toggleLanguage = () => {
        const newLocale = locale === 'en' ? 'ar' : 'en';
        changeLanguage(newLocale);
    };

    // عناصر About
    const aboutItems = [
        { title: t('components'), href: "#" },
        { title: t('documentation'), href: "#" },
        { title: t('blocks'), href: "#" },
    ];

    // عناصر Services
    const components = [
        {
            title: t('alertDialog'),
            href: "/docs/primitives/alert-dialog",
        },
        {
            title: t('hoverCard'),
            href: "/docs/primitives/hover-card",
        },
        {
            title: t('progress'),
            href: "/docs/primitives/progress",
        },
        {
            title: t('scrollArea'),
            href: "/docs/primitives/scroll-area",
        },
        {
            title: t('tabs'),
            href: "/docs/primitives/tabs",
        },
        {
            title: t('tooltip'),
            href: "/docs/primitives/tooltip",
        },
    ];



    return (
        <div className="bg-white shadow-sm px-4 py-3 relative">
            {/* Blur overlay for the whole page when menu is open */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-30 backdrop-blur-md bg-white/30 pointer-events-none"></div>
            )}

            {/* Header (logo + menu) with blur when menu is open */}
            <div className={`flex items-center justify-between transition-all duration-200 ${isMenuOpen ? 'backdrop-blur-md bg-white/60' : ''} relative z-50`}>
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
                <div className="fixed inset-0 z-40 flex">
                    {/* Left side - transparent, click to close */}
                    <div className="flex-1" onClick={toggleMenu}></div>
                    {/* Right side - Menu panel */}
                    <div className="w-1/2 pt-10 bg-white h-full flex flex-col overflow-y-auto">
                        {/* Menu Items */}
                        <div className="flex-1 py-8 px-6" key={pathname}>
                            <Link href="/" className={`block py-4 text-lg font-medium ${pathname === "/" ? "text-purple-600" : "text-black"}`} onClick={toggleMenu}>{t('home')}</Link>

                            {/* About Dropdown */}
                            <div
                                className={`block py-4 text-lg font-medium cursor-pointer select-none ${pathname === "/about" ? "text-purple-600" : "text-black"}`}
                                onMouseEnter={() => setAboutOpen(true)}
                                onMouseLeave={() => setAboutOpen(false)}
                                onClick={() => setAboutOpen((v) => !v)}
                            >
                                <div className="flex items-center justify-between">
                                    {t('about')}
                                    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </div>
                                {aboutOpen && (
                                    <div className="pl-4 mt-2">
                                        {aboutItems.map((item) => (
                                            <Link
                                                key={item.title}
                                                href={item.href}
                                                className="block py-2 text-base text-gray-700 hover:text-purple-600"
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
                                    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </div>
                                {servicesOpen && (
                                    <div className="pl-4 mt-2">
                                        {components.map((item) => (
                                            <Link
                                                key={item.title}
                                                href={item.href}
                                                className="block py-2 text-base text-gray-700 hover:text-purple-600"
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
                        </div>

                        {/* Language Selector at Bottom */}
                        <div className=" py-6 px-4">
                            <button 
                                className="flex items-center gap-3 w-full justify-start"
                                onClick={toggleLanguage}
                            >
                                <Image
                                    src={global}
                                    alt="Language"
                                    width={20}
                                    height={20}
                                />
                                <span className="text-black text-lg">{t('language')}</span>
                            </button>
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

    // عناصر About
    const aboutItems = [
        { title: t('components'), href: "#" },
        { title: t('documentation'), href: "#" },
        { title: t('blocks'), href: "#" },
    ];

    // عناصر Services
    const servicesItems = [
        {
            title: t('alertDialog'),
            href: "/docs/primitives/alert-dialog",
        },
        {
            title: t('hoverCard'),
            href: "/docs/primitives/hover-card",
        },
        {
            title: t('progress'),
            href: "/docs/primitives/progress",
        },
        {
            title: t('scrollArea'),
            href: "/docs/primitives/scroll-area",
        },
        {
            title: t('tabs'),
            href: "/docs/primitives/tabs",
        },
        {
            title: t('tooltip'),
            href: "/docs/primitives/tooltip",
        },
    ];



    return (
        <>
                <div className="hidden md:flex">    
                <NavigationMenu className="px-20 hidden md:flex ">
            <Image
                src={logo}
                alt="Logo"
                width={245}
                height={80}
                        className=""
                    />
                    <NavigationMenuList className="" key={pathname}>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className="bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent">
                                <Link href="/" className={`px-4 py-2 rounded-none text-[15px] font-medium transition-colors duration-200 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent ${pathname === "/" ? "text-purple-600" : "text-black"}`}>{t('home')}</Link>
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
                                    className={`px-4 py-2 rounded-none text-[15px] font-medium transition-colors duration-200 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent ${aboutDropdownOpen || pathname === "/about" ? "text-purple-600" : "text-black"}`}
                                >
                                    {t('about')}
                                </Link>
                                </NavigationMenuLink>
                            {aboutDropdownOpen && (
                                <div className="absolute mt-2 bg-white shadow-lg rounded-md py-2 min-w-[180px] z-50">
                                    {aboutItems.map((item) => (
                                        <Link
                                            key={item.title}
                                            href={item.href}
                                            className="block px-4 py-2 text-black hover:text-purple-600 hover:bg-gray-100 text-base whitespace-nowrap"
                                        >
                                            {item.title}
                                        </Link>
                                    ))}
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
                                    className={`px-4 py-2 rounded-none text-medium font-medium transition-colors duration-200 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent ${servicesDropdownOpen || pathname === "/services" ? "text-purple-600" : "text-black"}`}
                                >
                                    {t('services')}
                                </Link>
                            </NavigationMenuLink>
                            {servicesDropdownOpen && (
                                <div className="absolute mt-2 bg-white shadow-lg rounded-md py-2 min-w-[220px] z-50">
                                    {servicesItems.map((item) => (
                                        <Link
                                            key={item.title}
                                            href={item.href}
                                            className="block px-4 py-2 text-black hover:text-purple-600 hover:bg-gray-100 text-base whitespace-nowrap"
                                        >
                                            {item.title}
                                        </Link>
                                    ))}
                                </div>
                            )}
                </NavigationMenuItem>

                <NavigationMenuItem>
                            <NavigationMenuLink asChild className="bg-transparent md:text-[15px] hover:bg-transparent focus:bg-transparent active:bg-transparent">
                                <Link href="/casestudies" className={`px-4 py-2 rounded-none text-base font-medium transition-colors duration-200 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent ${pathname === "/casestudies" ? "text-purple-600" : "text-black"}`}>{t('caseStudies')}</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                            <NavigationMenuLink asChild className="bg-transparent md:text-[15px] hover:bg-transparent focus:bg-transparent active:bg-transparent">
                                <Link href="/ourteam" className={`px-4 py-2 rounded-none text-base font-medium transition-colors duration-200 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent ${pathname === "/ourteam" ? "text-purple-600" : "text-black"}`}>{t('ourTeam')}</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                            <NavigationMenuLink asChild className="bg-transparent md:text-[15px] hover:bg-transparent focus:bg-transparent active:bg-transparent">
                                <Link href="/careers" className={`px-4 py-2 rounded-none text-base font-medium transition-colors duration-200 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent ${pathname === "/careers" ? "text-purple-600" : "text-black"}`}>{t('career')}</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                            <NavigationMenuLink asChild className="bg-transparent md:text-[15px] hover:bg-transparent focus:bg-transparent active:bg-transparent">
                                <Link href="/contactus" className={`px-4 py-2 rounded-none text-base font-medium transition-colors duration-200 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent ${pathname === "/contactus" ? "text-purple-600" : "text-black"}`}>{t('contactUs')}</Link>
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













