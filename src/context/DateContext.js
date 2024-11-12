import React, { createContext, useState, useEffect } from 'react';
import { fetchPrayerTimes, fetchCityName } from '../api/apiService';

export const DateContext = createContext();

export const DateProvider = ({ children }) => {
    const [dates, setDates] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cityName, setCityName] = useState('');

    useEffect(() => {
        const fetchDates = async () => {
            const storedData = JSON.parse(localStorage.getItem('prayerTimesData'));
            const storedTime = localStorage.getItem('prayerTimesTimestamp');
            const twentyFourHours = 24 * 60 * 60 * 1000; 
            const now = new Date().getTime();

            if (storedData && storedTime && now - storedTime < twentyFourHours) {
                setDates(storedData.dates);
                setCityName(storedData.cityName);
                setLoading(false);
            } else {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(async (position) => {
                        const latitude = position.coords.latitude;
                        const longitude = position.coords.longitude;
                        const date = new Date();
                        const month = date.getMonth() + 1;
                        const year = date.getFullYear();

                        try {
                            // Fetch city name
                            const city = await fetchCityName(latitude, longitude);
                            setCityName(city);

                            // Fetch prayer times
                            const prayerData = await fetchPrayerTimes(latitude, longitude, month, year);

                            if (prayerData.code === 200 && prayerData.data) {
                                const fetchedDates = prayerData.data.map(day => ({
                                    arabic: day.date.hijri.date,
                                    french: day.date.gregorian.date,
                                    day: day.date.gregorian.weekday.en,
                                    timings: {
                                        Fajr: day.timings.Fajr.split(" ")[0],
                                        Sunrise: day.timings.Sunrise.split(" ")[0],
                                        Dhuhr: day.timings.Dhuhr.split(" ")[0],
                                        Asr: day.timings.Asr.split(" ")[0],
                                        Maghrib: day.timings.Maghrib.split(" ")[0],
                                        Isha: day.timings.Isha.split(" ")[0],
                                    },
                                }));

                                setDates(fetchedDates);
                                localStorage.setItem('prayerTimesData', JSON.stringify({ dates: fetchedDates, cityName: city }));
                                localStorage.setItem('prayerTimesTimestamp', now.toString());
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
            }
        };

        fetchDates();
    }, []);

    const nextDate = () => setCurrentIndex((currentIndex + 1) % dates.length);
    const prevDate = () => setCurrentIndex((currentIndex - 1 + dates.length) % dates.length);

    return (
        <DateContext.Provider value={{ dates, currentIndex, nextDate, prevDate, loading, error, cityName }}>
            {children}
        </DateContext.Provider>
    );
};
