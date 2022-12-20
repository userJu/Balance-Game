import React from "react";
import styled from "styled-components";
import Container from "../../../components/Container";

const BallanceContainer = styled.div`
  display: flex;
`;

const Ballance = () => {
  return (
    <BallanceContainer>
      {/* leftpage  */}
      <Container basis={"48%"}>
        <h3>1~~한 조건</h3>
        <ul>
          <li>쏼라쏼라 의견</li>
        </ul>
      </Container>

      {/* progressbar  */}
      <Container basis={"5px"}>
        <div></div>
      </Container>

      {/* rightpage  */}
      <Container basis={"48%"}>
        <h3>2~~한 조건</h3>
        <ul>
          <li>쏼라쏼라쏼라 의견</li>
          <li>캐슈너츠 의견</li>
        </ul>
      </Container>
    </BallanceContainer>
  );
};

export default Ballance;
