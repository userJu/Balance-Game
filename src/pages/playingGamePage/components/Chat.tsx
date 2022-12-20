import React from "react";
import Container from "../../../components/Container";
import Input from "../../../components/Input";
import UseInput from "../../../hooks/UseInput";
import Form from "./Form";

const Chat = () => {
  const opinionInput = UseInput("");

  const { value, onChange, resetValue } = opinionInput;

  const opinionInputProps = {
    inputId: "opinion",
    labelName: "opinion",
    placeholder: "의견 등록하기!",
    value,
    handleChange: onChange,
  };
  return (
    <Container basis={"35%"}>
      <h3>chatpage</h3>
      <ul>
        <li>채팅내용 1</li>
        <li>채팅내용 2</li>
        <li>쏼라쏼라 의견</li>
      </ul>
      <Form>
        <Input {...opinionInputProps}></Input>
      </Form>
    </Container>
  );
};

export default Chat;
