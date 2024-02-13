
import { useData } from "../contexts/DataContext";
import TransactionItem from "./TransactionItem";

function Transaction({dataFilter}){
    const {incomes, expenses, onInDelete, onExDelete} = useData();
    const datas = dataFilter === "income" ? incomes : expenses;
    const onDelete = dataFilter === "income" ? onInDelete : onExDelete;  

    return <div>
    {datas.map((data) => <TransactionItem data={data} key={data.id} dataFilter={dataFilter} onDelete={onDelete}/>)}
    </div>
}

export default Transaction;