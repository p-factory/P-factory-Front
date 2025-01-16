import { Platform, Text } from 'react-native';
import { BuildFactoryStylesLocal } from '../type';
import { useState, useEffect } from 'react';

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
    const [isState, setState] = useState<boolean>(false);

    useEffect(() => {
      setState(false);
    }, []);

    return (
      <div>
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
        <div className={isState ? styles.submit : styles.button}>
          <div>공장 만들기</div>
        </div>
      </div>
    );
  }

  return <Text style={{ color: '#fff' }}>This is None!</Text>;
};

export default BuildFactory;
