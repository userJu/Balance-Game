import React, { useState } from "react";

const UseInput = (initialValue: string | "") => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  };

  const resetValue = () => {
    setValue("");
  };

  return { value, onChange, resetValue };
};

export default UseInput;
