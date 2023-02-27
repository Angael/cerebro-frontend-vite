import React, { useState } from 'react';

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
    <div>
      <label htmlFor='email'>
        <p>Email: </p>
        <input
          id='email'
          type='email'
          name='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label htmlFor='pass1'>
        <p>Password: </p>
        <input
          id='pass1'
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      {isRegistration && (
        <label htmlFor='pass1'>
          <p>Repeat password: </p>
          <input
            type='password'
            onChange={(e) => setPassword2(e.target.value)}
            value={password2}
          />
          {!passwordsMatch && <p>Passwords don't match </p>}
        </label>
      )}
      <button
        type='button'
        onClick={onSubmit}
        disabled={isRegistration && !passwordsMatch}
      >
        {isRegistration ? 'Create account' : 'Log in'}
      </button>
    </div>
  );
};

export default LoginInputs;
