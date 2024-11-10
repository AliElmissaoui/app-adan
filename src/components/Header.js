// src/components/Header.js
import React from 'react';

const Header = () => {
    return (
        <div
            
           className="bg-[#1c4587] w-full flex flex-col justify-center items-start p-6 text-center mb-6"

        >
            <h1 className="text-2xl font-semibold text-gray-800 text-left">Prière</h1>
            <p className="text-sm text-gray-500 text-left">
                L'heure de prière <span className="text-orange-500 font-medium">Casablanca</span>
            </p>
        </div>
    );
};

export default Header;
