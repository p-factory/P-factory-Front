import { Routes, Route } from 'react-router-dom';
import TestPage from './View/dev/TestPage';
import TestFlex from './View/dev/Test.flex';
import MyFactory from './View/MyFactory';
import StudyFactory from './View/StudyFactory';
// import './App.scss';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<TestPage />} />
      <Route path='/test' element={<TestFlex />} />
      <Route path='/MyFactory' element={<MyFactory />} />
      <Route path='/StudyFactory' element={<StudyFactory />} />
    </Routes>
  );
};

export default App;
