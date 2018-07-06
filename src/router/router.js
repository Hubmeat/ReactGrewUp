import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import { RouteCreator } from '../publicCom/routerCreator/routerCreator';
import routerConfig from 'router/routerConfig';

export default class RouterModule extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {
                        RouteCreator(routerConfig)
                    }
                    <Route path="/" exact render={()=><Redirect to="/login"/>}/>
                    {console.log('全局路由', RouteCreator(routerConfig))}
                </Switch>
            </BrowserRouter>
        )
    }
}
