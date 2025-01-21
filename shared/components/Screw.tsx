import { Platform, Text } from 'react-native';
import { ScrewStylesLocal } from '../style';
import { useState } from 'react';

const Screw = ({
  styles,
  screwSound,
  bolt,
  nuts,
  screwShape,
}: {
  styles: ScrewStylesLocal;
  screwSound: string;
  bolt: string;
  nuts: string;
  screwShape: string;
}) => {
  if (Platform.OS === 'web') {
    // nuts를 단어별로 나눠서 배열로 변환
    const nutArray = nuts.split(','); // 쉼표 기준으로 단어 분리(추후 백에서 받아오는 데이터에 따라 수정 필요)
    const [isChecked, setChecked] = useState<boolean>(false);
    const [isSelected, setSelected] = useState<boolean>(false);
    // bolt와 각 nut의 highlight 상태 관리
    const [isHighlighted, setHighlighted] = useState({
      bolt: false,
      nuts: Array(nutArray.length).fill(false),
    });
    const onCheckboxChange = () => {
      setChecked(!isChecked);
    };
    const onScrewSelected = () => {
      setSelected(!isSelected);
    };
    const onHighlight = (index: number) => {
      setHighlighted((prevState) => ({
        bolt: index === -1 ? !prevState.bolt : prevState.bolt,
        nuts: prevState.nuts.map((highlighted, i) =>
          i === index ? !highlighted : highlighted,
        ),
      }));
    };
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
            {nutArray.map((nut, index) => (
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
