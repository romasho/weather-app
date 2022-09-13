import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ErrorBoundary } from './components';
import { AppRoutes } from './constants';
import { ErrorPage, MainPage } from './pages';

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path={AppRoutes.MAIN} element={<MainPage />} />
        <Route path={AppRoutes.ERROR} element={<ErrorPage />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
