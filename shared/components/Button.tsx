import React from 'react';
import { Platform, Text, TouchableOpacity, View } from 'react-native';

// 웹에서 사용 시 React Native Web 패키지가 필요함
const Button = ({ onPress, label }: { onPress: () => void; label: string }) => {
  if (Platform.OS === 'web') {
    return (
      <button onClick={onPress} style={{ padding: '10px', cursor: 'pointer' }}>
        {label}
      </button>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ padding: 10, backgroundColor: 'tomato' }}
    >
      <Text style={{ color: '#fff' }}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
