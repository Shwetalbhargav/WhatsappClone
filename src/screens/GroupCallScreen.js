import React from 'react';
import { View, Text, Pressable, FlatList, Image } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import { useNavigation } from '@react-navigation/native';
import { mockUsers } from '../data/mockUsers';

export default function GroupCallScreen() {
  const tw = useTailwind();
  const navigation = useNavigation();

  const participants = mockUsers.filter((u) => u.isGroup !== true).slice(0, 4);

  return (
    <View style={tw('flex-1 bg-black justify-center items-center')}>
      <FlatList
        data={participants}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={tw('mb-10')}
        renderItem={({ item }) => (
          <View style={tw('items-center w-1/2 p-4')}>
            <Image
              source={{ uri: item.avatar }}
              style={tw('w-20 h-20 rounded-full border-4 border-green-500')}
            />
            <Text style={tw('text-white mt-2 text-center')}>{item.name}</Text>
          </View>
        )}
      />
      <Pressable
        onPress={() => navigation.goBack()}
        style={tw('bg-red-600 px-6 py-3 rounded-full')}
      >
        <Text style={tw('text-white font-semibold')}>End Group Call</Text>
      </Pressable>
    </View>
  );
}
