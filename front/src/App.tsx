import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TestPage from './View/TestPage.tsx';
import TestFlex from './View/Test.flex.tsx';
// import './App.scss';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<TestPage />} />
        <Route path='/test' element={<TestFlex />} />
      </Routes>
    </Router>
  );
};

export default App;
