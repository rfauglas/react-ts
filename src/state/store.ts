import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import datadogMiddleware from '../middleware/datadog';


export const store = createStore(reducers, {}, applyMiddleware(thunk, datadogMiddleware));
