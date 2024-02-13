import style from "./Total.module.css"

function Total({name, amount}){
    return <div className={style.totalReceita}>
       <h2>{name}: Kz {amount}</h2>
    </div>
}

export default Total;