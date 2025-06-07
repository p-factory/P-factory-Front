import { backIcon } from '@/assets';
import { FooterTypeStyles } from '@/Model/Mapping';
import { Footer } from '@shared/components';
import { SettingFilter as styles } from '@/View/stylesheet';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SettingFilter = () => {
  const [isCheck, setIsCheck] = useState<string>('');
  const [isHighlight, setIsHighlight] = useState<string>('');
  const [isSort, setIsSort] = useState<string>('');
  const navigate = useNavigate();

  const buttonClick = ({
    setFn,
    value,
  }: {
    setFn: (val: string) => void;
    value: string;
  }) => {
    setFn(value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.top}>
          <div className={styles.img}>
            <img src={backIcon} alt='back' onClick={() => navigate('/game')} />
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
            <div
              className={`${styles.option} ${isCheck === 'all' ? styles.click : ''}`}
              onClick={() => buttonClick({ setFn: setIsCheck, value: 'all' })}
            >
              <span>전체</span>
            </div>
            <div
              className={`${styles.option} ${isCheck === 'check' ? styles.click : ''}`}
              onClick={() => buttonClick({ setFn: setIsCheck, value: 'check' })}
            >
              <span>체크한 단어만</span>
            </div>
            <div
              className={`${styles.option} ${isCheck === 'none' ? styles.click : ''}`}
              onClick={() => buttonClick({ setFn: setIsCheck, value: 'none' })}
            >
              <span>미체크한 단어만</span>
            </div>
          </div>
        </div>
        <div className={styles.filterContainer}>
          <span className={styles.filterTitle}>형광펜 여부</span>
          <div className={styles.optionContainer}>
            <div
              className={`${styles.option} ${isHighlight === 'paint' ? styles.click : ''}`}
              onClick={() =>
                buttonClick({ setFn: setIsHighlight, value: 'paint' })
              }
            >
              <span>형광펜 칠한 단어만</span>
            </div>
            <div
              className={`${styles.option} ${isHighlight === 'none' ? styles.click : ''}`}
              onClick={() =>
                buttonClick({ setFn: setIsHighlight, value: 'none' })
              }
            >
              <span>형광펜 안 칠한 단어만</span>
            </div>
          </div>
        </div>
        <div className={styles.filterContainer}>
          <span className={styles.filterTitle}>순서</span>
          <div className={styles.optionContainer}>
            <div
              className={`${styles.option} ${isSort === 'random' ? styles.click : ''}`}
              onClick={() => buttonClick({ setFn: setIsSort, value: 'random' })}
            >
              <span>랜덤</span>
            </div>
            <div
              className={`${styles.option} ${isSort === 'recent' ? styles.click : ''}`}
              onClick={() => buttonClick({ setFn: setIsSort, value: 'recent' })}
            >
              <span>최신순</span>
            </div>
            <div
              className={`${styles.option} ${isSort === 'old' ? styles.click : ''}`}
              onClick={() => buttonClick({ setFn: setIsSort, value: 'old' })}
            >
              <span>오래된 순</span>
            </div>
          </div>
        </div>
      </div>
      <Footer styles={FooterTypeStyles} />
    </div>
  );
};

export default SettingFilter;
