import { User } from "firebase/auth";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Container from "../../components/Container";
import { Gamer } from "../../entities/gamer";
import { checkAuthState } from "../../services/firebase/auth";
import Auth from "./components/Auth";
import GameListGrid from "./components/GameListGrid";
import Lanking from "./components/Lanking";
import UserInfo from "./components/UserInfo";

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const MainPage = () => {
  const [user, setUser] = useState<null | Gamer>(null);

  const getUserInfo = (user: User) => {
    const { email, displayName, photoURL } = user;
    const newGamer = {
      id: email || "",
      profileName: displayName || "",
      profileImage: photoURL || "",
      level: 0,
    };
    setUser(newGamer);
  };

  useEffect(() => {
    checkAuthState(getUserInfo);
  }, []);

  return (
    <div>
      <h1>Balance</h1>
      <PageContainer>
        <Container basis={"15%"}>
          {user !== null ? <UserInfo></UserInfo> : <Auth></Auth>}
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
