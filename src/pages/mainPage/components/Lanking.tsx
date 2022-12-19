import React from "react";
import { rankingList } from "../../../services/mock/ranking";

const Lanking = () => {
  return (
    <div>
      <h3>ranking</h3>
      {/* 랭킹이 없을때는 일단 공란으로 내비두기  */}
      <ul>
        {rankingList.map((rank) => (
          <li key={rank.userId}>{rank.userId}</li>
        ))}
      </ul>
    </div>
  );
};

export default Lanking;
