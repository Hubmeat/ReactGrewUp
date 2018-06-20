import {createStore, applyMiddleware, compose} from 'redux';
import reducerGather from './reducerGather';
import createSagaMiddleware from 'redux-saga'
import thunkMiddleware from 'redux-thunk';
import Sagas from './sagas/saga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [];

// 集合 中间件处理队列
// const storeEnhancers = compose(
//     applyMiddleware(...middlewares,thunkMiddleware, sagaMiddleware, )
// );

const storeEnhancers = compose(
    applyMiddleware(sagaMiddleware, thunkMiddleware)
);

export default function configureStore(initialState={}) {
    const store = createStore(reducerGather, initialState, storeEnhancers);
    sagaMiddleware.run(Sagas);
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept( () => {
            const nextRootReducer = require('./reducerGather');
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
}

// const store = createStore(reducerGather, applyMiddleware(thunkMiddleware));


// export default store;