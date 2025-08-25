
"use client"

import MarginedSection from '@/components/ui/MarginedSection'
import React, { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/hooks/useLanguage'

function AnimatedCounter({ end, duration = 1500, prefix = "" }) {
    const [value, setValue] = useState(0)
    const ref = useRef(null)
    const startedRef = useRef(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !startedRef.current) {
                    startedRef.current = true
                    const startTime = performance.now()
                    const animate = (now) => {
                        const elapsed = now - startTime
                        const progress = Math.min(elapsed / duration, 1)
                        const current = Math.floor(progress * end)
                        setValue(current)
                        if (progress < 1) requestAnimationFrame(animate)
                    }
                    requestAnimationFrame(animate)
                }
            })
        }, { threshold: 0.3 })

        observer.observe(el)
        return () => observer.disconnect()
    }, [end, duration])

    return (
        <div ref={ref} className="text-[56px] font-bold text-secondary mb-2">
            {prefix}{value}
        </div>
    )
}

export default function SaeeNumbers() {
    const { t } = useLanguage();
    return (
        <MarginedSection>
            <section className="lg:mt-10 mt-5 pb-10">
                <div className="flex flex-col lg:flex-row items-start  justify-between gap-8 lg:gap-12 ">
                    {/* Left side - Text content */}
                    <div className="lg:w-3/4 space-y-4 w-full">
                        <h2 className="text-2xl lg:text-3xl font-bold leading-tight mb-2 ">
                            {t('saee_in_numbers_title')}
                        </h2>

                        <p className="lg:text-[28px] sm:text-xl text-xl font-[500]   leading-[42px] mb-8  ">
                            {t('saee_in_numbers_desc')}
                        </p>
                    </div>

                    {/* Right side - Statistics */}
                    <div className="lg:w-1/2 w-full flex flex-wrap lg:flex-nowrap gap-8 lg:gap-12 justify-center sm:justify-evenly lg:justify-end">
                        {/* Professional Certifications */}
                        <div className="text-center">
                            <AnimatedCounter end={30} prefix="+" />
                            <div className="font-bold text-base lg:text-2xl">
                                {t('saee_certifications_label')}
                            </div>
                        </div>

                        {/* Certified Consultants */}
                        <div className="text-center">
                            <AnimatedCounter end={40} prefix="+" />
                            <div className="font-bold text-base lg:text-2xl">
                                {t('saee_consultants_label')}
                            </div>
                        </div>

                        {/* Years of Experience */}
                        <div className="text-center">
                            <AnimatedCounter end={20} />
                            <div className="font-bold text-base lg:text-2xl">
                                {t('saee_experience_label')}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MarginedSection>
    )
}