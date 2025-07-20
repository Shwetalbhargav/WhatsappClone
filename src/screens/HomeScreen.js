import React, { useContext } from 'react';
import { View, Text, FlatList, Pressable, Image } from 'react-native';
import { ChatContext } from '../context/ChatContext';
import { UserContext } from '../context/UserContext';
import { useNavigation } from '@react-navigation/native';
import { useTailwind } from 'tailwind-rn';

export default function HomeScreen() {
  const { users } = useContext(ChatContext);
  const { currentUser } = useContext(UserContext);
  const navigation = useNavigation();
  const tw = useTailwind();

  const otherUsers = users.filter(
    (u) => u.id !== currentUser?.id && !u.isGroup
  );

  const groups = users.filter((u) => u.isGroup);

  return (
    <View style={tw('flex-1 bg-white')}>
      <Text style={tw('text-xl font-bold px-4 pt-5 pb-2')}>Chats</Text>
      <FlatList
        data={[...groups, ...otherUsers]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              navigation.navigate(item.isGroup ? 'GroupChat' : 'Chat', {
                userId: item.id,
              })
            }
            style={tw('flex-row items-center px-4 py-3 border-b border-gray-200')}
          >
            <Image source={{ uri: item.avatar }} style={tw('w-12 h-12 rounded-full mr-3')} />
            <View>
              <Text style={tw('text-base font-semibold')}>{item.name}</Text>
              <Text style={tw('text-gray-500 text-sm')}>
                {item.chats[item.chats.length - 1]?.message ?? 'No messages'}
              </Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}
