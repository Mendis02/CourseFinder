import React, { useState } from 'react';
import { ActivityIndicator, View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { AuthProvider, useAuth } from './src/context/AuthContext';
import { FavoritesProvider } from './src/context/FavoritesContext';
import HomeScreen from './src/screens/HomeScreen';
import CourseListScreen from './src/screens/CourseListScreen';
import CourseDetailScreen from './src/screens/CourseDetailScreen';
import SearchScreen from './src/screens/SearchScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import { colors } from './src/styles/styles';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeMain" component={HomeScreen} />
    <Stack.Screen name="CourseDetail" component={CourseDetailScreen} />
  </Stack.Navigator>
);

const CoursesStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="CourseListMain" component={CourseListScreen} />
    <Stack.Screen name="CourseDetail" component={CourseDetailScreen} />
  </Stack.Navigator>
);

const SearchStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="SearchMain" component={SearchScreen} />
    <Stack.Screen name="CourseDetail" component={CourseDetailScreen} />
  </Stack.Navigator>
);

const FavoritesStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="FavoritesMain" component={FavoritesScreen} />
    <Stack.Screen name="CourseDetail" component={CourseDetailScreen} />
  </Stack.Navigator>
);

const MenuModal = ({ visible, onClose, navigation }) => {
  const { user, logout } = useAuth();
  
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableOpacity 
        style={styles.modalOverlay} 
        activeOpacity={1} 
        onPress={onClose}
      >
        <View style={styles.menuContainer}>
          <View style={styles.menuHeader}>
            <Feather name="user" size={48} color="white" style={styles.menuHeaderIcon} />
            <Text style={styles.menuHeaderName}>{user?.name}</Text>
            <Text style={styles.menuHeaderEmail}>{user?.email}</Text>
          </View>
          
          <View style={styles.menuItems}>
            <TouchableOpacity 
              style={styles.menuItem}
              onPress={() => {
                navigation.navigate('Home');
                onClose();
              }}
            >
              <Feather name="home" size={24} color={colors.gray900} />
              <Text style={styles.menuItemText}>Home</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.menuItem}
              onPress={() => {
                navigation.navigate('Courses');
                onClose();
              }}
            >
              <Feather name="book" size={24} color={colors.gray900} />
              <Text style={styles.menuItemText}>All Courses</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.menuItem}
              onPress={() => {
                navigation.navigate('Search');
                onClose();
              }}
            >
              <Feather name="search" size={24} color={colors.gray900} />
              <Text style={styles.menuItemText}>Search</Text>
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity 
            style={styles.logoutButton}
            onPress={() => {
              logout();
              onClose();
            }}
          >
            <Feather name="log-out" size={20} color={colors.gray900} />
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const AppTabs = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [navigation, setNavigation] = useState(null);

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.gray400,
          tabBarStyle: {
            paddingBottom: 12,
            paddingTop: 8,
            height: 70,
            borderTopWidth: 1,
            borderTopColor: colors.gray200,
          },
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeStack}
          options={{
            tabBarIcon: ({ color, size }) => <Feather name="home" size={size} color={color} />,
          }}
          listeners={({ navigation }) => {
            setNavigation(navigation);
            return {};
          }}
        />
        <Tab.Screen 
          name="Courses" 
          component={CoursesStack}
          options={{
            tabBarIcon: ({ color, size }) => <Feather name="book" size={size} color={color} />,
          }}
        />
        <Tab.Screen 
          name="Search" 
          component={SearchStack}
          options={{
            tabBarIcon: ({ color, size }) => <Feather name="search" size={size} color={color} />,
          }}
        />
        <Tab.Screen 
          name="Favorites" 
          component={FavoritesStack}
          options={{
            tabBarIcon: ({ color, size }) => <Feather name="heart" size={size} color={color} />,
          }}
        />
        <Tab.Screen 
          name="Menu" 
          component={View}
          options={{
            tabBarIcon: ({ color, size }) => <Feather name="menu" size={size} color={color} />,
          }}
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
              setMenuVisible(true);
            },
          }}
        />
      </Tab.Navigator>
      <MenuModal 
        visible={menuVisible} 
        onClose={() => setMenuVisible(false)}
        navigation={navigation}
      />
    </>
  );
};

const Navigation = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#3B82F6" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppTabs /> : <AuthStack />}
      <StatusBar style="light" />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  menuContainer: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingBottom: 40,
  },
  menuHeader: {
    backgroundColor: colors.primary,
    padding: 24,
    paddingTop: 32,
    paddingBottom: 32,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  menuHeaderIcon: {
    marginBottom: 12,
  },
  menuHeaderName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: 4,
  },
  menuHeaderEmail: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  menuItems: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  menuItemText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.gray900,
    marginLeft: 16,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.gray100,
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.gray900,
    marginLeft: 12,
  },
});

export default function App() {
  return (
    <AuthProvider>
      <FavoritesProvider>
        <Navigation />
      </FavoritesProvider>
    </AuthProvider>
  );
}
