import { useEffect, useState } from 'react';
import { Sort, Tool, Footer, Driver } from '@shared/components';
import {
  SortTypeStyles,
  // ScrewTypeStyles,
  ToolTypeStyles,
  FooterTypeStyles,
  DriverTypeStyles,
} from '../../Model/Mapping';
import { StudyFactory as styled } from '../stylesheet';
import {
  starIconChecked,
  backIcon,
  downloadIcon,
  starIcon,
} from '../../assets';
import Modal from 'react-modal';
import { StudyFactoryApi } from '.';
import { useNavigate, useParams } from 'react-router-dom';

const StudyFactory = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [isTotal] = useState<string>(sessionStorage.getItem('total') ?? '0');
  const [isFavorite] = useState<string>(
    sessionStorage.getItem('favorite') ?? '0',
  );
  const { uri } = useParams();
  const navigate = useNavigate();
  const openModal = () => setModalOpen(true);

  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    sessionStorage.clear();
  });

  return (
    <div id={styled.debug}>
      <div id={styled.header}>
        <div id={styled.navigate}>
          <div
            className={styled.imageGroup}
            onClick={() => navigate('/MyFactory')}
          >
            <img src={backIcon} alt='backIcon' />
          </div>
          <span id={styled.title}>토익 공부</span>
          <div className={styled.imageGroup}>
            <img
              src={isFavorite === 'true' ? starIconChecked : starIcon}
              alt='starIcon'
            />
          </div>
        </div>
        <div id={styled.count}>단어 {isTotal}개</div>
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
