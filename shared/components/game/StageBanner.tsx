import { Platform, Text } from 'react-native';
import { StageBannerStyles } from '../../style';
const StageBanner = ({
  styles,
  stage,
}: {
  styles: StageBannerStyles;
  stage: {
    round: number;
    image: string;
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
                <img src={stage.image} alt='' />
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
