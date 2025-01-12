import { Platform, Text } from 'react-native';
import { ScrewStylesLocal } from '../type';

const Screw = ({
  styles,
  screwSound,
  bolt,
  nuts,
  screwShape,
}: {
  styles: ScrewStylesLocal;
  screwSound: string;
  bolt: string;
  nuts: string;
  screwShape: string;
}) => {
  if (Platform.OS === 'web') {
    return (
      <div id={styles.container}>
        <div id={styles.contents}>
          <span id={styles.screwSound}>{screwSound}</span>
          <span id={styles.bolt}>{bolt}</span>
          <span id={styles.nuts}>{nuts}</span>
          <span id={styles.screwShape}>{screwShape}</span>
        </div>
        <div id={styles.buttonContents}>
          <input id={styles.button} type='checkbox' />
        </div>
      </div>
    );
  }

  return <Text style={{ color: '#fff' }}>This is None!</Text>;
};

export default Screw;
