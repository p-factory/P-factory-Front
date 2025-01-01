import styled from './TestFlex.module.scss';
// import { testFlexProps } from '@shared/type';
import { TestFlexProps } from '@shared/type';
import TestButton from '@shared/components/Test.Button';
import Footer from '@shared/components/Footer';
import FooterStyled from '../Footer.module.scss';
import ButtonStyled from '../Button.module.scss';
import Button from '@shared/components/Button';
import { FooterStyles, ButtonStyles } from '@shared/type';
import Assets from '../../assets/assets';

//객체 매핑(Object Mapping)
const footerStyles: FooterStyles = {
  footer: FooterStyled.footer,
  contents: FooterStyled.contents,
  image: FooterStyled.image,
  title: FooterStyled.title,
};

const buttonStyles: ButtonStyles = {
  button: ButtonStyled.button,
  contents: ButtonStyled.contents,
  title: ButtonStyled.title,
  image: ButtonStyled.image,
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
      <div id={styled.contents}>Contents</div>
      <TestButton label='Press Me' onPress={() => alert('Pressed!')} />
      <Button styles={buttonStyles} title='로그인' image={Assets.spannerIcon} />
      <Button styles={buttonStyles} title='버튼' image='' />
      <Footer styles={footerStyles} />
    </div>
  );
};

export default TestFlex;
