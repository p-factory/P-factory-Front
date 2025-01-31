import { Platform, Text } from 'react-native';
import { useState } from 'react';
import { upIcon, downIcon } from '../../front/src/assets';
import SortOptionStyled from '../SortOption.module.scss';
import { SortOptionStyles, SortStylesLocal } from '../style';

export const SortOption = ({
  styles,
  onClick,
}: {
  styles: { button: string; buttonContents: string };
  onClick: (item: string) => void;
}) => {
  return (
    <div id={styles.button}>
      <div className={styles.buttonContents} onClick={() => onClick('최신순')}>
        최신순
      </div>
      <div
        className={styles.buttonContents}
        onClick={() => onClick('오래된순')}
      >
        오래된순
      </div>
      <div className={styles.buttonContents} onClick={() => onClick('랜 덤')}>
        랜 덤
      </div>
      <div className={styles.buttonContents} onClick={() => onClick('체크만')}>
        체크만
      </div>
      <div
        className={styles.buttonContents}
        onClick={() => onClick('미체크만')}
      >
        미체크만
      </div>
    </div>
  );
};

const Sort = ({ styles }: { styles: SortStylesLocal }) => {
  const [isButtonClicked, setButtonClicked] = useState(false);
  const [isClickedItem, setClickedItem] = useState<string | null>('최신순');
  const title = isClickedItem;

  const handleButtonClicked = () => setButtonClicked(!isButtonClicked);
  const onClick = (item: string) => {
    setClickedItem(item);
    setButtonClicked(false);
  };

  const sortOptionStyles: SortOptionStyles = {
    button: SortOptionStyled.button,
    buttonContents: SortOptionStyled.buttonContents,
  };

  if (Platform.OS === 'web') {
    return (
      <div id={styles.container}>
        <div id={styles.contents} onClick={handleButtonClicked}>
          <span id={styles.title}>{title}</span>
          <div id={styles.image}>
            <img src={isButtonClicked ? upIcon : downIcon} alt='' />
          </div>
        </div>
        <div id={styles.sortOption}>
          {isButtonClicked && (
            <SortOption styles={sortOptionStyles} onClick={onClick} />
          )}
        </div>
      </div>
    );
  }

  return <Text style={{ color: '#fff' }}>This is None!</Text>;
};

export default Sort;
