import {combineReducers} from 'redux';
import batteriesReducer from './batteries';
import consumersReducer from './consumers';
import uiReducer from './ui';

const reducers = combineReducers({
    batteries: batteriesReducer,
    consumers: consumersReducer,
    ui: uiReducer,
});

export default reducers;