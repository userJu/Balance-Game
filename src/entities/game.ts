
import { Gamer } from "./gamer";

export interface Game {
  gameId: string;
  title: string;
  owner: string;
  topic: number[];
  max_members: number;

  members: Gamer[];

  createDate: Date;
}
