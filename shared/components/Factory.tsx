import { useEffect, useState } from 'react';
import { RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { SetMode } from '../store/slice/factoryModeSlice';
import { Platform, Text } from 'react-native';
import {
  shareBarIcon,
  editBarIcon,
  duplicateBarIcon,
  deleteBarIcon,
  moreIcon,
  starIconChecked,
  starIcon,
} from '../../front/src/assets';
import ManagerBarStyled from '../ManagerBar.module.scss';
import { FactoryStylesLocal, ManagerBarStyles } from '../style';

const managerBarStyles: ManagerBarStyles = {
  container: ManagerBarStyled.container,
  title: ManagerBarStyled.title,
  contents: ManagerBarStyled.contents,
  image: ManagerBarStyled.image,
  button: ManagerBarStyled.button,
  buttonContents: ManagerBarStyled.buttonContents,
};

export const ManagerBar = ({ styles }: { styles: ManagerBarStyles }) => {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.setMode.mode);
  // const [isMode, setMode] = useState<string>('');

  useEffect(() => {
    console.log('현재 모드:', mode);
  }, [mode]);

  if (Platform.OS === 'web') {
    return (
      <div id={styles.container}>
        <div
          id={styles.contents}
          onClick={() => {
            dispatch(SetMode('shared'));
          }}
        >
          <div id={styles.button}>
            <img src={shareBarIcon} alt='shareIcon' />
          </div>
          <span>공유</span>
        </div>
        <div
          id={styles.contents}
          onClick={() => {
            dispatch(SetMode('edit'));
          }}
        >
          <div id={styles.button}>
            <img src={editBarIcon} alt='editIcon' />
          </div>
          <span>수정</span>
        </div>
        <div
          id={styles.contents}
          onClick={() => {
            dispatch(SetMode('duplicated'));
          }}
        >
          <div id={styles.button}>
            <img src={duplicateBarIcon} alt='duplicateIcon' />
          </div>
          <span>복제</span>
        </div>
        <div
          id={styles.contents}
          onClick={() => {
            dispatch(SetMode('deleted'));
          }}
        >
          <div id={styles.button}>
            <img src={deleteBarIcon} alt='deleteIcon' />
          </div>
          <span>삭제</span>
        </div>
      </div>
    );
  }
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
            <img src={moreIcon} alt='' />
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
                  src={isClickedItem ? starIconChecked : starIcon}
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
