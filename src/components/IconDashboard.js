// Import necessary components and icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";
import style from "./Icon.module.css";
import { useLocation } from "react-router-dom/dist";

// Your React component
const IconDashboard = () => {
  const location = useLocation();

  return (
    <div
      className={`${style.container} ${
        location.pathname === "/dashboard" ? style.activeLink : ""
      }`}
    >
      <FontAwesomeIcon icon={faChartBar} className={style.link} />
      <p>Dashboard</p>
    </div>
  );
};

export default IconDashboard;

// color='#800080'
