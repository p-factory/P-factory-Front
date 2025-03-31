import { Platform, Text } from 'react-native';
import { ToolStylesLocal } from '../../style';
import { RootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { SetMode } from '../../store/slice/toolModeSlice';
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
  addScrewIcon,
} from '../../../front/src/assets';

const Tool = ({
  styles,
  onOpenModal,
}: {
  styles: ToolStylesLocal;
  onOpenModal: () => void;
}) => {
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

    const handleMouseEnter = (item: string) => {
      setHoveredMode(item);
    };

    const handleMouseLeave = () => {
      setHoveredMode('');
    };

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
                    ? englishIconHover
                    : englishIcon
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
                    ? koreanIconHover
                    : koreanIcon
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
                    ? highlightIconHover
                    : highlightIcon
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
                    ? deleteIconHover
                    : deleteIcon
                }
                alt=''
              />
            </div>
          </div>
          <div
            className={styles.contents}
            onClick={() => {
              onOpenModal();
            }}
          >
            <div className={styles.image}>
              <img src={addScrewIcon} alt='' />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <Text style={{ color: '#fff' }}>This is None!</Text>;
};

export default Tool;
