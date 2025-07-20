import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import GroupChatScreen from '../screens/GroupChatScreen';
import CallScreen from '../screens/CallScreen';
import GroupCallScreen from '../screens/GroupCallScreen';
import SettingsScreen from '../screens/SettingsScreen';
import UserSelectorScreen from '../screens/UserSelectorScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="chatbubble-ellipses" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Select user on first load */}
      <Stack.Screen name="UserSelector" component={UserSelectorScreen} />
      {/* Main app with tabs */}
      <Stack.Screen name="App" component={MainTabs} />
      {/* Chat screens */}
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="GroupChat" component={GroupChatScreen} />
      {/* Call screens */}
      <Stack.Screen name="Call" component={CallScreen} />
      <Stack.Screen name="GroupCall" component={GroupCallScreen} />
    </Stack.Navigator>
  );
}
