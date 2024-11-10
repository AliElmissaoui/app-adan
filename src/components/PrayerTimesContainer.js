// src/components/PrayerTimesContainer.js
import React, { useState, useEffect } from 'react';
import DateSlider from './DateSlider';
import PrayerTimes from './PrayerTimes';

const PrayerTimesContainer = () => {
    const [dates, setDates] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDates = async () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(async (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;

                    const date = new Date();
                    const month = date.getMonth() + 1;
                    const year = date.getFullYear();

                    const apiUrl = `http://api.aladhan.com/v1/calendar?latitude=${latitude}&longitude=${longitude}&method=21&month=${month}&year=${year}`;
                    
                    try {
                        const response = await fetch(apiUrl);
                        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                        
                        const data = await response.json();
                        if (data.code === 200 && data.data) {
                            const fetchedDates = data.data.map(day => ({
                                arabic: day.date.hijri.date,
                                french: day.date.gregorian.date,
                                day: day.date.gregorian.weekday.en,
                                timings: {
                                    Fajr: day.timings.Fajr,
                                    Dhuhr: day.timings.Dhuhr,
                                    Asr: day.timings.Asr,
                                    Maghrib: day.timings.Maghrib,
                                    Isha: day.timings.Isha,
                                },
                            }));
                            setDates(fetchedDates);
                        } else {
                            setError("Failed to fetch dates from API.");
                        }
                    } catch (error) {
                        setError("Error fetching dates.");
                    } finally {
                        setLoading(false);
                    }
                });
            } else {
                setError("Geolocation not supported.");
                setLoading(false);
            }
        };

        fetchDates();
    }, []);

    const nextDate = () => setCurrentIndex((currentIndex + 1) % dates.length);
    const prevDate = () => setCurrentIndex((currentIndex - 1 + dates.length) % dates.length);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    // Get current date based on currentIndex
    const currentDate = dates[currentIndex];

    return (
        <div className="flex flex-col items-center">
            {/* Only render DateSlider if currentDate is available */}
            {currentDate ? (
                <DateSlider
                    currentDate={currentDate}
                    nextDate={nextDate}
                    prevDate={prevDate}
                />
            ) : (
                <p>Loading date...</p>
            )}
            
            {/* Only render PrayerTimes if currentDate has timings */}
            {currentDate && currentDate.timings && (
                <PrayerTimes prayerTimes={currentDate.timings} />
            )}
        </div>
    );
};

export default PrayerTimesContainer;
