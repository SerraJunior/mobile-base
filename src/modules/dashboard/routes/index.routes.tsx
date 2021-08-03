import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import theme from '@styles/theme';

import Dashboard from '../pages/Dashboard';

type DashboardRoutesProps = {
  Dashboard: undefined;
};

const Stack = createStackNavigator<DashboardRoutesProps>();

const DashboardRoutes: React.FC = () => (
  <Stack.Navigator
    initialRouteName="Dashboard"
    screenOptions={{
      headerShown: false,
      headerStyle: {
        backgroundColor: theme.colors.default,
      },
    }}>
    <Stack.Screen name="Dashboard" component={Dashboard} />
  </Stack.Navigator>
);

export default DashboardRoutes;
