import React from "react";
import { useNavigate } from "react-router-dom";
import GameCard from "../components/GameCard";
import { PLAYING_GAME_PAGE } from "../router/routePath";
import { gameList } from "../services/mock/gameList";
import { rankingList } from "../services/mock/ranking";

const MainPage = () => {
  return (
    <div>
      <h1>Balance</h1>
      <div>user 정보</div>
      <button>바로 시작</button>
      <button>방 만들기</button>

      <ul>
        {gameList.map((game) => (
          <GameCard key={game.gameId} game={game} />
        ))}
      </ul>
      <h3>ranking</h3>
      {/* 랭킹이 없을때는 일단 공란으로 내비두기  */}
      <ul>
        {rankingList.map((rank) => (
          <li key={rank.userId}>rank.userId</li>
        ))}
      </ul>
    </div>
  );
};

export default MainPage;
