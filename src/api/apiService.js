
const BASE_URL = 'http://api.aladhan.com/v1';
export const fetchPrayerTimes = async (latitude, longitude, month, year) => {
    try {
        const response = await fetch(`${BASE_URL}/calendar?latitude=${latitude}&longitude=${longitude}&method=21&month=${month}&year=${year}`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch prayer times:', error);
        throw error;
    }
};

export const fetchCityName = async (latitude, longitude) => {
    try {
        const nominatimApiUrl = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;
        const response = await fetch(nominatimApiUrl);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        return data.address?.city || data.address?.town || data.address?.village || 'Unknown Location';
    } catch (error) {
        console.error('Failed to fetch city name:', error);
        throw error;
    }
};
