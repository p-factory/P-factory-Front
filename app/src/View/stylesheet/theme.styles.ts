// app/src/View/stylesheet/theme.styles.ts
export const Theme = {
  colors: {
    primary: '#007AFF',
    background: '#fff',
    text: '#000',
  },
  spacing: {
    small: 10,
    medium: 20,
    large: 40,
  },
  typography: {
    body: {
      fontSize: 16,
    },
  },
  layout: {
    flex: {
      flex: 1, // display: 'flex' 제거
    },
    flexCenter: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
};
