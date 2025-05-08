import Button from '../../../../../shared/components/Button';
import { StyleSheet, View, Text } from 'react-native';
import { Button as ButtonStyles, Styles } from '../../stylesheet';

const Main = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.text}>토리와 함께 내 만들어가는</Text>
        <View style={styles.titleContainer}>
          <Text style={styles.text}>
            나만의 <Text style={styles.highlight}>단어공장</Text>
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          styles={Styles}
          rnStyles={ButtonStyles}
          title='단어 공장 작업 시작하기'
          state={false}
          functions={() => {
            console.log('단어 공장 작업 시작하기');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
  highlight: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
  buttonContainer: {
    padding: 20,
  },
});

export default Main;
