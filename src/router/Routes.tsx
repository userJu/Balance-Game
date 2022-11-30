import React from "react";
import { Route, Routes as ReactRouterRoutes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import NotFoundPage from "../pages/NotFoundPage";
import PlayingGamePage from "../pages/PlayingGamePage";
import WaitGamePage from "../pages/WaitGamePage";
import { MAIN_PAGE, PLAYING_GAME_PAGE, WAIT_GAME_PAGE } from "./routePath";

const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path={MAIN_PAGE} element={<MainPage />} />
      <Route path={WAIT_GAME_PAGE} element={<WaitGamePage />} />
      <Route path={PLAYING_GAME_PAGE} element={<PlayingGamePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </ReactRouterRoutes>
  );
};

export default Routes;
