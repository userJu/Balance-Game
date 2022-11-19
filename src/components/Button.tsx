import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const ButtonContainer = styled.button`
  outline: none;
  border: 1px solid black;
  background-color: pink;
`;

type Props = PropsWithChildren<{}>;

const Button = (props: Props) => {
  const { children } = props;
  return (
    <ButtonContainer>
      <span>{children}</span>
    </ButtonContainer>
  );
};

export default Button;
