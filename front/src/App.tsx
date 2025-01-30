import { Routes, Route } from 'react-router-dom';
import TestPage from './View/dev/TestPage';
import TestFlex from './View/dev/Test.flex';
import MyFactory from './View/MyFactory';
// import './App.scss';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<TestPage />} />
      <Route path='/test' element={<TestFlex />} />
      <Route path='/MyFactory' element={<MyFactory />} />
    </Routes>
  );
};

export default App;
