import React from "react";
import GameListGrid from "./components/GameListGrid";
import Lanking from "./components/Lanking";
import UserInfo from "./components/UserInfo";

const MainPage = () => {
  return (
    <div>
      <h1>Balance</h1>
      <UserInfo></UserInfo>

      <button>바로 시작</button>
      <button>방 만들기</button>

      <GameListGrid></GameListGrid>
      <Lanking></Lanking>
    </div>
  );
};

export default MainPage;
