// src/components/Header.js
import React ,{ useContext } from 'react';
import { DateContext } from '../context/DateContext';
const Header = () => {
    const { cityName } = useContext(DateContext);
    return (
        <div className="bg-black flex flex-col h-40">
         
        <h1 className="text-3xl font-semibold text-white ml-4">Prière</h1>
        <p className="text-sm text-white  ml-4 ">
            L'heure de prière <span className="text-orange-500 font-medium ">{ cityName }</span>
        </p>
    </div>
    );
};

export default Header;
