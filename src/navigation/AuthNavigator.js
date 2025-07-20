import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigator from './AppNavigator';
import UserSelectorScreen from '../screens/UserSelectorScreen';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="UserSelector" component={UserSelectorScreen} />
      <Stack.Screen name="App" component={AppNavigator} />
    </Stack.Navigator>
  );
}
