import React from 'react';
import { View, Text } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import { MotiView } from 'moti';

export default function TypingIndicator() {
  const tw = useTailwind();
  return (
    <View style={tw('self-start px-4 py-2 rounded-lg bg-gray-300 my-1')}>
      <Text style={tw('text-gray-600')}>Typing...</Text>
    </View>
  );
}
