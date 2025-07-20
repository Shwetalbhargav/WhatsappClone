import React, { useState, useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MotiView } from 'moti';
import { useTailwind } from 'tailwind-rn';

export default function CallScreen() {
  const tw = useTailwind();
  const navigation = useNavigation();
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = () => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <View style={tw('flex-1 bg-black justify-center items-center')}>
      <MotiView
        from={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'timing', duration: 400 }}
        style={tw('items-center')}
      >
        <Text style={tw('text-white text-2xl font-bold mb-2')}>Calling...</Text>
        <Text style={tw('text-green-400 text-lg mb-8')}>{formatTime()}</Text>
        <Pressable
          onPress={() => navigation.goBack()}
          style={tw('bg-red-600 px-6 py-3 rounded-full')}
        >
          <Text style={tw('text-white font-semibold')}>End Call</Text>
        </Pressable>
      </MotiView>
    </View>
  );
}
