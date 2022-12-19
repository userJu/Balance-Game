import React from "react";
import styled from "styled-components";
import GameCard from "../../../components/GameCard";
import { gameList } from "../../../services/mock/gameList";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 89%;
  margin: auto;
  row-gap: 10px;
`;

const GameListGrid = () => {
  return (
    <GridContainer>
      {gameList.map((game) => (
        <GameCard key={game.gameId} game={game} />
      ))}
    </GridContainer>
  );
};

export default GameListGrid;
