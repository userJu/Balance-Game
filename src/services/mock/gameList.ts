import { Game } from "../../entities/game";
import { gamers } from "./gamers";

export const gameList: Game[] = [
  {
    gameId: new Date(),
    title: "사랑 우정 벨겜 ㄱㄱ",
    topic: ["사랑, 우정", "동물"],
    max_members: 8,
    members: gamers,
  },
  {
    gameId: new Date(),
    title: "사랑 기타 벨겜 ㄱㄱ2",
    topic: ["사랑, 우정", "음식"],
    max_members: 5,
    members: gamers,
  },
  {
    gameId: new Date(),
    title: "사랑 기타 벨겜 ㄱㄱ2",
    topic: ["사랑, 우정", "음식"],
    max_members: 5,
    members: gamers,
  },
];
