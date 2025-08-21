

"use client"
import  { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { jobsData } from '@/app/careers/data/jobs';

const CareersFlow = () => {
  const [expandedSections, setExpandedSections] = useState({
    freshGraduate: true,
    technical: false,
    administrative: false
  });
  const router = useRouter();
  // Inline selection and modal are removed in favor of dedicated routes

  

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleViewDetails = (job) => {
    router.push(`/careers/jobdescribtion/${job.code}`);
  };

  const handleApplyNow = (job = null) => {
    const code = job?.code ? job.code : '';
    const query = code ? `?job=${encodeURIComponent(code)}` : '';
    router.push(`/careers/application${query}`);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log('Application submitted:', formData);
    alert('Application submitted successfully!');
    setShowApplication(false);
    setSelectedJob(null);
    // Reset form
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
    });
  };

  // Application UI moved to dedicated route /careers/application

  // Job details UI moved to dedicated route /careers/jobdescribtion/[code]

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-6">Explore Current Openings</h3>
        
        {/* Graduate Opportunities Section */}
        <div className="bg-gray-50 rounded-lg overflow-hidden mb-4">
          <div className="bg-purple-100 p-4">
            <h4 className="text-xl font-bold text-gray-800 mb-4">Graduate Opportunities</h4>
            
            <div className="bg-white rounded-lg overflow-hidden">
              <button
                onClick={() => toggleSection('freshGraduate')}
                className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-purple-700">Fresh Graduate</span>
                {expandedSections.freshGraduate ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              
              {expandedSections.freshGraduate && (
                <div className="border-t">
                  {jobsData.freshGraduate.map((job) => (
                    <div key={job.id} className="p-4 border-b last:border-b-0 flex items-center justify-between hover:bg-gray-50">
                      <span className="text-purple-700 font-medium">{job.title} (Code: {job.code})</span>
                      <button
                        onClick={() => handleViewDetails(job)}
                        className="bg-purple-600 text-white px-4 py-2 rounded font-medium hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 text-sm"
                      >
                        View Details
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Technical Roles Section */}
        <div className="bg-gray-50 rounded-lg overflow-hidden mb-4">
          <h4 className="text-xl font-bold text-gray-800 p-4 mb-2">Technical Roles</h4>
          <div className="px-4 pb-4">
            <div className="bg-white rounded-lg overflow-hidden">
              <button
                onClick={() => toggleSection('technical')}
                className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-purple-700">Technology & Digital Solutions</span>
                {expandedSections.technical ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              
              {expandedSections.technical && (
                <div className="border-t p-4">
                  <p className="text-gray-600 text-center">No current openings in this category.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Administrative Roles Section */}
        <div className="bg-gray-50 rounded-lg overflow-hidden">
          <h4 className="text-xl font-bold text-gray-800 p-4 mb-2">Administrative Roles</h4>
          <div className="px-4 pb-4 space-y-3">
            {[
              'Project Management',
              'Business Development', 
              'Marketing & Communications',
              'Client Services & Operations',
              'Human Resources',
              'Finance & Accounting'
            ].map((role) => (
              <div key={role} className="bg-white rounded-lg">
                <button
                  onClick={() => toggleSection('administrative')}
                  className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-purple-700">{role}</span>
                  {expandedSections.administrative ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                
                {expandedSections.administrative && (
                  <div className="border-t p-4">
                    <p className="text-gray-600 text-center">No current openings in this category.</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersFlow;