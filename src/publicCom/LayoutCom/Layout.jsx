import React, { Component } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { MenuCom, HeaderCom, FooterCom } from '../../router/routerConfig';
import { RouteCreator } from '../../publicCom/routerCreator/routerCreator';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;



class LayoutCom extends Component {
    constructor(props) {
        super(props)
    }

    testGo() {
        // console.log('layout test props', this.props)
        // this.props.history.push('/login')
    }
    
    render() {
        console.log('this.props layout', this.props)

        return (  
            <Layout style={{ height: '100%' }}>
                <HeaderCom />
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List </Breadcrumb.Item>
                    <Breadcrumb.Item>App33</Breadcrumb.Item>
                </Breadcrumb>
                    <Layout style={{ height: document.body.clientHeight - 186, padding: '24px 0', background: '#fff' }}>
                        <Sider width={200} style={{ background: '#fff' }}>
                            <MenuCom />
                        </Sider>
                        <Content style={{ padding: '0 24px' }}>
                            {
                                RouteCreator(this.props.routes)
                            }
                            {console.log('content 路由', RouteCreator(this.props.routes))}
                            <Route path="/" exact render={()=><Redirect to="/login"/>}/>
                        </Content>
                    </Layout>
                </Content>
                <FooterCom />
            </Layout>
        )
    }
}

export default LayoutCom;
