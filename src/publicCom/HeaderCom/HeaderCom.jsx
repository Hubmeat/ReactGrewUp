import React, { Component } from 'react';
import { Route, Switch, router } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon } from 'antd';
import { Button } from 'antd/lib/radio';
const {  Header, Content, Footer, Sider } = Layout;
import './header.less';


class HeaderCom extends Component {
    constructor(props) {
        super(props)
    }

    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    signOut() {
        console.log('props', this.props)
        console.log('ss context', this.context )
        this.context.router.history.push("/login");

    }

    render() {
        return (
            <Header className="header">
                <div className="logo" />
                <Menu
                    theme="dark"
                    className="menu"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">ssnav 1</Menu.Item>
                    <Menu.Item key="2">nav s</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
                <div className="control" onClick={this.signOut.bind(this)} >
                    <Icon className='outIcon'  type="poweroff" /> 登录
                </div>
            </Header>
        )
    }
} 

export default HeaderCom;