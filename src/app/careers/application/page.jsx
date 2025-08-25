"use client"
import React, { useEffect, useState, Suspense } from 'react'
import MarginedSection from '@/components/ui/MarginedSection'
import { Upload } from 'lucide-react'
import saudiArabiaIcon from "@/Assets/icons/saudiArabiaIcon.svg"
import ConfirmApplication from '@/components/ConfirmApplication/ConfirmApplication'
import { useLanguage } from '@/hooks/useLanguage'

import { useSearchParams } from 'next/navigation'
import Image from 'next/image'

// مكون منفصل لاستخدام useSearchParams
function ApplicationForm() {
  const { t, dir } = useLanguage()
  const searchParams = useSearchParams()
  const jobParam = searchParams.get('job') || ''

  const [formData, setFormData] = useState({
    firstName: '',
    secondName: '',
    familyName: '',
    birthDay: '',
    gender: '',
    homePhone: '',
    mobilePhone: '',
    email: '',
    address: '',
    city: '',
    linkedinProfile: '',
    jobCode: '',
    resume: null,
    coverLetter: '',
    privacyAgreed: false,
    infoAccurate: false
  })
  const [triedSubmit, setTriedSubmit] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [touched, setTouched] = useState({
    firstName: false,
    secondName: false,
    familyName: false,
    birthDay: false,
    gender: false,
    homePhone: false,
    mobilePhone: false,
    email: false,
    address: false,
    city: false,
    linkedinProfile: false,
    jobCode: false,
    resume: false,
    coverLetter: false,
    privacyAgreed: false,
    infoAccurate: false
  })

  const markTouched = (field) => setTouched(prev => ({ ...prev, [field]: true }))

  useEffect(() => {
    if (jobParam) {
      setFormData((prev) => ({ ...prev, jobCode: jobParam }))
    }
  }, [jobParam])

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  // Helpers: native validation messages without altering styles
  const setMessage = (el, msg) => {
    if (!el) return
    el.setCustomValidity(msg || '')
  }
  const validateOnBlur = (field) => (e) => {
    const el = e.target
    let msg = ''
    const v = el.type === 'checkbox' ? el.checked : el.value
    switch (field) {
      case 'firstName':
      case 'secondName':
      case 'familyName':
      case 'address':
      case 'city':
      case 'jobCode':
      case 'coverLetter':
        if (!v) msg = 'This field is required'
        break
      case 'birthDay':
        if (!v) msg = 'Birth Day is required'
        break
      case 'gender':
        if (!v) msg = 'Gender is required'
        break
      case 'homePhone':
        if (!v) msg = 'Home Telephone is required'
        break
      case 'mobilePhone': {
        if (!v) msg = 'Mobile Telephone is required'
        else if (!/^\d{7,15}$/.test(String(v).replace(/\D/g, ''))) msg = 'Enter 7-15 digits'
        break
      }
      case 'email':
        if (!v) msg = 'Email is required'
        else if (!/[^\s@]+@[^\s@]+\.[^\s@]+/.test(String(v))) msg = 'Enter a valid email'
        break
      case 'linkedinProfile':
        if (!v) msg = 'LinkedIn Profile is required'
        else if (!/^https?:\/\//.test(String(v))) msg = 'Link must start with http or https'
        break
      case 'resume':
        if (!formData.resume) msg = 'Resume is required'
        break
      case 'privacyAgreed':
        if (!v) msg = 'You must agree to the privacy notice'
        break
      case 'infoAccurate':
        if (!v) msg = 'You must confirm information accuracy'
        break
      default:
        msg = ''
    }
    setMessage(el, msg)
    el.reportValidity()
  }

  const isEmailValid = /[^\s@]+@[^\s@]+\.[^\s@]+/.test(formData.email)
  const isMobileValid = /^\d{7,15}$/.test(String(formData.mobilePhone).replace(/\D/g, ''))
  const isLinkedInValid = formData.linkedinProfile ? /^https?:\/\//.test(formData.linkedinProfile) : false
  const requiredFilled = [
    formData.firstName,
    formData.secondName,
    formData.familyName,
    formData.birthDay,
    formData.gender,
    formData.homePhone,
    formData.address,
    formData.city,
    formData.jobCode,
    formData.coverLetter,
  ].every(Boolean) && !!formData.resume
  const canSubmit = requiredFilled && isEmailValid && isMobileValid && isLinkedInValid && formData.privacyAgreed && formData.infoAccurate

  const fieldError = (field) => {
    switch (field) {
      case 'firstName':
        return formData.firstName ? '' : t("application_first_name_required")
      case 'secondName':
        return formData.secondName ? '' : t("application_second_name_required")
      case 'familyName':
        return formData.familyName ? '' : t("application_family_name_required")
      case 'address':
        return formData.address ? '' : t("application_address_required")
      case 'city':
        return formData.city ? '' : t("application_city_required")
      case 'jobCode':
        return formData.jobCode ? '' : t("application_job_code_required")
      case 'coverLetter':
        return formData.coverLetter ? '' : t("application_cover_letter_required")
      case 'birthDay':
        return formData.birthDay ? '' : t("application_birthday_required")
      case 'gender':
        return formData.gender ? '' : t("application_gender_required")
      case 'homePhone':
        return formData.homePhone ? '' : t("application_home_phone_required")
      case 'mobilePhone':
        if (!formData.mobilePhone) return t("application_mobile_phone_required")
        return isMobileValid ? '' : t("application_mobile_phone_invalid")
      case 'email':
        if (!formData.email) return t("application_email_required")
        return isEmailValid ? '' : t("application_email_invalid")
      case 'linkedinProfile':
        if (!formData.linkedinProfile) return t("application_linkedin_required")
        return isLinkedInValid ? '' : t("application_linkedin_invalid")
      case 'resume':
        return formData.resume ? '' : t("application_resume_required")
      case 'privacyAgreed':
        return formData.privacyAgreed ? '' : t("application_privacy_agreement_required")
      case 'infoAccurate':
        return formData.infoAccurate ? '' : t("application_info_accuracy_required")
      default:
        return ''
    }
  }

  const handleSubmit = () => {
    setTriedSubmit(true)
    if (!canSubmit) return
    console.log('Application submitted:', formData)
    setShowConfirmation(true)
    setFormData({
      firstName: '',
      secondName: '',
      familyName: '',
      birthDay: '',
      gender: '',
      homePhone: '',
      mobilePhone: '',
      email: '',
      address: '',
      city: '',
      linkedinProfile: '',
      jobCode: '',
      resume: null,
      coverLetter: '',
      privacyAgreed: false,
      infoAccurate: false
    })
    setTouched({
      firstName: false,
      secondName: false,
      familyName: false,
      birthDay: false,
      gender: false,
      homePhone: false,
      mobilePhone: false,
      email: false,
      address: false,
      city: false,
      linkedinProfile: false,
      jobCode: false,
      resume: false,
      coverLetter: false,
      privacyAgreed: false,
      infoAccurate: false
    })
    setTriedSubmit(false)
  }

  return (
    <>
      {/* <PagesHero bg={careersBG} alt={'careersBG'} title={'Application'} /> */}
      <MarginedSection>
        <div className="pb-8">
                      <div className="bg-white rounded-lg max-w-screen-lg mx-auto" dir={dir}>
              <h1 className='text-center text-3xl font-bold'>{t("application_form_title")}</h1>
              <div className="p-6">
              <div className="text-start mb-4">
                <h3 className="text-2xl font-bold mb-2">{t("application_apply_now_title")}</h3>
                <p className="text font-[500] border-b border-[#EEEEEE] pb-4">{t("application_apply_now_desc")}</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-4">{t("application_personal_information")}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <input
                        type="text"
                        placeholder={t("application_first_name_placeholder")}
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        onBlur={() => markTouched('firstName')}
                        className="w-full p-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                      {(touched.firstName || triedSubmit) && fieldError('firstName') && (
                        <p className="text-xs text-red-600 mt-1 ml-1">{fieldError('firstName')}</p>
                      )}
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder={t("application_second_name_placeholder")}
                        value={formData.secondName}
                        onChange={(e) => handleInputChange('secondName', e.target.value)}
                        onBlur={() => markTouched('secondName')}
                        className="w-full p-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                      {(touched.secondName || triedSubmit) && fieldError('secondName') && (
                        <p className="text-xs text-red-600 mt-1 ml-1">{fieldError('secondName')}</p>
                      )}
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder={t("application_family_name_placeholder")}
                        value={formData.familyName}
                        onChange={(e) => handleInputChange('familyName', e.target.value)}
                        onBlur={() => markTouched('familyName')}
                        className="w-full p-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                      {(touched.familyName || triedSubmit) && fieldError('familyName') && (
                        <p className="text-xs text-red-600 mt-1 ml-1">{fieldError('familyName')}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <input
                        type="date"
                        placeholder={t("application_birthday_placeholder")}
                        value={formData.birthDay}
                        onChange={(e) => handleInputChange('birthDay', e.target.value)}
                        onBlur={() => markTouched('birthDay')}
                        className="w-full p-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                      {(touched.birthDay || triedSubmit) && fieldError('birthDay') && (
                        <p className="text-xs text-red-600 mt-1 ml-1">{fieldError('birthDay')}</p>
                      )}
                    </div>
                    <div>
                      <select
                        value={formData.gender}
                        onChange={(e) => handleInputChange('gender', e.target.value)}
                        onBlur={() => markTouched('gender')}
                        className="w-full p-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="">{t("application_gender_placeholder")}</option>
                        <option value="male">{t("application_gender_male")}</option>
                        <option value="female">{t("application_gender_female")}</option>
                      </select>
                      {(touched.gender || triedSubmit) && fieldError('gender') && (
                        <p className="text-xs text-red-600 mt-1 ml-1">{fieldError('gender')}</p>
                      )}
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder={t("application_home_phone_placeholder")}
                        value={formData.homePhone}
                        onChange={(e) => handleInputChange('homePhone', e.target.value)}
                        onBlur={() => markTouched('homePhone')}
                        className="w-full p-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                      {(touched.homePhone || triedSubmit) && fieldError('homePhone') && (
                        <p className="text-xs text-red-600 mt-1 ml-1">{fieldError('homePhone')}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <div className="flex">
                        <div className="flex items-center bg-gray-100 border border-gray-300 rounded-l px-3">
                          <div className="sm:px-2 text-sm border-[#AAAAAA] flex items-center gap-1 w-[45px] sm:min-w-[70px]">
                            <Image src={saudiArabiaIcon} alt="Saudi Arabia" width={20} height={20} />
                            <span>+966</span>
                          </div>
                        </div>
                        <input
                          type="tel"
                          placeholder={t("application_mobile_phone_placeholder")}
                          value={formData.mobilePhone}
                          onChange={(e) => handleInputChange('mobilePhone', e.target.value)}
                          onBlur={() => markTouched('mobilePhone')}
                          className="flex-1 p-3 border border-l-0 border-gray-300 rounded-r bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </div>
                      {(touched.mobilePhone || triedSubmit) && fieldError('mobilePhone') && (
                        <p className="text-xs text-red-600 mt-1 ml-1">{fieldError('mobilePhone')}</p>
                      )}
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder={t("application_email_placeholder")}
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        onBlur={() => markTouched('email')}
                        className="w-full p-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                      {(touched.email || triedSubmit) && fieldError('email') && (
                        <p className="text-xs text-red-600 mt-1 ml-1">{fieldError('email')}</p>
                      )}
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder={t("application_address_placeholder")}
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        onBlur={() => markTouched('address')}
                        className="w-full p-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                      {(touched.address || triedSubmit) && fieldError('address') && (
                        <p className="text-xs text-red-600 mt-1 ml-1">{fieldError('address')}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <input
                        type="text"
                        placeholder={t("application_city_placeholder")}
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        onBlur={() => markTouched('city')}
                        className="w-full p-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                      {(touched.city || triedSubmit) && fieldError('city') && (
                        <p className="text-xs text-red-600 mt-1 ml-1">{fieldError('city')}</p>
                      )}
                    </div>
                    <div>
                      <input
                        type="url"
                        placeholder={t("application_linkedin_placeholder")}
                        value={formData.linkedinProfile}
                        onChange={(e) => handleInputChange('linkedinProfile', e.target.value)}
                        onBlur={() => markTouched('linkedinProfile')}
                        className="w-full p-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                      {(touched.linkedinProfile || triedSubmit) && fieldError('linkedinProfile') && (
                        <p className="text-xs text-red-600 mt-1 ml-1">{fieldError('linkedinProfile')}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4">{t("application_application_details")}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <input
                        type="text"
                        placeholder={t("application_job_code_placeholder")}
                        value={formData.jobCode}
                        onChange={(e) => handleInputChange('jobCode', e.target.value)}
                        onBlur={() => markTouched('jobCode')}
                        className="w-full p-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                      {(touched.jobCode || triedSubmit) && fieldError('jobCode') && (
                        <p className="text-xs text-red-600 mt-1 ml-1">{fieldError('jobCode')}</p>
                      )}
                    </div>
                    <div>
                      <div className="relative">
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={(e) => handleInputChange('resume', e.target.files[0])}
                          onBlur={() => markTouched('resume')}
                          id="resume-upload"
                          className="hidden"
                        />
                        <label 
                          htmlFor="resume-upload"
                          className="flex items-center justify-between p-3 border border-gray-300 rounded bg-gray-100 cursor-pointer hover:bg-gray-200 focus-within:ring-2 focus-within:ring-purple-500"
                        >
                          <span className="text-gray-600">
                            {formData.resume ? formData.resume.name : t("application_resume_upload")}
                          </span>
                          <Upload size={20} className="text-gray-400" />
                        </label>
                      </div>
                      {(touched.resume || triedSubmit) && fieldError('resume') && (
                        <p className="text-xs text-red-600 mt-1 ml-1">{fieldError('resume')}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4">{t("application_cover_letter")}</h4>
                  <div>
                    <textarea
                      placeholder={t("application_cover_letter_placeholder")}
                      value={formData.coverLetter}
                      onChange={(e) => handleInputChange('coverLetter', e.target.value)}
                      onBlur={() => markTouched('coverLetter')}
                      rows={8}
                      className="w-full p-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-vertical"
                    />
                    {(touched.coverLetter || triedSubmit) && fieldError('coverLetter') && (
                      <p className="text-xs text-red-600 mt-1 ml-1">{fieldError('coverLetter')}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-md font-[500]">
                    {t("application_privacy_notice_text")}{' '}
                    <span className="text-[#764895] underline cursor-pointer">{t("application_privacy_notice_link")}</span>.
                  </p>
                  
                  <div className="space-y-2">
                    <div>
                      <label className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          checked={formData.privacyAgreed}
                          onChange={(e) => handleInputChange('privacyAgreed', e.target.checked)}
                          onBlur={() => markTouched('privacyAgreed')}
                          className="mt-1 w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                        />
                        <span className="text-md font-[500]">
                          {t("application_privacy_agreement")}
                        </span>
                      </label>
                      {(touched.privacyAgreed || triedSubmit) && fieldError('privacyAgreed') && (
                        <p className="text-xs text-red-600 mt-1 ml-1">{fieldError('privacyAgreed')}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          checked={formData.infoAccurate}
                          onChange={(e) => handleInputChange('infoAccurate', e.target.checked)}
                          onBlur={() => markTouched('infoAccurate')}
                          className="mt-1 w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                        />
                        <span className="text-md font-[500] ">
                          {t("application_info_accuracy")}
                        </span>
                      </label>
                      {(touched.infoAccurate || triedSubmit) && fieldError('infoAccurate') && (
                        <p className="text-xs text-red-600 mt-1 ml-1">{fieldError('infoAccurate')}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <button
                    onClick={handleSubmit}
                    disabled={!canSubmit}
                    aria-disabled={!canSubmit}
                    className="bg-[#764895] text-white px-8 py-3 rounded-[8px] font-semibold hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                  >
                    {t("application_submit_button")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MarginedSection>
      
      {/* Confirmation Modal */}
      <ConfirmApplication
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
      />
    </>
  )
}

// مكون رئيسي مع Suspense boundary
export default function ApplicationPage() {
  return (
    <Suspense fallback={<div className="text-center p-8">Loading...</div>}>
      <ApplicationForm />
    </Suspense>
  )
}