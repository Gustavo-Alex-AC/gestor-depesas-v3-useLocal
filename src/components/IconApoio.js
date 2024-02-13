import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLifeRing } from '@fortawesome/free-solid-svg-icons';
import style from "./Icon.module.css"
import { useLocation } from 'react-router-dom/dist';

// Your React component
const IconApoio = () => {
  const location = useLocation();

  return (
    <div  className={`${style.container} ${location.pathname === "/apoio" ? style.activeLink : ""}`} >
    <FontAwesomeIcon icon={faLifeRing} className={style.link}  />
    <p>Apoio</p>
    </div>
  );
};

export default  IconApoio;