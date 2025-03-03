import { useState } from 'react';
import Modal from 'react-modal';
import {
  Search,
  Factory,
  BuildFactory,
  Footer,
  Tool,
} from '@shared/components';
import { MyFactory as styled } from './';
import { searchIcon, createIcon, cancelIconGray } from '../assets';
import {
  SearchTypeStyles,
  FactoryTypeStyles,
  BuildFactoryTypeStyles,
  FooterTypeStyles,
  ToolTypeStyles,
} from '../Model/Mapping';

const MyFactory = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);

  const closeModal = () => setModalOpen(false);

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
          title={'새로운 공장'}
          image={cancelIconGray}
          input={'공장 제목을 입력하세요.'}
          buttonTitle='공장 만들기'
          onClose={closeModal}
        />
      </Modal>

      <div className={styled.Factory}>
        {/* Create가 될 때 Factory props로 값을 전달해서 ManagerBar로 연결해야한다.*/}
        <Factory styles={FactoryTypeStyles} name={'토익공부'} count={'0'} />
      </div>
      {/* <div className={styled.Factory}>
        <Factory styles={FactoryTypeStyles} name={'토익공부'} count={'0'} />
      </div>
      <div className={styled.Factory}>
        <Factory styles={FactoryTypeStyles} name={'토익공부'} count={'0'} />
      </div>
      <div className={styled.Factory}>
        <Factory styles={FactoryTypeStyles} name={'토익공부'} count={'0'} />
      </div>
      <div className={styled.Factory}>
        <Factory styles={FactoryTypeStyles} name={'토익공부'} count={'0'} />
      </div> */}
      <Tool styles={ToolTypeStyles} />
      <Footer styles={FooterTypeStyles} />
    </div>
  );
};

export default MyFactory;
