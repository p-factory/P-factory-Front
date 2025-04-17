import { Routes, Route } from 'react-router-dom';
import { Persistor } from '@shared/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Store } from '@shared/store';
import { Error } from '@shared/components';
import {
  Login,
  SignUp as SignUpList,
  SignUpInput as SignUp,
  MyFactory,
  StudyFactory,
  Main,
} from '@page';
import Test from './dev';
// import './App.scss';

const App = () => {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={Persistor}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          {/* <Route path='/test' element={<TestFlex />} /> */}
          <Route path='/MyFactory' element={<MyFactory />} />
          <Route path='/StudyFactory/:uri' element={<StudyFactory />} />
          {/* <Route path='/login' element={} /> */}
          <Route path='/signUp' element={<SignUpList />} />
          <Route path='/signUp/input' element={<SignUp />} />
          <Route path='/test' element={<Test />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </PersistGate>
    </Provider>
  );
};

export default App;
