import React from "react";
import { useLocation } from "react-router-dom";
import { Gamer } from "../../entities/gamer";
import BigButton from "../../components/BigButton";
import UserCard from "../../components/UserCard";
import Input from "../../components/Input";
import UseInput from "../../hooks/UseInput";
import Form from "./components/Form";
import UserGrid from "./components/UserGrid";
import Container from "../../components/Container";
import styled from "styled-components";
import UseGetLastPathname from "../../hooks/UseGetLastPathname";

const PageContainer = styled.div`
  display: flex;
`;

const WaitGamePage = () => {
  const location = useLocation();
  UseGetLastPathname(location.pathname);

  const chatInput = UseInput("");
  const suggestInput = UseInput("");

  const chatInputProps = {
    inputId: "chat",
    labelName: "chat",
    placeholder: "채팅하기",
    value: chatInput.value,
    handleChange: chatInput.onChange,
  };

  const suggestInputProps = {
    inputId: "suggest",
    labelName: "suggest",
    placeholder: "제안하기",
    value: suggestInput.value,
    handleChange: suggestInput.onChange,
  };

  const submitChat = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const submitSuggests = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1>WaitGamePage</h1>
      <PageContainer>
        <Container basis={"65%"}>
          <div>
            {/* <h3>{title}</h3> */}
            {/* <UserGrid members={members}></UserGrid> */}
          </div>
          <Form handleFormSubmit={submitChat}>
            <Input {...chatInputProps}></Input>
          </Form>
        </Container>

        <Container basis={"35%"}>
          <h3>제안하기</h3>
          <div>
            <Form handleFormSubmit={submitSuggests}>
              <input type="checkbox" name="사랑" id="사랑" />
              <label htmlFor="사랑">사랑</label>
              <input type="checkbox" name="동물" id="동물" />
              <label htmlFor="동물">동물</label>
              <input type="checkbox" name="과자" id="과자" />
              <label htmlFor="과자">과자</label>
              <Input {...suggestInputProps}></Input>
            </Form>
          </div>
          <BigButton>준비하기</BigButton>
        </Container>
      </PageContainer>
    </div>
  );
};

export default WaitGamePage;
