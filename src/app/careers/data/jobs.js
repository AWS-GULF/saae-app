export const jobsData = {
  freshGraduate: [
    {
      id: 'FG01',
      title: 'Business Analyst Intern',
      code: 'FG01',
      location: 'Riyadh, Saudi Arabia',
      department: 'Strategy & Business Consulting',
      type: 'Internship (Full-time / Part-time)',
      summary:
        "Support SAEE's consulting teams in data collection, analysis, and reporting to help clients improve operations, performance, and strategy execution.",
      responsibilities: [
        'Conduct research and gather data from clients, public sources, and internal databases',
        'Analyze data and prepare clear, structured reports and presentations',
        'Support consultants in developing business solutions and strategic recommendations',
        'Participate in internal meetings, workshops, and client engagements',
        'Assist in documenting client requirements and tracking project deliverables',
        'Maintain confidentiality and follow quality standards'
      ],
      requirements: [
        "Bachelor's degree in Business Administration, Economics, Industrial Engineering, or related field (or currently enrolled)",
        'Strong analytical, research, and problem-solving skills',
        'Proficiency in Microsoft Excel, PowerPoint, and Word',
        'Strong written and verbal communication in Arabic and English',
        'Saudi National',
        'Demonstrated interest in consulting or business strategy'
      ],
      offers: [
        'Hands-on experience in real consulting projects',
        'Mentorship by experienced professionals',
        'Certificate of internship completion',
        'Priority consideration for full-time roles',
        'Exposure to multi-sector challenges in the Saudi market'
      ]
    },
    {
      id: 'FG02',
      title: 'HR Assistant Intern',
      code: 'FG02',
      location: 'Riyadh, Saudi Arabia',
      department: 'Human Resources',
      type: 'Internship (Full-time / Part-time)',
      summary:
        'Support HR operations and gain experience in talent acquisition, employee relations, and HR administration.',
      responsibilities: [
        'Assist in recruitment and screening processes',
        'Support employee onboarding and orientation programs',
        'Help maintain HR records and databases',
        'Assist in organizing training and development programs',
        'Support HR projects and initiatives',
        'Handle administrative tasks and correspondence'
      ],
      requirements: [
        "Bachelor's degree in Human Resources, Business Administration, or related field (or currently enrolled)",
        'Strong organizational and communication skills',
        'Proficiency in Microsoft Office Suite',
        'Attention to detail and confidentiality',
        'Saudi National',
        'Interest in HR career development'
      ],
      offers: [
        'Comprehensive HR experience across functions',
        'Professional development opportunities',
        'Certificate of internship completion',
        'Networking opportunities within the industry',
        'Potential for full-time employment'
      ]
    },
    {
      id: 'FG03',
      title: 'Marketing Trainee',
      code: 'FG03',
      location: 'Riyadh, Saudi Arabia',
      department: 'Marketing & Communications',
      type: 'Trainee Program (Full-time)',
      summary:
        'Join our marketing team to develop skills in digital marketing, content creation, and brand management.',
      responsibilities: [
        'Support marketing campaigns and initiatives',
        'Assist in content creation for digital platforms',
        'Help with market research and analysis',
        'Support event planning and execution',
        'Contribute to social media management',
        'Assist in brand development activities'
      ],
      requirements: [
        "Bachelor's degree in Marketing, Communications, or related field (or currently enrolled)",
        'Creative thinking and strong communication skills',
        'Basic knowledge of digital marketing tools',
        'Proficiency in design software is a plus',
        'Saudi National',
        'Passion for marketing and brand building'
      ],
      offers: [
        'Training in modern marketing techniques',
        'Creative project involvement',
        'Certificate of program completion',
        'Industry exposure and networking',
        'Career advancement opportunities'
      ]
    }
  ]
};

export function getJobByCode(code) {
  if (!code) return null;
  const codeUpper = String(code).toUpperCase();
  const allJobs = [...jobsData.freshGraduate];
  return allJobs.find((job) => job.code.toUpperCase() === codeUpper) || null;
}


