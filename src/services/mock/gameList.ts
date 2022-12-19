import { Game } from "../../entities/game";
import { gamers } from "./gamers";

export const gameList: Game[] = [
  {
    gameId: "1",
    title: "사랑 우정 벨겜 ㄱㄱ",
    owner: "캐슈",
    topic: [3, 4],
    max_members: 8,
    members: gamers,
    createDate: new Date(),
  },
  {
    gameId: "2",
    title: "사랑 기타 벨겜 ㄱㄱ2",
    owner: "캐슈2",
    topic: [3, 5],
    max_members: 5,
    members: gamers,
    createDate: new Date(),
  },
];
