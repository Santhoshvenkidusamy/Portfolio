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
        { degree: 'Higher Secondary School', date: '2018 - 2019',cgpa:'CGPA: 8.7%', school:'Vidhyaa Vikas Higher Secondary School, Coimbatore'  },
        { degree: 'Secondary School', date: '2016 - 2017', cgpa:'CGPA: 8.7%', school:'Srinivasa Vidhyalaya, Udumalpet'  },
        {  }
    ];

    const experience = [
        {
            status: "Junior Software Development Engineer",
            company:'Freightify',
            date: "jan 2022 - mar 2022",
            details: [
              { description: "Developed responsive web applications using React, ensuring optimal performance across various devices." },
              { description: "Integrated API to fetch and update data, providing seamless communication between the front-end and backend systems." },
              { description: "Converted wireframes and mockups into functional components, ensuring pixel-perfect implementations." },
              { description: "Developed modules for efficient CRUD operations in MongoDB." },
              { description: "Implemented a user-friendly portal enabling clients to easily update data in MongoDB, reducing manual effort significantly." },
              { description: "Introduced Bulk Update feature, allowing clients to update multiple documents simultaneously." },
              { description: "Proficient in writing queries, aggregation, transactions, atlas search, atlas functions." }
            ]
          },
          {
            status: "Junior Software Development Engineer",
            company:'Freightify',
            date: "jan 2022 - mar 2022",
            details: [
              { description: "Developed responsive web applications using React, ensuring optimal performance across various devices." },
              { description: "Integrated API to fetch and update data, providing seamless communication between the front-end and backend systems." },
              { description: "Converted wireframes and mockups into functional components, ensuring pixel-perfect implementations." },
              { description: "Developed modules for efficient CRUD operations in MongoDB." },
              { description: "Implemented a user-friendly portal enabling clients to easily update data in MongoDB, reducing manual effort significantly." },
              { description: "Introduced Bulk Update feature, allowing clients to update multiple documents simultaneously." },
              { description: "Proficient in writing queries, aggregation, transactions, atlas search, atlas functions." }
            ]
          },
          {
            details: []
          }
          
    ];

    return (
        <div className="flex flex-col items-center mt-8">
            <div className='flex flex-col items-center mb-4'>
                <div className='text-[24px]'>Qualification</div>
                <div className='text-[12px] text-gray-500'>My Personal Journey</div>
            </div>
            <div className="flex items-center mb-4 text-[20px]">
                <div className="flex items-center group cursor-pointer" onClick={() => setToggle(true)}>
                    <LuGraduationCap className={`text-[20px] ${toggle ? 'text-blue-500' : 'text-gray-500'} group-hover:text-blue-500`} />
                    <span className={`px-2 py-2 mx-1 ${toggle ? 'text-blue-500' : 'text-gray-500'} group-hover:text-blue-500`}>
                        Education
                    </span>
                </div>
                <div className="flex items-center group cursor-pointer ml-4" onClick={() => setToggle(false)}>
                    <HiOutlineBriefcase className={`text-[20px] ${!toggle ? 'text-blue-500' : 'text-gray-500'} group-hover:text-blue-500`} />
                    <span className={`px-2 py-2 mx-1 ${!toggle ? 'text-blue-500' : 'text-gray-500'} group-hover:text-blue-500`}>
                        Experience
                    </span>
                </div>
            </div>
        <div className="w-full">
                <div className="p-2 m-4">
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
