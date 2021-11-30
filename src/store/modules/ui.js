import { List, Map, fromJS } from 'immutable';
import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from '../actions/ui';

const DEFAULT_STATE = Map({
    notifications: List()
});

export default function uiReducer(state = DEFAULT_STATE, {type, payload}) {
    if(type === ADD_NOTIFICATION) {
        return state.update('notifications', (x) => x.push(fromJS(payload)));
    }

    if(type === REMOVE_NOTIFICATION) {
        return state.update('notifications', (x) => x.filter((notification) => notification.get('id') !== payload));
    }

    return state;
}