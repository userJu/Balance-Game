import React from "react";
import Input from "../../../components/Input";
import UseInput from "../../../hooks/UseInput";
import { signup } from "../../../services/firebase/auth";

const Signup = () => {
  const email = UseInput("");
  const password = UseInput("");
  const userName = UseInput("");

  const userNameInput = {
    inputId: "userName",
    labelName: "userName",
    placeholder: "이름을 입력해주세요",
    value: userName.value,
    handleChange: userName.onChange,
  };

  const emailInput = {
    inputId: "email",
    labelName: "email",
    placeholder: "이메일을 입력해주세요",
    value: email.value,
    handleChange: email.onChange,
  };

  const passwordInput = {
    inputId: "password",
    labelName: "password",
    placeholder: "비밀번호를 입력해주세요",
    value: password.value,
    handleChange: password.onChange,
  };

  const onLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userName.value);

    const authInfo = {
      displayName: userName.value,
      email: email.value,
      password: password.value,
    };

    signup(authInfo);
  };

  return (
    <form action="submit" onSubmit={onLogin}>
      <Input {...userNameInput}></Input>
      <Input {...emailInput}></Input>
      <Input {...passwordInput}></Input>
      <button>Signup</button>
    </form>
  );
};

export default Signup;
