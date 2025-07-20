import React from 'react';
import { View, Image, Text, Pressable } from 'react-native';
import { useTailwind } from 'tailwind-rn';

export default function MediaAttachment({ uri, onCancel }) {
  const tw = useTailwind();

  if (!uri) return null;

  return (
    <View style={tw('p-4 items-center')}>
      <Image source={{ uri }} style={tw('w-40 h-40 rounded-md mb-2')} />
      <Pressable onPress={onCancel} style={tw('bg-red-500 px-4 py-1 rounded')}>
        <Text style={tw('text-white')}>Remove</Text>
      </Pressable>
    </View>
  );
}
