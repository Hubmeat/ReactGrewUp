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
                <Switch>
                    {routerConfig.map((route, i) => {
                            return (
                                <RouteWithSubRoutes key={i} {...route} />
                            )
                        }
                    )}
                </Switch>
            </Router>
        )
    }
}
