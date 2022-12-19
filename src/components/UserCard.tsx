import React from "react";
import styled from "styled-components";
import { Gamer } from "../entities/gamer";
import { colors } from "../style/styles";

const UserCardContainer = styled.div`
  border: 1px solid gray;
  width: 20%;
  height: 45%;
  text-align: center;
`;

const ImageCover = styled.div`
  width: 90px;
  height: 90px;
  margin: auto;
  background-color: ${colors.gray20};
`;
const Image = styled.img`
  background-color: ${colors.gray20};
`;

const UserName = styled.p`
  background-color: ${colors.gray30};
`;

interface UserCardProps {
  gamer: Gamer;
}

const UserCard = ({ gamer }: UserCardProps) => {
  console.log(gamer);
  const { id, profileName, profileImage, level } = gamer;
  return (
    <UserCardContainer>
      <ImageCover>
        <Image src={profileImage} alt="" />
      </ImageCover>
      <UserName>
        LV.{level} {profileName}
      </UserName>
    </UserCardContainer>
  );
};

export default UserCard;
