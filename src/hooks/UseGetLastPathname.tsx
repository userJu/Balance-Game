import React from "react";

const UseGetLastPathname = (pathname: string) => {
  const dividedPathname = pathname.split("/");
  return dividedPathname.at(-1);
};

export default UseGetLastPathname;
