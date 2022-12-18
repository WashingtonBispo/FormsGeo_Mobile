import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Questions from './screens/questions'
import Home from './screens/home'
import Final from './screens/final'
import InfoResearch from './screens/infoResearch'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Questions"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Questions" component={Questions} />
        <Stack.Screen name="Final" component={Final} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="InfoResearch" component={InfoResearch} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


