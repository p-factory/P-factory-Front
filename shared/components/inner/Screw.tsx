import { Platform, Text } from 'react-native';
import { ScrewStylesLocal } from '../../style';
import { useEffect, useState } from 'react';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { useApiMutation } from '../../../front/src/Model';

const Screw = ({
  id,
  styles,
  screwSound,
  bolt,
  nuts,
  screwShape,
  onDeleteTrigger,
  isSuccessState,
}: {
  id: number;
  styles: ScrewStylesLocal;
  screwSound: string;
  bolt: string;
  nuts: string[];
  screwShape: string;
  onDeleteTrigger?: (deleteId: number) => void;
  isSuccessState?: boolean;
}) => {
  if (Platform.OS === 'web') {
    const { mutation, isSuccess, isLoading, isError, responseData } =
      useApiMutation('POST');
    const mode = useSelector((state: RootState) => state.setToolMode.tool);
    const [isHidden, setHidden] = useState<boolean>(
      typeof isSuccessState === 'boolean' ? isSuccessState : false,
    );
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

    const temp = false;

    const onChecked = (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
      mutation.mutate(
        {
          mutateUrl: `https://13.209.113.229.nip.io/api/wordbook/word/check`,
          mutateNucleus: {
            word: bolt,
            check: true,
          },
        },
        {
          onSuccess: () => {
            console.log('✅check 완료');
          },
        },
      );
    };
    if (isHidden) return null;

    useEffect(() => {
      if (isSuccess) {
        console.log('✅Response:', responseData);
      }
      if (isLoading) {
        console.log('isLoading..');
      }
      if (isError) {
        console.log('isError');
      }
    }, [isSuccess, isLoading, isError]);

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
          {temp ? (
            <input
              id={styles.button}
              className={isChecked ? styles.checked : styles.unchecked}
              type='checkbox'
              checked={isChecked}
              onChange={onCheckboxChange}
              onClick={onChecked}
            />
          ) : null}
        </div>
      </div>
    );
  }

  return <Text style={{ color: '#fff' }}>This is None!</Text>;
};

export default Screw;
