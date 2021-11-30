import React, { useContext, useEffect, useCallback, useState } from 'react';
import { fetchBatteriesData } from 'fakeApi';
import { useNotifications } from 'contexts/NotificationsProvider';
import { BATTERY_THRESHOLD } from 'utils/enums';

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
    const { notifications, addNotification, removeNotification } = useNotifications();

    const updateBatteryValue = (key, value) => setBatteries((prevBatteriesState) => ({
        ...prevBatteriesState,
        [key]: {
            ...prevBatteriesState[key],
            value
        }
    }));

    const populateBatteryValues = useCallback((data) => {
        Object.entries(data).map(([key, battery]) => updateBatteryValue(key, battery.value));
    }, []);
    
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
    }, [populateBatteryValues]);
    

    useEffect(() => {
        Object.entries(batteries).map(([id, battery]) => {
            const alreadyNotified = notifications.some((notification) => notification.id === id);
            if (battery.value < BATTERY_THRESHOLD && !alreadyNotified) {
                addNotification({
                    id,
                    type: 'BATTERY',
                    message: `${battery.label} - Low Voltage!`
                });
            }
            if (battery.value >= BATTERY_THRESHOLD && alreadyNotified) {
                removeNotification(id);
            }
            return null;
        });
    }, [batteries, notifications, addNotification, removeNotification ]);

    return (
        <BatteriesDataContext.Provider value={{batteries}}>
            {children}
        </BatteriesDataContext.Provider>
    )
}
