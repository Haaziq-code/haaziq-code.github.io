import React, { useState } from 'react';

interface ResumeModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isVisible, onClose }) => {
  const [currentPage, setCurrentPage] = useState(1);

  if (!isVisible) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={handleOverlayClick}
      style={{ zIndex: 100000 }}
    >
      <div className="bg-white rounded-lg shadow-2xl max-w-4xl max-h-[90vh] overflow-hidden relative">
        {/* Header */}
        <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Haaziq Aamir - Resume</h2>
          <div className="flex items-center gap-4">
            {/* Page Navigation */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(1)}
                className={`px-3 py-1 rounded text-sm ${
                  currentPage === 1 ? 'bg-blue-600' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              >
                Page 1
              </button>
              <button
                onClick={() => setCurrentPage(2)}
                className={`px-3 py-1 rounded text-sm ${
                  currentPage === 2 ? 'bg-blue-600' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              >
                Page 2
              </button>
            </div>
            
            {/* Download Button */}
            <a
              href="/Resume_2025.pdf"
              download
              className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-sm flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Download PDF
            </a>
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="text-white hover:text-gray-300 text-2xl font-bold w-8 h-8 flex items-center justify-center"
            >
              ×
            </button>
          </div>
        </div>

        {/* Resume Content */}
        <div className="p-6 overflow-auto max-h-[80vh]">
          {currentPage === 1 ? (
            // Page 1 Content - Summary & Education
            <div className="max-w-3xl mx-auto bg-white">
              <div className="text-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Haaziq Aamir</h1>
                <div className="text-sm text-gray-600 mb-4">
                  40 Santo Crt, Breslau, ON | <a href="mailto:aamirh@uoguelph.ca" className="text-blue-600">aamirh@uoguelph.ca</a> | 437-259-2756 | <a href="https://linkedin.com/in/haaziq-aamir/" className="text-blue-600">linkedin.com/in/haaziq-aamir/</a>
                </div>
              </div>

              <div className="space-y-6">
                {/* Summary of Qualifications */}
                <div>
                  <h2 className="text-xl font-bold text-blue-600 mb-4">SUMMARY OF QUALIFICATIONS</h2>
                  <ul className="text-sm text-gray-700 space-y-2 ml-4">
                    <li>• Automated financial reporting and engineering tools using Java, Power BI, PowerShell and excel during my internship at Chartwell Retirement Residences, streamlining workflow and improving accuracy.</li>
                    <li>• Demonstrated teamwork and leadership as a member of university robotics and AI software teams, successfully delivering group projects and mentoring peers.</li>
                    <li>• Integrated Arduino hardware and sensors for home robotics projects, improving automation efficiency and reducing error rates in autonomous systems.</li>
                    <li>• Produced technical documentation and engineering deliverables with MS Word, Excel, and AutoCAD for lab reports and design assignments in Systems Engineering.</li>
                    <li>• Enhanced UI/UX with HTML and JavaScript while working as a Software Engineer Intern at ConcelConnect, leading to increased user satisfaction and product reliability.</li>
                    <li>• Adapted quickly to new academic and cultural challenges, transitioning from the UK to Ontario curriculum and maintaining high grades throughout.</li>
                  </ul>
                </div>

                {/* Education */}
                <div>
                  <h2 className="text-xl font-bold text-blue-600 mb-4">EDUCATION</h2>
                  
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Bachelor of Engineering, Systems Engineering (Co-op)</span>
                      <span className="text-sm text-gray-600">2024–Present</span>
                    </div>
                    <div className="text-sm text-gray-700 mb-2">University of Guelph, Guelph, ON</div>
                    <ul className="text-sm text-gray-700 space-y-1 ml-2">
                      <li>• Engineering Leadership Program</li>
                      <li>• Relevant coursework: Data Structures, Engineering Design, Mechanics, Digital System, Calculus</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Ontario Secondary School Diploma</span>
                      <span className="text-sm text-gray-600">2022–2024</span>
                    </div>
                    <div className="text-sm text-gray-700 mb-2">Grand River Collegiate Institute, Kitchener, ON</div>
                    <ul className="text-sm text-gray-700 space-y-1 ml-2">
                      <li>• Graduated with academic honours; completed Grades 11–12 after transfer from UK system</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Cambridge O-Levels, UK Curriculum</span>
                      <span className="text-sm text-gray-600">2020–2022</span>
                    </div>
                    <div className="text-sm text-gray-700 mb-2">Peshawar, Pakistan</div>
                    <ul className="text-sm text-gray-700 space-y-1 ml-2">
                      <li>• Achieved A grades in English, Physics, Mathematics, Chemistry, and Computer Science</li>
                    </ul>
                  </div>
                </div>

                {/* Work Experience */}
                <div>
                  <h2 className="text-xl font-bold text-blue-600 mb-4">WORK EXPERIENCE</h2>
                  
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Strategic Planning & General and Administrative Intern</span>
                      <span className="text-sm text-gray-600">May 2025– Present</span>
                    </div>
                    <div className="text-sm text-gray-700 mb-2">Chartwell Retirement Residences, Mississauga, ON</div>
                    <ul className="text-sm text-gray-700 space-y-1 ml-4">
                      <li>• Streamline budget reporting for annual planning by building and deploying PowerShell scripts and Excel automations, reducing manual workload by 70% and ensuring timely, accurate reporting.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Page 2 Content - Work Experience & Projects
            <div className="max-w-3xl mx-auto bg-white">
              <div className="text-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Haaziq Aamir</h1>
                <div className="text-sm text-gray-600 mb-4">
                  40 Santo Crt, Breslau, ON | <a href="mailto:aamirh@uoguelph.ca" className="text-blue-600">aamirh@uoguelph.ca</a> | 437-259-2756 | <a href="https://linkedin.com/in/haaziq-aamir/" className="text-blue-600">linkedin.com/in/haaziq-aamir/</a>
                </div>
              </div>

              <div className="space-y-6">
                {/* Work Experience */}
                <div>
                  <h2 className="text-xl font-bold text-blue-600 mb-4">WORK EXPERIENCE (CONTINUED)</h2>
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Software Engineer Intern</span>
                      <span className="text-sm text-gray-600">May – Aug 2024</span>
                    </div>
                    <div className="text-sm text-gray-700 mb-2">ConcelConnect, Remote</div>
                    <ul className="text-sm text-gray-700 space-y-1 ml-4">
                      <li>• Collaborate with cross-functional teams to test and troubleshoot the OneStream system, identifying and resolving issues to improve reliability and workflow for financial reporting.</li>
                      <li>• Support budget preparation by validating financial data and optimizing processes, contributing to more accurate forecasts and enhanced financial decision-making.</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Software Engineer Intern</span>
                      <span className="text-sm text-gray-600">May – Aug 2024</span>
                    </div>
                    <div className="text-sm text-gray-700 mb-2">ConcelConnect, Remote</div>
                    <ul className="text-sm text-gray-700 space-y-1 ml-4">
                      <li>• Enhanced website engagement by redesigning UI/UX and developing new features based on user feedback, increasing customer engagement by 20% and improving user satisfaction.</li>
                      <li>• Diagnosed and resolved code bugs, improving product stability and performance for end users.</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Tutor – Physics & Mathematics</span>
                      <span className="text-sm text-gray-600">2021 – 2022</span>
                    </div>
                    <div className="text-sm text-gray-700 mb-2">Self-Employed, Kitchener, ON</div>
                    <ul className="text-sm text-gray-700 space-y-1 ml-4">
                      <li>• Provided personalized tutoring to high school students in math and physics; created custom lesson plans and study aids, resulting in at least a one-letter-grade improvement for each client.</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Volunteer Soccer Coach</span>
                      <span className="text-sm text-gray-600">2019 – 2022</span>
                    </div>
                    <div className="text-sm text-gray-700 mb-2">Community Program, Peshawar, Pakistan</div>
                    <ul className="text-sm text-gray-700 space-y-1 ml-4">
                      <li>• Coached youth soccer teams and organized weekly training sessions, fostering teamwork, leadership, and communication skills; several players advanced to higher-level teams.</li>
                    </ul>
                  </div>
                </div>

                {/* Engineering Projects */}
                <div>
                  <h2 className="text-xl font-bold text-blue-600 mb-4">ENGINEERING PROJECTS</h2>
                  
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Lead Developer – AI Tools & Hackathons</span>
                      <span className="text-sm text-gray-600">2024 – Present</span>
                    </div>
                    <div className="text-sm text-gray-700 mb-2">University of Guelph, Guelph, ON</div>
                    <ul className="text-sm text-gray-700 space-y-1 ml-4">
                      <li>• Designed and built a University Management System and charity website using JavaFX, automating key administrative and student tasks.</li>
                      <li>• Developed AI-powered tools for note-taking, Excel integration, and text-to-video, reducing manual workload by 60%.</li>
                      <li>• Endangered Species Visualizer (ESV): Interactive web app mapping endangered species in Ontario using Mapbox API, 3D models, and sound integration. Features filters, regional heatmaps, and detailed species data.</li>
                      <li>• brainrotAI: Web platform enabling conversations in different slang and accents, such as Toronto slang, UK slang, and Jamaican slang, enhancing cultural and linguistic immersion.</li>
                      <li>• Trender, an AI-powered room image analysis platform that integrates the Qloo API and style-recognition AI to provide cultural, on-trend furniture.</li>
                      <li>• Developer – launched FeedMe, a cross-platform group dining roulette app Appstore, Integrated Supabase, Yelp Fusion, and Gemini APIs to deliver real-time group restaurant matching.</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Robotics engineering</span>
                      <span className="text-sm text-gray-600">2023 – 2025</span>
                    </div>
                    <div className="text-sm text-gray-700 mb-2">Breslau, ON</div>
                    <ul className="text-sm text-gray-700 space-y-1 ml-4">
                      <li>Designed and built a self-driving line-following car, an assistive wheelchair (Arduino + IR sensors), and an autonomous ping pong launcher, developed entirely as independent engineering projects.</li>
                      <li>• Achieved full automation and recognition for technical execution and creativity, with projects featured at university demo day.</li>
                    </ul>
                  </div>
                </div>

                <div className="text-center text-sm text-gray-600 mt-8">
                  References available upon request
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-100 px-6 py-3 flex justify-between items-center text-sm text-gray-600">
          <span>Page {currentPage} of 2</span>
          <span>Click outside to close</span>
        </div>
      </div>
    </div>
  );
};