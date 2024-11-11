// DateContext.js
import React, { createContext, useState, useEffect } from 'react';

export const DateContext = createContext();

export const DateProvider = ({ children }) => {
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

    return (
        <DateContext.Provider value={{ dates, currentIndex, nextDate, prevDate, loading, error }}>
            {children}
        </DateContext.Provider>
    );
};