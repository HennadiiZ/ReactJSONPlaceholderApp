// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import { useAuth } from '../../_store/auth-context'; // hook

// export default function PrivateRoute({ component: Component, ...rest }) {

//   const { signup, currentUser } = useAuth();

//   return (
//     <Route
//       {...rest}
//       render={ props => {
//         return currentUser ? <Component {...props} /> : <Redirect to="login" />
//       }}
//     >
      
//     </Route>
//   )
// }


import { useNavigate, Route } from 'react-router-dom';
import { useAuth } from '../../_store/auth-context';

export default function PrivateRoute({ element: Element, ...rest }) {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  if (!currentUser) {
    navigate('/login', { replace: true });
    return null;
  }

  return <Route {...rest} element={<Element />} />;
}

//rfc
