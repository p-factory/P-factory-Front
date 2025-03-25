import React, { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
import { useApiMutation, useGlobalApiState } from '../../front/src/Model';

const managerBarStyles: ManagerBarStyles = {
  container: ManagerBarStyled.container,
  title: ManagerBarStyled.title,
  contents: ManagerBarStyled.contents,
  image: ManagerBarStyled.image,
  button: ManagerBarStyled.button,
  buttonContents: ManagerBarStyled.buttonContents,
  submit: ManagerBarStyled.submit,
};

export const ManagerBar = ({
  id,
  styles,
}: {
  id: number;
  styles: ManagerBarStyles;
}) => {
  const dispatch = useDispatch();

  const { isLoading, isSuccess } = useGlobalApiState({
    id: id,
    method: 'DELETE',
  });

  useEffect(() => {
    if (isSuccess) {
      console.log('🟢 삭제 성공:', isSuccess);
    }
    if (isLoading) {
      console.log('🟢 삭제 성공:', isLoading);
    }
  }, [isLoading, isSuccess]);

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
  id,
  styles,
  name = 'untitle',
  favorite = false,
  total = '0',
  uri,
  handlelocal,
}: {
  id: number;
  styles: FactoryStylesLocal;
  name: string;
  favorite: boolean;
  total: string;
  uri: number;
  handlelocal: () => void;
}) => {
  if (Platform.OS === 'web') {
    const [isClickedItem, setClickedItem] = useState<boolean>(favorite);
    const [isMoreActive, setMoreActive] = useState<boolean>(false);

    const managerBarRef = useRef<HTMLDivElement>(null);

    const { mutation, isLoading, isError, isSuccess, responseData } =
      useApiMutation('POST');

    const navigate = useNavigate();
    const handleIconClick = (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
      // event.preventDefault();
      mutation.mutate(
        {
          mutateUrl: `https://13.209.113.229.nip.io/api/wordbook/favorite/${id}`,
        },
        {
          onSuccess: () => {
            setClickedItem((prev) => !prev);
            console.log(`✅즐겨찾기 post 완료: ${isClickedItem}`);
          },
        },
      );
    };

    const handleMoreActive = (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
      setMoreActive((prev) => !prev);
    };

    useEffect(() => {
      // console.log(handlelocal());
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

    useEffect(() => {
      // setState(false);
      if (isSuccess) {
        console.log('Response:', responseData);
        // window.location.reload();
      }
      if (isLoading) {
        console.log('Response:', responseData);
      }
      if (isError) {
        console.error('Error occurred during mutation');
      }
    }, [isSuccess, isLoading, isError, responseData]);

    return (
      <div style={{ marginBottom: '16px' }} onClick={handlelocal}>
        <div
          id={styles.container}
          onClick={() => navigate(`/StudyFactory/${uri}`)}
        >
          <div className={styles.managerBar}>
            <div ref={managerBarRef}>
              {isMoreActive && <ManagerBar id={id} styles={managerBarStyles} />}
            </div>
          </div>
          <div className={styles.image}>
            <img src={moreIcon} alt='' />
          </div>
          <div id={styles.clickArea} onClick={handleMoreActive} />
          <div id={styles.buttonContents}>
            <div id={styles.contents}>
              <div id={styles.name}>{name}</div>
              <div id={styles.count}>단어 {total}개</div>
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
