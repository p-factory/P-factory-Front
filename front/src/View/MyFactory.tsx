import { useState } from 'react';
import { Search, Factory, BuildFactory } from '@shared/components';
import styled from './MyFactory.Layout.module.scss';
import { searchIcon, createIcon, cancelIconGray } from '../assets';
import {
  SearchTypeStyles,
  FactoryTypeStyles,
  BuildFactoryTypeStyles,
} from '../Model/Mapping';
import Modal from 'react-modal';
const MyFactory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 모달 열기 함수
  const openModal = () => setIsModalOpen(true);

  // 모달 닫기 함수
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={styled.debug}>
      <div>
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
      <Factory styles={FactoryTypeStyles} name={'토익공부'} count={'0'} />

      <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        <BuildFactory
          styles={BuildFactoryTypeStyles}
          title={'새로운 공장'}
          image={cancelIconGray}
          input={'공장 제목을 입력하세요.'}
          buttonTitle='공장 만들기'
          onClose={closeModal}
        />
      </Modal>
    </div>
  );
};

export default MyFactory;
