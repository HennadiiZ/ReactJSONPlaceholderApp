import Spinner from '../ui/spinner/Spinner';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
import { Navigate, useRoutes } from 'react-router-dom';
import SigninForm from '../components/SigninForm/SigninForm';
import ForgotPassword from '../components/ForgotPassword/ForgotPassword';

const AuthPage = () => {
  const routes = useRoutes([
    { path: 'signup', element: <RegistrationForm /> },
    { path: 'signin', element: <SigninForm /> },
    { path: 'forgot', element: <ForgotPassword />},
    { path: '*', element: <Navigate to="signup" replace /> }
  ]);

  return (
    // <section>
    //   <RegistrationForm />
    // </section>  
    <div>
      {routes}
    </div>
  );
}

export default AuthPage;