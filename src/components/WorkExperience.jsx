import React from 'react';
import { Briefcase, Calendar, Star } from 'lucide-react';

const WorkExperience = () => (
  <section className="bg-white py-16 px-8 shadow-md rounded-2xl">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
        Work Experience
      </h2>

      {/* Experience Card */}
      {experienceData.map((exp, index) => (
        <div
          key={index}
          className="mb-8 p-6 border-l-4 border-blue-500 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-bold text-blue-600">{exp.role}</h3>
            <p className="text-sm text-gray-500 flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {exp.timeline}
            </p>
          </div>
          <p className="text-lg font-semibold text-gray-700">{exp.company}</p>
          <ul className="list-disc list-inside mt-3 text-gray-600 space-y-2">
            {exp.achievements.map((achievement, idx) => (
              <li key={idx} className="flex items-start">
                <Star className="w-4 h-4 text-blue-500 mr-2" />
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

const experienceData = [
  {
    role: 'Software Engineer-II',
    company: 'IN10 Media Network Pvt. Ltd, India',
    timeline: 'Oct 2023 – Present',
    achievements: [
      'Working on DocuBay OTT D2C and Telcos systems.',
      'Decreased the load time of the initial home page by 3x.',
      'Built a content recommendation engine using Numpy, Pandas, and Scikit-learn.',
      'Decoupled application logic into microservices for high availability.',
      'Managed multiple applications using Docker Swarm and deployed on AWS.',
      'Developed, tested, and integrated APIs across frontend and backend.'
    ]
  },
  {
    role: 'MERN Stack Developer',
    company: 'Kuruvila Technologies Pvt. Ltd, India',
    timeline: 'Apr 2023 – Oct 2023',
    achievements: [
      'Created, tested, and managed internal and external APIs.',
      'Integrated payment gateways: BillDesk, Razorpay, and PayU.',
      'Optimized database queries for faster API response.',
      'Integrated n8n automation tool for scheduled and event-driven tasks.',
      'Optimized Node.js backend code with batch processing and improved MySQL queries.',
      'Assigned tasks, deployed stable versions, and resolved issues in UAT & Production servers.'
    ]
  },
  {
    role: 'Software Engineer-I',
    company: 'Qtech Software Pvt. Ltd, India',
    timeline: 'Feb 2022 – Apr 2023',
    achievements: [
      'Developed and maintained B2B, B2C, and Upsale APIs.',
      'Handled authentication and authorization across systems.',
      'Built and tested REST APIs across multiple applications.',
      'Designed and implemented application architecture from scratch.'
    ]
  }
];

export default WorkExperience;
