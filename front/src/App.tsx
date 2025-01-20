import { Routes, Route } from 'react-router-dom';
import TestPage from './View/dev/TestPage';
import TestFlex from './View/dev/Test.flex';
// import './App.scss';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<TestPage />} />
      <Route path='/test' element={<TestFlex />} />
    </Routes>
  );
};

export default App;
