// src/components/TimeRemaining.js
import React from 'react';
import DateSlider from './DateSlider';

const TimeRemaining = () => {
    return (
        <div>
        <div 
        style={{
            backgroundImage: `url('/image1.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            
        }}className="bg-blue-100 rounded-lg p-4   mb-4  text-center shadow-md">
            <p className="text-lg text-orange-500 font-bold">Dhuhur</p>
            <p className="text-3xl font-semibold text-gray-800 mt-2">01:42:51</p>
            <DateSlider
                  
                />
        </div>
        </div>
    );
};

export default TimeRemaining;
