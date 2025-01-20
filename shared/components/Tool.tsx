import { Platform, Text } from 'react-native';
import { ToolStylesLocal } from '../style';
import Assets from '../../front/src/assets/assets';
import { useState } from 'react';

const Tool = ({ styles }: { styles: ToolStylesLocal }) => {
  if (Platform.OS === 'web') {
    // Hover 상태 관리
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    const handleMouseEnter = (item: string) => setHoveredItem(item);
    const handleMouseLeave = () => setHoveredItem(null);
    return (
      <div id={styles.container}>
        <div id={styles.tools}>
          <div
            className={styles.contents}
            onMouseEnter={() => handleMouseEnter('englishMode')}
            onMouseLeave={handleMouseLeave}
          >
            <div className={styles.image}>
              <img
                src={
                  hoveredItem === 'englishMode'
                    ? Assets.englishIconHover // Hover 이미지
                    : Assets.englishIcon // 기본 이미지
                }
                alt=''
              />
            </div>
          </div>
          <div
            className={styles.contents}
            onMouseEnter={() => handleMouseEnter('koreanMode')}
            onMouseLeave={handleMouseLeave}
          >
            <div className={styles.image}>
              <img
                src={
                  hoveredItem === 'koreanMode'
                    ? Assets.koreanIconHover // Hover 이미지
                    : Assets.koreanIcon // 기본 이미지
                }
                alt=''
              />
            </div>
          </div>
          <div
            className={styles.contents}
            onMouseEnter={() => handleMouseEnter('highlightMode')}
            onMouseLeave={handleMouseLeave}
          >
            <div className={styles.image}>
              <img
                src={
                  hoveredItem === 'highlightMode'
                    ? Assets.highlightIconHover // Hover 이미지
                    : Assets.highlightIcon // 기본 이미지
                }
                alt=''
              />
            </div>
          </div>
          <div
            className={styles.contents}
            onMouseEnter={() => handleMouseEnter('deleteMode')}
            onMouseLeave={handleMouseLeave}
          >
            <div className={styles.image}>
              <img
                src={
                  hoveredItem === 'deleteMode'
                    ? Assets.deleteIconHover // Hover 이미지
                    : Assets.deleteIcon // 기본 이미지
                }
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <Text style={{ color: '#fff' }}>This is None!</Text>;
};

export default Tool;
