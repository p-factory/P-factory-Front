import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TestPage from './View/TestPage.tsx';
// import './App.scss';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<TestPage />} />
      </Routes>
    </Router>
  );
};

export default App;
