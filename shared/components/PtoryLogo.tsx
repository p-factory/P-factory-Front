import { Platform, Text, View, ViewStyle, TextStyle } from 'react-native';
import { PtoryLogoStyles } from '../style';

const PtoryLogo = ({
  styles,
  rnStyles,
}: {
  styles?: PtoryLogoStyles;
  rnStyles?: {
    container: ViewStyle;
    contents: TextStyle;
    title: TextStyle;
  };
}) => {
  if (Platform.OS === 'web') {
    if (!styles) {
      console.warn('PtoryLogo: styles prop is required for web platform');
      return null;
    }
    return (
      <div id={styles.container}>
        <div id={styles.contents}>‘나만의 단어 공장’</div>
        <div id={styles.title}>ㅍ토리</div>
      </div>
    );
  }

  return (
    <View style={rnStyles?.container}>
      <Text style={rnStyles?.contents}>‘나만의 단어 공장’</Text>
      <Text style={rnStyles?.title}>ㅍ토리</Text>
    </View>
  );
};

export default PtoryLogo;
