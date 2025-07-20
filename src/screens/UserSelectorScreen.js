import React, { useContext } from 'react';
import { View, Text, FlatList, Pressable, Image } from 'react-native';
import { UserContext } from '../context/UserContext';
import { useNavigation } from '@react-navigation/native';
import { useTailwind } from 'tailwind-rn';
import { useEffect, useState } from 'react';
import { getAllUsers } from '../api/api'; 



export default function UserSelectorScreen() {
  const { setCurrentUser } = useContext(UserContext);
  const navigation = useNavigation();
  const tw = useTailwind();

  const [users, setUsers] = useState([]);

useEffect(() => {
  const fetchUsers = async () => {
    const fetched = await getAllUsers();
    setUsers(fetched);
  };
  fetchUsers();
}, []);


  return (
    <View style={tw('flex-1 bg-white p-5')}>
      <Text style={tw('text-xl font-bold mb-4')}>Who are you?</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              setCurrentUser(item);
              navigation.replace('App');
            }}
            style={tw('flex-row items-center p-3 mb-2 bg-gray-100 rounded-lg')}
          >
            <Image
              source={{ uri: item.avatar }}
              style={tw('w-12 h-12 rounded-full mr-4')}
            />
            <Text style={tw('text-lg font-medium')}>{item.name}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}
