import React from "react";
import styled from "styled-components";
import Container from "../../components/Container";
import GameListGrid from "./components/GameListGrid";
import Lanking from "./components/Lanking";
import UserInfo from "./components/UserInfo";

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const MainPage = () => {
  return (
    <div>
      <h1>Balance</h1>
      <PageContainer>
        <Container basis={"15%"}>
          <UserInfo></UserInfo>
        </Container>

        <Container basis={"70%"}>
          <button>바로 시작</button>
          <button>방 만들기</button>
          <GameListGrid></GameListGrid>
        </Container>

        <Container basis={"15%"}>
          <Lanking></Lanking>
        </Container>
      </PageContainer>
    </div>
  );
};

export default MainPage;
