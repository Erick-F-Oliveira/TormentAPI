import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import api from '../Service/axios.service';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await api.get('/me');
        setIsLoggedIn(true);
        setUser(response.data.user);
      } catch (error) {
        setIsLoggedIn(false);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkLoginStatus();
  }, []);

  const value = { isLoggedIn, user, loading };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Hook para acessar o contexto
export const useAuth = () => {
  return useContext(AuthContext);
};