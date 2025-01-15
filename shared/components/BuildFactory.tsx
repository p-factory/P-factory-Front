import { Platform, Text } from 'react-native';
import { BuildFactoryStylesLocal, ButtonStyles } from '../type';
import Button from './Button';
import ButtonStyled from '../../front/src/View/Button.module.scss';

const buttonStyles: ButtonStyles = {
  button: ButtonStyled.button,
  container: ButtonStyled.container,
  contents: ButtonStyled.contents,
  buttonContents: ButtonStyled.contents,
  title: ButtonStyled.title,
  image: ButtonStyled.image,
};

const BuildFactory = ({
  styles,
  title,
  image,
  input,
  charCounter,
  buttonTitle,
}: {
  styles: BuildFactoryStylesLocal;
  title: string;
  image: string;
  input: string;
  charCounter: number;
  buttonTitle: string;
}) => {
  if (Platform.OS === 'web') {
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
        <Button styles={buttonStyles} title={`${buttonTitle}`} image='' />
      </div>
    );
  }

  return <Text style={{ color: '#fff' }}>This is None!</Text>;
};

export default BuildFactory;
