import { Platform, Text } from 'react-native';
import { BoltsPadStyles } from '../../style';
import { useEffect, useRef } from 'react';
const BoltsPad = ({
  styles,
  bolt,
}: {
  styles: BoltsPadStyles;
  bolt: string;
}) => {
  if (Platform.OS === 'web') {
    {
      const randomElement = useRef(bolt);

      /** log를 위한 임시 useEffect 입니다. */
      useEffect(() => {
        const log = (randomElement.current = bolt);
        console.log(log);
      }, [bolt]);

      return (
        <div className={styles.container}>
          <div className={styles.contents}>
            {/** 일부 제가 props 값을 설정 했습니다. 이는 단어를 받아서 프론트 내부에서 값을 split 해서 내부에서 단어 배치를 구현하면 되지 않을까 싶어요.  */}
            <div className={styles.bolt}>b</div>
            <div className={styles.bolt}>c</div>
            <div className={styles.bolt}>d</div>
          </div>
          <div className={styles.contents}>
            <div className={styles.bolt}>u</div>
            <div className={styles.bolt}>p</div>
            <div className={styles.bolt}>i</div>
          </div>
        </div>
      );
    }
  }
  return <Text style={{ color: '#fff' }}>This is None!</Text>;
};

export default BoltsPad;
