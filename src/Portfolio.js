import React from 'react';
import { Carousel } from 'primereact/carousel';
import Swiggy from '../src/Images/Swiggy.png';
import Netflix from '../src/Images/Netflix.png';
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";

const Portfolio = () => {

    const products = [
        {
            name: 'Swiggy Clone',
            details: [
                { description: "The project aimed to replicate the functionalities and user experience of the popular food delivery platform, using Swiggy's APIs to access and display restaurant listings, menus, order processing, and delivery features. Technologies Used: React.js, Redux, Tailwind CSS" },
            ],
            image: Swiggy,
            link: 'https://foodyclone.netlify.app/'
        },
        {
            name: 'Netflix GPT',
            details: [
                { description: 'Developed a custom AI-powered movie recommendation system, NetflixGPT, leveraging natural language processing techniques to provide personalized movie recommendations and enhance user experience. Technologies Used: React.js, Redux, Tailwind CSS' }
            ],
            image: Netflix,
            link: 'https://moviesrecommendationgpt.netlify.app/browse'
        }
    ];

    const handleClick = (link) => {
        window.open(link, '_blank');
    };

    const productTemplate = (product) => {
        return (
            <div className="border-1 surface-border border-round text-center grid grid-cols-1 md:grid-cols-2">
                <div className="md:p-2 flex justify-center">
                    <img src={product?.image} alt={product.name} className='h-32 rounded-lg' />
                </div>
                <div className='flex justify-start flex-col items-center md:items-start md:ml-2'>
                    <div className="mt-4 md:mt:0 mb-3 text-[18px] mx-2 md:mx-0 items-center dark:text-gray-200">{product.name}</div>
                    {product?.details?.map((detail, index) => (
                        <div key={index} className='text-gray-700 text-[15px] align-baseline text-left mx-2 md:mx-0 dark:text-gray-400'>
                            {detail?.description}
                        </div>
                    ))}
                    <div className="mt-5 flex flex-wrap gap-2  justify-center md:justify-start">
                        <button onClick={() => handleClick(product?.link)} className="p-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded justify-center">
                            Demo <GrFormNextLink />
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className='mb-8'>
            <div className='flex flex-col items-center m-4'>
                <div className='text-[24px] dark:text-slate-200 dark:hover:text-blue-500'>Portfolio</div>
                <div className='text-[12px] text-gray-500'>My Recent Work ~</div>
            </div>
            <Carousel
                value={products}
                numVisible= {1}
            numScroll= {1}
                nextIcon={<GrFormNextLink className='w-10 text-[90px] text-blue-600' />}
                prevIcon={<GrFormPreviousLink className='w-10 text-[90px] text-blue-600' />}
                className="custom-carousel mx-2 lg:mx-20 mt-6"
                circular
                itemTemplate={productTemplate}
            />
        </div>
    );
}

export default Portfolio;
