import { Platform, Text } from 'react-native';
import { PtoryLogoStyles } from '../type';

const PtoryLogo = ({ styles }: { styles: PtoryLogoStyles }) => {
  if (Platform.OS === 'web') {
    return (
      <div id={styles.container}>
        <div id={styles.contents}>'나만의 단어 공장'</div>
        <div id={styles.title}>ㅍ토리</div>
      </div>
    );
  }

  return <Text style={{ color: '#fff' }}>This is None!</Text>;
};

export default PtoryLogo;
