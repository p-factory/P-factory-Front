import { Platform, Text } from 'react-native';
import { SortStylesLocal } from '../type';
import { useState } from 'react';
import Assets from '../../front/src/assets/assets';

const Sort = ({ styles }: { styles: SortStylesLocal }) => {
  if (Platform.OS === 'web') {
    // onClick 상태 관리
    const [isButtonClicked, setButtonClicked] = useState<boolean>(false);
    const [isClickedItem, setClickedItem] = useState<string | null>('최신순');
    const title = isClickedItem;
    const onClick = (item: string) => {
      setClickedItem(item);
      setButtonClicked(false);
    };
    const handleButtonClicked = () => setButtonClicked(!isButtonClicked);
    return (
      <div id={styles.container}>
        <div id={styles.button} onClick={handleButtonClicked}>
          <div id={styles.contents}>
            <span id={styles.title}>{title}</span>
            <img
              id={styles.image}
              src={isButtonClicked ? Assets.upIcon : Assets.downIcon}
              alt=''
            />
          </div>
        </div>
        {isButtonClicked && (
          <div id={styles.sortOptions}>
            <div
              className={styles.sortOption}
              onClick={() => onClick('최신순')}
            >
              최신순
            </div>
            <div
              className={styles.sortOption}
              onClick={() => onClick('오래된순')}
            >
              오래된순
            </div>
            <div className={styles.sortOption} onClick={() => onClick('랜덤')}>
              랜덤
            </div>
            <div
              className={styles.sortOption}
              onClick={() => onClick('체크만')}
            >
              체크만
            </div>
            <div
              className={styles.sortOption}
              onClick={() => onClick('미체크만')}
            >
              미체크만
            </div>
          </div>
        )}
      </div>
    );
  }

  return <Text style={{ color: '#fff' }}>This is None!</Text>;
};

export default Sort;
