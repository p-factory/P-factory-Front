import { Platform, Text } from 'react-native';
import { useState } from 'react';
import Assets from '../../front/src/assets/assets';
import SortOptionStyled from '../SortOption.module.scss';

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
      <div className={styles.buttonContents} onClick={() => onClick('랜덤')}>
        랜덤
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

const Sort = ({
  styles,
}: {
  styles: {
    container: string;
    button: string;
    contents: string;
    title: string;
    image: string;
  };
}) => {
  const [isButtonClicked, setButtonClicked] = useState(false);
  const [isClickedItem, setClickedItem] = useState<string | null>('최신순');
  const title = isClickedItem;

  const handleButtonClicked = () => setButtonClicked(!isButtonClicked);
  const onClick = (item: string) => {
    setClickedItem(item);
    setButtonClicked(false);
  };

  const sortOptionStyles = {
    button: SortOptionStyled.button,
    buttonContents: SortOptionStyled.buttonContents,
  };

  if (Platform.OS === 'web') {
    return (
      <div id={styles.container}>
        <div id={styles.button} onClick={handleButtonClicked}>
          <div id={styles.contents}>
            <span id={styles.title}>{title}</span>
            <div id={styles.image}>
              <img
                src={isButtonClicked ? Assets.upIcon : Assets.downIcon}
                alt=''
              />
            </div>
          </div>
        </div>
        {isButtonClicked && (
          <SortOption styles={sortOptionStyles} onClick={onClick} />
        )}
      </div>
    );
  }

  return <Text style={{ color: '#fff' }}>This is None!</Text>;
};

export default Sort;
