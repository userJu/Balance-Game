import React from "react";
import UserCard from "../../../components/UserCard";
import { gamer } from "../../../services/mock/gamer";

const UserInfo = () => {
  return (
    <div>
      <h3>user 정보</h3>
      <UserCard {...gamer}></UserCard>
    </div>
  );
};

export default UserInfo;
