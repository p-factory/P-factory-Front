import { Platform, Text } from 'react-native';
import { ScrewStylesLocal } from '../../style';
import { useState } from 'react';
// import { useGlobalApiState } from '../../../front/src/Model';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';

const Screw = ({
  id,
  styles,
  screwSound,
  bolt,
  nuts,
  screwShape,
  onDeleteTrigger,
}: {
  id: number;
  styles: ScrewStylesLocal;
  screwSound: string;
  bolt: string;
  nuts: string[];
  screwShape: string;
  onDeleteTrigger?: (deleteId: number) => void;
}) => {
  if (Platform.OS === 'web') {
    // nuts를 단어별로 나눠서 배열로 변환
    // const nutArray = nuts.split(','); // 쉼표 기준으로 단어 분리(추후 백에서 받아오는 데이터에 따라 수정 필요)
    const mode = useSelector((state: RootState) => state.setToolMode.tool);
    const [isHidden, setHidden] = useState(true);
    const [isChecked, setChecked] = useState<boolean>(false);
    const [isSelected, setSelected] = useState<boolean>(false);
    // bolt와 각 nut의 highlight 상태 관리
    const [isHighlighted, setHighlighted] = useState({
      bolt: false,
      nuts: Array(nuts.length).fill(false),
    });

    const onCheckboxChange = () => {
      setChecked(!isChecked);
    };
    const onScrewSelected = () => {
      if (mode.includes('deleted')) {
        setSelected(!isSelected);
        if (onDeleteTrigger) {
          onDeleteTrigger(id);
          setHidden(!isHidden);
        }
        console.log(id);
      }
    };
    const onHighlight = (index: number) => {
      setHighlighted((prevState) => ({
        bolt: index === -1 ? !prevState.bolt : prevState.bolt,
        nuts: prevState.nuts.map((highlighted, i) =>
          i === index ? !highlighted : highlighted,
        ),
      }));
    };

    if (!isHidden) return null;

    return (
      <div
        id={styles.container}
        className={isSelected ? styles.checked : styles.unchecked}
        onClick={onScrewSelected}
      >
        <div id={styles.contents}>
          <span id={styles.screwSound}>{screwSound}</span>
          <div>
            <span
              id={styles.bolt}
              className={isHighlighted.bolt ? styles.checked : ''}
              onClick={(e) => {
                onHighlight(-1);
                e.stopPropagation();
              }} // 이벤트 전파 중단 (부모로 이벤트 전파 방지)
            >
              {bolt}
            </span>
          </div>
          <div id={styles.nuts}>
            {/* nutArray를 map으로 반복 */}
            {nuts.map((nut, index) => (
              <span
                key={index}
                className={`${styles.nut} ${isHighlighted.nuts[index] ? styles.checked : ''}`}
                onClick={(e) => {
                  onHighlight(index);
                  e.stopPropagation();
                }} // 이벤트 전파 중단 (부모로 이벤트 전파 방지)
              >
                {nut}
              </span>
            ))}
          </div>
          <span id={styles.screwShape}>{screwShape}</span>
        </div>
        <div id={styles.buttonContents}>
          <input
            id={styles.button}
            className={isChecked ? styles.checked : styles.unchecked}
            type='checkbox'
            checked={isChecked}
            onChange={onCheckboxChange}
            onClick={(e) => e.stopPropagation()} // 이벤트 전파 중단 (부모로 이벤트 전파 방지)
          />
        </div>
      </div>
    );
  }

  return <Text style={{ color: '#fff' }}>This is None!</Text>;
};

export default Screw;
