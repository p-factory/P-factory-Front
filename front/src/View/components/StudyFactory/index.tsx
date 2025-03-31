import { useState } from 'react';
import { Sort, Tool, Footer, Driver } from '@shared/components';
import {
  SortTypeStyles,
  // ScrewTypeStyles,
  ToolTypeStyles,
  FooterTypeStyles,
  DriverTypeStyles,
} from '@mapping';
import { StudyFactory as styled } from '@view/stylesheet';
import { starIconChecked, backIcon, downloadIcon, starIcon } from '@assets';
import Modal from 'react-modal';
import { StudyFactoryApi } from '@controller';
import { useNavigate, useParams } from 'react-router-dom';

const StudyFactory = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [isTotal] = useState<string>(localStorage.getItem('total') ?? '0');
  const [isFavorite] = useState<string>(
    localStorage.getItem('favorite') ?? '0',
  );
  const isLength = Math.ceil(Number(isTotal) / 10);
  const { uri } = useParams();
  const navigate = useNavigate();
  const openModal = () => setModalOpen(true);

  const closeModal = () => setModalOpen(false);

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
      <div id={styled.screws} style={{ paddingBottom: '180px' }}>
        {localStorage.getItem('total') !== '0' ? (
          Array.from({ length: isLength }).map((_, index) => (
            <StudyFactoryApi
              key={index}
              uri={typeof uri === 'string' ? uri : 'undefined'}
              page={index}
            />
          ))
        ) : (
          <div>null</div>
        )}
        {/* <StudyFactoryApi
          uri={typeof uri === 'string' ? uri : 'undefined'}
          page={isLength}
        /> */}
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
