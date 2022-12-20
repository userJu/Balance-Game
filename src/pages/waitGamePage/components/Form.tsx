import React, { ReactNode } from "react";

interface FormProps {
  children: ReactNode;
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form = ({ children, handleFormSubmit }: FormProps) => {
  return (
    <form action="submit" onSubmit={handleFormSubmit}>
      <label htmlFor=""></label>
      {children}
      <button>전송</button>
    </form>
  );
};

export default Form;
