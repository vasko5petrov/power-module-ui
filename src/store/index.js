import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reduxPromise from 'redux-promise-middleware';
import reducers from "./modules";

const middlewares = [reduxPromise, thunk];

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)));