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
  FactoryExploration,
  FactoryUpLoader,
  CurrentFactory,
  HotFactory,
  DownLoadFactory,
  BestUser,
  BestUserShared,
  Game,
} from '@page';
import Test from './dev';
import { ScrollToTop } from '@view/components';
// import './App.scss';

const App = () => {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={Persistor}>
        <ScrollToTop />
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
          <Route path='/outer' element={<FactoryExploration />} />
          <Route path='/outer/upload' element={<FactoryUpLoader />} />
          <Route path='/outer/current' element={<CurrentFactory />} />
          <Route path='/outer/hot' element={<HotFactory />} />
          <Route path='/outer/download' element={<DownLoadFactory />} />
          <Route path='/outer/best' element={<BestUser />} />
          <Route path='/outer/best/shared' element={<BestUserShared />} />
          <Route path='/game' element={<Game />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </PersistGate>
    </Provider>
  );
};

export default App;
