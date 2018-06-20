import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import sagaTestCom from '../../views/sagaTestCom/sagaTestView/sagaTest.com';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

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

class LayoutCom extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        {console.log('this.props layout', this.props)}
        return (  
            <Layout style={{ height: '100%' }}>
                <Header className="header">
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Layout style={{ height: document.body.clientHeight - 186, padding: '24px 0', background: '#fff' }}>
                    <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%' }}
                    >
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
                    </Sider>
                    <Content style={{ padding: '0 24px' }}>
                        {this.props.routes.map((route, i) => {
                            return (
                                <RouteWithSubRoutes key={i} {...route} />
                            )
                        })}
                    </Content>
                </Layout>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2016 Created by Ant UED
                </Footer>
            </Layout>
        )
    }
}

export default LayoutCom;
