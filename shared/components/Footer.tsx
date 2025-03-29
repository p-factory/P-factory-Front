import { Platform, Text } from 'react-native';
import { FooterStyles } from '../style';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
  const location = useLocation();
  const [isHoveredItem, setHoveredItem] = useState<string>('');
  const [isLocation, setLocation] = useState<string>('');
  useEffect(() => {
    if (
      location.pathname.includes('MyFactory') ||
      location.pathname.includes('StudyFactory')
    ) {
      setLocation('inner');
    }
  }, [location]);
  if (Platform.OS === 'web') {
    const navigate = useNavigate();
    const handleMouseEnter = (item: string) => setHoveredItem(item);
    const handleMouseLeave = () => setHoveredItem('');
    return (
      <div id={styles.container}>
        <div
          className={styles.contents}
          onMouseEnter={() => handleMouseEnter('inner')}
          onMouseLeave={handleMouseLeave}
          onClick={() => navigate('/MyFactory')}
        >
          <div className={styles.image}>
            <img
              src={
                isHoveredItem === 'inner' || isLocation === 'inner'
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
          onMouseEnter={() => handleMouseEnter('outer')}
          onMouseLeave={handleMouseLeave}
          onClick={() => navigate('/error')}
        >
          <div className={styles.image}>
            <img
              src={
                isHoveredItem === 'outer' || isLocation === 'outer'
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
          onMouseEnter={() => handleMouseEnter('game')}
          onMouseLeave={handleMouseLeave}
          onClick={() => navigate('/error')}
        >
          <div className={styles.image}>
            <img
              src={
                isHoveredItem === 'game' || isLocation === 'game'
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
          onClick={() => navigate('/error')}
        >
          <div className={styles.image}>
            <img
              src={
                isHoveredItem === 'myPage' || isLocation === 'myPage'
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
