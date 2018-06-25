import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import { RouteCreator } from '../publicCom/routerCreator/routerCreator';
import routerConfig from 'router/routerConfig';

export default class RouterModule extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    {
                        RouteCreator(routerConfig)
                    }
                    {console.log('全局路由', RouteCreator(routerConfig))}
                </Switch>
            </Router>
        )
    }
}
