import React from 'react';
// import Bundle from '../publicCom/ModuleTools/Bundle.js';
// import Bundle from './Bundle.js';

// import Home from "../views/Home";
// import Page from "../views/Page";

// import MenuCom from '../publicCom/MenuCom/Menu';
// import HeaderCom from '../publicCom/HeaderCom/HeaderCom';
// import FooterCom from '../publicCom/FooterCom/FooterCom';

// import LayoutCom from "../publicCom/LayoutCom/Layout";
// import LoginCom from 'bundle-loader?lazy&name=Login../publicCom/LoginCom/Login';
// import ChartDemoCom from "../views/echartModule/chartDemoCom/chartDemoView/chartDemo";
// import SagaTest from '../views/sagaTestCom/sagaTestView/sagaTestCom';
import Asyncfn from './AsyncCom';

const Home = Asyncfn( () => import('../views/Home'))
const Page = Asyncfn( () => import('../views/Page'))
const MenuCom = Asyncfn( () => import('../publicCom/MenuCom/Menu'))
const HeaderCom = Asyncfn( () => import('../publicCom/HeaderCom/HeaderCom'))
const FooterCom = Asyncfn( () => import('../publicCom/FooterCom/FooterCom'))
const LayoutCom = Asyncfn( () => import('../publicCom/LayoutCom/Layout'))
const loginAsy = Asyncfn( () => import('../publicCom/LoginCom/Login'))
const chartDemoCom = Asyncfn( () => import('../views/echartModule/chartDemoCom/chartDemoView/chartDemo'))
const sagaTestCom = Asyncfn( () => import('../views/sagaTestCom/sagaTestView/sagaTestCom'))

const Loading = () => ( <div>Loading...</div> );

var createComponent =(component) => (props) => {
    console.log('component two', component)
    return (
        <Bundle load={component}>
            {
                (Component) => Component ? <Component {...props} /> : <Loading/>
            }
        </Bundle>
    );
}


const routerConfig = [
    {
        path: '/login',
        exact: true,
        // component: createComponent(LoginCom)
        component: loginAsy
    },
    {
        path: '/',
        exact: false,
        component: LayoutCom,
        children: [{
            path: '/page',
            exact: true,
            component: Page,
        }, {
            path: '/home',
            exact: true,
            component: Home,
        }, {
            path: '/saga',
            exact: true,
            component: sagaTestCom,
        }, {
            path: '/chart',
            exact: true,
            component: chartDemoCom,
        }]
    }
]


export { MenuCom, HeaderCom, FooterCom };

export default routerConfig;