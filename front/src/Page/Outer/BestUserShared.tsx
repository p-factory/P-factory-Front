import {
  FooterTypeStyles,
  BestterTypeStyles,
  SharedFactoryTypeStyles,
} from '@mapping';
import { Footer, Bestter, SharedFactory } from '@shared/components';
import { BestUserShared as styled } from '@view/stylesheet';
import { backIcon } from '@assets';
import { useNavigate } from 'react-router-dom';

const BestUserShared = () => {
  const navigate = useNavigate();
  return (
    <div className={styled.container}>
      <div className={styled.header}>
        <div className={styled.navigate}>
          <div className={styled.imageGroup} onClick={() => navigate('/outer')}>
            <img src={backIcon} alt='backIcon' />
          </div>
          <span id={styled.title}>ㅍ토리 베스트 공장러 💚</span>
          <div className={styled.imageGroup}></div>
        </div>
      </div>
      <div className={styled.ranker}>
        <div
          style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
        >
          <Bestter styles={BestterTypeStyles} />
        </div>
        <div className={styled.info}>
          <div className={styled.item}>
            <span>공유 공장</span>
            <span>1,385,205</span>
          </div>
          <div className={styled.item}>
            <span>다운로드</span>
            <span>1,385,205</span>
          </div>
          <div className={styled.item}>
            <span>순위</span>
            <span>1,385,205</span>
          </div>
        </div>
      </div>
      <div className={styled.user}>
        <SharedFactory styles={SharedFactoryTypeStyles} />
        <SharedFactory styles={SharedFactoryTypeStyles} />
        <SharedFactory styles={SharedFactoryTypeStyles} />
        <SharedFactory styles={SharedFactoryTypeStyles} />
        <SharedFactory styles={SharedFactoryTypeStyles} />
        <SharedFactory styles={SharedFactoryTypeStyles} />
        <SharedFactory styles={SharedFactoryTypeStyles} />
        <div style={{ marginTop: '100px' }} />
      </div>
      <Footer styles={FooterTypeStyles} />
    </div>
  );
};

export default BestUserShared;
