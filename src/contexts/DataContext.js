import React, { createContext, useContext, useState, useEffect } from "react";
import useLocalStorageState from "../hooks/useLocalStorageState";

const DataContext = createContext();

function DataProvider({ children }) {
  const [incomes, setIncomes] = useLocalStorageState([], "incomes");
  const [expenses, setExpenses] = useLocalStorageState([], "expenses");
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   // Fetch incomes and expenses when the component mounts
  //   fetchIncomes();
  //   fetchExpenses();
  // }, [incomes, expenses]); // Include user in the dependency array to trigger a re-fetch when the user changes

  const handleIncomeSubmit = async (item) => {
    setIncomes(() => [item, ...incomes]);
  };

  const handleExpenseSubmit = async (item) => {
    setExpenses(() => [item, ...expenses]);
  };

  const handleInDelete = async (id) => {
    setIncomes(() => incomes.filter((income) => income.id !== id));
  };

  const handleExDelete = async (id) => {
    setExpenses(() => expenses.filter((expense) => expense.id !== id));
  };

  useEffect(
    function () {
      function AddTransaction() {
        setTransactions(() => [...incomes, ...expenses]);
      }
      AddTransaction();
    },
    [incomes, expenses]
  );

  const totalIncome = incomes.reduce((acc, cur) => Number(cur.amount) + acc, 0);
  const totalExpense = expenses.reduce(
    (acc, cur) => Number(cur.amount) + acc,
    0
  );
  const balance = totalIncome - totalExpense;
  const isEmpty = incomes.length === 0 && expenses.length === 0;

  //console.log("Receitas: ", incomes, "Balance:", balance);

  return (
    <DataContext.Provider
      value={{
        incomes,
        setIncomes,
        expenses,
        setExpenses,
        onInSubmit: handleIncomeSubmit,
        onExSubmit: handleExpenseSubmit,
        onInDelete: handleInDelete,
        onExDelete: handleExDelete,
        //onDelay: handleButtonClick,
        totalIncome,
        totalExpense,
        balance,
        transactions,
        loading,
        isEmpty,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

function useData() {
  const context = useContext(DataContext);
  if (context === undefined)
    throw new Error("DataContext is used outside the CitiesProvider");

  return context;
}

export { DataProvider, useData };
