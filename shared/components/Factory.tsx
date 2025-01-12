import { Platform, Text } from 'react-native';
import Assets from '../../front/src/assets/assets';
import { FactoryStylesLocal } from '../type';
import { useState } from 'react';

const Factory = ({
  styles,
  name,
  count,
}: {
  styles: FactoryStylesLocal;
  name: string;
  count: string;
}) => {
  if (Platform.OS === 'web') {
    const [clickedItem, setClickedItem] = useState<boolean>(false);

    const handleIconClick = () => {
      setClickedItem((prev) => !prev);
    };

    return (
      <div id={styles.container}>
        <div className={styles.image}>
          <img src={Assets.moreIcon} alt='' />
        </div>
        <div id={styles.buttonContents}>
          <div id={styles.contents}>
            <div id={styles.name}>{name}</div>
            <div id={styles.count}>단어 {count}개</div>
          </div>
          <div id={styles.contents}>
            <div className={styles.image} onClick={handleIconClick}>
              <img
                src={clickedItem ? Assets.starIconChecked : Assets.starIcon}
                alt='StarIcon'
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <Text style={{ color: '#fff' }}>This is None!</Text>;
};

export default Factory;
