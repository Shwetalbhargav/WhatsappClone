import React from 'react';
import { View } from 'react-native';
import { useTailwind } from 'tailwind-rn';

export default function UserStatusIndicator({ online = false }) {
  const tw = useTailwind();

  return (
    <View
      style={[
        tw('w-3 h-3 rounded-full absolute bottom-0 right-0 border border-white'),
        { backgroundColor: online ? '#4ade80' : '#d1d5db' }, // green/gray
      ]}
    />
  );
}
