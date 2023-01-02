import { Gamer } from "./gamer";

export interface Game {
  gameId: object | Date; // firestore에서 들어올 때는 object, 보낼 때는 Date를 사용. 좋지 않은 타입 정의라고 생각한다
  title: string;
  topic: string[];
  max_members: number;
  members: Gamer[];
}

export interface GameWithDocsRef extends Game {
  docRef?: string;
}
