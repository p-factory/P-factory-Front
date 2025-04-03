import { Platform, Text } from 'react-native';

const Test = () => {
  if (Platform.OS === 'web') {
    {
      return (
        <div>
          <div>Test</div>
        </div>
      );
    }
  }
  return <Text style={{ color: '#fff' }}>This is None!</Text>;
};

export default Test;
