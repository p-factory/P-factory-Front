import styled from './TestFlex.module.scss';
// import { testFlexProps } from '@shared/type';
import { testFlexProps } from '@shared/type';
import Button from '@shared/components/Button';

const applyTestFlexProps = ({ name, age, isActive = true }: testFlexProps) => {
  return {
    displayName: `${name} (${age})`,
    status: isActive ? 'Active' : 'Inactive',
  };
};

const TestFlex = () => {
  const { displayName, status } = applyTestFlexProps({
    name: 'Jane Smith',
    age: 25,
    isActive: false,
  });

  return (
    <div className={styled.debug}>
      <div>
        <h1>{displayName}</h1>
        <p>Status: {status}</p>
      </div>
      <div id={styled.test}>test</div>
      <div id={styled.content}>Contents</div>
      <Button label='Press Me' onPress={() => alert('Pressed!')} />
    </div>
  );
};

export default TestFlex;
