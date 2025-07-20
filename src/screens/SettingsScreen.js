import React, { useState } from 'react';
import { View, Text, Switch, Image, Pressable } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import { seedMockUsers } from '../api/api'; 
import { Alert } from 'react-native';

export default function SettingsScreen() {
  const tw = useTailwind();
  const [isDark, setIsDark] = useState(false); 

  return (
    <View style={tw('flex-1 items-center justify-center bg-white')}>
      <Image
        source={{ uri: 'https://i.pravatar.cc/150?img=13' }}
        style={tw('w-24 h-24 rounded-full mb-4')}
      />
      <Text style={tw('text-xl font-semibold mb-6')}>John Doe</Text>

      <View style={tw('flex-row items-center justify-between w-64 mb-4')}>
        <Text style={tw('text-lg')}>Dark Mode</Text>
        <Switch value={isDark} onValueChange={setIsDark} />
      </View>

      <Pressable
  onPress={async () => {
    await seedMockUsers();
    Alert.alert('Mock users seeded!');
  }}
  style={tw('bg-green-500 px-5 py-2 mt-4 rounded-full')}
>
  <Text style={tw('text-white font-bold')}>Seed Users (Dev)</Text>
</Pressable>


      <Pressable style={tw('bg-gray-200 px-5 py-2 rounded-full')}>
        <Text style={tw('text-black')}>Change Avatar (Mock)</Text>
      </Pressable>
    </View>
  );
}
