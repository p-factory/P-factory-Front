// app/src/GlobalStyles.tsx
import { View, StyleSheet } from 'react-native';

export const GlobalStyles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
  // 레이아웃 관련 스타일
  flex: {
    flex: 1,
  },
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// StyleSheet.create 밖에서 상수로 정의
export const Spacing = {
  small: 10,
  medium: 20,
  large: 40,
} as const;

export const Colors = {
  primary: '#007AFF',
  background: '#fff',
  text: '#000',
} as const;

export const Typography = {
  body: {
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
} as const;

export const GlobalStyleProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <View style={GlobalStyles.root}>{children}</View>;
};
