import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import style from "./Dashboard.module.css"

function AddWidget(){
    return <div className={style.addWidget}>
        <div className={style.widgetItem}>
         <FontAwesomeIcon icon={faPlus} className={style.plus}/>
        <p>Ferramenta</p>
        </div>
    </div>
}

export default AddWidget;

