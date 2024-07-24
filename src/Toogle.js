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
              { description: "Developed responsive web applications using React, ensuring optimal performance across various devices." },
              { description: "Integrated API to fetch and update data, providing seamless communication between the front-end and backend systems." },
              { description: "Converted wireframes and mockups into functional components, ensuring pixel-perfect implementations." },
              { description: "Developed modules for efficient CRUD operations in MongoDB." },
              { description: "Implemented a user-friendly portal enabling clients to easily update data in MongoDB, reducing manual effort significantly." },
              { description: "Introduced Bulk Update feature, allowing clients to update multiple documents simultaneously." },
              { description: "Successfully performed MongoDB migration from version 4.2 - 6.0" },
            ]
          },
          {
            status: "Associate Analytics",
            company:'WNS Global Services',
            date: "Jan 2024 - Present",
            details: [
                { description: "Integrated cutting-edge features like lazy loading and code splitting to optimize the application's performance, reducing initial load times and improving overall speed." },
                { description: "Developed complex state management solutions using Redux, enhancing the predictability and traceability of the application state." },
              { description: "Applied Agile methodologies and used tools like Git for version control and Jira for project management." },
              { description: "Converted wireframes and mockups into functional components, ensuring pixel-perfect implementations." },
              { description: "Used Scriptura Engage tool to create documents for insurance, streamlining the documnt generation process." },
              { description: "Collabrated with cross-functional teams to deliver high-quality software solutions in a timely manner."},
              {description: "Managed SLA's to ensure timely delivery of software solutions, maintaining high standards of performance and client satisfication."}
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
