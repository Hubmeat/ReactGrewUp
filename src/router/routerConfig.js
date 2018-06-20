import Home from "views/Home";
import Page from "views/Page";
import SagaTest from "../views/sagaTestCom/sagaTestView/sagaTest.com";
import LayoutCom from "../publicCom/LayoutCom/Layout";

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
        exact: false,
        component: LayoutCom,
        children: [{
            path: '/page',
            exact: false,
            component: Page,
        }, {
            path: '/home',
            exact: false,
            component: Home,
        }, {
            path: '/saga',
            exact: false,
            component: SagaTest,
        }]
        
    }
]

export default routerConfig;