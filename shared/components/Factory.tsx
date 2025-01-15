import { Platform, Text } from 'react-native';
import Assets from '../../front/src/assets/assets';
import ManagerBarStyled from '../ManagerBar.module.scss';
import { FactoryStylesLocal, ManagerBarStyles } from '../type';
import { useState } from 'react';

const managerBarStyles: ManagerBarStyles = {
  container: ManagerBarStyled.container,
  title: ManagerBarStyled.title,
  contents: ManagerBarStyled.contents,
  image: ManagerBarStyled.image,
  button: ManagerBarStyled.button,
  buttonContents: ManagerBarStyled.buttonContents,
};

export const ManagerBar = ({ styles }: { styles: ManagerBarStyles }) => {
  return (
    <div id={styles.container}>
      <div id={styles.contents}>
        <div id={styles.button}>
          <img src={Assets.shareBarIcon} alt='shareIcon' />
        </div>
        <span>공유</span>
      </div>
      <div id={styles.contents}>
        <div id={styles.button}>
          <img src={Assets.editBarIcon} alt='editIcon' />
        </div>
        <span>수정</span>
      </div>
      <div id={styles.contents}>
        <div id={styles.button}>
          <img src={Assets.duplicateBarIcon} alt='duplicateIcon' />
        </div>
        <span>복제</span>
      </div>
      <div id={styles.contents}>
        <div id={styles.button}>
          <img src={Assets.deleteBarIcon} alt='deleteIcon' />
        </div>
        <span>삭제</span>
      </div>
    </div>
  );
};

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
    const [isClickedItem, setClickedItem] = useState<boolean>(false);
    const [isMoreActive, setMoreActive] = useState<boolean>(false);
    const handleIconClick = () => {
      setClickedItem((prev) => !prev);
    };

    const handleMoreActive = () => {
      setMoreActive((prev) => !prev);
    };

    return (
      <div>
        <div id={styles.container}>
          <div className={styles.managerBar}>
            {isMoreActive && <ManagerBar styles={managerBarStyles} />}
          </div>
          <div className={styles.image}>
            <img src={Assets.moreIcon} alt='' />
          </div>
          <div id={styles.clickArea} onClick={handleMoreActive}></div>
          <div id={styles.buttonContents}>
            <div id={styles.contents}>
              <div id={styles.name}>{name}</div>
              <div id={styles.count}>단어 {count}개</div>
            </div>
            <div id={styles.contents}>
              <div className={styles.image} onClick={handleIconClick}>
                <img
                  src={isClickedItem ? Assets.starIconChecked : Assets.starIcon}
                  alt='StarIcon'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <Text style={{ color: '#fff' }}>This is None!</Text>;
};

export default Factory;
