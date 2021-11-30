import { Map } from 'immutable';
import { FETCH_BATTERIES_DATA } from '../actions/batteries';

const DEFAULT_STATE = Map({
    battery_1: Map({
        label: 'Battery 1',
        value: 18
    }),
    battery_2: Map({
        label: 'Battery 2',
        value: 21
    })
});

export default function batteriesReducer(state = DEFAULT_STATE, {type, payload}) {
    if (type === `${FETCH_BATTERIES_DATA}_FULFILLED`) {
        return state.updateIn(['battery_1', 'value'], () => payload.battery_1.value)
                    .updateIn(['battery_2', 'value'], () => payload.battery_2.value);
    }

    return state;
}