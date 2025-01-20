import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from '@shared/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={Store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
