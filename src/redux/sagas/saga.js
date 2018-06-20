import {fork,call} from 'redux-saga/effects';
import { sagaTestFn } from '../../views/sagaTestCom/SagaTest.saga';

export default function* Sagas () {
    yield fork(sagaTestFn);
}