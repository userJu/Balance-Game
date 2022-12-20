import React from "react";
import styled from "styled-components";
import UserCard from "../../../components/UserCard";
import { Gamer } from "../../../entities/gamer";

const GridContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

const userBoard = [0, 1, 2, 3, 4, 5, 6, 7];

const UserGrid = ({ members }: { members: Gamer[] }) => {
  return (
    <GridContainer>
      {userBoard.map((boardIdx: number) => (
        <UserCard key={boardIdx} {...members[boardIdx]}></UserCard>
      ))}
    </GridContainer>
  );
};

export default UserGrid;
