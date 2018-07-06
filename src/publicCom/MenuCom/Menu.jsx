import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import { Menu, Icon } from 'antd';
import { MenuCreator } from '../routerCreator/routerCreator';
const { SubMenu } = Menu;

class MenuCom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Menus: [
                {
                    url: '',
                    name: '事件分析',
                    key: 'user',
                    icon: "user",
                    children: [
                        {
                            url: '/',
                            name: '首页',
                            key: 'first',
                            children: []
                        }, {
                            url: '/page',
                            key: 'page',
                            name: 'page页',
                            children: []   
                        }, {
                            url: '/home',
                            name: 'home',
                            children: []   
                        }, {
                            url: '/saga',
                            key: 'saga',
                            name: 'sagaTest',
                            children: []  
                        }, {
                            url: '/chart',
                            key: 'chart',
                            name: '图表',
                            children: []
                        }
                    ]
                }, {
                    url: '',
                    name: '报表',
                    key: 'laptop',
                    icon: "laptop",
                    children: []
                }, {
                    url: '',
                    name: 'echarts图表',
                    key: 'chart',
                    icon: "notification",
                    children: []
                }
            ]
        }
    }


    render() {
        return (
            <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['user']}
            style={{ height: '100%' }}>
                {
                    MenuCreator(this.state.Menus)
                }
            </Menu>
        )
    }
} 

export default MenuCom;