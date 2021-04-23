import React from 'react';
import { LoginForm, RegisterForm } from 'modules';
import { Route } from 'react-router';

import './Auth.scss';

const Auth = () => {
  return (
    <section className="auth">
      <div className="auth__content">
        <Route exact path={['/', '/login']} component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
      </div>
    </section>
  );
};

export default Auth;
