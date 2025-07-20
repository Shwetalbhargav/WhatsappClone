export default {
    prefixes: ['vedazapp://'],
    config: {
      screens: {
        App: {
          screens: {
            MainTabs: {
              screens: {
                Home: 'home',
                Call: 'call',
                Settings: 'settings',
              },
            },
            Chat: 'chat/:userId',
            GroupChat: 'groupchat/:groupId',
          },
        },
      },
    },
  };
  