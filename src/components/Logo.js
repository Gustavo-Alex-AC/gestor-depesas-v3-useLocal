import logo from "../images/logo.png"
import style from "./Logo.module.css"

function Logo(){
    return <div className={style.logo}>
        <img src={logo} alt="Logo" />
        <h2>Gestor De Despesas</h2>
    </div>
}

export default Logo;