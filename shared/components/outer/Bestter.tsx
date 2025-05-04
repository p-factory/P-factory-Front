import { BestterStyles } from '../../style';

const Bestter = ({ styles }: { styles: BestterStyles }) => {
  return (
    <div className={styles.container}>
      <div className={styles.number}>1</div>
      <div className={styles.contents}>
        <div id={styles.image}>
          <img src='' alt='' />
        </div>
        <span>Bestter</span>
        <span>0000</span>
      </div>
    </div>
  );
};

export default Bestter;
