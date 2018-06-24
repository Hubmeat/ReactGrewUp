import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
const { Footer } = Layout;

class FooterCom extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Footer style={{ textAlign: 'center' }}>
                React grew up !!!  @ 2018/6 - 2018/8
            </Footer>
        )
    }
} 

export default FooterCom;