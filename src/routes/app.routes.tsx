import React from 'react';

import { Entypo } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from 'styled-components';

import Dashboard from '@modules/dashboard/routes/index.routes';

const Tab = createMaterialBottomTabNavigator();

const DashboardTabs: React.FC = () => {
  const theme = useTheme();
  return (
    <>
      <StatusBar translucent backgroundColor={theme.colors.primary} />
      <Tab.Navigator
        shifting={false}
        barStyle={{
          backgroundColor: theme.colors.primary,
          paddingVertical: 5,
        }}
        activeColor={theme.colors.secondary}>
        <Tab.Screen
          name="Home"
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <Entypo name="home" size={24} color={color} />
            ),
          }}
          component={Dashboard}
        />
      </Tab.Navigator>
    </>
  );
};

export default DashboardTabs;
