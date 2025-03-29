import { Routes, Route } from 'react-router-dom';
import { Error } from '@shared/components';
import {
  Login,
  SignUp as SignUpList,
  SignUpInput as SignUp,
  MyFactory,
  StudyFactory,
} from '@page';
import Test from './dev';
// import './App.scss';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      {/* <Route path='/test' element={<TestFlex />} /> */}
      <Route path='/MyFactory' element={<MyFactory />} />
      <Route path='/StudyFactory/:uri' element={<StudyFactory />} />
      {/* <Route path='/login' element={} /> */}
      <Route path='/signUp' element={<SignUpList />} />
      <Route path='/signUp/input' element={<SignUp />} />
      <Route path='/test' element={<Test />} />
      <Route path='*' element={<Error />} />
    </Routes>
  );
};

export default App;
