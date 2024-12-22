import styles from './TestPage.module.scss';

const TestPage = () => {
  return (
    <div className={styles.debug}>
      <div className={styles.debugContents}>
        <div className={styles.debugDiv}>test</div>
        <div className={styles.debugDiv}>test</div>
      </div>
      <div className={styles.debugContentsEl}>
        <div className={styles.debugDiv}>test</div>
        <div className={styles.debugDiv}>test</div>
      </div>
      <div className={styles.debugContentsEl}>
        <div className={styles.debugDiv}>test</div>
        <div className={styles.debugDiv}>test</div>
      </div>
      <div className={styles.debugContentsEl}>
        <div className={styles.debugDiv}>test</div>
        <div className={styles.debugDiv}>test</div>
      </div>
      <div className={styles.debugContentsEl}>
        <div className={styles.debugDiv}>test</div>
        <div className={styles.debugDiv}>test</div>
      </div>
      <div className={styles.debugContentsEl}>
        <div className={styles.debugDiv}>test</div>
        <div className={styles.debugDiv}>test</div>
      </div>
    </div>
  );
};

export default TestPage;
