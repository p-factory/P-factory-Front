import { Platform, Text } from 'react-native';
import { SirenStylesLocal } from '../type';

const Siren = ({
  styles,
  image,
  title,
  alarm,
}: {
  styles: SirenStylesLocal;
  image: string;
  title: string;
  alarm: string;
}) => {
  if (Platform.OS === 'web') {
    return (
      <div id={styles.container}>
        <div id={styles.image}>
          <img src={image} alt='X' />
        </div>
        <div id={styles.contents}>
          <span id={styles.title}>{`‘${title}’`}</span>
          <span id={styles.alarm}>{alarm}</span>
        </div>
      </div>
    );
  }

  return <Text style={{ color: '#fff' }}>This is None!</Text>;
};

export default Siren;
