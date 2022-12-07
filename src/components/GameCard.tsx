import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Game } from "../entities/game";
import { PLAYING_GAME_PAGE } from "../router/routePath";
import { colors } from "../style/styles";

const Container = styled.div`
  background-color: ${colors.gray20};
  width: 45%;
  display: flex;
  p {
    margin: 0;
  }
`;

const GameInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const GameTag = styled.div`
  background-color: ${colors.gray30};
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
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
  console.log(game);
  const { gameId, title, owner, topic, max_members, createDate } = game;

  console.log(title, topic, max_members);
  const interGame = () => {
    navigate(PLAYING_GAME_PAGE);
    return;
  };
  return (
    <Container onClick={interGame}>
      {topic.map((item) => (
        <GameTag key={item}>{item}</GameTag>
      ))}
      <GameInfo>
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
