import React from 'react';
import Toast from 'react-native-toast-message';

import {
  Comfortaa_300Light,
  Comfortaa_400Regular,
  Comfortaa_500Medium,
  Comfortaa_700Bold,
} from '@expo-google-fonts/comfortaa';
import {
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import Constants from 'expo-constants';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

import AppContainer from '@hooks/index.hooks';

import Routes from './src/routes/index.routes';
import theme from './src/styles/theme';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Comfortaa_300Light,
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_700Bold,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <StatusBar style="dark" backgroundColor={theme.colors.light} />
          <Routes />
        </AppContainer>
        <Toast
          ref={(ref) => Toast.setRef(ref)}
          topOffset={Constants.statusBarHeight + 10}
        />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
