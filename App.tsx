// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './page/singIn/index'
import singUp from './page/singUp';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="singIn" component={HomeScreen} />
        <Stack.Screen options={{headerShown:false}} name="singUp" component={singUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;