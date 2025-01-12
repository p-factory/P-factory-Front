import { Platform, Text } from 'react-native';
import Assets from '../../front/src/assets/assets';
import { FactoryStylesLocal } from '../type';

const Factory = ({
  styles,
  name,
  count,
}: {
  styles: FactoryStylesLocal;
  name: string;
  count: string;
}) => {
  if (Platform.OS === 'web') {
    return (
      <div id={styles.container}>
        <div id={styles.image}>
          <img src={Assets.moreIcon} alt='' />
        </div>
        <div id={styles.contents}>
          <div id={styles.name}>{name}</div>
          <div id={styles.count}>단어 {count}개</div>
        </div>
        <div id={styles.contents}>
          <div id={styles.image}>
            <img src={Assets.starIcon} alt='' />
          </div>
        </div>
      </div>
    );
  }

  return <Text style={{ color: '#fff' }}>This is None!</Text>;
};

export default Factory;
