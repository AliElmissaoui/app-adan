import React, { useContext } from 'react';
import { DateContext } from '../context/DateContext';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';

const PrayerTimes = () => {
    const { dates, currentIndex } = useContext(DateContext);
    const currentDate = dates[currentIndex];

    if (!currentDate) {
        return <p>Loading...</p>;
    }

    const icons = {
        Fajr: <MoonIcon className="w-5 h-5 text-gray-500" />,
        Dhuhr: <SunIcon className="w-5 h-5 text-orange-500" />,
        Asr: <SunIcon className="w-5 h-5 text-yellow-500" />,
        Maghrib: <SunIcon className="w-5 h-5 text-orange-500" />,
        Isha: <MoonIcon className="w-5 h-5 text-gray-500" />,
    };

    return (
        <div className="grid grid-cols-3 gap-2 text-center">
            {Object.entries(currentDate.timings).map(([name, time]) => (
                <div key={name} className="p-2 rounded-lg bg-gray-100">
                    <div className="flex justify-center">{icons[name]}</div>
                    <p className="text-xs text-gray-600">{name}</p>
                    <p className="text-lg text-gray-800 font-medium">{time}</p>
                </div>
            ))}
        </div>
    );
};

export default PrayerTimes;