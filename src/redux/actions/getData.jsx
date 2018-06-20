import axios from 'axios';

export const GETJSONDATA = 'homeInfo/getJsonData';
export const GET_DATA_SUCCESS = 'homeInfo/getDataSuccess';
export const GET_DATA_FAIL = 'homeInfo/getDataFail';

function getUserInfoActions () {
    return {
        type: 'GETJSONDATA'
    }
}

function getUserInfoSuccess () {
    return {
        type: 'GET_DATA_SUCCESS'
    }
}

function getUserInfoFail () {
    return {
        type: 'GET_DATA_FAIL'
    }
}

export function getUserInfo() {
    console.log('conmin')
    return function (dispatch) {
        dispatch(getUserInfoActions());

        return axios.get('./data.json')
            .then( res => {
                console.log('ressssss', res)
                res.json()})
            .then(
                json => {
                    console.log('json', json)
                    dispatch(getUserInfoSuccess())
                }
            )
            .catch(
                () => {
                    dispatch(getUserInfoFail())
                }
            )
    }
}
