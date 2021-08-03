import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from 'styled-components';

import Cadastro from '@modules/authorization/pages/Cadastro';
import Login from '@modules/authorization/pages/Login';

const Auth = createStackNavigator();

const AppRoutes: React.FC = () => {
  const theme = useTheme();
  return (
    <>
      <StatusBar translucent backgroundColor={theme.colors.secondary} />
      <Auth.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: theme.colors.secondary },
        }}>
        <Auth.Screen name="Login" component={Login} />
        <Auth.Screen name="Cadastro" component={Cadastro} />
      </Auth.Navigator>
    </>
  );
};

export default AppRoutes;
