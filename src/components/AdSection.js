// src/components/AdSection.js
import React from 'react';

const AdSection = () => {
    return (
        <div className="bg-black rounded-lg p-4 mb-4 text-center text-white">
        <div className="flex items-center">
            <img 
                src="https://via.placeholder.com/100" 
                alt="Ad" 
                className="w-16 h-16 rounded-full object-cover mr-3"
            />
            <div>
                <p className="text-lg font-bold">iLoveYO</p>
                <p className="text-sm mb-2">L'expérience Yo!</p>
                <div className="flex items-center">
                <p className="text-orange-400 font-semibold text-lg mr-3">25.00 DH</p>
                <button className="text-sm font-semibold text-orange-500">Découvrir</button>
            </div>
            </div>
        </div>
    </div>
    );
};

export default AdSection;
