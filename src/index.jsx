import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader'; // 引入 react hot module
import RouterModule from 'router/router';
import {Provider} from 'react-redux';
import store from './redux/store';

function renderWithHotReload(RootElement) {
    ReactDom.render(
        <AppContainer>            
            <Provider store={store}>
                <RootElement />
            </Provider>
        </AppContainer>, 
        document.getElementById('app')
    );
}

// 初始化react hot module
renderWithHotReload(RouterModule);

if (module.hot) {
    module.hot.accept('./router/router', () => {
        const RouterModule = require('./router/router').default;
        renderWithHotReload(RouterModule)
    });
}


