import Sidebar from "./Sidebar";
import Total from "./Total";
import FormExpense from "./FormExpense";
import Transaction from "./Transactions";
import { useData } from "../contexts/DataContext";
import Spinner from "./Spinner";

function Expense(){
    const {totalExpense, loading} = useData();

    return (
     <div className="main-section">
        <Sidebar  />
        <div className="mainbar">
            <h1>Despesas</h1>

            <Total name={"Total Despesas"} amount={totalExpense.toFixed(2)}/>

            <div className="form-and-list">
            <FormExpense/>
            {loading ? <Spinner/> : <Transaction dataFilter={"expense"}/> }
            </div>
        </div>
    </div>)
}

export default Expense;