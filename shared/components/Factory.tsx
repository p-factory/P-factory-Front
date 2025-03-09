import { useEffect, useState, useRef } from 'react';
import { RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { SetMode } from '../store/slice/factoryModeSlice';
import { Platform, Text } from 'react-native';
import ManagerBarStyled from '../ManagerBar.module.scss';
import { FactoryStylesLocal, ManagerBarStyles } from '../style';
import {
  shareBarIcon,
  editBarIcon,
  duplicateBarIcon,
  deleteBarIcon,
  moreIcon,
  starIconChecked,
  starIcon,
} from '../../front/src/assets';

const managerBarStyles: ManagerBarStyles = {
  container: ManagerBarStyled.container,
  title: ManagerBarStyled.title,
  contents: ManagerBarStyled.contents,
  image: ManagerBarStyled.image,
  button: ManagerBarStyled.button,
  buttonContents: ManagerBarStyled.buttonContents,
  submit: ManagerBarStyled.submit,
};

export const ManagerBar = ({ styles }: { styles: ManagerBarStyles }) => {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.setFactoryMode.mode);

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

  return <Text style={{ color: '#fff' }}>This is None!</Text>;
};

const Factory = ({
  styles,
  name = 'untitle',
  count = 'null',
  favorite = false,
}: {
  styles: FactoryStylesLocal;
  name: string;
  count: string;
  favorite: boolean;
}) => {
  if (Platform.OS === 'web') {
    const [isClickedItem, setClickedItem] = useState<boolean>(favorite);
    const [isMoreActive, setMoreActive] = useState<boolean>(false);

    const managerBarRef = useRef<HTMLDivElement>(null);

    const handleIconClick = () => {
      setClickedItem((prev) => !prev);
      console.log('즐겨찾기 post 준비중 MyFatoryApi');
    };

    const handleMoreActive = () => {
      setMoreActive((prev) => !prev);
    };

    useEffect(() => {
      const handleClcikOutSide = (event: MouseEvent) => {
        if (
          managerBarRef.current &&
          !managerBarRef.current.contains(event.target as Node)
        ) {
          setMoreActive(false);
        }
      };
      document.addEventListener('mousedown', handleClcikOutSide);
      return () => {
        document.removeEventListener('mousedown', handleClcikOutSide);
      };
    }, []);

    return (
      <div style={{ marginBottom: '16px' }}>
        <div id={styles.container}>
          <div className={styles.managerBar}>
            <div ref={managerBarRef}>
              {isMoreActive && <ManagerBar styles={managerBarStyles} />}
            </div>
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
