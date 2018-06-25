import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;

/**
 * @param routes
 * 传递routes 数组，动态创建 Route  
 */
const RouteCreator = (routes) => {
    return routes.map( (route, i) => {
        return (
            <Route key={i} exact = {route.exact} path={route.path} render={ props => {
                return (
                    <route.component {...props} routes={route.children}/>
                )
            }
            }/>
        )
    })
}


/**
 * @param menus
 * 传递menus 数组, 动态参加 menu 控制器
 */

const MenuCreator = (menus) => {
    return menus.map( (item, i) => {
        if (item.children && item.children.length > 0) {
            const subMenuItem = MenuCreator(item.children);
            return (
                <SubMenu
                    key={'sub' + item.key}
                    title={<span><Icon type={item.icon} /><span >{item.name}</span></span>}
                >
                    {
                        subMenuItem
                    }
                </SubMenu>
            )
        } else {
            return (
                <Menu.Item key={'menu'+item.key}>
                {
                    item.url ? 
                    <Link to={item.url}>
                        <Icon type={item.icon} />
                        <span>{item.name}</span> 
                    </Link> : 
                    <span>{<Icon type={item.icon} />}{item.name}</span>
                }
                </Menu.Item>
            )
        }
    })
}
export { RouteCreator, MenuCreator };