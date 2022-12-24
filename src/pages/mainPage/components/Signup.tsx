import React from "react";
import Input from "../../../components/Input";
import UseInput from "../../../hooks/UseInput";
import UseMakingGamer from "../../../hooks/UseMakingGamer";
import {
  AuthType,
  checkCurrentUser,
  signup,
  updateUserProfile,
} from "../../../services/firebase/auth";
import { setNewUser } from "../../../services/firebase/firestore";

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

  const onLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const authInfo = {
      displayName: userName.value,
      email: email.value,
      password: password.value,
    };

    await signup(authInfo);
    await updateUserProfile(userName.value);
    await addNewUserOnStorage();
  };

  const addNewUserOnStorage = async () => {
    const user = await checkCurrentUser();
    console.log(user);
    if (user) {
      const { displayName, email, uid, photoURL } = user;
      console.log(displayName, email, uid, photoURL);
      const newGamer = UseMakingGamer({
        id: email || "",
        profileName: displayName || "",
        profileImage: photoURL || "",
      });
      console.log(uid, newGamer);
      setNewUser(uid, newGamer);
    }
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
