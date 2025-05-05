import { Platform, Text } from 'react-native';
import { BlankScrewStyles } from '../../style';

const Test = ({ styles }: { styles: BlankScrewStyles }) => {
  if (Platform.OS === 'web') {
    {
      return (
        <div className={styles.container}>
          <div className={styles.contents}>
            <span id={styles.bolt}>in_i_de</span>
            <span id={styles.nut}>포함하다</span>
          </div>
        </div>
      );
    }
  }
  return <Text style={{ color: '#fff' }}>This is None!</Text>;
};

export default Test;
