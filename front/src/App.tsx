import { Routes, Route } from 'react-router-dom';
import TestPage from './View/dev/TestPage';
import TestFlex from './View/dev/Test.flex';
import LoginPage from './Page/Login';
import SignUpPage from './Page/SignUp';
import SignUpInputPage from './Page/SignUpInput';
// import './App.scss';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<TestPage />} />
      <Route path='/test' element={<TestFlex />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signUp' element={<SignUpPage />} />
      <Route path='/signUp/input' element={<SignUpInputPage />} />
    </Routes>
  );
};

export default App;
