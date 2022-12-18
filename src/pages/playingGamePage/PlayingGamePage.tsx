import React from "react";
import Input from "../../components/Input";
import UseInput from "../../hooks/UseInput";
import Form from "./components/Form";

const PlayingGamePage = () => {
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
    <div>
      <h1>PlayingGamePage</h1>
      <div>
        {/* leftpage  */}
        <div>
          <h3>1~~한 조건</h3>
          <ul>
            <li>쏼라쏼라 의견</li>
          </ul>
        </div>

        {/* progressbar  */}
        <div></div>

        {/* rightpage  */}
        <div>
          <h3>2~~한 조건</h3>
          <ul>
            <li>쏼라쏼라쏼라 의견</li>
            <li>캐슈너츠 의견</li>
          </ul>
        </div>
      </div>
      <div>
        <h3>chatpage</h3>
        <ul>
          <li>채팅내용 1</li>
          <li>채팅내용 2</li>
          <li>쏼라쏼라 의견</li>
        </ul>
        <Form>
          <Input {...opinionInputProps}></Input>
        </Form>
      </div>
    </div>
  );
};

export default PlayingGamePage;
