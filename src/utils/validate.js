/* eslint-disable import/no-anonymous-default-export */
export default ({ isAuth, values, errors }) => {
  const rules = {
    email: (errors, value) => {
      if (!value) {
        errors.email = 'Please, enter your E-mail';
      } else if (!/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errors.email = 'Invalid email address';
      }
    },
    password: (errors, value) => {
      if (!value) {
        errors.password = 'Please, enter your password';
      } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/i.test(value)) {
        errors.password = isAuth ? 'Wrong password' : 'Not strong password';
      }
    },
  };

  Object.keys(values).forEach((key) => rules[key] && rules[key](errors, values[key]));
};
