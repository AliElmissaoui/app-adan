// src/components/PrayerTimeCard.js
import React from 'react';
import Header from './Header';
import AdSection from './AdSection';
import PrayerTimesContainer from './PrayerTimesContainer';
import { DateProvider } from '../context/DateContext';
import TimeRemaining from './TimeRemaining';

const PrayerTimeCard = () => {
    return (
        <div className="w-full max-w-sm bg-gray-50 rounded-lg shadow-lg p-4 mx-auto">
            <Header />
            <DateProvider>
            <TimeRemaining />
            <AdSection />
            <PrayerTimesContainer/>
            </DateProvider>
           
        </div>
    );
};

export default PrayerTimeCard;
