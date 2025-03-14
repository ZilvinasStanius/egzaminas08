import { useState } from 'react';
import "../sytles/signIn.css"
import useLogin from '../customHooks/useLogin';
import useRegister from '../customHooks/useRegister';

export default function SignIn() {
  const [isRegister, setIsRegister] = useState(false);
  const { onLogin, message } = useLogin();
  const { onRegister, msg } = useRegister();

  return (
    <div>
      <div className="formContainer">
        <h1>{isRegister ? 'Register' : 'Login'}</h1>
        {isRegister ? (
          <form onSubmit={onRegister}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
            />
             <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
            />
            <input
              type="text"
              name="email"
              placeholder="email"
              required
            />
            <input
              type="text"
              name="password"
              placeholder="password"
              required
            />
            <button type="submit">Register</button>
            <span>
              <b>{msg}</b>
            </span>
          </form>
        ) : (
          <form onSubmit={onLogin}>
            <input
              type="text"
              name="email"
              placeholder="email"
              required
            />
            <input
              type="text"
              name="password"
              placeholder="password"
              required
            />
            <button type="submit">Log in</button>
            <div className="spanDiv">
              <span>
                <b>{message}</b>
              </span>
            </div>
          </form>
        )}
        <p>
          {isRegister ? 'Already have an account?' : 'Dont have an account?'}{' '}
        </p>
        <button onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? 'Login' : 'Register'}
        </button>
      </div>
    </div>
  );
}