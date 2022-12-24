import { Gamer } from "../entities/gamer";

const UseMakingGamer = ({
  id,
  profileName,
  profileImage,
  level = 1,
}: Gamer) => {
  const newGamer = {
    id,
    profileName,
    profileImage,
    level,
  };
  return newGamer;
};

export default UseMakingGamer;
