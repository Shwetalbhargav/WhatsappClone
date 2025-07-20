import React from 'react';
import { View, Text } from 'react-native';
import { useTailwind } from 'tailwind-rn';

export default function MessageBubble({ message, isMe, timestamp, senderName }) {
  const tw = useTailwind();
  return (
    <View
      style={tw(
        `mb-2 max-w-[75%] px-4 py-2 rounded-lg ${
          isMe ? 'bg-blue-500 self-end' : 'bg-gray-200 self-start'
        }`
      )}
    >
      {!isMe && senderName && (
        <Text style={tw('text-xs text-gray-600 mb-1')}>{senderName}</Text>
      )}
      <Text style={tw(`${isMe ? 'text-white' : 'text-black'}`)}>{message}</Text>
      <Text style={tw(`text-xs ${isMe ? 'text-gray-100' : 'text-gray-500'}`)}>
        {timestamp}
      </Text>
    </View>
  );
}
