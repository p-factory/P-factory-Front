import { Platform, Text } from 'react-native';
import { StageBannerStyles } from '../../style';
import { spannerIconGray } from '../../../front/src/assets';
const StageBanner = ({
  styles,
  image = spannerIconGray,
  stage,
}: {
  styles: StageBannerStyles;
  image?: string;
  stage: {
    round: number;
    title: string;
  };
}) => {
  if (Platform.OS === 'web') {
    {
      return (
        <div className={styles.container}>
          <div className={styles.contents}>
            <span id={styles.stage}>Stage {stage.round}</span>
            <div className={styles.description}>
              <span id={styles.title}>{stage.title}</span>
              <div className={styles.image}>
                <img src={image} alt='' />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  return <Text style={{ color: '#fff' }}>This is None!</Text>;
};

export default StageBanner;
