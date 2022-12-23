import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

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

  return (
    <div>
      {authType === "Login" ? <Login /> : <Signup />}
      <button onClick={changeAuthType}>{goToAuthType} 하러 가기</button>
    </div>
  );
};

export default Auth;
