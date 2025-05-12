import { FooterTypeStyles, BestterTypeStyles } from '@mapping';
import { Footer, Bestter } from '@shared/components';
import { BestUserShared as styled } from '@view/stylesheet';

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
        <div>
          <div>업로드</div>
          <div>외부 공장 업로드 내역</div>
        </div>
        <div>
          <div>문의</div>
          <div>개발자에게 메일 보내기</div>
        </div>
        <div>
          <div>계정</div>
          <div>정보 수정</div>
          <div>로그아웃</div>
          <div>탈퇴</div>
        </div>
      </div>
      <Footer styles={FooterTypeStyles} />
    </div>
  );
};

export default MyPage;
