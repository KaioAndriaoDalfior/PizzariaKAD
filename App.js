import { View, Text, StyleSheet, Button, Linking } from 'react-native';
import { Cardapio } from './src/pages/Cardapio';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainStack from './src/navigators/mainStack'

const App = () => {
 return(
  <NavigationContainer>
    <MainStack />
  </NavigationContainer>
 )
};
export default App;
