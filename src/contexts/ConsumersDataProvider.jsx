import React, { useContext, useEffect, useCallback, useState } from 'react';
import { fetchConsumersData } from 'fakeApi';
import { useNotifications } from 'contexts/NotificationsProvider';
import { CONSUMER_THRESHOLD } from 'utils/enums';

const ConsumersDataContext = React.createContext();

export const useConsumersData = () => {
    return useContext(ConsumersDataContext);
};

export const ConsumersDataProvider = ({ children }) => {
    const [consumers, setConsumers] = useState({
        consumer_1: {
            label: 'Consumer 1',
            value: 2.5,
            disconnected: false
        },
        consumer_2: {
            label: 'Consumer 2',
            value: 3,
            disconnected: false
        }
    });
    const { notifications, addNotification, removeNotification } = useNotifications();

    const updateConsumerValue = (key, value) => setConsumers((prevConsumersState) => ({
        ...prevConsumersState,
        [key]: {
            ...prevConsumersState[key],
            value
        }
    }));
    
    const toggleConsumer = (key) => setConsumers((prevConsumersState) => ({
        ...prevConsumersState,
        [key]: {
            ...prevConsumersState[key],
            disconnected: !prevConsumersState[key]['disconnected']
        }
    }));

    const populateConsumerValues = useCallback((data) => {
        Object.entries(data).map(([key, consumer]) => updateConsumerValue(key, consumer.value));
    }, []);
    
    useEffect(() => {
        const intervalId = setInterval(async () => {
            try {
                const data = await fetchConsumersData();
                populateConsumerValues(data);
            } catch(err) {
                console.log(err);
            }
        }, 1000);
        return () => {
            clearInterval(intervalId);
        }
    }, [populateConsumerValues]);

    useEffect(() => {
        Object.entries(consumers).map(([id, consumer]) => {
            const alreadyNotified = notifications.some((notification) => notification.id === id);
            if (consumer.value > CONSUMER_THRESHOLD && !alreadyNotified) {
                addNotification({
                    id,
                    type: 'CONSUMER',
                    message: `${consumer.label} - High Consumption!`
                });
            }
            if (consumer.value <= CONSUMER_THRESHOLD && alreadyNotified) {
                removeNotification(id);
            }
            return null;
        });
    }, [consumers, notifications, addNotification, removeNotification]);

    return (
        <ConsumersDataContext.Provider value={{consumers, toggleConsumer}}>
            {children}
        </ConsumersDataContext.Provider>
    )
}
