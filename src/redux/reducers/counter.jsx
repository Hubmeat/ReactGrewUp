import {INCREMENT, DECREMENT, RESET} from '../actions/counter';

// 初始化 state

const initState = {
    count: 0
};

export function counterReducer (state = initState, actions) {
    switch (actions.type) {
        case INCREMENT:
            return {
                count: state.count + 1
            };
        case DECREMENT:
            return {
                count: state.count - 1
            };
        case RESET:
            return {count: 0};
        default:
            return state
    }
} 