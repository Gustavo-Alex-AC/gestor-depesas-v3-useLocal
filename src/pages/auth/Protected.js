import { useEffect } from "react";
import useLocalStorageState from "../../hooks/useLocalStorageState";
import { useNavigate } from "react-router-dom";

function Protected({ children }) {
  const [username, setUsername] = useLocalStorageState([], "utilizador");
  const navigate = useNavigate();

  useEffect(
    function () {
      if (username.length === 0) navigate("/");
    },
    [navigate, username]
  );

  return username ? children : null;
}

export default Protected;
