import styles from './TestPage.module.scss';

const TestPage = () => {
  return (
    <div
      className={styles.debug}
      style={{
        width: '100%',
        // maxWidth: '800px',
        // minWidth: '400px',
      }}
    >
      <span>test</span>
    </div>
  );
};

export default TestPage;
