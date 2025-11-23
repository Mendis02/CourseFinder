import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FavoritesContext = createContext();

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      const favoritesData = await AsyncStorage.getItem('favorites');
      if (favoritesData) {
        setFavorites(JSON.parse(favoritesData));
      }
    } catch (error) {
      console.error('Error loading favorites:', error);
    } finally {
      setLoading(false);
    }
  };

  const saveFavorites = async (newFavorites) => {
    try {
      await AsyncStorage.setItem('favorites', JSON.stringify(newFavorites));
      setFavorites(newFavorites);
    } catch (error) {
      console.error('Error saving favorites:', error);
    }
  };

  const toggleFavorite = (courseId) => {
    const isFavorite = favorites.includes(courseId);
    let newFavorites;
    
    if (isFavorite) {
      newFavorites = favorites.filter(id => id !== courseId);
    } else {
      newFavorites = [...favorites, courseId];
    }
    
    saveFavorites(newFavorites);
  };

  const isFavorite = (courseId) => {
    return favorites.includes(courseId);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        loading,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
