import { Platform, Text } from 'react-native';
import { ExitDoorStyles } from '../../style';
import { doorIcon } from '../../../front/src/assets';
const ExitDoor = ({
  styles,
  image = doorIcon,
  bolt,
}: {
  styles: ExitDoorStyles;
  image?: string;
  bolt: string;
}) => {
  if (Platform.OS === 'web') {
    {
      return (
        <div className={styles.container}>
          <div className={styles.image}>
            <img src={image} alt='' />
          </div>
          <div className={styles.bolt}>{bolt}</div>
        </div>
      );
    }
  }
  return <Text style={{ color: '#fff' }}>This is None!</Text>;
};

export default ExitDoor;
