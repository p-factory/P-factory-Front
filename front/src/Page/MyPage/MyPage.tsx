import { FooterTypeStyles } from '@mapping';
import { Footer } from '@shared/components';
import { MyPage as styled } from '@view/stylesheet';
import { cameraIcon } from '@assets';
import { useNavigate } from 'react-router-dom';

const MyPage = () => {
  const navigate = useNavigate();
  return (
    <div className={styled.container}>
      <div className={styled.user}>
        <div
          style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
        >
          <div className={styled.userContainer}>
            <div className={styled.userImage}>
              <div id={styled.image}>
                <img src='' alt='' />
              </div>
              <button id={styled.cameraButton}>
                <img src={cameraIcon} alt='camera' />
              </button>
            </div>
            <div className={styled.userName}>아기사자</div>
          </div>
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
          <div
            className={styled.categoryList}
            onClick={() => navigate('./upload')}
          >
            외부 공장 업로드 내역
          </div>
        </div>
        <div className={styled.categoryContent}>
          <div className={styled.categoryTitle}>문의</div>
          <div className={styled.categoryList}>개발자에게 메일 보내기</div>
        </div>
        <div className={styled.categoryContent}>
          <div className={styled.categoryTitle}>계정</div>
          <div
            className={styled.categoryList}
            onClick={() => navigate('./account')}
          >
            정보 수정
          </div>
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
