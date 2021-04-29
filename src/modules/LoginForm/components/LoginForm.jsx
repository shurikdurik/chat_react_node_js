import React from 'react';
import { Button, Block } from 'components';
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const LoginForm = (props) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } = props;
  return (
    <div>
      <div className="auth__top">
        <h2>Log In</h2>
        <p>Please, log in into your account</p>
      </div>
      <Block>
        <Form name="normal_login" className="login-form" onSubmit={handleSubmit}>
          <Form.Item
            validateStatus={!touched.email ? '' : errors.email ? 'error' : 'success'}
            help={!touched.email ? null : errors.email}
            name="username"
            hasFeedback>
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              id="email"
              placeholder="Username"
              size="large"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item
            validateStatus={!touched.password ? '' : errors.password ? 'error' : 'success'}
            help={!touched.password ? null : errors.password}
            name="password"
            hasFeedback>
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              id="password"
              type="password"
              placeholder="Password"
              size="large"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
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
};

export default LoginForm;
