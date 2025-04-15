import { useState, useEffect } from 'react';
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
import { useDispatch } from 'react-redux';
import { ResetToolMode } from '@shared/store/slice/toolModeSlice';

const StudyFactory = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [isFavorite] = useState<string>(
    localStorage.getItem('favorite') ?? '0',
  );
  const [isLength] = useState<number>(1); // Redux로 코드 수정
  const { uri } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const openModal = () => setModalOpen(true);

  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    console.log('isLength', isLength);
    return () => {
      dispatch(ResetToolMode());
    };
  }, [dispatch, isLength]);

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
        <div id={styled.count}>단어 {isLength}개</div>
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
        {/* {isLength > 0 ? ( */}
        {Array.from({ length: isLength }).map((_, index) => (
          <StudyFactoryApi
            key={index}
            uri={typeof uri === 'string' ? uri : 'undefined'}
            page={0}
            // onTotalUpdate={setLength}
          />
        ))}

        {/* ) : (
          <div>!데이터가 없습니다.</div>
        )} */}
      </div>
      <Tool styles={ToolTypeStyles} onOpenModal={openModal} />
      <Footer styles={FooterTypeStyles} />
      <div style={{ width: '350px', height: '220px' }}>
        <Modal isOpen={isModalOpen} onRequestClose={closeModal} preventScroll>
          <Driver styles={DriverTypeStyles} onClose={closeModal} />
        </Modal>
      </div>
    </div>
  );
};

export default StudyFactory;
