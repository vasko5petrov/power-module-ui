import { fetchConsumersData } from 'fakeApi';

export const TOGGLE_CONSUMER = 'consumers/TOGGLE_CONSUMER';
export const FETCH_CONSUMERS_DATA = 'ui/FETCH_CONSUMERS_DATA';

export const toggleConsumer = (consumerIndex) => ({
    type: TOGGLE_CONSUMER,
    payload: {
        consumerIndex
    }
});

export const fetchConsumers = () => ({
    type: FETCH_CONSUMERS_DATA,
    payload: fetchConsumersData
});