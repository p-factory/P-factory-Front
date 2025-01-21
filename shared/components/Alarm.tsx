import { Platform, Text } from 'react-native';
import { AlarmStylesLocal } from '../style';

const Alarm = ({
  styles,
  title,
  alarm,
  image,
}: {
  styles: AlarmStylesLocal;
  title: string;
  alarm: string;
  image: string;
}) => {
  if (Platform.OS === 'web') {
    return (
      <div id={styles.container}>
        <div id={styles.image}>
          <img src={image} alt='X' />
        </div>
        <div className={styles.contents}>
          <div id={styles.title}>{`‘${title}’`}</div>
          <div>{alarm}</div>
        </div>
        <div className={styles.buttonContents}>
          <div id={styles.buttonCancel}>아니요</div>
          <div id={styles.buttonApprove}>예</div>
        </div>
      </div>
    );
  }

  return <Text style={{ color: '#fff' }}>This is None!</Text>;
};

export default Alarm;
