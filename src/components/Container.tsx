import React, { ReactNode } from "react";
import styled from "styled-components";
import { colors } from "../style/styles";

const Div = styled.div`
  background-color: ${colors.gray0};
  width: 95%;
  height: 50vw;
  margin: auto;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

interface PropsContainer {
  children: ReactNode;
}

const Container = ({ children }: PropsContainer) => {
  return <Div>{children}</Div>;
};

export default Container;
