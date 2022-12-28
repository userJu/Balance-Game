import React from "react";

interface UseRemoveItemProps {
  array: string[];
  target: string;
}

const UseRemoveItem = ({ array, target }: UseRemoveItemProps) => {
  const index = array.indexOf(target);
  array.splice(index, 1);
  return array;
};

export default UseRemoveItem;
