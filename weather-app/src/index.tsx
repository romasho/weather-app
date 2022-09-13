import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import App from './App';
import theme from './theme';
import { store, persistor } from './store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
