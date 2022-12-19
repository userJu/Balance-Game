import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Game } from "../entities/game";
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
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  const navigate = useNavigate();
  const { gameId, title, owner, topic, max_members, members, createDate } =
    game;

  console.log(topics[3]);
  const interGame = () => {
    navigate(WAIT_GAME_PAGE, { state: { gameInfo: game } });
    return;
  };
  return (
    <Container onClick={interGame}>
      <div>💛</div>
      <GameInfo>
        {topic.map((item) => (
          <GameTag key={item}>{topics[item].title}</GameTag>
        ))}
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
