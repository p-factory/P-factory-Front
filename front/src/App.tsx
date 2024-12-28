import { Routes, Route } from 'react-router-dom';
import TestPage from './View/TestPage';
import TestFlex from './View/Test.flex';
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
