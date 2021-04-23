import React, { Component } from 'react';
import { Button, Block } from 'components';
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

class LoginForm extends Component {
  render() {
    return (
      <div>
        <div className="auth__top">
          <h2>Log In</h2>
          <p>Please, log in into your account</p>
        </div>
        <Block>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!',
                },
              ]}
              hasFeedback
              validateStatus="success">
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
                size="large"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}>
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                size="large"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button" size="large">
                Log in
              </Button>
            </Form.Item>
            <Link className="auth__register-link" to="/register">
              Registration
            </Link>
          </Form>
        </Block>
      </div>
    );
  }
}

export default LoginForm;
