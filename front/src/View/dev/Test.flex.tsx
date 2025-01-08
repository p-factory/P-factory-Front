import styled from './TestFlex.module.scss';
// import { testFlexProps } from '@shared/type';
import TestButton from '@shared/components/Test.Button';
import Footer from '@shared/components/Footer';
import FooterStyled from '../Footer.module.scss';
import ButtonStyled from '../Button.module.scss';
import AlarmStyled from '../Alarm.module.scss';
import SignUpCheckListStyled from '../SignUpCheckList.module.scss';
import SirenStyled from '../Siren.module.scss';
import Button from '@shared/components/Button';
import Alarm from '@shared/components/Alarm';
import SignUpCheckList from '@shared/components/SignUpCheckList';
import Siren from '@shared/components/Siren';
import {
  TestFlexProps,
  FooterStyles,
  ButtonStyles,
  AlarmStylesLocal,
  SignUpCheckListStylesLocal,
  SirenStylesLocal,
} from '@shared/type';
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

const signUpCheckListStyles: SignUpCheckListStylesLocal = {
  title: SignUpCheckListStyled.container,
  container: SignUpCheckListStyled.container,
  contents: SignUpCheckListStyled.contents,
  checkbox: SignUpCheckListStyled.checkbox,
  required: SignUpCheckListStyled.required,
  conditions: SignUpCheckListStyled.conditions,
  selected: SignUpCheckListStyled.selected,
  all: SignUpCheckListStyled.all,
};

const sirenStyles: SirenStylesLocal = {
  title: SirenStyled.title,
  container: SirenStyled.container,
  contents: SirenStyled.contents,
  image: SirenStyled.image,
  alarm: SirenStyled.alarm,
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
      <div style={{ padding: '18px' }}></div>
      <Button styles={buttonStyles} title='로그인' image={Assets.spannerIcon} />
      <div style={{ padding: '18px' }}></div>
      <Button styles={buttonStyles} title='버튼' image='' />
      <div style={{ padding: '18px' }}></div>
      <Alarm
        styles={alarmStyles}
        title={'토익공부'}
        alarm={'공장을 삭제하시겠습니까?'}
        image={Assets.cancelIcon}
      />
      <div style={{ padding: '18px' }}></div>
      <SignUpCheckList styles={signUpCheckListStyles} />
      <div style={{ padding: '18px' }}></div>
      <Siren
        styles={sirenStyles}
        image={Assets.cancelIcon}
        title={'토익공부'}
        alarm={'공장 삭제 완료!'}
      />
      <div style={{ padding: '18px' }}></div>
      <Footer styles={footerStyles} />
    </div>
  );
};

export default TestFlex;
