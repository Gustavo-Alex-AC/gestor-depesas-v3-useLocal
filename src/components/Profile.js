import useLocalStorageState from "../hooks/useLocalStorageState";
import alterProfile from "../images/profileImg1.jpg";
import style from "./Profile.module.css";

function Profile() {
  const [name, setName] = useLocalStorageState([], "utilizador");

  return (
    <div className={style.profile}>
      <img className={style.profileImg} src={alterProfile} alt="Profile" />
      <div className={style.profileText}>
        <p className={style.app}>Utilizador</p>
        <p className={style.userName}>{name ? name : "Unknown"}</p>
      </div>
    </div>
  );
}

export default Profile;
