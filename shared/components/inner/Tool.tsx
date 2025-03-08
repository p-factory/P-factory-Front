import { Platform, Text } from 'react-native';
import { ToolStylesLocal } from '../../style';
import { RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { SetMode } from '../../store/slice/toolModeSlice';
import { useEffect, useState } from 'react';
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
    const dispatch = useDispatch();
    const mode = useSelector((state: RootState) => state.setToolMode.tool);

    const handleMode = (item: string) => {
      switch (item) {
        case 'eng':
          dispatch(SetMode('eng'));
          break;
        case 'kor':
          dispatch(SetMode('kor'));
          break;
        case 'highlight':
          dispatch(SetMode('highlight'));
          break;
        case 'deleted':
          dispatch(SetMode('deleted'));
          break;
      }
    };

    const [hoveredMode, setHoveredMode] = useState<string | null>(null);

    // const handleHoverMode = (item: 'eng' | 'kor' | 'highlight' | 'deleted') => {
    //   dispatch(SetMode(item));
    // };

    // Hover 시
    const handleMouseEnter = (item: string) => {
      setHoveredMode(item); // Hover한 모드 상태 저장
    };

    // 마우스 떠날 때 (하지만 클릭한 상태는 유지해야 함)
    const handleMouseLeave = () => {
      setHoveredMode('');
    };

    useEffect(() => {
      console.log('tool mode:', mode);
    }, [mode]);

    return (
      <div id={styles.container}>
        <div id={styles.tools}>
          <div
            className={styles.contents}
            onMouseEnter={() => handleMouseEnter('eng')}
            onMouseLeave={() => handleMouseLeave()}
            onClick={() => handleMode('eng')}
          >
            <div className={styles.image}>
              <img
                src={
                  hoveredMode === 'eng' || mode.includes('eng')
                    ? englishIconHover // Hover 이미지
                    : englishIcon // 기본 이미지
                }
                alt=''
              />
            </div>
          </div>
          <div
            className={styles.contents}
            onMouseEnter={() => handleMouseEnter('kor')}
            onMouseLeave={() => handleMouseLeave()}
            onClick={() => handleMode('kor')}
          >
            <div className={styles.image}>
              <img
                src={
                  hoveredMode === 'kor' || mode.includes('kor')
                    ? koreanIconHover // Hover 이미지
                    : koreanIcon // 기본 이미지
                }
                alt=''
              />
            </div>
          </div>
          <div
            className={styles.contents}
            onMouseEnter={() => handleMouseEnter('highlight')}
            onMouseLeave={() => handleMouseLeave()}
            onClick={() => handleMode('highlight')}
          >
            <div className={styles.image}>
              <img
                src={
                  hoveredMode === 'highlight' || mode.includes('highlight')
                    ? highlightIconHover // Hover 이미지
                    : highlightIcon // 기본 이미지
                }
                alt=''
              />
            </div>
          </div>
          <div
            className={styles.contents}
            onMouseEnter={() => handleMouseEnter('deleted')}
            onMouseLeave={() => handleMouseLeave()}
            onClick={() => handleMode('deleted')}
          >
            <div className={styles.image}>
              <img
                src={
                  hoveredMode === 'deleted' || mode.includes('deleted')
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
