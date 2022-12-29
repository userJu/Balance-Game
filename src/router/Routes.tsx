import React from "react";
import { Route, Routes as ReactRouterRoutes } from "react-router-dom";
import MainPage from "../pages/mainPage/MainPage";
import NotFoundPage from "../pages/NotFoundPage";
import PlayingGamePage from "../pages/playingGamePage/PlayingGamePage";
import WaitGamePage from "../pages/waitGamePage/WaitGamePage";
import { MAIN_PAGE, PLAYING_GAME_PAGE, WAIT_GAME_PAGE } from "./routePath";

const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path={MAIN_PAGE} element={<MainPage />} />
      <Route path={`${WAIT_GAME_PAGE}/:id`} element={<WaitGamePage />} />
      <Route path={`${PLAYING_GAME_PAGE}/:id`} element={<PlayingGamePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </ReactRouterRoutes>
  );
};

export default Routes;
