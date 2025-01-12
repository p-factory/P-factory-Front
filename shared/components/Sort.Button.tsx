import { Platform, Text } from 'react-native';
import { SortButtonStyles } from '../type';

const Button = ({
  styles,
  title,
  image,
}: {
  styles: SortButtonStyles;
  title: string;
  image: string;
}) => {
  if (Platform.OS === 'web') {
    return (
      <div id={styles.button}>
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
