import { Platform, Text } from 'react-native';
import { BoltsPadStyles } from '../../style';

const BoltsPad = ({ styles }: { styles: BoltsPadStyles }) => {
  if (Platform.OS === 'web') {
    {
      return (
        <div className={styles.container}>
          <div className={styles.contents}>
            <div className={styles.bolts}>b</div>
            <div className={styles.bolts}>c</div>
            <div className={styles.bolts}>d</div>
          </div>
          <div className={styles.contents}>
            <div className={styles.bolts}>u</div>
            <div className={styles.bolts}>p</div>
            <div className={styles.bolts}>i</div>
          </div>
        </div>
      );
    }
  }
  return <Text style={{ color: '#fff' }}>This is None!</Text>;
};

export default BoltsPad;
