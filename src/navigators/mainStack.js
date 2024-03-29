import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Cardapio from '../pages/Cardapio';
import Carrinho from '../pages/Carrinho';

const MainStack = createStackNavigator();

export default () => (
  <MainStack.Navigator>
    <MainStack.Screen name="Cardapio" component={Cardapio} />
    <MainStack.Screen name="Carrinho" component={Carrinho} />
  </MainStack.Navigator>

);