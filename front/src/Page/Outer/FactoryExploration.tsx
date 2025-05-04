import { BaseLayout } from '@view/components';
import { FactoryExploration as styles } from '@view/stylesheet';
import { SharedFactory, Bestter } from '@shared/components';
import { SharedFactoryTypeStyles, BestterTypeStyles } from '@mapping';
import { useNavigate } from 'react-router-dom';
import { rightArrowIcon, exportIcon, searchIcon } from '@assets';

const FactoryExploration = () => {
  const navigate = useNavigate();
  return (
    <BaseLayout image={exportIcon} searchImage={searchIcon}>
      <div className={styles.container}>
        <div className={styles.recentFactory}>
          <div className={styles.header}>
            <span>최근에 추가된 단어 공장 🆕</span>
            <div
              className={styles.more}
              style={{ cursor: 'pointer' }}
              onClick={() => navigate('/outer/current')}
            >
              <span>더보기</span>
              <img
                src={rightArrowIcon}
                alt='right-arrow'
                width={16}
                height={16}
              />
            </div>
          </div>
          <div className={styles.content}>
            {/* filter 조건에 따라 데이터를 불러오는 것이 좋을 것 같다. */}
            <div style={{ margin: '12px 0 8px 0' }}>
              <SharedFactory styles={SharedFactoryTypeStyles} />
            </div>
            <div style={{ margin: '8px 0 24px 0' }}>
              <SharedFactory styles={SharedFactoryTypeStyles} />
            </div>
          </div>
        </div>
        <div className={styles.hotFactory}>
          <div className={styles.header}>
            <span>요즘 핫한 단어 공장 🔥</span>
            <div
              className={styles.more}
              style={{ cursor: 'pointer' }}
              onClick={() => navigate('/outer/hot')}
            >
              <span>더보기</span>
              <img
                src={rightArrowIcon}
                alt='right-arrow'
                width={16}
                height={16}
              />
            </div>
          </div>
          <div className={styles.content}>
            <div style={{ margin: '12px 0 8px 0' }}>
              <SharedFactory styles={SharedFactoryTypeStyles} />
            </div>
            <div style={{ margin: '8px 0 24px 0' }}>
              <SharedFactory styles={SharedFactoryTypeStyles} />
            </div>
          </div>
        </div>
        <div className={styles.bestFactory}>
          <div className={styles.header}>
            <span>ㅍ토리 베스트 공장러 💚</span>
            <div
              className={styles.more}
              style={{ cursor: 'pointer' }}
              onClick={() => navigate('/outer/best')}
            >
              <span>더보기</span>
              <img
                src={rightArrowIcon}
                alt='right-arrow'
                width={16}
                height={16}
              />
            </div>
          </div>
          <div className={styles.content}>
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
          <div style={{ marginTop: '100px' }} />
        </div>
      </div>
    </BaseLayout>
  );
};

export default FactoryExploration;
