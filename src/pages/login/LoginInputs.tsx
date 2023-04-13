import React, { useState } from 'react';
import Btn from '../../lib/btn/Btn';
import css from './LoginInputs.module.scss';
import CircleLoader from '../../lib/loaders/CircleLoader';

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

      <label htmlFor='email'>
        <p>Email: </p>
        <input
          className='textfield'
          id='email'
          type='email'
          name='email'
          placeholder='enter@email.com'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>

      <label htmlFor='pass1'>
        <p>Password: </p>
        <input
          className='textfield'
          id='pass1'
          type='password'
          placeholder='********'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>

      {isRegistration && (
        <label htmlFor='pass2'>
          <p>Repeat password: </p>
          <input
            className='textfield'
            id='pass2'
            type='password'
            placeholder='********'
            onChange={(e) => setPassword2(e.target.value)}
            value={password2}
          />
          {!passwordsMatch && <p>Passwords don't match </p>}
        </label>
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
