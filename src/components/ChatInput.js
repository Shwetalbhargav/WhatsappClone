import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { useTailwind } from 'tailwind-rn';

export default function CallTimer() {
  const [seconds, setSeconds] = useState(0);
  const tw = useTailwind();

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
    <Text style={tw('text-green-400 text-lg mb-4')}>{formatTime()}</Text>
  );
}
