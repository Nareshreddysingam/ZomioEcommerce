import React, { createContext, useState, useContext, ReactNode } from 'react';
import { mockAdminUsers } from '../data/mockOrders';

interface AuthContextType {
  isAuthenticated: boolean;
  user: { username: string; role: 'admin' | 'delivery' } | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<{ username: string; role: 'admin' | 'delivery' } | null>(() => {
    const savedUser = localStorage.getItem('zomioUser');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (username: string, password: string): boolean => {
    const matchedUser = mockAdminUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (matchedUser) {
      const userData = {
        username: matchedUser.username,
        role: matchedUser.role
      };
      
      setUser(userData);
      localStorage.setItem('zomioUser', JSON.stringify(userData));
      return true;
    }
    
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('zomioUser');
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: user !== null,
        user,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};