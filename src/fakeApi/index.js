import { batteriesData, consumersData } from 'utils/powerModuleDataGeneration';

export const fetchBatteriesData = () => {
    return new Promise((resolve) => {
        resolve(batteriesData);
    });
}

export const fetchConsumersData = () => {
    return new Promise((resolve) => {
        resolve(consumersData);
    });
}