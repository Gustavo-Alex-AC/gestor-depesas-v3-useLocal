import { useData } from "../contexts/DataContext";
import ExpenseChart from "../graphs/LineGraph";
import DoughnutChart from "../graphs/DoughnutChart";
import style from "./Dashboard.module.css"
import RecentTransaction from "./RecentTransaction";
import AddWidget from "./AddWidget";
import Sidebar from "./Sidebar";
import MensagemDashboardVazio from "./MensagemDashboardVazio";


const colorIn = [
    '#1f78b4', // Blue
    '#33a02c', // Green
    '#e31a1c', // Red
    '#ff7f00', // Orange
    '#6a3d9a', // Purple
    '#a6cee3', // Light Blue
    '#b2df8a', // Light Green
    '#fb9a99', // Light Red
    '#fdbf6f', // Light Orange
    '#cab2d6'  // Light Purple
    // Add more colors as needed
  ];
  
  const colorEx = [
    '#2ca02c', // Green
    '#d62728', // Dark Red
    '#ff7f0e', // Orange
    '#9467bd', // Violet
    '#8c564b', // Brown
    '#1f77b4', // Dark Blue
    '#17becf', // Cyan
    '#e377c2', // Pink
    '#bcbd22', // Olive
    '#7f7f7f'  // Gray
    // Add more colors as needed
  ];
  

function Dashboard(){
    const {incomes, expenses, totalIncome, totalExpense, balance, transactions, isEmpty} = useData()
   
    return <div className="main-section">
   
       <Sidebar/>

    <div className="mainbar">
      {isEmpty ? <MensagemDashboardVazio/> : 
      <> 
      <h1>Dashboard</h1>
       <div className={style.graphContainer}>
                <ExpenseChart incomes={incomes} expenses={expenses}/>

                <div className={style.totalContainer}>

                      <div className={style.total}>
                <p className={style.paraBlue}>Kz</p>
                    <div className={style.text}>
                        <h2>Saldo</h2>
                        <h1>{balance.toFixed(2)}</h1>
                    </div>
                </div>
               

                    <div className={style.total}>
                    <p className={style.paraGreen}>Kz</p>
                        <div className={style.text}>
                            <h2>Total Receita</h2>
                            <h1>{totalIncome.toFixed(2)}</h1>
                        </div>
                    </div>
                    <div className={style.total}>
                        <p className={style.paraRed}>Kz</p>
                        <div className={style.text}>
                            <h2>Total Despesa</h2>
                            <h1>{totalExpense.toFixed(2)}</h1>
                        </div>
                    </div>
                    </div>
                
                <DoughnutChart data={incomes} colors={colorIn} filter={"income"}/>
                <DoughnutChart data={expenses} colors={colorEx} filter={"expense"} />
                <RecentTransaction transactions={transactions} />
                <AddWidget/> 
                
             </div>
            </>}
    </div>
    </div>
}

export default Dashboard;