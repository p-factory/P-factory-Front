import { Platform, Text } from 'react-native';
import { ToolStylesLocal } from '../../style';
import { RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { SetMode } from '../../store/slice/toolModeSlice';
import { useState, useEffect } from 'react';
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
    const [hoveredItem, setHoveredItem] = useState<string>('');
    const [modeState, setModeState] = useState<boolean[]>([]);
    const dispatch = useDispatch();
    const mode = useSelector((state: RootState) => state.setToolMode.tool);
    const handleMouseEnter = (item: string) => {
      setHoveredItem(item);
    };
    const handleMode = (item: string) => {
      const initModeState = [true, false, false, false];
      switch (item) {
        case 'englishMode':
          dispatch(SetMode('eng'));
          break;
        case 'koreanMode':
          dispatch(SetMode('kor'));
          break;
        case 'highlightMode':
          dispatch(SetMode('highlight'));
          break;
        case 'deleteMode':
          dispatch(SetMode('deleted'));
          break;
      }
      setModeState(initModeState);
    };
    const handleMouseLeave = () => setHoveredItem('');

    useEffect(() => {
      console.log('tool mode:', mode, 'boolean', modeState);
    }, [mode, modeState]);

    return (
      <div id={styles.container}>
        <div id={styles.tools}>
          <div
            className={styles.contents}
            onMouseEnter={() => handleMouseEnter('englishMode')}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleMode('englishMode')}
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
            onClick={() => handleMode('koreanMode')}
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
            onClick={() => handleMode('highlightMode')}
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
            onClick={() => handleMode('deleteMode')}
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
