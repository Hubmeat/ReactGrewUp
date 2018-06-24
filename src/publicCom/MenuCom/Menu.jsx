import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;

class MenuCom extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}>
                <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                    <Menu.Item key="1"><Link to='/'>首页</Link></Menu.Item>
                    <Menu.Item key="2"><Link to='/page'>page</Link></Menu.Item>
                    <Menu.Item key="3"><Link to='/home'>home</Link></Menu.Item>
                    <Menu.Item key="4"><Link to='/saga'>sagaTest</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                    <Menu.Item key="5">option5</Menu.Item>
                    <Menu.Item key="6">option6</Menu.Item>
                    <Menu.Item key="7">option7</Menu.Item>
                    <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                    <Menu.Item key="9">option9</Menu.Item>
                    <Menu.Item key="10">option10</Menu.Item>
                    <Menu.Item key="11">option11</Menu.Item>
                    <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
            </Menu>
        )
    }
} 

export default MenuCom;