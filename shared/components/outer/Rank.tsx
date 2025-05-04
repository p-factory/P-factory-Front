import { RankStyles } from '../../style';

const Rank = ({ styles }: { styles: RankStyles }) => {
  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <div id={styles.rank}>1</div>
        <div id={styles.name}>name</div>
      </div>
      <div id={styles.rate}>1,005,205</div>
    </div>
  );
};

export default Rank;
