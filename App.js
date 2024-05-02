import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import AppNavigator from './src/navigation/Navigator';
import tw from 'tailwind-react-native-classnames';
import { LanguageProvider } from './src/context/LanguageContext';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <LanguageProvider>
        <AppNavigator />
      </LanguageProvider>
    </NavigationContainer>
  );
}
