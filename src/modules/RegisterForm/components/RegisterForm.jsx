import React from 'react';
import { Button, Block } from 'components';
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { InfoCircleTwoTone } from '@ant-design/icons';

const success = true;

const RegisterForm = (props) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } = props;
  return (
    <div>
      <div className="auth__top">
        <h2>Registration</h2>
        <p>For access to chat you need to registrate</p>
      </div>
      <Block>
        {success ? (
          <Form onSubmit={handleSubmit} className="login-form">
            <Form.Item
              validateStatus={!touched.email ? '' : errors.email ? 'error' : 'success'}
              hasFeedback
              help={!touched.email ? null : errors.email}>
              <Input
                prefix={<MailOutlined className="site-form-item-icon" />}
                id="email"
                placeholder="E-mail"
                size="large"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item name="name">
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                type="name"
                placeholder="Name"
                size="large"
              />
            </Form.Item>
            <Form.Item
              validateStatus={!touched.password ? '' : errors.password ? 'error' : 'success'}
              name="password"
              hasFeedback
              help={!touched.password ? null : errors.password}>
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                id="password"
                placeholder="Password"
                size="large"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item name="re-password">
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="re-password"
                placeholder="Repeat your password"
                size="large"
              />
            </Form.Item>
            <Form.Item>
              <Button
                onClick={handleSubmit}
                type="primary"
                htmlType="submit"
                className="login-form-button"
                size="large">
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
};

export default RegisterForm;
