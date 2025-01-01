import { Platform, Text } from 'react-native';
import { StylesProps } from '../type';
import Assets from '../../front/src/assets/assets';

const Footer = ({ styles }: { styles: StylesProps }) => {
  console.log('Footer styles:', styles); // styles.footer 값 확인
  if (Platform.OS === 'web') {
    return (
      <div id={styles.footer}>
        <div className={styles.contents}>
          <div className={styles.image}>
            <img src={Assets.innerFactoryIcon} alt='' />
          </div>
          <span className={styles.title}>내부공장</span>
        </div>
        <div className={styles.contents}>
          <div className={styles.image}>
            <img src={Assets.outerFactoryIcon} alt='' />
          </div>
          <span className={styles.title}>외부공장</span>
        </div>
        <div className={styles.contents}>
          <div className={styles.image}>
            <img src={Assets.escapeGameIcon} alt='' />
          </div>
          <span className={styles.title}>대탈출</span>
        </div>
        <div className={styles.contents}>
          <div className={styles.image}>
            <img src={Assets.mypageIcon} alt='' />
          </div>
          <span className={styles.title}>마이페이지</span>
        </div>
      </div>
    );
  }

  return <Text style={{ color: '#fff' }}>This is None!</Text>;
};

export default Footer;
