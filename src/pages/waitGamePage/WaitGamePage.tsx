import React from "react";
import { useLocation } from "react-router-dom";
import { Gamer } from "../../entities/gamer";
import BigButton from "../../components/BigButton";
import UserCard from "../../components/UserCard";
import Input from "../../components/Input";
import UseInput from "../../hooks/UseInput";
import Form from "./components/Form";

const WaitGamePage = () => {
  const location = useLocation();
  const { gameId, title, owner, topic, max_members, members, createDate } =
    location.state.gameInfo;

  const chatInput = UseInput("");
  const suggestInput = UseInput("");

  // const { value, onChange, resetValue } = chatInput;
  // const { value, onChange, resetValue } = suggestInput;

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

  return (
    <div>
      <h1>WaitGamePage</h1>
      <div>
        <h2>{title}</h2>
        <ul>
          {members.map((gamer: Gamer) => (
            // <li>{gamer.profileName}</li>
            <UserCard gamer={gamer}></UserCard>
          ))}
        </ul>
      </div>
      <Form>
        <Input {...chatInputProps}></Input>
      </Form>

      <div>
        <h2>오른쪽</h2>
        <div>
          <Form>
            <Input {...suggestInputProps}></Input>
          </Form>
        </div>
        <BigButton>준비하기</BigButton>
      </div>
    </div>
  );
};

export default WaitGamePage;
