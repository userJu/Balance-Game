import React from "react";

import styled from "styled-components";

const InputComponent = styled.input`
  padding: 0 0 8px;
  outline: none;
  border: 0 none;
  :focus {
    border-bottom: 1px solid black;
  }
  transition: border-bottom 0.2s ease;
`;

interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {
  const { onChange } = props;
  return (
    <>
      <InputComponent onChange={onChange} />
    </>
  );
};

export default Input;
