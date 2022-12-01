import { useEffect } from "react";
import { To, useNavigate } from "react-router-dom";

function Redirect({ to }: { to: To }) {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(to);
  });

  return null;
}

export default Redirect;
