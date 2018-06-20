export const SAGE_TEST_START = 'sagaTest/start';
export const SAGE_TEST_SUCCESS = 'sageTest/success';
export const SAGE_TEST_ERROR = 'sagaTest/error';

export function sageTestStart() {
    return {
        type: SAGE_TEST_START,
        code: 0
    }
}

export function sagaTestSuccess() {
    console.log(';;;;')
    return {
        type: SAGE_TEST_SUCCESS
    }
}

export function sagaTestError() {
    return {
        type: SAGE_TEST_ERROR
    }
}
