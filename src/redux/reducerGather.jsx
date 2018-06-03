import { counterReducer } from './reducers/counter';
import { homeDataReducer } from './reducers/homeJson';

export default function reducerGather(state = {}, action) {
    console.log('stoe', state)
    return {
        counter: counterReducer(state.counterReducer, action),
        homeRequest: homeDataReducer(state.homeDataReducer, action)
    }
}