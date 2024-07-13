import React from 'react';
import { Carousel } from 'primereact/carousel';
import Swiggy from '../src/Images/Swiggy.png';
import Niki from '../src/Images/Niki.jpg';
import Ranjini from '../src/Images/Ranjini.jpg';
import Arun from '../src/Images/Arun.jpg';
import Karthikeyan from '../src/Images/Karthikeyan.jpg';
import Netflix from '../src/Images/Netflix.png';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Image } from 'primereact/image';

const Recommendation = () => {
    const responsiveOptions = [
        {
            breakpoint: '1000px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];


    const products = [
        {
            
            name: 'Arun Prakash',
            description: 'Santhosh is not only highly competent in dev side but also possesses excellent communication and teamwork abilities. What sets him apart is his dedication and proactive approach. He always went above and beyond to ensure that projects were completed on time and to the highest standard.',
            image: Arun,
            role: 'Junior Software Test Engineer'
        },
        {
            
            name: 'Nikitha',
            description: 'Santhosh exhibited outstanding problem-solving abilities and a proactive approach to tackling challenges. He was an invaluable team player, always willing to collaborate and share her knowledge with colleagues, fostering a positive and productive work environment.',
            image: Niki,
            role: 'Junior Software Development Engineer'
        },
        {
            
            name: 'Karthikeyan',
            description: `Santhosh is a dedicated and enthusiastic individual who constantly seeks to master new technologies.                                                                                            `,
            image: Karthikeyan,
            role: 'Junior Software Development Engineer'
            
        },
        {
          
            name: 'Sri Ranjini',
            description: 'Studying with Santhosh at Sri Eshwar College of Engineering was a great experience. Santhosh brought a positive attitude and a passion for learning, making him an invaluable team member and an asset to any future endeavor.',
            image: Ranjini,
            role: 'Student'
        }
    ];


    
        const productTemplate = ( product ) => {
            return (
                <div className="relative py-8">
                <div className="rounded-lg  border-2 border-gray-100 bg-white p-4 px-8 m-2 text-center relative overflow-visible transform transition duration-500 hover:scale-105">
                    <div className="absolute top-0 right-1/2 transform translate-x-1/2 sm:translate-x-1/3 md:translate-x-1/4 lg:translate-x-1/2" style={{ transform: 'translate(50%, -50%)', zIndex: 100 }}>
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-20 h-20 object-cover rounded-full border-4 border-white shadow-md"
                        />
                    </div>
                    <div className="relative z-10 pt-0 sm:pt-10 md:pt-0 ">
                    <div className="mt-8">
                        <div className=" text-lg font-semibold">{product.name}</div>
                        <div className="text-sm text-gray-500 mt-1 mb-2">{product.role}</div>
                        <p className="text-sm text-gray-600">{product.description}</p>
                    </div>
                </div>
                </div>
            </div>
        );
    };
        
        

    return (
        <div className='py-5 bg-gray-100'>
            <div className='flex flex-col items-center mb-6'>
                <div className=' font-bold text-gray-800'>Recommendations</div>
                <div className='text-sm text-gray-500'>~via LinkedIn Recommendations</div>
            </div>
            <div className='card'>
                <Carousel
                    value={products}
                    responsiveOptions={responsiveOptions}
                    numVisible={3}
                    numScroll = {1}
                    autoplayInterval={5000}
                    nextIcon=''
                    prevIcon=''
                    className=""
                    circular
                    itemTemplate={productTemplate}
                    showNavigators= {false}
                    showIndicators
                />
            </div>
        </div>
    );
}

export default Recommendation;
