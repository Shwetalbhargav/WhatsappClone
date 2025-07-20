import notifee from '@notifee/react-native';

export async function displayLocalNotification(title, body, data = {}) {
  await notifee.requestPermission();

  await notifee.displayNotification({
    title,
    body,
    android: {
      channelId: 'default',
      pressAction: {
        id: 'default',
      },
    },
    data,
  });
}
