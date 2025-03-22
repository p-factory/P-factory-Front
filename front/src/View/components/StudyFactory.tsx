import { useState } from 'react';
import { Sort, Tool, Footer, Driver } from '@shared/components';
import {
  SortTypeStyles,
  // ScrewTypeStyles,
  ToolTypeStyles,
  FooterTypeStyles,
  DriverTypeStyles,
} from '../../Model/Mapping';
import { StudyFactory as styled } from '../stylesheet';
import { starIconChecked, backIcon, downloadIcon } from '../../assets';
import Modal from 'react-modal';
import { StudyFactoryApi } from '.';
import { useParams } from 'react-router-dom';

const StudyFactory = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { uri } = useParams();
  const openModal = () => setModalOpen(true);

  const closeModal = () => setModalOpen(false);

  return (
    <div id={styled.debug}>
      <div id={styled.header}>
        <div id={styled.navigate}>
          <div className={styled.imageGroup}>
            <img src={backIcon} alt='backIcon' />
          </div>
          <span id={styled.title}>토익 공부</span>
          <div className={styled.imageGroup}>
            <img src={starIconChecked} alt='starIcon' />
          </div>
        </div>
        <div id={styled.count}>단어 0개</div>
        <div id={styled.menu}>
          <div>
            <Sort styles={SortTypeStyles} />
          </div>
          <div className={styled.imageGroup}>
            <img src={downloadIcon} alt='downLoadIcon' />
          </div>
        </div>
      </div>
      <div id={styled.screws}>
        {/* <Screw
          styles={ScrewTypeStyles}
          screwSound={'라보르'}
          bolt={'labor'}
          nuts={['노동', '일', '출산']}
          screwShape={'명사'}
        /> */}
        <StudyFactoryApi uri={typeof uri === 'string' ? uri : 'undefined'} />
      </div>
      <Tool styles={ToolTypeStyles} onOpenModal={openModal} />
      <Footer styles={FooterTypeStyles} />
      <Modal isOpen={isModalOpen} onRequestClose={closeModal} preventScroll>
        <Driver styles={DriverTypeStyles} onClose={closeModal} />
      </Modal>
    </div>
  );
};

export default StudyFactory;
