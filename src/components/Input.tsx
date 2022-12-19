import React from "react";

import styled from "styled-components";
import { colors } from "../style/styles";

const InputComponent = styled.input`
  padding: 0 0 8px;
  outline: none;
  border: 0 none;
  background-color: ${colors.gray40Opacity30};
  :focus {
    border-bottom: 1px solid black;
  }
  transition: border-bottom 0.2s ease;
`;

interface InputProps {
  inputId: string;
  labelName: string;
  placeholder: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  inputId,
  labelName,
  placeholder,
  value,
  handleChange,
}: InputProps) => {
  return (
    <InputComponent
      type="text"
      id={inputId}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Input;
