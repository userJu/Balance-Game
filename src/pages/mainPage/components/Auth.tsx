import React, { useState } from "react";
import UseInput from "../../../hooks/UseInput";
import Input from "../../../components/Input";

const Auth = () => {
  const [authType, setAuthType] = useState<"Login" | "Signup">("Login");
  const [goToAuthType, setGoToAuthType] = useState<"Login" | "Signup">(
    "Signup"
  );

  const changeAuthType = (e: React.MouseEvent<HTMLButtonElement>) => {
    goToAuthType === "Login"
      ? setGoToAuthType("Signup")
      : setGoToAuthType("Login");

    authType === "Login" ? setAuthType("Signup") : setAuthType("Login");
  };

  const authorizing = (e: React.MouseEvent<HTMLButtonElement>) => {};

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

  const onAuthSubimt = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email.value);
    console.log(password.value);
  };

  return (
    <div>
      <form action="submit" onSubmit={onAuthSubimt}>
        <Input {...emailInput}></Input>
        <Input {...passwordInput}></Input>
      </form>
      <button onClick={authorizing}>{authType}</button>
      <button onClick={changeAuthType}>{goToAuthType} 하러 가기</button>
    </div>
  );
};

export default Auth;
