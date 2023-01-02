import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GameCard from "../../../components/GameCard";
import { Game, GameWithDocsRef } from "../../../entities/game";
import { getAllDocsOnGames } from "../../../services/firebase/firestore";
import { gameList } from "../../../services/mock/gameList";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 89%;
  margin: auto;
  row-gap: 10px;
`;

const GameListGrid = () => {
  const [games, setGames] = useState<GameWithDocsRef[] | []>([]);

  const getGameLists = async () => {
    const gameArray: GameWithDocsRef[] = [];
    await (
      await getAllDocsOnGames()
    ).forEach((doc) => {
      console.log(doc.id);
      gameArray.push({ docRef: doc.id, ...doc.data() });
    });
    setGames((prev) => [...gameArray]);
  };

  useEffect(() => {
    getGameLists();
  }, []);
  return (
    <GridContainer>
      {games.map((game) => (
        <GameCard key={String(game.gameId)} game={game} />
      ))}
    </GridContainer>
  );
};

export default GameListGrid;
