import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TypedTailwindProvider from './src/providers/TypedTailwindProvider';
import AppNavigator from './src/navigation/AppNavigator';
import { ChatProvider } from './src/context/ChatContext';
import { UserProvider } from './src/context/UserContext';
import { NotificationProvider } from './src/context/NotificationContext';
import useFCMNotifications from './src/hooks/useFCMNotifications';
import useDarkMode from './src/hooks/useDarkMode';


export default function App(): JSX.Element {
  useFCMNotifications();
  const { theme } = useDarkMode();

  return (
    <TypedTailwindProvider>
      <NotificationProvider>
        <UserProvider>
          <ChatProvider>
            <NavigationContainer theme={theme}>
              <AppNavigator />
            </NavigationContainer>
          </ChatProvider>
        </UserProvider>
      </NotificationProvider>
    </TypedTailwindProvider>
  );
}
