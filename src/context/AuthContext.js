import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user from storage on app start
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const userData = await AsyncStorage.getItem('@user');
      if (userData) {
        setUser(JSON.parse(userData));
      }
    } catch (error) {
      console.error('Error loading user:', error);
    } finally {
      setLoading(false);
    }
  };

  const register = async (name, email, password) => {
    try {
      // Check if user already exists
      const existingUsers = await AsyncStorage.getItem('@users');
      const users = existingUsers ? JSON.parse(existingUsers) : [];
      
      const userExists = users.find(u => u.email === email.toLowerCase());
      if (userExists) {
        throw new Error('User with this email already exists');
      }

      // Create new user
      const newUser = {
        id: Date.now().toString(),
        name,
        email: email.toLowerCase(),
        password, // In production, this should be hashed
        createdAt: new Date().toISOString(),
      };

      // Save to users list
      users.push(newUser);
      await AsyncStorage.setItem('@users', JSON.stringify(users));

      // Set as current user (auto-login after registration)
      const { password: _, ...userWithoutPassword } = newUser;
      await AsyncStorage.setItem('@user', JSON.stringify(userWithoutPassword));
      setUser(userWithoutPassword);

      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const login = async (email, password) => {
    try {
      // Get all users
      const existingUsers = await AsyncStorage.getItem('@users');
      const users = existingUsers ? JSON.parse(existingUsers) : [];

      // Find user
      const user = users.find(
        u => u.email === email.toLowerCase() && u.password === password
      );

      if (!user) {
        throw new Error('Invalid email or password');
      }

      // Save current user (without password)
      const { password: _, ...userWithoutPassword } = user;
      await AsyncStorage.setItem('@user', JSON.stringify(userWithoutPassword));
      setUser(userWithoutPassword);

      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('@user');
      setUser(null);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        register,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
