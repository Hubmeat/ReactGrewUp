import {put,call,take} from 'redux-saga/effects';
import { delay } from 'redux-saga'
import * as SageTestActions from './sagaTest.action';

export function* testWay(status) {
    console.log('action ==>  status', status)
    if (status.code === 0) {
        console.log('等待触发新的action')
        // setTimeout(() => {
        //     yield put({type:SageTestActions.SAGE_TEST_SUCCESS});
        // }, 3000)
        yield put({type:SageTestActions.SAGE_TEST_SUCCESS});
        // yield call(SageTestActions.sagaTestSuccess);
    } else {
        yield put({type:SageTestActions.SAGE_TEST_ERROR});
    }
}

export function* sagaTestFn() {
    while(true){
        let status = yield take(SageTestActions.SAGE_TEST_START);
        yield delay(3000);
        yield call(testWay, status);
        
    }
}
