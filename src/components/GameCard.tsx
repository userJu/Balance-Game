import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Game, GameWithDocsRef } from "../entities/game";
import { PLAYING_GAME_PAGE, WAIT_GAME_PAGE } from "../router/routePath";
import { topics } from "../services/mock/topics";
import { colors } from "../style/styles";

const Container = styled.div`
  background-color: ${colors.gray20};
  margin-left: 5px;
  margin-right: 5px;

  p {
    margin: 0;
  }
`;

const GameInfo = styled.div``;

const GameTag = styled.span`
  background-color: ${colors.gray30};
  border: 1px solid gray;
  margin-right: 3px;
  font-size: 12px;
`;
const Title = styled.p`
  background-color: ${colors.gray30};
`;

const State = styled.div`
  display: flex;
  justify-content: space-around;
`;

interface GameCardProps {
  game: GameWithDocsRef;
}

const GameCard = ({ game }: GameCardProps) => {
  const navigate = useNavigate();
  const { docRef, gameId, title, topic, max_members, members } = game;

  const interGame = () => {
    const newGame = {
      docRef,
      gameId,
      title,
      topic,
      max_members,
      members,
    };

    console.log(newGame);

    navigate(`${WAIT_GAME_PAGE}/${docRef}`);

    return;
  };
  return (
    <Container onClick={interGame}>
      <div>💛</div>
      <GameInfo>
        <GameTag key={topic.join("")}>{topic.join(", ")}</GameTag>
        <Title>{title}</Title>
        <State>
          <p>waiting</p>
          <p>{max_members}</p>
        </State>
      </GameInfo>
    </Container>
  );
};

export default GameCard;
