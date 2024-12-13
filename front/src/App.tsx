import { useRecoilState } from 'recoil';
import { countState } from './Model/Atoms/atoms';
import { useState } from 'react';
import './App.scss';
import assets from './assets/assets';
// import Button from '../../shared/components/Button';
import Button from '@shared/components/Button';

const App = () => {
  // Recoil 상태로 관리
  const [count, setCount] = useRecoilState(countState);

  return (
    <div className='App'>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={assets.viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank'>
          <img src='/react.svg' className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
      <Button label='Press Me' onPress={() => alert('Pressed!')} />
    </div>
  );
};

export default App;
