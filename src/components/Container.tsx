import React, { ReactNode } from "react";
import styled from "styled-components";
import { colors } from "../style/styles";

interface Flex {
  grow?: number;
  shrink?: number;
  basis: number | string;
}

const Div = styled.div<Flex>`
  background-color: ${colors.gray0};
  width: 95%;
  min-height: 50vw;

  margin: auto;
  margin-top: 3rem;
  margin-bottom: 3rem;
  border: 1px solid pink;
  flex-grow: ${(props) => props.grow};
  flex-shrink: ${(props) => props.shrink};
  flex-basis: ${(props) => props.basis};
`;

interface PropsContainer {
  children: ReactNode;
  grow?: number;
  shrink?: number;
  basis?: number | string;
}

const Container = ({
  children,
  grow = 1,
  shrink = 1,
  basis = 1,
}: PropsContainer) => {
  return (
    <Div grow={grow} shrink={shrink} basis={basis}>
      {children}
    </Div>
  );
};

export default Container;
