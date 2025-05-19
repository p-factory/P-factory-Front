import { backIcon } from '@/assets';
import { FooterTypeStyles } from '@/Model/Mapping';
import { Footer } from '@shared/components';
import { SettingFilter as styles } from '@/View/stylesheet';

const SettingFilter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.top}>
          <div className={styles.img}>
            <img src={backIcon} alt='back' />
          </div>
          <div className={styles.title}>제시 형태 선택</div>
          <div className={styles.img}></div>
        </div>
        <span className={styles.description}>
          대탈출에 나올 단어 유형을 선택해주세요!
        </span>
      </div>
      <div className={styles.contents}>
        <div className={styles.filterContainer}>
          <span className={styles.filterTitle}>체크 여부</span>
          <div className={styles.optionContainer}>
            <div className={styles.option}>전체</div>
            <div className={styles.option}>체크한 단어만</div>
            <div className={styles.option}>미체크한 단어만</div>
          </div>
        </div>
        <div className={styles.filterContainer}>
          <div className={styles.optionContainer}>
            <span className={styles.filterTitle}>형광펜 여부</span>
            <div className={styles.option}>형광펜 칠한 단어만</div>
            <div className={styles.option}>형광펜 안 칠한 단어만</div>
          </div>
        </div>
        <div className={styles.filterContainer}>
          <div className={styles.optionContainer}>
            <span className={styles.filterTitle}>순서</span>
            <div className={styles.option}>랜덤</div>
            <div className={styles.option}>최신순</div>
            <div className={styles.option}>오래된 순</div>
          </div>
        </div>
      </div>
      <Footer styles={FooterTypeStyles} />
    </div>
  );
};

export default SettingFilter;
