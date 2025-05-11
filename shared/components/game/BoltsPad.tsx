import { Platform, Text } from 'react-native';
import { BoltsPadStylesLocal } from '../../style';
import { useEffect, useRef } from 'react';
const BoltsPad = ({
  styles,
  bolt,
}: {
  styles: BoltsPadStylesLocal;
  bolt: string;
}) => {
  if (Platform.OS === 'web') {
    {
      const randomElement = useRef(bolt);
      /** log를 위한 임시 useEffect 입니다. */
      useEffect(() => {
        const log = (randomElement.current = bolt);
        console.log(log);
      }, []);

      return (
        <div className={styles.container}>
          <div className={styles.contents}>
            {/* props로 받은 bolt를 split으로 펼쳐 맵으로 배치  */}
            {bolt.split('').map((a, index) => (
              <div className={styles.bolt} key={index}>
                {a}
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
  return <Text style={{ color: '#fff' }}>This is None!</Text>;
};

export default BoltsPad;
