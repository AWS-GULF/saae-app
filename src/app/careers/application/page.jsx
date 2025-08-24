"use client"
import React, { useEffect, useState, Suspense } from 'react'
import MarginedSection from '@/components/ui/MarginedSection'
import { Upload } from 'lucide-react'
import saudiArabiaIcon from "@/Assets/icons/saudiArabiaIcon.svg"

import { useSearchParams } from 'next/navigation'
import Image from 'next/image'

// مكون منفصل لاستخدام useSearchParams
function ApplicationForm() {
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

  useEffect(() => {
    if (jobParam) {
      setFormData((prev) => ({ ...prev, jobCode: jobParam }))
    }
  }, [jobParam])

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = () => {
    console.log('Application submitted:', formData)
    alert('Application submitted successfully!')
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
  }

  return (
    <>
      {/* <PagesHero bg={careersBG} alt={'careersBG'} title={'Application'} /> */}
      <MarginedSection>
        <div className="pb-8">
          <div className="bg-white rounded-lg max-w-screen-lg mx-auto">
            <h1 className='text-center text-3xl font-bold'>Application Form</h1>
            <div className="p-6">
              <div className="text-start mb-4">
                <h3 className="text-2xl font-bold mb-2">Apply Now</h3>
                <p className="text font-[500] border-b border-[#EEEEEE] pb-4">Join SAEE and be part of impactful change.</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-4">Personal Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <input
                      type="text"
                      placeholder="First Name *"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="p-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <input
                      type="text"
                      placeholder="Second Name *"
                      value={formData.secondName}
                      onChange={(e) => handleInputChange('secondName', e.target.value)}
                      className="p-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <input
                      type="text"
                      placeholder="Family Name *"
                      value={formData.familyName}
                      onChange={(e) => handleInputChange('familyName', e.target.value)}
                      className="p-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <input
                      type="date"
                      placeholder="Birth Day *"
                      value={formData.birthDay}
                      onChange={(e) => handleInputChange('birthDay', e.target.value)}
                      className="p-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <select
                      value={formData.gender}
                      onChange={(e) => handleInputChange('gender', e.target.value)}
                      className="p-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="">Gender *</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                    <input
                      type="tel"
                      placeholder="Home Telephone *"
                      value={formData.homePhone}
                      onChange={(e) => handleInputChange('homePhone', e.target.value)}
                      className="p-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex">
                      <div className="flex items-center bg-gray-100 border border-gray-300 rounded-l px-3">
                        <div className="px-2 text-sm border-[#AAAAAA] flex items-center gap-1 min-w-[70px]">
                          <Image src={saudiArabiaIcon} alt="Saudi Arabia" width={20} height={20} />
                          <span>+966</span>
                        </div>
                      </div>
                      <input
                        type="tel"
                        placeholder="Mobile Telephone *"
                        value={formData.mobilePhone}
                        onChange={(e) => handleInputChange('mobilePhone', e.target.value)}
                        className="flex-1 p-3 border border-l-0 border-gray-300 rounded-r bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <input
                      type="email"
                      placeholder="Your Email *"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="p-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <input
                      type="text"
                      placeholder="Address *"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      className="p-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <input
                      type="text"
                      placeholder="City *"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className="p-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <input
                      type="url"
                      placeholder="LinkedIn Profile *"
                      value={formData.linkedinProfile}
                      onChange={(e) => handleInputChange('linkedinProfile', e.target.value)}
                      className="p-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4">Application Details</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <input
                      type="text"
                      placeholder="Job Code *"
                      value={formData.jobCode}
                      onChange={(e) => handleInputChange('jobCode', e.target.value)}
                      className="p-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <div className="relative">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => handleInputChange('resume', e.target.files[0])}
                        className="hidden"
                        id="resume-upload"
                      />
                      <label 
                        htmlFor="resume-upload"
                        className="flex items-center justify-between p-3 border border-gray-300 rounded bg-gray-100 cursor-pointer hover:bg-gray-200 focus-within:ring-2 focus-within:ring-purple-500"
                      >
                        <span className="text-gray-600">
                          {formData.resume ? formData.resume.name : 'Upload Resume (PDF/DOCX) *'}
                        </span>
                        <Upload size={20} className="text-gray-400" />
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4">Cover Letter</h4>
                  <textarea
                    placeholder="Cover Letter ..."
                    value={formData.coverLetter}
                    onChange={(e) => handleInputChange('coverLetter', e.target.value)}
                    rows={8}
                    className="w-full p-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-vertical"
                  />
                </div>

                <div className="space-y-4">
                  <p className="text-md font-[500]">
                    By submitting this form, you acknowledge that you have read SAEE's data{' '}
                    <span className="text-[#764895] underline cursor-pointer">privacy notice</span>.
                  </p>
                  
                  <div className="space-y-2">
                    <label className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        checked={formData.privacyAgreed}
                        onChange={(e) => handleInputChange('privacyAgreed', e.target.checked)}
                        className="mt-1 w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                      />
                      <span className="text-md font-[500]">
                        I have read and agree to the SAEE data privacy notice.
                      </span>
                    </label>
                    
                    <label className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        checked={formData.infoAccurate}
                        onChange={(e) => handleInputChange('infoAccurate', e.target.checked)}
                        className="mt-1 w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                      />
                      <span className="text-md font-[500] ">
                        I confirm that the information provided is accurate
                      </span>
                    </label>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <button
                    onClick={handleSubmit}
                    className="bg-[#764895] text-white px-8 py-3 rounded-[8px] font-semibold hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                  >
                    Submit Application
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MarginedSection>
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


