import { FooterTypeStyles, BestterTypeStyles } from '@mapping';
import { Footer, Bestter } from '@shared/components';
import { MyPage as styled } from '@view/stylesheet';

const MyPage = () => {
  return (
    <div className={styled.container}>
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
      <div className={styled.category}>
        <div className={styled.categoryContent}>
          <div className={styled.categoryTitle}>업로드</div>
          <div className={styled.categoryList}>외부 공장 업로드 내역</div>
        </div>
        <div className={styled.categoryContent}>
          <div className={styled.categoryTitle}>문의</div>
          <div className={styled.categoryList}>개발자에게 메일 보내기</div>
        </div>
        <div className={styled.categoryContent}>
          <div className={styled.categoryTitle}>계정</div>
          <div className={styled.categoryList}>정보 수정</div>
          <div className={styled.categoryList}>로그아웃</div>
          <div className={styled.categoryList}>탈퇴</div>
        </div>
      </div>
      <div className={styled.version}>ver 1.0</div>
      <Footer styles={FooterTypeStyles} />
    </div>
  );
};

export default MyPage;
