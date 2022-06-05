import { useEffect, useState } from 'react';

export default function useParkingSpots() {
    const  [parkingSpots, setParkingSpots] = useState([]);
    useEffect(() => {
        // GET request using fetch with error handling
        fetch('https://adp.im/api/garage.json')
        .then(async response => {
            const data = await response.json();
            // check for error response
            if (!response.ok) {
                // get error message from body or default to response statusText
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
    
            setParkingSpots(data.floors);
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
    
    }, []);

    return {parkingSpots};
    
}

