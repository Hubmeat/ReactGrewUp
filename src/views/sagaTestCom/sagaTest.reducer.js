import * as SageTestActions from './sagaTest.action';

const initState = {
    code: 10
};

export function sageTestReducer( state = initState, actions) {
    console.log('actions',actions);
    switch(actions.type) {
        case SageTestActions.SAGE_TEST_START:
            console.log('actionsss', actions)
            return {
                ...state,         
                data: 'saga start',
                code: 0
            }
        case SageTestActions.SAGE_TEST_SUCCESS:
            console.log('actionsss _ SAGE_TEST_SUCCES', actions);
            return  {
                ...state,
                data: 'saga success',
                code: 200
            }
        case SageTestActions.SAGE_TEST_ERROR:
            return  {
                ...state,
                data: 'saga error',
                code: 400
            }
        default:
            return state
    }
}
