import { useState } from 'react';
import classes from './SigninForm.module.scss';
import { useNavigate, Link  } from 'react-router-dom';
import { useRef } from "react";
import { useAuth } from '../../_store/auth-context';

const SigninForm = () => {
  const history = useNavigate();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();
  const { signin, currentUser } = useAuth();

  const signinHandler = async (event) => {
    event.preventDefault();

    try {
      setError();
      setIsLoading(true);
      await signin(emailRef.current.value, passwordRef.current.value);
      history('/cards');
    } catch {
      setError('Failed to sign in');
    }

    setError('');
    setIsLoading(false);
  };

  return (
    <section className={classes.form_wrapper}>
      <h1>Sign In</h1>
      {/* { JSON.stringify(currentUser) }
      { currentUser && currentUser.email } */}
      { error && <p>{ error }</p>}
      <form onSubmit={signinHandler}>
        <label>
          Email:
          <input
            type="email"
            className={classes.auth_input}
            ref={emailRef}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            className={classes.auth_input}
            ref={passwordRef}
          />
        </label>
        <button disabled={isLoading} type="submit" className={classes.auth_button}>Sign In</button>
      </form>
      <p>
        Don't have an account? <Link to="auth/signup">Sign Up</Link>
      </p>
    </section>
  );
};

export default SigninForm;