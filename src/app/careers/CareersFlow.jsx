

"use client"
import { useState } from 'react';
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




    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-6">Explore Current Openings</h3>
                <h4 className="text-xl font-bold bg-white mb-4">Graduate Opportunities</h4>


                {/* Graduate Opportunities Section */}
                <div className="bg-gray-50  overflow-hidden  border-2 border-[#BCB2CC] rounded-[8px] ">
                    <div className="bg-[#EAE4EF] p-2">

                        <div className=" rounded-lg overflow-hidden">
                            <button
                                onClick={() => toggleSection('freshGraduate')}
                                className="w-full flex items-center justify-between bg-[#EAE4EF] transition-colors"
                            >
                                <span className="font-[500]  text-[#30086B] text-xl">Fresh Graduate</span>
                                {expandedSections.freshGraduate ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </button>

                            {expandedSections.freshGraduate && (
                                <div className="">
                                    {jobsData.freshGraduate.map((job) => (
                                        <div key={job.id} className="p-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-[#BCB2CC] bg-[#D5C6DE] rounded-[6px] hover:bg-gray-50 border mb-2">
                                            <span className="text-purple-700 font-medium break-words">{job.title} (Code: {job.code})</span>
                                            <button
                                                onClick={() => handleViewDetails(job)}
                                                className="bg-[#764895] text-white px-4 py-2 rounded font-medium hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 text-sm w-full sm:w-auto text-center"
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
                <div className="bg-gray-50 rounded-lg overflow-hidden ">
                    <h4 className="text-xl font-bold text-gray-800 p-4 mb-2">Technical Roles</h4>
                    <div className="px-4 ">
                        <div className="bg-white rounded-lg overflow-hidden w-full ">
                            <button
                                onClick={() => toggleSection('technical')}
                                className="p-2 w-full text-start flex items-center justify-between border-[#BCB2CC] bg-[#EAE4EF] rounded-[6px] border mb-2"
                            >
                                <p className="font-[400] text-[#30086B] text-lg flex items-center">Technology & Digital Solutions</p>
                                {expandedSections.technical ? <ChevronUp size={20} /> : <ChevronDown size={20} />}

                            </button>

                            {/* {expandedSections.technical && (
                                <div className="border-t p-4">
                                    <p className="text-gray-600 text-center">No current openings in this category.</p>
                                </div>
                            )} */}
                        </div>
                    </div>
                </div>











                {/* Administrative Roles Section */}
                <div className="bg-gray-50 rounded-lg overflow-hidden mb-4 sm:mb-8">
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
                                    className="p-2 w-full text-start flex items-center justify-between border-[#BCB2CC] bg-[#EAE4EF] rounded-[6px] border mb-2"

                                >
                                    <span className="font-[400] text-[#30086B] text-lg flex items-center">{role}</span>
                                    {expandedSections.administrative ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </button>

                                {/* {expandedSections.administrative && (
                                    <div className="border-t p-4">
                                        <p className="text-gray-600 text-center">No current openings in this category.</p>
                                    </div>
                                )} */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareersFlow;