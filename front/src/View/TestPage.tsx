import styles from './TestPage.module.scss';
import Button from '@shared/components/Button.tsx';

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
      <Button label='Press Me' onPress={() => alert('Pressed!')} />
    </div>
  );
};

export default TestPage;
