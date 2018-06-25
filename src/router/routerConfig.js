import React, {Component} from 'react';
import Bundle from '../publicCom/ModuleTools/Bundle.js';

import Home from "../views/Home";
import Page from "../views/Page";

import MenuCom from '../publicCom/MenuCom/Menu';
import HeaderCom from '../publicCom/HeaderCom/HeaderCom';
import FooterCom from '../publicCom/FooterCom/FooterCom';

import LayoutCom from "../publicCom/LayoutCom/Layout";
import  LoginCom from 'bundle-loader?lazy&name=Login../publicCom/LoginCom/Login';
import ChartDemoCom from "../views/echartModule/chartDemoCom/chartDemoView/chartDemo";
import SagaTest from '../views/sagaTestCom/sagaTestView/sagaTestCom';

const Loading = () => ( <div>Loading...</div> );

const createComponent = (component) => (props) => {
    console.log('component', component)
    return(
    <Bundle load={component}>
        {
            (Component) => <Component {...props} /> 
        }
    </Bundle>
)};

const routerConfig = [
    {
        path: '/content',
        exact: false,
        component: LayoutCom,
        children: [{
            path: '/content/page',
            exact: true,
            component: Page,
        }, {
            path: '/content/home',
            exact: true,
            component: Home,
        }, {
            path: '/content/saga',
            exact: true,
            component: SagaTest,
        }, {
            path: '/content/chart',
            exact: true,
            component: ChartDemoCom,
        }]
    }, {
        path: '/login',
        exact: false,
        component: createComponent(LoginCom)
    }
]


export { MenuCom, HeaderCom, FooterCom };

export default routerConfig;