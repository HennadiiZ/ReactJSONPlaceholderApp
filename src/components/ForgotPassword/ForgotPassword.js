import { useState } from 'react';
import classes from './ForgotPassword.module.scss';
import { useNavigate, Link } from 'react-router-dom';
import { useRef } from "react";
import { useAuth } from '../../_store/auth-context';

const ForgotPassword = () => {
  const history = useNavigate();
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef();
  const { forgotPass, currentUser } = useAuth();

  const resetPassHandler = async (event) => {
    event.preventDefault();

    try {
      setMessage('');  
      setError('');
      setIsLoading(true);
      await forgotPass(emailRef.current.value);
      setMessage('Check your inbox for further instructions');
      // history('/auth/signin');
    } catch {
      setError('Failed to reset');
    }

    // setError('');
    setIsLoading(false);
  };

  return (
    <section className={classes.form_wrapper}>
      <h1>Forgot Password</h1>
      { error && <p>{ error }</p>}
      { message && <p>{ message }</p>}
      <form onSubmit={resetPassHandler}>
        <label>
          Email:
          <input
            type="email"
            className={classes.auth_input}
            ref={emailRef}
            required
          />
        </label>
        <button disabled={isLoading} type="submit" className={classes.auth_button}>Reset Password</button>
      </form>
      <div className={classes.auth_links}>
        <p>
          Don't have an account? <Link to="/auth/signup">Sign Up</Link>
        </p>
        <p>
          <Link to="/auth/signin">Sign In</Link>
        </p>
      </div>
    </section>
  );
};

export default ForgotPassword;