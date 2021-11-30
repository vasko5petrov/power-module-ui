import { fetchBatteriesData } from 'fakeApi';

export const FETCH_BATTERIES_DATA = 'ui/FETCH_BATTERIES_DATA';

export const fetchBatteries = () => ({
    type: FETCH_BATTERIES_DATA,
    payload: fetchBatteriesData
});