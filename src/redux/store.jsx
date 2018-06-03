import {createStore} from 'redux';
import reducerGather from './reducerGather';

let store = createStore(reducerGather);

export default store;