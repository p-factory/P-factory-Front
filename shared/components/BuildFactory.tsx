import { Platform, Text } from 'react-native';
import { BuildFactoryStylesLocal } from '../type';

const BuildFactory = ({
  styles,
  title,
  image,
  input,
  charCounter,
}: {
  styles: BuildFactoryStylesLocal;
  title: string;
  image: string;
  input: string;
  charCounter: number;
}) => {
  if (Platform.OS === 'web') {
    return (
      <div id={styles.container}>
        <div id={styles.titleBar}>
          <div id={styles.title}>{`${title}`}</div>
          <div id={styles.image}>
            <img src={image} alt='X' />
          </div>
        </div>
        <div id={styles.contents}>
          <input id={styles.input} placeholder={`${input}`} />
          <div id={styles.charCounter}>{`(0/${charCounter})`}</div>
        </div>
      </div>
    );
  }

  return <Text style={{ color: '#fff' }}>This is None!</Text>;
};

export default BuildFactory;
