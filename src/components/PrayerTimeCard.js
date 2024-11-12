// src/components/PrayerTimeCard.js
import React from 'react';
import Header from './Header';
import AdSection from './AdSection';
import PrayerTimesContainer from './PrayerTimesContainer';
import { DateProvider } from '../context/DateContext';
import TimeRemaining from './TimeRemaining';

const PrayerTimeCard = () => {
    return (
        <div className="w-full max-w-sm bg-gray-50 rounded-lg shadow-lg  mx-auto">
            
            <DateProvider>
            <Header />
            <TimeRemaining />
            <AdSection />
            <PrayerTimesContainer/>
            </DateProvider>
           
        </div>
    );
};

export default PrayerTimeCard;
