import Button from '../../../../../shared/components/Button';
import PtoryLogo from '../../../../../shared/components/PtoryLogo';
import { StyleSheet, View, Text } from 'react-native';
import {
  Button as ButtonStyles,
  PtoryLogo as PtoryLogoStyles,
} from '../../stylesheet';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
type RootStackParamList = {
  home: undefined;
  dev: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Main = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <PtoryLogo rnStyles={PtoryLogoStyles} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>토리와 함께 내 만들어가는</Text>
          <View style={styles.titleContainer}>
            <Text style={styles.text}>
              나만의 <Text style={styles.highlight}>단어공장</Text>
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          rnStyle={{ backgroundColor: 'black' }}
          rnStyles={{
            ...ButtonStyles,
            title: {
              ...ButtonStyles.title,
              color: 'white', // Text 스타일에 color 적용
            },
          }}
          title='튜토리얼 보기'
          state={true}
          image='https://p-tory-cdn-807801802.imgix.net/img/png/global/spanner-icon.png'
          functions={() => {
            navigation.navigate('dev');
          }}
        />
        <Button
          // styles={Styles}
          rnStyles={ButtonStyles}
          title='단어 공장 작업 시작하기!'
          state={false}
          image='https://p-tory-cdn-807801802.imgix.net/img/png/global/spanner-icon.png'
          functions={() => {
            console.log('단어 공장 작업 시작하기');
          }}
        />
        <Button
          // styles={Styles}
          rnStyles={ButtonStyles}
          title='단어 공장 작업 시작하기!'
          state={true}
          image='https://p-tory-cdn-807801802.imgix.net/img/png/global/spanner-icon.png'
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
  textContainer: {
    marginTop: 40,
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 10,
  },
});

export default Main;
