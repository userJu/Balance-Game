import React from "react";
import styled from "styled-components";
import { Gamer } from "../entities/gamer";
import { colors } from "../style/styles";

const UserCardContainer = styled.div`
  border: 1px solid gray;
  width: 90%;
  height: 90%;
  margin: auto;
  text-align: center;
`;

const ImageCover = styled.div`
  width: 80%;
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

const UserCard = ({
  id = "",
  profileName = "",
  profileImage = "",
  level = "",
}: Gamer) => {
  // const { id, profileName, profileImage, level } = gamer;
  return (
    <UserCardContainer>
      <ImageCover>
        <Image src={profileImage} alt="" />
      </ImageCover>
      <UserName>{level ? `LV.${level} ${profileName}` : "x"}</UserName>
    </UserCardContainer>
  );
};

export default UserCard;
