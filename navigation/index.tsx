import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Questions from '../screens/QuestionScreen'
import FinalPage from '../screens/FinalScreen'

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }} 
        initialRouteName="questoes"
      >
        <Stack.Screen name="questoes" component={Questions} />
        <Stack.Screen name="final" component={FinalPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
