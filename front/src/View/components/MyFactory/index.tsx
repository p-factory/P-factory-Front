import { ReactNode, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Search, BuildFactory, Footer } from '@shared/components';
import { MyFactory as styled } from '@view/stylesheet';
import { searchIcon, createIcon, cancelIconGray } from '@assets';
import {
  SearchTypeStyles,
  BuildFactoryTypeStyles,
  FooterTypeStyles,
} from '@mapping';
import { useSelector } from 'react-redux';
import { RootState } from '@shared/store';

const MyFactory = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const sesscctionMode = sessionStorage.getItem('mode');
  const mode = useSelector((state: RootState) => state.setFactoryMode.mode);

  const openModal = () => setModalOpen(true);

  const closeModal = () => {
    setModalOpen(false);
    sessionStorage.removeItem('mode');
  };

  useEffect(() => {
    if (mode === 'edit') {
      setModalOpen(true);
    }
  }, [mode]);

  return (
    <div id={styled.debug}>
      <div id={styled.Search}>
        <Search
          styles={SearchTypeStyles}
          searchImage={searchIcon}
          image={createIcon}
          onOpenModal={openModal}
        />
      </div>
      {/* <div>
        <p>공장이 없잖아!</p>
        <span>
          상단의 추가버튼을 눌러 공장을 만들고, 공장 안에서 단어를 생성하도록!
        </span>
      </div> */}

      <Modal isOpen={isModalOpen} onRequestClose={closeModal} preventScroll>
        <BuildFactory
          styles={BuildFactoryTypeStyles}
          title={sesscctionMode === 'edit' ? '공장 이름 수정' : '새로운 공장'}
          image={cancelIconGray}
          input={
            sesscctionMode === 'edit'
              ? `${sessionStorage.getItem('title')}`
              : '공장 제목을 입력하세요.'
          }
          buttonTitle={sesscctionMode === 'edit' ? '수정하기' : '공장 만들기'}
          onClose={closeModal}
        />
      </Modal>

      <div className={styled.Factory}>{children}</div>
      <Footer styles={FooterTypeStyles} />
    </div>
  );
};

export default MyFactory;
