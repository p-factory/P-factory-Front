import React from 'react';
import { Platform, Text, TouchableOpacity, View } from 'react-native';
import { z } from 'zod';
import { buttonProps } from '../type.ts';

/**
 * Zod 스키마 정의
 */
const buttonPropsSchema = z.object({
  onPress: z.function().args().returns(z.void()), // onPress는 함수 타입
  label: z.string(), // label은 문자열 타입
});

const Button = ({ onPress, label }: buttonProps) => {
  // Zod 타입 검증
  buttonPropsSchema.parse({ onPress, label });

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
