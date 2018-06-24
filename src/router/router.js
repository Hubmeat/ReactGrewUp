import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import RouteWithSubRoutes from '../publicCom/routerCreator/routerCreator';
import routerConfig from 'router/routerConfig';

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
