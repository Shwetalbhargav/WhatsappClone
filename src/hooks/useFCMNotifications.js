import { useEffect } from 'react';
import messaging from '@react-native-firebase/messaging';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { requestUserPermission, getFCMToken } from '../services/firebase';

export default function useFCMNotifications() {
  const navigation = useNavigation();

  useEffect(() => {
    requestUserPermission();
    getFCMToken();

    // Foreground handler
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      Alert.alert(
        remoteMessage.notification?.title,
        remoteMessage.notification?.body,
        [
          {
            text: 'Open',
            onPress: () => {
              const targetId = remoteMessage.data?.userId;
              const isGroup = remoteMessage.data?.type === 'group';
              navigation.navigate(isGroup ? 'GroupChat' : 'Chat', {
                userId: targetId,
              });
            },
          },
        ]
      );
    });

    // Background/quit handler
    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        if (remoteMessage) {
          const targetId = remoteMessage.data?.userId;
          const isGroup = remoteMessage.data?.type === 'group';
          navigation.navigate(isGroup ? 'GroupChat' : 'Chat', {
            userId: targetId,
          });
        }
      });

    return unsubscribe;
  }, []);
}
