import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import { colors } from "../style/styles";

const Button = styled.button`
  border: none;
  outline: none;
  background-color: ${colors.gray30};
  cursor: pointer;
`;

type Props = PropsWithChildren<{}>;

const SmallButton = (props: Props) => {
  const { children } = props;
  return <Button>{children}</Button>;
};

export default SmallButton;
