import React, { useState } from 'react';
import 'primereact/resources/themes/saga-blue/theme.css'; // Import theme
import 'primereact/resources/primereact.min.css';          // Import PrimeReact CSS
import 'primeicons/primeicons.css';                       // Import PrimeIcons CSS
import './index.css';                                     // Import Tailwind CSS
import Timeline from './Timeline';
import TimeLineEducation from './TimelineEducation';
import { LuGraduationCap } from "react-icons/lu";
import { HiOutlineBriefcase } from "react-icons/hi";

const Toogle = () => {
    const [toggle, setToggle] = useState(false);

    const education = [
        { degree: 'B.Tech Information Technology', date: '2019 - 2024', cgpa:'CGPA: 8.7%', school:'Sri Eshwar College Of Engineering, Coimbatore'  },
        { degree: 'Higher Secondary School', date: '2018 - 2019',cgpa:'CGPA: 7.0%', school:'Vidhyaa Vikas Higher Secondary School, Coimbatore'  },
        { degree: 'Secondary School', date: '2016 - 2017', cgpa:'CGPA: 9.5%', school:'Srinivasa Vidhyalaya, Udumalpet'  },
        {  }
    ];

    const experience = [
        {
            status: "Junior Software Development Engineer",
            company:'Freightify',
            date: "July 2022 - July 2023",
            details: [
              { description: "Built scalable and responsive web applications using React.js, ensuring optimal performance across devices and achieving a 98% cross-browser compatibility rate." },
              { description: "Seamlessly integrated RESTful APIs to fetch and update data, enabling real-time communication between front-end and back-end systems, reducing latency by 20%." },
              { description: "Transformed wireframes and mockups into reusable, pixel-perfect React components, improving development efciency by 30% and ensuring alignment with design specications." },
              { description: "Designed and implemented MongoDB modules for efcient CRUD operations, reducing query response times by 15% through optimized indexing and aggregation pipelines." },
              { description: "Implemented a user-friendly portal enabling clients to easily update data in MongoDB, reducing manual effort significantly." },
              { description: "Introduced a Bulk Update feature, enabling clients to update multiple documents simultaneously,reducing manual effort by 40% and improving user productivity." },
              { description: "Successfully performed MongoDB migration from version 4.2 - 6.0, ensuring zero downtime" },
            ]
          },
          {
            status: "Associate Analytics",
            company:'WNS Global Services',
            date: "Jan 2024 - Present",
            details: [
                { description: "Integrated cutting-edge features like lazy loading and code splitting to optimize the application's performance, reducing initial load time by 35% and improving Lighthouse scores by 25%" },
                { description: "Designed and maintained scalable Redux workows to streamline asynchronous operations and ensure 100% traceability of application state changes." },
              { description: "Partnered with design teams to translate Figma wireframes into pixel-perfect, responsive interfaces using CSS, SCSS, and Tailwind CSS, achieving a 95% stakeholder satisfaction rate" },
              { description: "Leveraged Scriptura Engage to develop dynamic insurance documentation templates, cutting manual generation time by 50% and ensuring compliance with industry standards." },
              { description: "Delivered production-ready features using Git, Jira, and CI/CD pipelines, maintaining 98% code coverage via unit/integration testing" },
              { description: "Collaborated with cross-functional teams to deliver high-quality software solutions in a timely manner ."},
              {description: "Managed SLAs for enterprise clients, ensuring 100% on-time delivery of critical software updates while maintaining a 97% client retention rate."}
            ]
          },
          {
            details: []
          }
          
    ];

    return (
        <div className="flex flex-col items-center mt-8">
            <div className='flex flex-col items-center mb-4'>
                <div className='text-[24px] dark:text-slate-200 dark:hover:text-blue-500'>Qualification</div>
                <div className='text-[12px] text-gray-500'>My Personal Journey</div>
            </div>
            <div className="flex items-center mb-4 text-[20px]">
                <div className="flex items-center group cursor-pointer" onClick={() => setToggle(true)}>
                    <LuGraduationCap className={`text-[20px] ${toggle ? 'text-blue-500' : 'text-gray-500 dark:text-slate-200'} group-hover:text-blue-500`} />
                    <span className={`px-2 py-2 mx-1 ${toggle ? 'text-blue-500' : 'text-gray-500 dark:text-slate-200 dark:hover:text-blue-500'} group-hover:text-blue-500`}>
                        Education
                    </span>
                </div>
                <div className="flex items-center group cursor-pointer ml-4" onClick={() => setToggle(false)}>
                    <HiOutlineBriefcase className={`text-[20px] ${!toggle ? 'text-blue-500' : 'text-gray-500 dark:text-slate-200 '} group-hover:text-blue-500`} />
                    <span className={`px-2 py-2 mx-1 ${!toggle ? 'text-blue-500' : 'text-gray-500 dark:text-slate-200 '} group-hover:text-blue-500`}>
                        Experience
                    </span>
                </div>
            </div>
        <div className="w-full">
                <div className="py-2 my-4">
                    {toggle ? (
                        <TimeLineEducation events={education} alignment="right" />
                    ) : (
                        <Timeline events={experience} alignment="left" />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Toogle;
