import { Platform, Text } from 'react-native';
import { FooterStyles } from '../style';
import { useState } from 'react';
import {
  innerFactoryIconHover,
  innerFactoryIcon,
  outerFactoryIconHover,
  outerFactoryIcon,
  escapeGameIconHover,
  escapeGameIcon,
  mypageIconHover,
  mypageIcon,
} from '../../front/src/assets';

const Footer = ({ styles }: { styles: FooterStyles }) => {
  if (Platform.OS === 'web') {
    // Hover 상태 관리
    const [isHoveredItem, setHoveredItem] = useState<string | null>(null);

    const handleMouseEnter = (item: string) => setHoveredItem(item);
    const handleMouseLeave = () => setHoveredItem(null);
    return (
      <div id={styles.container}>
        <div
          className={styles.contents}
          onMouseEnter={() => handleMouseEnter('innerFactory')}
          onMouseLeave={handleMouseLeave}
        >
          <div className={styles.image}>
            <img
              src={
                isHoveredItem === 'innerFactory'
                  ? innerFactoryIconHover // Hover 이미지
                  : innerFactoryIcon // 기본 이미지
              }
              alt=''
            />
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
                isHoveredItem === 'outerFactory'
                  ? outerFactoryIconHover // Hover 이미지
                  : outerFactoryIcon // 기본 이미지
              }
              alt=''
            />
          </div>
          <span className={styles.title}>외부공장</span>
        </div>
        <div
          className={styles.contents}
          onMouseEnter={() => handleMouseEnter('escapeGame')}
          onMouseLeave={handleMouseLeave}
        >
          <div className={styles.image}>
            <img
              src={
                isHoveredItem === 'escapeGame'
                  ? escapeGameIconHover // Hover 이미지
                  : escapeGameIcon // 기본 이미지
              }
              alt=''
            />
          </div>
          <span className={styles.title}>대탈출</span>
        </div>
        <div
          className={styles.contents}
          onMouseEnter={() => handleMouseEnter('myPage')}
          onMouseLeave={handleMouseLeave}
        >
          <div className={styles.image}>
            <img
              src={
                isHoveredItem === 'myPage'
                  ? mypageIconHover // Hover 이미지
                  : mypageIcon // 기본 이미지
              }
              alt=''
            />
          </div>
          <span className={styles.title}>마이페이지</span>
        </div>
      </div>
    );
  }

  return <Text style={{ color: '#fff' }}>This is None!</Text>;
};

export default Footer;
