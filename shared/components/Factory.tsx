import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { ResetMode } from '../store/slice/factoryModeSlice';

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
  // id,
  styles,
  isMoreActive = false,
  setMoreActive,
  setModalState,
  openModal,
}: {
  // id: number;
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
            // dispatch(SetMode('shared'));
            setModalState('shared');
            setMoreActive(false);
            // isMoreActive = false;
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
            // dispatch(SetMode('edit'));
            // 임시 방안
            sessionStorage.setItem('mode', 'edit');
            setModalState('edit');
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
            // dispatch(SetMode('duplicated'));
            setModalState('duplicated');
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
            // dispatch(SetMode('deleted'));
            // 임시 방안
            // sessionStorage.setItem('mode', 'deleted');
            setModalState('deleted');
            openModal();
          }}
        >
          <div id={styles.button}>
            <img src={deleteBarIcon} alt='deleteIcon' />
          </div>
          <span>삭제</span>
          {/* Alarm 사용 SignUpInput 참고 */}
        </div>
        {/* <ModalController
          id={id}
          state={isModalState}
          isModalOpen={isModalOpen}
        /> */}
      </div>
    ) : null;
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
    const dispatch = useDispatch();
    const mode = useSelector((state: RootState) => state.setFactoryMode.mode);
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

    const [isModalState, setModalState] = useState<string>('view');

    const [isModalOpen, setModalOpen] = useState<boolean>(false);

    const openModal = () => setModalOpen(true);

    useEffect(() => {
      // console.log(handlelocal());
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
          dispatch(ResetMode());
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
                  src={isClickedItem ? starIconChecked : starIcon}
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
        />
      </div>
    );
  }

  return <Text style={{ color: '#fff' }}>This is None!</Text>;
};

export default Factory;
