import React from 'react';

const DateSlider = ({ currentDate, nextDate, prevDate }) => {
    if (!currentDate || !nextDate || !prevDate) {
        return <p>dodo</p>;
    }

    return (
        <div className="flex items-center justify-center space-x-4 mt-2">
            <button
                onClick={prevDate}
                className="text-gray-950 text-xs font-semibold focus:outline-none"
            >
                &lt;
            </button>
            <div className="text-center">
                <p className="text-xs font-bold text-gray-950">{currentDate.day}</p>
                <p className="text-xs font-bold text-gray-950">{currentDate.arabic}</p>
                <p className="text-xs text-gray-950">{currentDate.french}</p>
            </div>
            <button
                onClick={nextDate}
                className="text-gray-950 text-xs font-semibold focus:outline-none"
            >
                &gt;
            </button>
        </div>
    );
};

export default DateSlider;
