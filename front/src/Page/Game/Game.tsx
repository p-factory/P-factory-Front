import { FooterTypeStyles } from '@/Model/Mapping';
import { Footer } from '@shared/components';
import { gameBanner, rightArrowIcon } from '@/assets';
const Game = () => {
  return (
    <div>
      <div>
        <div>
          <span>↓</span> 눌러서 토리와 함께 공장을 탈출해주세요!
        </div>
        <div>
          <img src={gameBanner} alt='GameStartBanner' />
        </div>
      </div>
      <div>
        <p>설정</p>
        <div>
          <span>공장</span>
          <div>
            <span>미선택</span>
            <div>
              <img src={rightArrowIcon} alt='RightArrow' />
            </div>
          </div>
        </div>
        <div>
          <span>제시 형태</span>
          <div>
            <span>미선택</span>
            <div>
              <img src={rightArrowIcon} alt='RightArrow' />
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
