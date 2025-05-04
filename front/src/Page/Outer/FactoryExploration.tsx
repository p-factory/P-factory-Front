import { BaseLayout } from '@view/components';
import { FactoryExploration as styles } from '@view/stylesheet';
import { SharedFactory, Bestter } from '@shared/components';
import { SharedFactoryTypeStyles, BestterTypeStyles } from '@mapping';
const FactoryExploration = () => {
  return (
    <BaseLayout>
      <div className={styles.container}>
        <div className={styles.recentFactory}>
          <div className={styles.header}>
            <span>최근에 추가된 단어 공장 🆕</span>
            <div className={styles.more}>
              <span>더보기</span>
              <img src={'image'} alt='>' />
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
            <div className={styles.more}>
              <span>더보기</span>
              <img src={'image'} alt='>' />
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
            <div className={styles.more}>
              <span>더보기</span>
              <img src={'image'} alt='>' />
            </div>
          </div>
          <div className={styles.content}>
            <div style={{ width: '100%', margin: '8px 0 12px 4px' }}>
              <Bestter styles={BestterTypeStyles} />
            </div>
            <div style={{ width: '100%', margin: '8px 0 12px 4px' }}>
              <Bestter styles={BestterTypeStyles} />
            </div>
            <div style={{ width: '100%', margin: '8px 0 12px 0px' }}>
              <Bestter styles={BestterTypeStyles} />
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default FactoryExploration;
