// src/hooks/useAuth.js
import { useState } from 'react';

export const useAuth = () => {
  // Simulate an authenticated state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to login (for simulation purposes)
  const login = () => setIsAuthenticated(true);

  // Function to logout (for simulation purposes)
  const logout = () => setIsAuthenticated(false);

  return {
    isAuthenticated,
    login,
    logout,
  };
};
