// SignIn.js
import { Link } from "react-router-dom";
import style from "./Auth.module.css"; // Adjust the path accordingly
import useLocalStorageState from "../../hooks/useLocalStorageState";

const Welcome = () => {
  const [username, setUsername] = useLocalStorageState([], "utilizador");

  function handleClick() {
    setUsername("");
  }

  return (
    <div className={style.signUpContainer}>
      <div className={style.signUpWithGoogle}>
        <h2>Bem-vindo ao Gestor De Despesa</h2>
        <p>Descomplique suas finanças e alcance seus objetivos.</p>

        <div className={style.formGroup}>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Primeiro e Ultimo nome..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className={style.buttonContainer} onClick={handleClick}>
          <Link to="/dashboard" className={style.botaoEntrar}>
            Entrar
          </Link>
          {/* <Link to="/signUp" className={style.botaoDespesaEstilo}>
        Registrar
        </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
