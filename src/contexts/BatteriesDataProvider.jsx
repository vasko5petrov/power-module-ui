import React, { useContext, useEffect, useState } from 'react';
import { fetchBatteriesData } from 'fakeApi';

const BatteriesDataContext = React.createContext();

export const useBatteriesData = () => {
    return useContext(BatteriesDataContext);
};

export const BatteriesDataProvider = ({ children }) => {
    const [batteries, setBatteries] = useState({
        battery_1: {
            label: 'Battery 1',
            value: 18
        },
        battery_2: {
            label: 'Battery 2',
            value: 21
        }
    });

    const updateBatteryValue = (key, value) => setBatteries((prevBatteriesState) => ({
        ...prevBatteriesState,
        [key]: {
            ...prevBatteriesState[key],
            value
        }
    }));

    const populateBatteryValues = (data) => {
        Object.entries(data).map(([key, battery]) => updateBatteryValue(key, battery.value));
    };
    
    useEffect(() => {
        const intervalId = setInterval(async () => {
            try {
                const data = await fetchBatteriesData();
                populateBatteryValues(data);
            } catch(err) {
                console.log(err);
            }
        }, 1000);
        return () => {
            clearInterval(intervalId);
        }
    }, []);

    return (
        <BatteriesDataContext.Provider value={{batteries}}>
            {children}
        </BatteriesDataContext.Provider>
    )
}
