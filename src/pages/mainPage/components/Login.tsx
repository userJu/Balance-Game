import React from "react";
import Input from "../../../components/Input";
import UseInput from "../../../hooks/UseInput";
import { login } from "../../../services/firebase/auth";

const Login = () => {
  const email = UseInput("");
  const password = UseInput("");

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

    const authInfo = {
      email: email.value,
      password: password.value,
    };

    login(authInfo);
  };

  return (
    <form action="submit" onSubmit={onLogin}>
      <Input {...emailInput}></Input>
      <Input {...passwordInput}></Input>
      <button>Login</button>
    </form>
  );
};

export default Login;
