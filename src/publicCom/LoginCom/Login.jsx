import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox, Divider } from 'antd';
import style from './login.useable.less';
const FormItem = Form.Item;

class NormalLoginForm extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount () {
        style.use();
    }

    componentWillUnmount() {
        style.unuse();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div id='loginCom' >
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                        })(
                        <Checkbox>Remember me</Checkbox>
                        )}
                        <a className="login-form-forgot" href="">Forgot password</a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            <Link to='/content' >登 录</Link>
                        </Button>
                        Or <a href="">register now!</a>
                    </FormItem>
                </Form>
            </div>
        )
    }
} 

const LoginCom = Form.create()(NormalLoginForm);

export { LoginCom };