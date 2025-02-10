import styled from './TestFlex.module.scss';
// import { testFlexProps } from '@shared/type';
import TestButton from '@shared/components/Test.Button';
import Footer from '@shared/components/Footer';
import Button from '@shared/components/Button';
import Alarm from '@shared/components/Alarm';
import SignUpCheckList from '@shared/components/SignUpCheckList';
import Siren from '@shared/components/Siren';
import Search from '@shared/components/Search';
import Tool from '@shared/components/Tool';
import Factory from '@shared/components/Factory';
import Sort from '@shared/components/Sort';
import Screw from '@shared/components/Screw';
import BuildFactory from '@shared/components/BuildFactory';
import Driver from '@shared/components/Driver';
import PtoryLogo from '@shared/components/PtoryLogo';
import {
  searchIcon,
  createIcon,
  spannerIconGray,
  cancelIcon,
  cancelIconGray,
} from '../../assets';

import {
  FooterTypeStyles,
  ButtonTypeStyles,
  AlarmTypeStyles,
  SignUpCheckListTypeStyles,
  SirenTypeStyles,
  SearchTypeStyles,
  ToolTypeStyles,
  SortTypeStyles,
  FactoryTypeStyles,
  ScrewTypeStyles,
  BuildFactoryTypeStyles,
  DriverTypeStyles,
  PtoryLogoTypeStyles,
} from '../../Model/Mapping';
// Redux 사용시 필요한 구성
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@shared/store/store';
import { Increment, Decrement } from '@shared/store/slice/testSlice';
import { CalculatorOperation } from '../../Controller/Strategy.function';
import {
  AdditionFunction,
  MultiplicationFunction,
} from '../../Model/Calculator.function';
// const applyTestFlexProps = ({ name, age, isActive = true }: TestFlexProps) => {
//   return {
//     displayName: `${name} (${age})`,
//     status: isActive ? 'Active' : 'Inactive',
//   };
// };

const TestFlex = () => {
  // const { displayName, status } = applyTestFlexProps({
  //   name: 'Jane Smith',
  //   age: 25,
  //   isActive: false,
  // });

  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className={styled.debug}>
      <Search
        styles={SearchTypeStyles}
        searchImage={searchIcon}
        image={createIcon}
      />
      <div style={{ padding: '18px' }}></div>
      <Sort styles={SortTypeStyles} />
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
      {/* <div>
        <h1>{displayName}</h1>
        <p>Status: {status}</p>
      </div> */}
      <div id={styled.test}>test</div>
      <div id={styled.content}>Contents</div>
      <TestButton label='Press Me' onPress={() => alert('Pressed!')} />
      <div style={{ padding: '18px' }}></div>
      <PtoryLogo styles={PtoryLogoTypeStyles} />
      <div style={{ padding: '18px' }}></div>
      <Button
        styles={ButtonTypeStyles}
        title='로그인'
        state={false}
        image={spannerIconGray}
        functions={() => {
          console.log(CalculatorOperation(AdditionFunction, 1, 6));
        }}
      />
      <div style={{ padding: '18px' }}></div>
      <Button
        state={true}
        styles={ButtonTypeStyles}
        title='버튼'
        image=''
        functions={() => {
          console.log(CalculatorOperation(MultiplicationFunction, 10, 9));
        }}
      />
      <div style={{ padding: '18px' }}></div>
      <Factory styles={FactoryTypeStyles} name={'토익공부'} count={'0'} />
      <div style={{ padding: '8px' }}></div>
      <Factory styles={FactoryTypeStyles} name={'토익공부'} count={'0'} />
      <div style={{ padding: '8px' }}></div>
      <Alarm
        styles={AlarmTypeStyles}
        title={'토익공부'}
        alarm={'공장을 삭제하시겠습니까?'}
        image={cancelIcon}
      />
      <div style={{ padding: '18px' }}></div>
      <SignUpCheckList styles={SignUpCheckListTypeStyles} />
      <div style={{ padding: '18px' }}></div>
      <Siren
        styles={SirenTypeStyles}
        image={cancelIcon}
        title={'토익공부'}
        alarm={'공장 삭제 완료!'}
      />
      <div style={{ padding: '18px' }}></div>
      <Screw
        styles={ScrewTypeStyles}
        screwSound={'라보르'}
        bolt={'labor'}
        nuts={'노동, 일, 출산'}
        screwShape={'명사'}
      />
      <div style={{ padding: '18px' }}></div>
      <BuildFactory
        styles={BuildFactoryTypeStyles}
        title={'새로운 공장'}
        image={cancelIconGray}
        input={'공장 제목을 입력하세요.'}
        buttonTitle='공장 만들기'
      />
      <div style={{ padding: '18px' }}></div>
      <BuildFactory
        styles={BuildFactoryTypeStyles}
        title={'공장 이름 수정'}
        image={cancelIconGray}
        input={'토익 영어 단어장'}
        buttonTitle='수정하기'
      />
      <div style={{ padding: '18px' }}></div>
      <Driver styles={DriverTypeStyles} />
      <div style={{ padding: '18px' }}></div>
      <Tool styles={ToolTypeStyles} />
      {/* <div style={{ padding: '18px' }}></div> */}
      <Footer styles={FooterTypeStyles} />
    </div>
  );
};

export default TestFlex;
