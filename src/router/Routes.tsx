import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import NotFoundPage from "../pages/NotFoundPage";
import { MAIN_PAGE, PLAYING_GAME_PAGE, WAIT_GAME_PAGE } from "./routePath";

const Router = () => {
  return (
    <Routes>
      <Route path={MAIN_PAGE} element={<MainPage />} />
      <Route path={WAIT_GAME_PAGE} element={<MainPage />} />
      <Route path={PLAYING_GAME_PAGE} element={<MainPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
