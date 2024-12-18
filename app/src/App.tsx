import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './View/Button.tsx';
import ButtonChain from '../../shared/components/Button.tsx';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>This is my app!!</Text>
      <StatusBar style='auto' />
      <Button label='Press Me' onPress={() => alert('Pressed!')} />
      <ButtonChain label='Press Me' onPress={() => alert('Pressed!')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
