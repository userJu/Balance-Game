import React from "react";
import UserCard from "../../../components/UserCard";
import { Gamer } from "../../../entities/gamer";
import { logout } from "../../../services/firebase/auth";
import { gamer } from "../../../services/mock/gamer";

interface UserInfoProps {
  setUserLogout: () => void;
  user: Gamer;
}

const UserInfo = ({ setUserLogout, user }: UserInfoProps) => {
  const onLogoutClick = () => {
    logout();
    setUserLogout();
  };

  return (
    <div>
      <h3>user 정보</h3>
      <UserCard {...user}></UserCard>
      <button onClick={onLogoutClick}>로그아웃</button>
    </div>
  );
};

export default UserInfo;
