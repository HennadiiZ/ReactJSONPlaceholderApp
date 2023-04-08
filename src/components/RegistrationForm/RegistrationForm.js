import { useState } from 'react';
import classes from './RegistrationForm.module.scss';
import { useNavigate  } from 'react-router-dom';

const RegistrationForm = () => {
  const history = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    history('/cards');
  };

  return (
    <section className={classes.form_wrapper}>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className={classes.auth_input}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className={classes.auth_input}
          />
        </label>
        <button type="submit" className={classes.auth_button}>Login</button>
      </form>
    </section>
  );
};

export default RegistrationForm;
