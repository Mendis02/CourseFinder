import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const lightTheme = {
  primary: '#3B82F6',
  primaryLight: 'rgba(59, 130, 246, 0.1)',
  primaryDark: '#2563EB',
  background: '#FFFFFF',
  backgroundSecondary: '#F9FAFB',
  card: '#FFFFFF',
  text: '#111827',
  textSecondary: '#6B7280',
  border: '#E5E7EB',
  gray50: '#F9FAFB',
  gray100: '#F3F4F6',
  gray200: '#E5E7EB',
  gray300: '#D1D5DB',
  gray400: '#9CA3AF',
  gray500: '#6B7280',
  gray600: '#4B5563',
  gray700: '#374151',
  gray800: '#1F2937',
  gray900: '#111827',
  white: '#FFFFFF',
  black: '#000000',
  success: '#10B981',
  error: '#EF4444',
  warning: '#F59E0B',
};

export const darkTheme = {
  primary: '#3B82F6',
  primaryLight: 'rgba(59, 130, 246, 0.2)',
  primaryDark: '#60A5FA',
  background: '#111827',
  backgroundSecondary: '#1F2937',
  card: '#1F2937',
  text: '#F9FAFB',
  textSecondary: '#9CA3AF',
  border: '#374151',
  gray50: '#1F2937',
  gray100: '#374151',
  gray200: '#4B5563',
  gray300: '#6B7280',
  gray400: '#9CA3AF',
  gray500: '#D1D5DB',
  gray600: '#E5E7EB',
  gray700: '#F3F4F6',
  gray800: '#F9FAFB',
  gray900: '#FFFFFF',
  white: '#FFFFFF',
  black: '#000000',
  success: '#10B981',
  error: '#EF4444',
  warning: '#F59E0B',
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTheme();
  }, []);

  const loadTheme = async () => {
    try {
      const savedTheme = await AsyncStorage.getItem('theme');
      if (savedTheme !== null) {
        setIsDark(savedTheme === 'dark');
      }
    } catch (error) {
      console.error('Error loading theme:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleTheme = async () => {
    try {
      const newTheme = !isDark;
      setIsDark(newTheme);
      await AsyncStorage.setItem('theme', newTheme ? 'dark' : 'light');
    } catch (error) {
      console.error('Error saving theme:', error);
    }
  };

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDark,
        toggleTheme,
        loading,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
