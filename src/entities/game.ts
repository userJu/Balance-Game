import { Gamer } from "./gamer";

export interface Game {
  gameId: Date;
  title: string;
  topic: string[];
  max_members: number;
  members: Gamer[];
}
