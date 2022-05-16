import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "./constants";

import { ErrorPage, MainPage } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path={AppRoutes.MAIN} element={<MainPage />} />
        <Route path={AppRoutes.ERROR} element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
