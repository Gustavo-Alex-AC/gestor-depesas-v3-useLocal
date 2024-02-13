import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import style from "./Icon.module.css"
import { useLocation } from 'react-router-dom/dist';

// Your React component
const IconIntruction = () => {
  const location = useLocation();

  return (
    <div  className={`${style.container} ${location.pathname === "/instrucoes" ? style.activeLink : ""}`} >
      <FontAwesomeIcon icon={faQuestionCircle} className={style.link}  />
      <p>Instruções</p>
    </div>
  );
};

export default  IconIntruction;