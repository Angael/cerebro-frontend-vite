import React, { useState } from 'react';
import Btn from '../../styled/btn/Btn';
import css from './LoginInputs.module.scss';
import CircleLoader from '../../styled/loaders/CircleLoader';
import Textfield from '../../styled/textfield/Textfield';

interface IProps {
  fetching: boolean;
  onOk: (email: string, password: string) => void;
  isRegistration: boolean;
}

const LoginInputs = ({ fetching, onOk, isRegistration }: IProps) => {
  // register email and passwords
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [password2, setPassword2] = useState<string>('');

  // TODO more validation
  const passwordsMatch = password === password2;

  const onSubmit = () => {
    if (!(isRegistration && !passwordsMatch)) {
      onOk(email, password);
    }
  };

  return (
    <>
      <h1 className='h1' style={{ textAlign: 'center', marginBottom: 16 }}>
        Login
      </h1>

      <Textfield
        label='Email'
        input={{
          value: email,
          onChange: (e) => setEmail(e.currentTarget.value),
          placeholder: 'enter@email.com',
          id: 'email',
          type: 'email',
          name: 'email',
        }}
      />

      <Textfield
        label='Password'
        input={{
          value: password,
          onChange: (e) => setPassword(e.currentTarget.value),
          placeholder: '********',
          id: 'password',
          type: 'password',
          name: 'password',
        }}
      />

      {isRegistration && (
        <>
          <Textfield
            label='Repeat password'
            input={{
              value: password2,
              onChange: (e) => setPassword2(e.currentTarget.value),
              placeholder: '********',
              id: 'pass2',
              type: 'password',
              name: 'pass2',
            }}
          />
          {!passwordsMatch && <p>Passwords don't match </p>}
        </>
      )}

      <Btn
        className={css.loginButton}
        type='button'
        onClick={onSubmit}
        disabled={(isRegistration && !passwordsMatch) || fetching}
      >
        {isRegistration ? 'Create account' : 'Log in'}
      </Btn>
      {fetching && <CircleLoader isOverlay />}
    </>
  );
};

export default LoginInputs;
