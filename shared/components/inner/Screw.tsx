import { Platform, Text } from 'react-native';
import { ScrewStylesLocal } from '../../style';
import { useEffect, useState } from 'react';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';
import { useApiMutation } from '../../../front/src/Model';

const Screw = ({
  id,
  styles,
  screwSound,
  bolt,
  nuts,
  screwShape,
  highlight,
  onDeleteTrigger,
  isSuccessState,
}: {
  id: number;
  styles: ScrewStylesLocal;
  screwSound: string;
  bolt: string;
  nuts: string[];
  screwShape: string;
  highlight: boolean;
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

    const { mutation: highlightMutation } = useApiMutation('POST');

    const [isChecked, setChecked] = useState<boolean>(false);
    const [isSelected, setSelected] = useState<boolean>(false);
    // bolt와 각 nut의 highlight 상태 관리
    const [isHighlighted, setHighlighted] = useState<boolean>(highlight);

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

    const onHighlight = () => {
      console.log('click');
      setHighlighted(!isHighlighted);
      highlightMutation.mutate(
        {
          mutateUrl: `https://13.209.113.229.nip.io/api/word/highlight/${id}`,
        },
        {
          onSuccess: () => {
            console.log(`✅ Screw ${id} 하이라이트 성공`);
          },
        },
      );
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
        onClick={() => {
          if (mode.includes('deleted')) {
            onScrewSelected();
          } else if (mode.includes('highlight')) {
            onHighlight();
          }
        }}
      >
        <div id={styles.contents}>
          <span id={styles.screwSound}>{screwSound}</span>
          <div id={styles.bolt}>
            <span className={isHighlighted ? styles.checked : ''}>
              {mode.includes('eng') ? bolt : null}
            </span>
          </div>
          <div id={styles.nuts}>
            {/* nutArray를 map으로 반복 */}
            {nuts.map((nut, index) => (
              <span key={index}>
                {mode.includes('kor') ? (
                  <span
                    className={`${styles.nut} ${isHighlighted ? styles.checked : ''}`}
                  >
                    {nut}
                  </span>
                ) : null}
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
