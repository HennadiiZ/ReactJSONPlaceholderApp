import React, { useState, useEffect, useContext } from 'react';
import { auth } from '../firebase';

const AuthContext = React.createContext({});

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthContextProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const signup  = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const signin  = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logout  = () => {
    return auth.signOut();
  };

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);


  const value = {
    currentUser,
    signup,
    signin,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {/* { isLoading && children } */}
      { children }
    </AuthContext.Provider>
  );
}

export default AuthContext;