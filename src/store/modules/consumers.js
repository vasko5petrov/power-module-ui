import { Map } from 'immutable';
import { TOGGLE_CONSUMER, FETCH_CONSUMERS_DATA } from '../actions/consumers';

const DEFAULT_STATE = Map({
    consumer_1: Map({
        label: 'Consumer 1',
        value: 2.5,
        disconnected: false
    }),
    consumer_2: Map({
        label: 'Consumer 2',
        value: 3,
        disconnected: false
    })
});

export default function consumersReducer(state = DEFAULT_STATE, {type, payload}) {
    if (type === TOGGLE_CONSUMER) {
        return state.updateIn([payload.consumerIndex, 'disconnected'], (v) => !v);
    }

    if (type === `${FETCH_CONSUMERS_DATA}_FULFILLED`) {
        return state.updateIn(['consumer_1', 'value'], () => payload.consumer_1.value)
                    .updateIn(['consumer_2', 'value'], () => payload.consumer_2.value);
    }

    return state;
}