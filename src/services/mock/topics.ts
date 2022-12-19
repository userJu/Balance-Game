interface TopicsType {
  [key: string]: {
    title: string;
    balances: { a: string; b: string }[];
  };
}

export const topics: TopicsType = {
  3: {
    title: "사랑, 연애",
    balances: [{ a: "사랑할 수 있다", b: "그러면 사랑 못한다" }],
  },
  4: {
    title: "음식",
    balances: [
      { a: "피자", b: "치킨" },
      { a: "부먹", b: "찍먹" },
    ],
  },
  5: {
    title: "동물",
    balances: [{ a: "고양이", b: "강아지" }],
  },
};
