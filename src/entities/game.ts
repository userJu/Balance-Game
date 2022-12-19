export interface Game {
  gameId: string;
  title: string;
  owner: string;
  topic: number[];
  max_members: number;
  createDate: Date;
}
