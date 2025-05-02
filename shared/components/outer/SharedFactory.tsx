import { SharedFactoryStyles } from '../../style';

const SharedFactory = ({ styles }: { styles: SharedFactoryStyles }) => {
  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <div id={styles.name}>아기사자</div>
        <div id={styles.date}>25.01.25</div>
      </div>
      <div id={styles.title}>공무원 시험 합격은 ㅍ토리</div>
      <div className={styles.shared}>
        <span id={styles.count}>10</span>명이 공장을 가져갔어요🐧
      </div>
    </div>
  );
};

export default SharedFactory;
