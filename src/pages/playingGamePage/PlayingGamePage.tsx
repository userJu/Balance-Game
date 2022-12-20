import React from "react";
import styled from "styled-components";
import Container from "../../components/Container";
import Ballance from "./components/Ballance";
import Chat from "./components/Chat";

const PlayingGameContainer = styled.div`
  display: flex;
`;

const PlayingGamePage = () => {
  return (
    <div>
      <h1>PlayingGamePage</h1>
      <PlayingGameContainer>
        <Container basis={"65%"}>
          <Ballance></Ballance>
        </Container>

        <Chat></Chat>
      </PlayingGameContainer>
    </div>
  );
};

export default PlayingGamePage;
