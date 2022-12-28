import React from "react";
import { Topic } from "../entities/topics";

interface CheckboxInputProps {
  topics: Topic[];
  handleCheckboxClick: (e: React.MouseEvent<HTMLInputElement>) => void;
}

const CheckboxInput = ({ topics, handleCheckboxClick }: CheckboxInputProps) => {
  return (
    <div>
      {topics.map((topic) => (
        <>
          <input
            type="checkbox"
            name={topic.title}
            id={topic.title}
            onClick={handleCheckboxClick}
          />
          <label htmlFor={topic.title}>{topic.title}</label>
        </>
      ))}
    </div>
  );
};

export default CheckboxInput;
