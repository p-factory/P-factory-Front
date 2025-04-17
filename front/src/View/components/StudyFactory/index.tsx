import { useState, useEffect, useCallback, useRef } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { ResetToolMode } from '@shared/store/slice/toolModeSlice';
import { RootState } from '@shared/store';

const StudyFactory = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [isFavorite] = useState<string>(
    localStorage.getItem('favorite') ?? '0',
  );
  const { uri } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const total = useSelector((state: RootState) => state.setMyFactoryData.total);
  const itemsPerPage = 10; // 페이지당 아이템 수를 상수로 정의
  const [currentPage, setCurrentPage] = useState<number[]>([0]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  // 로딩 상태 관리에 대한 의문점
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const observerRef = useRef<HTMLDivElement>(null);

  const openModal = () => setModalOpen(true);

  const closeModal = () => setModalOpen(false);

  // 디바운스된 페이지 업데이트
  useEffect(() => {
    const timer = setTimeout(() => {
      if (total > 0) {
        const totalPages = Math.ceil(total / itemsPerPage);
        if (currentPage.length > totalPages) {
          setCurrentPage((prev) => prev.slice(0, totalPages));
        }
      }
    }, 300); // 300ms 디바운스

    return () => clearTimeout(timer);
  }, [total]);

  // Intersection Observer 콜백 수정
  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [target] = entries;
      const totalPages = Math.ceil(total / itemsPerPage);

      if (
        target.isIntersecting &&
        hasMore &&
        !isLoading &&
        currentPage.length < totalPages
      ) {
        setIsLoading(true);
        setCurrentPage((prev) => [...prev, prev[prev.length - 1] + 1]);
      }
    },
    [hasMore, isLoading, total, currentPage.length],
  );

  // Observer 설정
  useEffect(() => {
    const element = observerRef.current;
    if (!element) return;

    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(handleObserver, option);
    observer.observe(element);

    return () => observer.disconnect();
  }, [handleObserver]);

  // Driver에서 새 항목 추가 후 리셋
  const handleDriverClose = useCallback(() => {
    setCurrentPage([0]); // 첫 페이지로 리셋
    setHasMore(true);
    setIsLoading(false);
    closeModal();
  }, []);

  useEffect(() => {
    return () => {
      dispatch(ResetToolMode());
    };
  }, [dispatch]);

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
        <div id={styled.count}>단어 {total}개</div>
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
        {currentPage.map((page) => (
          <StudyFactoryApi
            key={`${uri}-${page}`}
            uri={typeof uri === 'string' ? uri : 'undefined'}
            page={page}
            onLoadComplete={() => setIsLoading(false)}
          />
        ))}

        {/* Observer 타겟 요소 - 조건 수정 */}
        {hasMore && currentPage.length < Math.ceil(total / itemsPerPage) && (
          <div ref={observerRef} style={{ height: '20px', margin: '10px 0' }}>
            {isLoading && <div>로딩 중...</div>}
          </div>
        )}
      </div>
      <Tool styles={ToolTypeStyles} onOpenModal={openModal} />
      <Footer styles={FooterTypeStyles} />
      <div style={{ width: '350px', height: '220px' }}>
        <Modal isOpen={isModalOpen} onRequestClose={closeModal} preventScroll>
          <Driver styles={DriverTypeStyles} onClose={handleDriverClose} />
        </Modal>
      </div>
    </div>
  );
};

export default StudyFactory;
