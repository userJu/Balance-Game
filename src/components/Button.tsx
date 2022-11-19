import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const ButtonContainer = styled.button`
  /*  */
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;

  background-color: #f0ecfc;
  background-image: linear-gradient(315deg, #f0ecfc 0%, #c797eb 74%);
  line-height: 42px;
  padding: 0;
  border: none;

  span {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }

  :before,
  :after {
    position: absolute;
    content: "";
    right: 0;
    bottom: 0;
    background: #c797eb;
    transition: all 0.3s ease;
  }
  :before {
    height: 0%;
    width: 2px;
  }
  :after {
    width: 0%;
    height: 2px;
  }
  :hover:before {
    height: 100%;
  }
  :hover:after {
    width: 100%;
  }
  :hover {
    background: transparent;
  }
  span:hover {
    color: #c797eb;
  }
  span:before,
  span:after {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    background: #c797eb;
    transition: all 0.3s ease;
  }
  span:before {
    width: 2px;
    height: 0%;
  }
  span:after {
    height: 2px;
    width: 0%;
  }
  span:hover:before {
    height: 100%;
  }
  span:hover:after {
    width: 100%;
  }
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
