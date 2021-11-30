import { SimulationInterval, batterySettings, consumerSettings } from 'utils/SimulationInterval';

export const Battery1 = new SimulationInterval({
    ...batterySettings,
    startValue: 18,
    updateFunction: (value) => updateBatteriesData('battery_1', value)
});
export const Battery2 = new SimulationInterval({
    ...batterySettings,
    startValue: 21,
    updateFunction: (value) => updateBatteriesData('battery_2', value)
});
export const Consumer1 = new SimulationInterval({
    ...consumerSettings,
    startValue: 2.5,
    updateFunction: (value) => updateConsumersData('consumer_1', value)
});
export const Consumer2 = new SimulationInterval({
    ...consumerSettings,
    startValue: 3,
    updateFunction: (value) => updateConsumersData('consumer_2', value)
});

export var batteriesData = {};
export var consumersData = {};

const updateBatteriesData = (key, value, label) => {
    batteriesData = {...batteriesData, [key]: { value, label }};
};
const updateConsumersData = (key, value) => {
    consumersData = {...consumersData, [key]: { value }};
};

Battery1.start();
Battery2.start();
Consumer1.start();
Consumer2.start();
