import { Platform, Text } from 'react-native';
import { FooterStyles } from '../type';
import Assets from '../../front/src/assets/assets';
import { useState } from 'react';

const Footer = ({ styles }: { styles: FooterStyles }) => {
  if (Platform.OS === 'web') {
    // Hover 상태 관리
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    const handleMouseEnter = (item: string) => setHoveredItem(item);
    const handleMouseLeave = () => setHoveredItem(null);
    return (
      <div id={styles.footer}>
        <div
          className={styles.contents}
          onMouseEnter={() => handleMouseEnter('innerFactory')}
          onMouseLeave={handleMouseLeave}
        >
          <div className={styles.image}>
            <img src={Assets.innerFactoryIcon} alt='' />
          </div>
          <span className={styles.title}>내부공장</span>
        </div>
        <div
          className={styles.contents}
          onMouseEnter={() => handleMouseEnter('outerFactory')}
          onMouseLeave={handleMouseLeave}
        >
          <div className={styles.image}>
            <img
              src={
                hoveredItem === 'outerFactory'
                  ? Assets.outerFactoryIconHover // Hover 이미지
                  : Assets.outerFactoryIcon // 기본 이미지
              }
              alt=''
            />
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
