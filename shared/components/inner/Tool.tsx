import { Platform, Text } from 'react-native';
import { ToolStylesLocal } from '../../style';
import { useState } from 'react';
import {
  englishIconHover,
  englishIcon,
  koreanIconHover,
  koreanIcon,
  highlightIconHover,
  highlightIcon,
  deleteIconHover,
  deleteIcon,
} from '../../../front/src/assets';

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
                    ? englishIconHover // Hover 이미지
                    : englishIcon // 기본 이미지
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
                    ? koreanIconHover // Hover 이미지
                    : koreanIcon // 기본 이미지
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
                    ? highlightIconHover // Hover 이미지
                    : highlightIcon // 기본 이미지
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
                    ? deleteIconHover // Hover 이미지
                    : deleteIcon // 기본 이미지
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
