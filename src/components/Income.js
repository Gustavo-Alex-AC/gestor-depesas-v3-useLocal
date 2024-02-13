import { useData } from "../contexts/DataContext";
import FormIncome from "./FormIncome";
import Sidebar from "./Sidebar";
import Spinner from "./Spinner";
import Total from "./Total";
import Transaction from "./Transactions";


function Income(){
    const {totalIncome, loading} = useData();

    return (
    <div className="main-section">
        <Sidebar  />
        <div className="mainbar">
            <h1>Receitas</h1>

            <Total name={"Total Receitas"} amount={totalIncome.toFixed(2)}/>

            <div className="form-and-list">
                <FormIncome/>
               {loading ? <Spinner/> : <Transaction dataFilter={"income"}/>}
            </div>
        
        </div>
    </div>)
}

export default Income;