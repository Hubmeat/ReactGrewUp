import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import routerConfig from 'router/routerConfig';

const RouteWithSubRoutes = (route) => {
    return (
        <Route exact = {route.exact} path={route.path} render={ props => {
            return (
                <route.component {...props} routes={route.children}/>
            )
        }
        }/>
    )
}

export default class RouterModule extends Component {
    render() {
        return (
            <Router>
                <div>
                        说ssadadad 
                    <div>
                        <ul>
                            <li><Link to='/'>首页</Link></li>
                            <li><Link to='/page'>页面1</Link></li>
                            <li><Link to='/home'>页面1</Link></li>
                        </ul>
                    </div>
                    <Switch>
                        {console.log("enyru")}
                        {routerConfig.map((route, i) => {
                                console.log('route', route)
                                return (
                                    <RouteWithSubRoutes key={i} {...route} />
                                )
                            }
                        )}
                    </Switch>
                </div>
            </Router>
        )
    }
}
// const routerModule = () => {
//     <Router>
//         <div>
//             sssss
//             <div>
//                 <ul>
//                     <li><Link to='/'>首页</Link></li>
//                     <li><Link to='/page1'>页面1</Link></li>
//                 </ul>
//             </div>
//             <Switch>
//                 {console.log("enyru")}
//                 {routerConfig.map((route, i) => {
//                         console.log('route', route)
//                         return (
//                             <RouteWithSubRoutes key={i} {...route} />
//                         )
//                     }
//                 )}
//             </Switch>
//         </div>
//     </Router>
// }
// export default routerModule;