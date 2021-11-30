import React, { useContext, useEffect, useState } from 'react';
import { fetchConsumersData } from 'fakeApi';

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

    const populateConsumerValues = (data) => {
        Object.entries(data).map(([key, consumer]) => updateConsumerValue(key, consumer.value));
    };
    
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
    }, []);

    return (
        <ConsumersDataContext.Provider value={{consumers, toggleConsumer}}>
            {children}
        </ConsumersDataContext.Provider>
    )
}
