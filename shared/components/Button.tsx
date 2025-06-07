import {
  Platform,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { Functions } from '../function';
import { ButtonStyles } from '../style';

// const rnStyles = {
//   button: {
//     backgroundColor: '#007AFF',
//     padding: 15,
//     borderRadius: 8,
//     flexDirection: 'row' as const,
//     alignItems: 'center' as const,
//     justifyContent: 'center' as const,
//   },
//   submit: {
//     backgroundColor: '#4CAF50',
//   },
//   contents: {
//     flexDirection: 'row' as const,
//     alignItems: 'center' as const,
//   },
//   title: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold' as const, // 'bold'를 const로 타입 단언
//   } as TextStyle, // TextStyle로 타입 단언
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   image: {
//     width: 20,
//     height: 20,
//   },
//   buttonContents: {
//     flexDirection: 'row' as const,
//     alignItems: 'center' as const,
//   },
// };

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
  styles: ButtonStyles;
  title: string;
  image?: string;
  state?: boolean | null;
  functions: Functions.GeneralArg;
  style?: React.CSSProperties;
  rnStyle?: ViewStyle;
  rnStyles?: {
    button: ViewStyle;
    submit: ViewStyle;
    contents: ViewStyle;
    title: TextStyle;
    container: ViewStyle;
    image: ViewStyle;
    buttonContents: ViewStyle;
  };
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
    </TouchableOpacity>
  );
};

export default Button;
