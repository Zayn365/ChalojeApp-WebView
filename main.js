import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
 

function Main() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent('MyApp', () => Main);
