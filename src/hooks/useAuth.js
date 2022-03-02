import React, { useState, useContext, createContext } from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';
import endPoints from '@services/api';

const AuthContext = createContext();

export function ProviderAuth({ children }) {
  const auth = userProviderAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function userProviderAuth() {
  const [user, setUser] = useState(null);

  const signIn = async (email, password) => {
    // setUser('login');
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };
    const { data: access_token } = await axios.post(endPoints.auth.login, { email, password }, options);
    // console.log(access_token);
    if (access_token) {
      const thisToken = access_token.access_token;
      Cookie.set('token', thisToken, { expires: 5 });

      axios.defaults.headers.Authorization = `Bearer ${thisToken}`;
      const { data: user } = await axios.get(endPoints.auth.profile);
      console.log(user);
      setUser(user);
    }
  };

  return {
    user,
    signIn,
  };
}
