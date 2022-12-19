import React from "react";
import GameCard from "../../../components/GameCard";
import { gameList } from "../../../services/mock/gameList";

const GameListGrid = () => {
  return (
    <ul>
      {gameList.map((game) => (
        <GameCard key={game.gameId} game={game} />
      ))}
    </ul>
  );
};

export default GameListGrid;
