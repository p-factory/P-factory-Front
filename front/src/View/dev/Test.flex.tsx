import styled from './TestFlex.module.scss';
// import { testFlexProps } from '@shared/type';
import TestButton from '@shared/components/Test.Button';
import Footer from '@shared/components/Footer';
import FooterStyled from '../Footer.module.scss';
import ButtonStyled from '../Button.module.scss';
import AlarmStyled from '../Alarm.module.scss';
import SignUpCheckListStyled from '../SignUpCheckList.module.scss';
import SirenStyled from '../Siren.module.scss';
import SearchStyled from '../Search.module.scss';
import ToolStyled from '../Tool.module.scss';
import FactoryStyled from '../Factory.module.scss';
import SortStyled from '../Sort.module.scss';
import ScrewStyled from '../Screw.module.scss';
import Button from '@shared/components/Button';
import Alarm from '@shared/components/Alarm';
import SignUpCheckList from '@shared/components/SignUpCheckList';
import Siren from '@shared/components/Siren';
import Search from '@shared/components/Search';
import Tool from '@shared/components/Tool';
import Factory from '@shared/components/Factory';
import Sort from '@shared/components/Sort';
import Screw from '@shared/components/Screw';
import {
  TestFlexProps,
  FooterStyles,
  ButtonStyles,
  AlarmStylesLocal,
  SignUpCheckListStylesLocal,
  SirenStylesLocal,
  SearchStylesLocal,
  ToolStyles,
  FactoryStylesLocal,
  SortStylesLocal,
  ScrewStylesLocal,
} from '@shared/type';
import Assets from '../../assets/assets';
// Redux 사용시 필요한 구성
import { useSelector, useDispatch } from 'react-redux';
import { RootState, Increment, Decrement } from '@shared/store';

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

const searchStyles: SearchStylesLocal = {
  title: SearchStyled.title,
  container: SearchStyled.container,
  contents: SearchStyled.contents,
  button: SearchStyled.button,
  buttonContents: SearchStyled.buttonContents,
  image: SearchStyled.image,
  group: SearchStyled.group,
};

const toolStyles: ToolStyles = {
  container: ToolStyled.container,
  contents: ToolStyled.contents,
  image: ToolStyled.image,
  title: ToolStyled.title,
};

const sortStyles: SortStylesLocal = {
  button: SortStyled.button,
  buttonContents: SortStyled.contents,
  container: SortStyled.container,
  contents: SortStyled.contents,
  sortOptions: SortStyled.sortOptions,
  sortOption: SortStyled.sortOption,
  title: SortStyled.title,
  image: SortStyled.image,
};

const factoryStyles: FactoryStylesLocal = {
  container: FactoryStyled.container,
  contents: FactoryStyled.contents,
  title: FactoryStyled.title,
  image: FactoryStyled.image,
  button: FactoryStyled.button,
  buttonContents: FactoryStyled.buttonContents,
  name: FactoryStyled.name,
  count: FactoryStyled.count,
  managerBar: FactoryStyled.managerBar,
};

const screwStyles: ScrewStylesLocal = {
  container: ScrewStyled.container,
  contents: ScrewStyled.contents,
  title: ScrewStyled.title,
  button: ScrewStyled.button,
  buttonContents: ScrewStyled.buttonContents,
  screwSound: ScrewStyled.screwSound,
  bolt: ScrewStyled.bolt,
  nuts: ScrewStyled.nuts,
  nut: ScrewStyled.nut,
  screwShape: ScrewStyled.screwShape,
  checked: ScrewStyled.checked,
  unchecked: ScrewStyled.unchecked,
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

  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className={styled.debug}>
      <Search
        styles={searchStyles}
        searchImage={Assets.searchIcon}
        createImage={Assets.createIcon}
      />
      <div style={{ padding: '18px' }}></div>

      <div>
        <h3>Count: {count}</h3>
        <div>
          <button onClick={() => dispatch(Increment())}>increment</button>
        </div>
        <div>
          <button onClick={() => dispatch(Decrement())}>decrement</button>
        </div>
      </div>

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
      <Factory styles={factoryStyles} name={'토익공부'} count={'0'} />
      <div style={{ padding: '8px' }}></div>
      <Factory styles={factoryStyles} name={'토익공부'} count={'0'} />
      <div style={{ padding: '8px' }}></div>
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
      <Screw
        styles={screwStyles}
        screwSound={'라보르'}
        bolt={'labor'}
        nuts={'노동, 일, 출산'}
        screwShape={'명사'}
      />
      <div style={{ padding: '18px' }}></div>
      <Tool styles={toolStyles} />
      <div style={{ padding: '18px' }}></div>
      <Sort styles={sortStyles} />
      <div style={{ padding: '18px' }}></div>
      <Footer styles={footerStyles} />
    </div>
  );
};

export default TestFlex;