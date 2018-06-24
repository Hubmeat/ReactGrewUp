import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom';

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

export default RouteWithSubRoutes;