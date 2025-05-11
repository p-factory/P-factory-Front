import {
  Platform,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
  Image,
  ImageStyle,
} from 'react-native';
import { Functions } from '../function';
import { ButtonStyles } from '../style';

const Button = ({
  styles,
  title,
  image,
  state,
  functions,
  style,
  rnStyle,
  rnStyles,
}: {
  styles?: ButtonStyles;
  title: string;
  image?: string;
  state?: boolean | null;
  /**해당 function은 모바일에서는 확인이 불가능하지만 web에서 확인이 가능하다. */
  functions: Functions.GeneralArg;
  style?: React.CSSProperties;
  /** rn inline style 객체 */
  rnStyle?: ViewStyle;
  /** rn에서 props로 전달 받는 스타일 객체 */
  rnStyles?: {
    button: ViewStyle;
    submit: ViewStyle;
    contents: ViewStyle;
    title: TextStyle;
    container: ViewStyle;
    image: ImageStyle;
    buttonContents: ViewStyle;
  };
}) => {
  if (Platform.OS === 'web') {
    if (!styles) {
      console.warn('Button: styles prop is required for web platform');
      return null;
    }

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

  return (
    <TouchableOpacity
      style={[
        rnStyles?.button,
        state ? rnStyles?.button : rnStyles?.submit,
        rnStyle,
      ]}
      onPress={() => {
        if (typeof functions === 'function') {
          functions();
        }
      }}
    >
      <View style={rnStyles?.contents}>
        <Text style={rnStyles?.title}>{title}</Text>
      </View>
      {image && <Image source={{ uri: image }} style={rnStyles?.image} />}
    </TouchableOpacity>
  );
};

export default Button;
