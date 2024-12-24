import styled from './TestFlex.module.scss';
const TestFlex = () => {
  return (
    <div className={styled.debug}>
      <div id={styled.test}>test</div>
      <div id={styled.content}>Contents</div>
    </div>
  );
};

export default TestFlex;
