import React from "react";
import styled from "styled-components";
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

const UserCard = () => {
  return (
    <UserCardContainer>
      <ImageCover>
        <Image src="" alt="" />
      </ImageCover>
      <UserName>귀여운 야옹이</UserName>
    </UserCardContainer>
  );
};

export default UserCard;
