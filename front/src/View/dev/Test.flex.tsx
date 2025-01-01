import styled from './TestFlex.module.scss';
// import { testFlexProps } from '@shared/type';
import { TestFlexProps } from '@shared/type';
import Button from '@shared/components/Button';
import Footer from '@shared/components/Footer';
import FooterStyled from '../Footer.module.scss';
import { StylesProps } from '@shared/type';

//객체 매핑(Object Mapping)
const footerStyles: StylesProps = {
  footer: FooterStyled.footer,
  contents: FooterStyled.contents,
  image: FooterStyled.image,
  title: FooterStyled.title,
};

const applyTestFlexProps = ({ name, age, isActive = true }: TestFlexProps) => {
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
      <Footer styles={footerStyles} />
    </div>
  );
};

export default TestFlex;
