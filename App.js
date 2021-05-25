import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as StoreProvider } from 'react-redux';
import Main from './src/main';
import { store } from './src/store/stote'

export default function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Main />
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
}