
"use client"

import MarginedSection from '@/components/ui/MarginedSection'
import React from 'react'
import { useLanguage } from '@/hooks/useLanguage'

export default function SaeeNumbers() {
    const { t } = useLanguage();
    return (
        <MarginedSection>
            <section className="lg:mt-10 mt-5 pb-10">
                <div className="flex flex-col lg:flex-row items-start  justify-between gap-8 lg:gap-12">
                    {/* Left side - Text content */}
                    <div className="lg:w-3/4 space-y-4">
                        <h2 className="text-base sm:text-2xl lg:text-4xl font-bold leading-tight mb-2">
                            {t('saee_in_numbers_title')}
                        </h2>

                        <p className="lg:text-[28px] sm:text-xl text-xl font-[500]   leading-[42px] mb-8 text-justify ">
                            {t('saee_in_numbers_desc')}
                        </p>
                    </div>

                    {/* Right side - Statistics */}
                    <div className="lg:w-1/2 w-full flex flex-wrap lg:flex-nowrap gap-8 lg:gap-12 justify-between sm:justify-evenly lg:justify-end">
                        {/* Professional Certifications */}
                        <div className="text-center">
                            <div className="text-[56px] font-bold text-secondary mb-2">
                                {t('saee_certifications_number')}
                            </div>
                            <div className="font-bold text-base lg:text-2xl">
                                {t('saee_certifications_label')}
                            </div>
                        </div>

                        {/* Certified Consultants */}
                        <div className="text-center">
                            <div className="text-[56px] font-bold text-secondary mb-2">
                                {t('saee_consultants_number')}
                            </div>
                            <div className="font-bold text-base lg:text-2xl">
                                {t('saee_consultants_label')}
                            </div>
                        </div>

                        {/* Years of Experience */}
                        <div className="text-center">
                            <div className="text-[56px] font-bold text-secondary mb-2">
                                {t('saee_experience_number')}
                            </div>
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