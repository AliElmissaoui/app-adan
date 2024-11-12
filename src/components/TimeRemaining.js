import React, { useState, useEffect, useContext } from 'react';
import { DateContext } from '../context/DateContext';
import DateSlider from './DateSlider';

const TimeRemaining = () => {
    const { dates, currentIndex } = useContext(DateContext);
    const [nextPrayer, setNextPrayer] = useState({ name: 'Loading...', time: null });
    const [timeRemaining, setTimeRemaining] = useState('');
    useEffect(() => {
        if (dates.length > 0) {
            findNextPrayer(dates[currentIndex].timings);
        }
    }, [dates, currentIndex]);
    const findNextPrayer = (timings) => {
        const currentTime = new Date();
        const prayerTimes = Object.entries(timings).map(([name, time]) => {
            const [hours, minutes] = time.split(' ')[0].split(':').map(Number);
            const prayerDate = new Date(currentTime);
            prayerDate.setHours(hours);
            prayerDate.setMinutes(minutes);
            prayerDate.setSeconds(0);
            return { name, time: prayerDate };
        });
        const next = prayerTimes.find(({ time }) => time > currentTime) || prayerTimes[0];
        setNextPrayer(next);
    };
    useEffect(() => {
        const interval = setInterval(() => {
            if (nextPrayer.time) {
                const now = new Date();
                const difference = nextPrayer.time - now;

                if (difference <= 0) {
                    // If countdown hits zero, find the next prayer
                    findNextPrayer(dates[currentIndex].timings);
                    return;
                }

                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / (1000 * 60)) % 60);
                const seconds = Math.floor((difference / 1000) % 60);

                setTimeRemaining(
                    `${hours.toString().padStart(2, '0')}:${minutes
                        .toString()
                        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
                );
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [nextPrayer, dates, currentIndex]);
    return (
        <div className='w-full flex justify-center items-center  relative z-20 -top-20'>
            <div
                style={{
                    backgroundImage: `url('/image1.jpeg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
                className="bg-blue-100 w-11/12 rounded-lg p-8  text-center shadow-md"
            >
                <p className="text-xs text-black-500 font-bold">II rest pour adhan :</p>
                <p className="text-5xl text-orange-500 font-bold">{nextPrayer.name}</p> 
                <p className="text-3xl font-semibold text-gray-800 mt-2">{timeRemaining}</p>
                <DateSlider />
            </div>
        </div>
    );
};
export default TimeRemaining;
