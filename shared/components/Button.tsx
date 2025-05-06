import { Platform, Text } from 'react-native';
import { Functions } from '../function';
import { ButtonStyles } from '../style';
import { spannerIcon } from '../../front/src/assets';

const Button = ({
  styles,
  title,
  image = spannerIcon,
  state,
  functions,
  style,
}: {
  styles: ButtonStyles;
  title: string;
  image?: string;
  state?: boolean | null;
  functions: Functions.GeneralArg;
  style?: React.CSSProperties;
}) => {
  if (Platform.OS === 'web') {
    const handleClick = () => {
      // 타입 가드 추가: 함수인지 객체인지 구분
      if (typeof functions === 'function') {
        functions(); // 함수인 경우 실행
      }
    };

    return (
      <div
        className={state ? styles.button : styles.submit}
        style={
          state === null
            ? { backgroundColor: 'black', color: 'white' }
            : undefined
        }
        onClick={handleClick}
      >
        <div id={styles.contents}>
          <span id={styles.title} style={style}>
            {title}
          </span>
          <img id={styles.image} src={image} alt='' />
        </div>
      </div>
    );
  }

  return <Text style={{ color: '#fff' }}>This is None!</Text>;
};

export default Button;
