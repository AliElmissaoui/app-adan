import React, { useContext, useEffect, useState } from 'react';
import { DateContext } from '../context/DateContext';
import { SunIcon } from '@heroicons/react/solid';
import { SiSunrise  } from "react-icons/si";
import { PiCloudSunFill } from "react-icons/pi";
import { TbSunElectricity } from "react-icons/tb";
import { RxSun } from "react-icons/rx";
import { BsSunrise } from "react-icons/bs";

const PrayerTimes = () => {
    const { dates, currentIndex } = useContext(DateContext);
    const currentDate = dates[currentIndex];
    const [nextPrayer, setNextPrayer] = useState(null);

    useEffect(() => {
        const updateNextPrayer = () => {
            if (currentDate) {
                const currentTime = new Date();
                const timings = Object.entries(currentDate.timings);

                const upcomingPrayer = timings.find(([name, time]) => {
                    const [hour, minute] = time.split(" ")[0].split(":").map(Number);
                    const prayerTime = new Date();
                    prayerTime.setHours(hour);
                    prayerTime.setMinutes(minute);
                    prayerTime.setSeconds(0);
                    return prayerTime > currentTime;
                });

                setNextPrayer(upcomingPrayer ? upcomingPrayer[0] : timings[0][0]); 
            }
        };

        updateNextPrayer(); 
        const interval = setInterval(updateNextPrayer, 60000); 

        return () => clearInterval(interval); 
    }, [currentDate]);

    if (!currentDate) {
        return <p>Loading...</p>;
    }

    const icons = {
        Fajr: <BsSunrise   className="w-5 h-5 text-orange-500 " />,
        Sunrise: <SiSunrise className="w-5 h-5 text-orange-500 " />, 
        Dhuhr: <RxSun className="w-5 h-5 text-yellow-500 " />,
        Asr: <SunIcon className="w-5 h-5 text-yellow-500 " />,
        Maghrib: <PiCloudSunFill className="w-5 h-5 text-orange-500 " />,
        Isha: <TbSunElectricity  className="w-5 h-5 text-orange-500 " />,
    };

    return (
        <div className="grid  grid-cols-3 gap-4 text-center bg-slate-100 p-4 w-11/12  mb-6">
  {Object.entries(currentDate.timings).map(([name, time]) => (
    <div
      key={name}
      className={`p-2 rounded-lg bg-white  ${name === nextPrayer ? 'border-2  border-orange-600  ' : 'border-zinc-300'}`}
    >
      <div className="flex justify-center items-center w-12  h-12 bg-slate-700 rounded-full mx-auto">
        {icons[name]}
      </div>
      <p className="text-xs text-gray-600">{name}</p>
      <p className="text-lg text-gray-600">{time}</p>
    </div>
  ))}
</div>

    );
};

export default PrayerTimes;
