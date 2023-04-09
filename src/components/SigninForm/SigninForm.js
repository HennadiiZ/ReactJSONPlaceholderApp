import { useState } from 'react';
import classes from './SigninForm.module.scss';
import { useNavigate  } from 'react-router-dom';
import { useRef } from "react";
import { useAuth } from '../../_store/auth-context';

const SigninForm = () => {
  const history = useNavigate();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();
  const { signup, currentUser } = useAuth();

  const submitHandler = async (event) => {
    event.preventDefault();

    // if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
    //   return setError('Passwords do not match');
    // }

    try {
      setError();
      setIsLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history('/cards');
    } catch {
      setError('Failed to create an account');
    }

    setError('');
    setIsLoading(false);
  };

  return (
    <section className={classes.form_wrapper}>
      <h1>Sign In</h1>
      { JSON.stringify(currentUser) }
      { currentUser && currentUser.email }
      { error && <p>{ error }</p>}
      <form onSubmit={submitHandler}>
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
    </section>
  );
};

export default SigninForm;