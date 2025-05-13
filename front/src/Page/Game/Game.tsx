import { FooterTypeStyles } from '@/Model/Mapping';
import { Footer } from '@shared/components';

const Game = () => {
  return (
    <div>
      <div>
        <span>눌러서 토리와 함께 공장을 탈출해주세요!</span>
        <div>
          <img src='' alt='GameStartBanner' />
        </div>
      </div>
      <div>
        <p>설정</p>
        <div>
          <span>공장</span>
          <div>
            <span>미선택</span>
            <div>
              <img src='' alt='RightArrow' />
            </div>
          </div>
        </div>
        <div>
          <span>제시 형태</span>
          <div>
            <span>미선택</span>
            <div>
              <img src='' alt='RightArrow' />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          설정을 완료해 주세요!
          <br />
          <span>설정을 안 하면 랜덤으로 출제</span>됩니다.
        </div>
      </div>
      <Footer styles={FooterTypeStyles} />
    </div>
  );
};

export default Game;
