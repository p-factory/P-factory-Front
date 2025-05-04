import { FooterTypeStyles, BestterTypeStyles, RankTypeStyles } from '@mapping';
import { Footer, Bestter, Rank } from '@shared/components';
import { BestUser as styled } from '@view/stylesheet';
import { backIcon } from '@assets';
import { useNavigate } from 'react-router-dom';

const BestUser = () => {
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
        <div style={{ width: '100%' }}>
          <Bestter styles={BestterTypeStyles} />
        </div>
        <div style={{ width: '100%' }}>
          <Bestter styles={BestterTypeStyles} />
        </div>
        <div style={{ width: '100%' }}>
          <Bestter styles={BestterTypeStyles} />
        </div>
      </div>
      <div className={styled.user}>
        <Rank styles={RankTypeStyles} />
        <Rank styles={RankTypeStyles} />
        <Rank styles={RankTypeStyles} />
        <Rank styles={RankTypeStyles} />
        <Rank styles={RankTypeStyles} />
        <Rank styles={RankTypeStyles} />
        <Rank styles={RankTypeStyles} />
        <Rank styles={RankTypeStyles} />
        <Rank styles={RankTypeStyles} />
        <div style={{ marginTop: '100px' }} />
      </div>
      <Footer styles={FooterTypeStyles} />
    </div>
  );
};

export default BestUser;
