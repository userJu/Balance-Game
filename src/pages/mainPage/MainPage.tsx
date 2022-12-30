import { User } from "firebase/auth";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Container from "../../components/Container";
import { Gamer } from "../../entities/gamer";
import { checkAuthState } from "../../services/firebase/auth";
import { getUserObject } from "../../services/firebase/firestore";
import Auth from "./components/Auth";
import CraftRoom from "./components/CraftRoom";
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

  const currentUser = async (user: User) => {
    const userObject = await getUserObject(user["uid"]);
    setUser(userObject);
  };

  const getUserInfo = async () => {
    const user = await checkAuthState(currentUser);
  };

  const setUserLogout = () => {
    setUser((prev) => null);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div>
      {user !== null ? <CraftRoom user={user}></CraftRoom> : ""}
      <h1>Balance</h1>
      <PageContainer>
        <Container basis={"15%"}>
          {user !== null ? (
            <UserInfo setUserLogout={setUserLogout} user={user}></UserInfo>
          ) : (
            <Auth></Auth>
          )}
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
