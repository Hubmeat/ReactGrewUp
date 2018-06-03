import { GETJSONDATA, GET_DATA_SUCCESS, GET_DATA_FAIL } from '../actions/getData';

const initState = {
    homeInfo: {
        "name": 'no shop',
        "description": 'default'
    },
    isLoading: false,
    errorMsg: ''
}

export function homeDataReducer ( state = initState, actions) {
    switch (actions.type) {
        case GETJSONDATA: 
            console.log('before', actions)
            return {
                isLoading: true,
                homeInfo: {},
                errorMsg: ''
            }
        case GET_DATA_SUCCESS:
            console.log('success', actions)
            return {
                isLoading: false,
                homeInfo: {},
                errorMsg: ''
            }
        case GET_DATA_FAIL:
            console.log('fail', actions)
            return {
                isLoading: false,
                homeInfo: {},
                errorMsg: '错误'
            }
        default:
            return state;
    }
}