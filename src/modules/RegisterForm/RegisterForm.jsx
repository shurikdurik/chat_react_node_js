import React, { Component } from 'react';
import { Button, Block } from 'components';
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { InfoCircleTwoTone } from '@ant-design/icons';

class RegisterForm extends Component {
  render() {
    const success = true;
    return (
      <div>
        <div className="auth__top">
          <h2>Registration</h2>
          <p>For access to chat you need to registrate</p>
        </div>
        <Block>
          {success ? (
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}>
              <Form.Item
                name="mail"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Email!',
                  },
                ]}
                hasFeedback
                validateStatus="success">
                <Input
                  prefix={<MailOutlined className="site-form-item-icon" />}
                  placeholder="E-mail"
                  size="large"
                />
              </Form.Item>
              <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Name!',
                  },
                ]}>
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  type="name"
                  placeholder="Name"
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
              <Form.Item
                name="re-password"
                rules={[
                  {
                    required: true,
                    message: 'Please repeat your Password!',
                  },
                ]}>
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="re-password"
                  placeholder="Repeat your password"
                  size="large"
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button" size="large">
                  Registrate
                </Button>
              </Form.Item>
              <Link className="auth__register-link" to="/login">
                Log In
              </Link>
            </Form>
          ) : (
            <div className="auth__success-block">
              <div>
                <InfoCircleTwoTone className="site-form-item-icon" />
              </div>
              <h2>Please confirm your E-mail</h2>
              <p>The link with confirmation was sent to your e-mail</p>
            </div>
          )}
        </Block>
      </div>
    );
  }
}

export default RegisterForm;
