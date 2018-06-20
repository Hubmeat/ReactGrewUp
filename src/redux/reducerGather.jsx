import { combineReducers } from 'redux';
import { counterReducer } from './reducers/counter';
import { homeDataReducer } from './reducers/homeJson';
import { sageTestReducer } from '../views/sagaTestCom/sagaTest.reducer';

// export default function reducerGather(state = {}, action) {
//     console.log('stoe', state)
//     return {
//         counter: counterReducer(state.counterReducer, action),
//         homeRequest: homeDataReducer(state.homeDataReducer, action)
//     }
// }

export default combineReducers({
    counterReducer,
    homeDataReducer,
    sageTestReducer
});
