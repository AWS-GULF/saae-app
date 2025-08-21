import React from 'react'
import MarginedSection from '@/components/ui/MarginedSection'
import { getJobByCode } from '@/app/careers/data/jobs'
import PagesHero from '@/components/ui/PagesHero'
import careersBG from '@/Assets/images/careersBG.svg'
import Link from 'next/link'

export default function JobDescriptionPage({ params }) {
  const { code } = params
  const job = getJobByCode(code)

  return (
    <>
      {/* <PagesHero bg={careersBG} alt={'careersBG'} title={job ? job.title : 'Job Details'} /> */}
      <MarginedSection>
        {!job ? (
          <div className="py-12">
            <h2 className="text-2xl font-bold mb-4">Job not found</h2>
            <Link href="/careers" className="text-purple-600 underline">Back to Careers</Link>
          </div>
        ) : (
          <div className="py-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
                  <div className="space-y-1 text-gray-700">
                    <p><strong>Code:</strong> {job.code}</p>
                    <p><strong>Location:</strong> {job.location}</p>
                    <p><strong>Department:</strong> {job.department}</p>
                    <p><strong>Type:</strong> {job.type}</p>
                  </div>
                </div>
                <Link
                  href={`/careers/application?job=${encodeURIComponent(job.code)}`}
                  className="bg-purple-600 self-start text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  Apply Now
                </Link>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-purple-800 mb-3">Role Summary</h3>
                  <p className="text-gray-700 leading-relaxed">{job.summary}</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-purple-800 mb-3">Key Responsibilities</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {job.responsibilities.map((resp, index) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-purple-800 mb-3">Requirements</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {job.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-purple-800 mb-3">What We Offer</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {job.offers.map((offer, index) => (
                      <li key={index}>{offer}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </MarginedSection>
    </>
  )
}


