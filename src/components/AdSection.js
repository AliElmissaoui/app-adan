// src/components/AdSection.js
import React from 'react';


const AdSection = () => {
    return (
        <div className="bg-black rounded-lg flex items-center w-11/12 mt-[-50px]  mb-6 text-white mx-auto p-0 h-24">
        <div className="flex items-center w-full h-full">
            <img 
                src="/image3.jpg" 
                alt="Ad" 
                className="h-full rounded-l-lg object-cover" 
                style={{ width: 'auto', minWidth: '5rem',height: '6rem' }}
            />
            <div className="flex flex-col pl-4">
                <p className="text-lg font-bold">iLoveYO</p>
                <p className="text-sm mb-2">L'expérience Yo!</p>
                <div className="flex items-center">
                    <p className="text-orange-400 font-semibold text-lg mr-3">25.00 DH</p>
                    <button className="text-sm font-semibold text-orange-500 flex items-center">
                        Découvrir
                        <svg 
                            className="w-4 h-4 ml-1 text-orange-500" 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
    
    );
};

export default AdSection;
