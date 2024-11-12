
import React from 'react';
import Header from './Header';
import AdSection from './AdSection';
import PrayerTimes from './PrayerTimes';
import { DateProvider } from '../context/DateContext';
import TimeRemaining from './TimeRemaining';

const PrayerTimeCard = () => {
    return (
        <div className="w-full max-w-sm bg-gray-50 rounded-lg shadow-lg  mx-auto">
            
            <DateProvider>
            <Header />
            <TimeRemaining />
            <AdSection />
            <div className="justify-items-center">
            <PrayerTimes />
            </div>
            </DateProvider>
           
        </div>
    );
};

export default PrayerTimeCard;
