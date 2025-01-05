import styled from './TestFlex.module.scss';
// import { testFlexProps } from '@shared/type';
import { TestFlexProps } from '@shared/type';
import TestButton from '@shared/components/Test.Button';
import Footer from '@shared/components/Footer';
import FooterStyled from '../Footer.module.scss';
import ButtonStyled from '../Button.module.scss';
import AlarmStyled from '../Alarm.module.scss';
import Button from '@shared/components/Button';
import Alarm from '@shared/components/alarm';
import { FooterStyles, ButtonStyles, AlarmStylesLocal } from '@shared/type';
import Assets from '../../assets/assets';

//객체 매핑(Object Mapping)
const footerStyles: FooterStyles = {
  container: FooterStyled.container,
  contents: FooterStyled.contents,
  image: FooterStyled.image,
  title: FooterStyled.title,
};

const buttonStyles: ButtonStyles = {
  button: ButtonStyled.button,
  container: ButtonStyled.container,
  contents: ButtonStyled.contents,
  buttonContents: AlarmStyled.contents,
  title: ButtonStyled.title,
  image: ButtonStyled.image,
};

const alarmStyles: AlarmStylesLocal = {
  title: AlarmStyled.title,
  container: AlarmStyled.container,
  contents: AlarmStyled.contents,
  buttonContents: AlarmStyled.buttonContents,
  button: AlarmStyled.button,
  buttonCancel: AlarmStyled.buttonCancel,
  buttonApprove: AlarmStyled.buttonApprove,
  image: AlarmStyled.image,
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
      <TestButton label='Press Me' onPress={() => alert('Pressed!')} />
      <Button styles={buttonStyles} title='로그인' image={Assets.spannerIcon} />
      <Button styles={buttonStyles} title='버튼' image='' />
      <div style={{ padding: '18px' }}></div>
      <Alarm
        styles={alarmStyles}
        title={'토익공부'}
        alarm={'공장을 삭제하시겠습니까?'}
        image={Assets.cancelIcon}
      />
      <Footer styles={footerStyles} />
    </div>
  );
};

export default TestFlex;
