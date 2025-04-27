import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { ResetMode } from '../store/slice/factoryModeSlice';
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
import { useApiMutation } from '../../front/src/Model';
import { RootState } from '../store';
import { ModalController } from '../../front/src/View/components';
import { SetFavorite } from '../store/slice/myFactoryData';

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
  styles,
  isMoreActive = false,
  setMoreActive,
  setModalState,
  openModal,
}: {
  styles: ManagerBarStyles;
  isMoreActive: boolean;
  setMoreActive: React.Dispatch<React.SetStateAction<boolean>>;
  setModalState: React.Dispatch<React.SetStateAction<string>>;
  openModal: () => void;
}) => {
  // const closeModal = () => setModalOpen(false);

  if (Platform.OS === 'web') {
    return isMoreActive ? (
      <div id={styles.container}>
        <div
          id={styles.contents}
          onClick={() => {
            setModalState('shared');
            setMoreActive(false);
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
            // 임시 방안
            sessionStorage.setItem('mode', 'edit');
            setModalState('edit');
            setMoreActive(false);
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
            setModalState('duplicated');
            setMoreActive(false);
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
            // 임시 방안
            setModalState('deleted');
            setMoreActive(false);
            openModal();
          }}
        >
          <div id={styles.button}>
            <img src={deleteBarIcon} alt='deleteIcon' />
          </div>
          <span>삭제</span>
        </div>
      </div>
    ) : null;
  }

  return <Text style={{ color: '#fff' }}>This is None!</Text>;
};

const Factory = ({
  id,
  styles,
  name = 'untitle',
  // favorite,
  total = '0',
  uri,
  handlelocal,
}: {
  id: number;
  styles: FactoryStylesLocal;
  name: string;
  // favorite: boolean;
  total: string;
  uri: number;
  handlelocal: () => void;
}) => {
  if (Platform.OS === 'web') {
    const [, setIsFavorite] = useState<boolean>(false);
    const [isMoreActive, setMoreActive] = useState<boolean>(false);

    const managerBarRef = useRef<HTMLDivElement>(null);
    // const dispatch = useDispatch();
    const mode = useSelector((state: RootState) => state.setFactoryMode.mode);
    // const dispatch = useDispatch();

    const { mutation, isLoading, isError, isSuccess, responseData } =
      useApiMutation('POST');

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const favorite = useSelector(
      (state: RootState) => state.setMyFactoryData.favorite,
    );
    // useEffect(() => {
    //   setClickedItem(favorite);
    // }, [favorite]);

    const handleIconClick = (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
      // event.preventDefault();
      mutation.mutate(
        {
          mutateUrl: `https://13.209.113.229.nip.io/api/wordbook/favorite/${id}`,
        },
        // {
        //   onSuccess: () => {
        //     setClickedItem((prev) => {
        //       console.log(`✅즐겨찾기 post 완료: ${!prev}`);
        //       dispatch(SetFavorite(!prev));
        //       return !prev;
        //     });
        //   },
        // },
      );
    };

    const handleMoreActive = (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
      setMoreActive((prev) => !prev);
    };

    const [isModalState, setModalState] = useState<string>('view');

    const [isModalOpen, setModalOpen] = useState<boolean>(false);

    const openModal = () => {
      setModalOpen(true);
    };

    const closeModal = () => {
      setModalOpen(false);
    };

    useEffect(() => {
      if (isMoreActive) {
        sessionStorage.setItem('title', name);
        sessionStorage.setItem('fId', id.toString());
      }
      const handleClcikOutSide = (event: MouseEvent) => {
        if (
          managerBarRef.current &&
          !managerBarRef.current.contains(event.target as Node)
        ) {
          setMoreActive(false);
          // console.log('왜 reset이지?');
          // dispatch(ResetMode());
          console.log('check mode', mode);
          console.log(`moreactive ${isMoreActive}`);
        }
      };
      document.addEventListener('mousedown', handleClcikOutSide);
      return () => {
        document.removeEventListener('mousedown', handleClcikOutSide);
      };
    }, [isMoreActive, mode]);

    useEffect(() => {
      // console.log('isFavorite', isFavorite);
      if (isSuccess && responseData) {
        console.log('Response:', responseData);
        setIsFavorite(responseData?.data?.favorite);
        dispatch(SetFavorite(responseData?.data?.favorite));
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
            <div
              ref={managerBarRef}
              onClick={(event) => {
                event.stopPropagation();
              }}
            >
              <ManagerBar
                // id={id}
                styles={managerBarStyles}
                isMoreActive={isMoreActive}
                setMoreActive={setMoreActive}
                setModalState={setModalState}
                openModal={openModal}
              />
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
                  src={favorite ? starIconChecked : starIcon}
                  alt='StarIcon'
                />
              </div>
            </div>
          </div>
        </div>
        <ModalController
          id={id}
          state={isModalState}
          isModalOpen={isModalOpen}
          isModalClose={closeModal}
          title={name}
        />
      </div>
    );
  }

  return <Text style={{ color: '#fff' }}>This is None!</Text>;
};

export default Factory;
