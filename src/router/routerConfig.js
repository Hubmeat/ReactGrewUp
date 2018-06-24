import Home from "views/Home";
import Page from "views/Page";

import MenuCom from '../publicCom/MenuCom/Menu';
import HeaderCom from '../publicCom/HeaderCom/HeaderCom';
import FooterCom from '../publicCom/FooterCom/FooterCom';

import LayoutCom from "../publicCom/LayoutCom/Layout";
import LoginCom from '../publicCom/LoginCom/Login';


// export const routeConfig = [
//     {
//         path: '/index', 
//         children: [
//             { 
//                 path: '/index/event',
//                 component: createComponent(EventAnalysis),
//                 children: [
//                     { 
//                         path: '/index/event/overview',
//                         component: createComponent(OverViewCom)
//                     },
//                     { 
//                         path: '/index/event/crditEvaluation',
//                         component: createComponent(CreditEvaluationCom)
//                     }
//                 ]
//             },
//             { 
//                 path: '/index/page1',
//                 component: createComponent(Page1),
//             },
//             { 
//                 path: '/index/counter',
//                 component: createComponent(Counter),
//             },
//             { 
//                 path: '/index/userInfo',
//                 component: createComponent(userInfo),
//             }
//         ]
//     }, {
//         path: '/index',
//         component: createComponent(LayoutCom),
//     }, {
//         path: '/login',
//         component: createComponent(LoginCom),
//     }, {
//         path: '',
//         component: createComponent(NotFoundCom),
//     }
// ]
const routerConfig = [
    {
        path: '/',
        exact: true,
        component: LayoutCom,
        children: [{
            path: '/page',
            exact: true,
            component: Page,
        }, {
            path: '/home',
            exact: true,
            component: Home,
        }]
        
    }, {
        path: '/login',
        exact: false,
        component: LoginCom
    }
]


export { MenuCom, HeaderCom, FooterCom };

export default routerConfig;