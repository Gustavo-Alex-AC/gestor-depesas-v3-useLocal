import { Link } from 'react-router-dom';
import style from "./MensagemDashboardVazio.module.css";

const MensagemDashboardVazio = () => {
  return (
    <div className={style.containerMsg}>
      <h1 >Nenhuma receita ou despesa registrada ainda.</h1>
      <h2 >Adicione sua primeira receita ou despesa para começar!</h2>
      <div className={style.buttonContainer}>
        <Link to="/receitas" className={style.botaoReceitaEstilo}>
          Adicionar Receita
        </Link>
        <Link to="/despesas" className={style.botaoDespesaEstilo}>
          Adicionar Despesa
        </Link>
      </div>
    </div>
  );
};





export default MensagemDashboardVazio;

