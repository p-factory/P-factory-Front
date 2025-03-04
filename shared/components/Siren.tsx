import { Platform, Text } from 'react-native';
import { SirenStylesLocal } from '../style';

const Siren = ({
  styles,
  image,
  title,
  alarm,
  reDirAction,
}: {
  styles: SirenStylesLocal;
  image: string;
  title: string;
  alarm: string;
  onClose?: () => void;
  reDirAction?: () => void;
}) => {
  if (Platform.OS === 'web') {
    return (
      <div id={styles.container}>
        <div id={styles.image}>
          <img src={image} alt='X' onClick={reDirAction} />
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
