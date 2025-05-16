import { FooterTypeStyles } from '@/Model/Mapping';
import { Footer } from '@shared/components';
import { gameBanner, rightArrowIcon } from '@/assets';
import { Game as styles } from '@/View/stylesheet';

const Game = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.text}>
          <span>↓</span> 눌러서 토리와 함께 공장을 탈출해주세요!
        </div>
        <div className={styles.banner}>
          <div className={styles.bannerGradation} />
          <div className={styles.bannerTitle}>
            <span>토리의 공장 탈출 게임</span>
            <span id={styles.start}>START!</span>
          </div>
          <div className={styles.bannerImg}>
            <img src={gameBanner} alt='GameStartBanner' />
          </div>
        </div>
      </div>
      <div className={styles.contents}>
        <p className={styles.text}>설정</p>
        <div className={styles.setting}>
          <span className={styles.settingTitle}>공장</span>
          <div className={styles.settingSelectBox}>
            <span id={styles.settingSelect}>미선택</span>
            <div className={styles.rightImg}>
              <img src={rightArrowIcon} alt='RightArrow' />
            </div>
          </div>
        </div>
        <div className={styles.setting}>
          <span className={styles.settingTitle}>제시 형태</span>
          <div className={styles.settingSelectBox}>
            <span id={styles.settingSelect}>미선택</span>
            <div className={styles.rightImg}>
              <img src={rightArrowIcon} alt='RightArrow' />
            </div>
          </div>
        </div>
        <div className={styles.description}>
          <div className={styles.text}>
            설정을 완료해 주세요!
            <br />
            <span className={styles.bolder}>설정을 안 하면 랜덤으로 출제</span>
            됩니다.
          </div>
        </div>
      </div>
      <Footer styles={FooterTypeStyles} />
    </div>
  );
};

export default Game;
