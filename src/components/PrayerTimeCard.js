// src/components/PrayerTimeCard.js
import React from 'react';
import Header from './Header';
import TimeRemaining from './TimeRemaining';
import AdSection from './AdSection';
import PrayerTimesContainer from './PrayerTimesContainer';

const PrayerTimeCard = () => {
    return (
        <div className="w-full max-w-sm bg-gray-50 rounded-lg shadow-lg p-4 mx-auto">
            <Header />
            <TimeRemaining />
            <AdSection />
            <PrayerTimesContainer />
        </div>
    );
};

export default PrayerTimeCard;
