import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Store } from '@store';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Provider store={Store}>
          <App />
        </Provider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
