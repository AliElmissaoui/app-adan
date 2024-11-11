// src/components/PrayerTimesContainer.js
import React, { useState, useEffect } from 'react';
import PrayerTimes from './PrayerTimes';

const PrayerTimesContainer = () => {
    return (
        <div className="flex flex-col items-center">
            <PrayerTimes />
        </div>
    );
};

export default PrayerTimesContainer;
