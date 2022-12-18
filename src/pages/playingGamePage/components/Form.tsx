import React from "react";

const Form = (props: React.PropsWithChildren) => {
  return (
    <form action="submit">
      <label htmlFor=""></label>
      {props.children}
      <button>전송</button>
    </form>
  );
};

export default Form;
