import { Platform, Text } from 'react-native';
import { Functions } from '../function';
import { ButtonStyles } from '../style';

const Button = ({
  styles,
  title,
  image,
  functions,
}: {
  styles: ButtonStyles;
  title: string;
  image: string;
  functions: Functions.GeneralArg;
}) => {
  if (Platform.OS === 'web') {
    const handleClick = () => {
      // 타입 가드 추가: 함수인지 객체인지 구분
      if (typeof functions === 'function') {
        functions(); // 함수인 경우 실행
      }
    };

    return (
      <div id={styles.button} onClick={handleClick}>
        <div id={styles.contents}>
          <span id={styles.title}>{title}</span>
          <img id={styles.image} src={image} alt='' />
        </div>
      </div>
    );
  }

  return <Text style={{ color: '#fff' }}>This is None!</Text>;
};

export default Button;
