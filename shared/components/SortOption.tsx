import { Platform, Text } from 'react-native';
import { SortOptionStyles } from '../type';

const SortOption = ({ styles }: { styles: SortOptionStyles }) => {
  if (Platform.OS === 'web') {
    return (
      <div id={styles.container}>
        <div className={styles.contents}>
            최신순
        </div>
        <div className={styles.contents}>
            오래된순
        </div>
        <div className={styles.contents}>
            랜덤
        </div>
        <div className={styles.contents}>
            체크만
        </div>
        <div className={styles.contents}>
            미체크만
        </div>
      </div>
    );
  }
  return <Text style={{ color: '#fff' }}>This is None!</Text>;
};

export default SortOption;
