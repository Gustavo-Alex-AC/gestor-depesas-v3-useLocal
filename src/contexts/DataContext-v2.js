import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from "../pages/auth/AuthContext";

const DataContext = createContext();

function DataProvider({ children }) {
  const { user } = useAuth();
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch incomes and expenses when the component mounts
    fetchIncomes();
    fetchExpenses();
  }, [incomes, expenses, user]); // Include user in the dependency array to trigger a re-fetch when the user changes

  const fetchIncomes = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/incomes', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setIncomes(response.data);
    } catch (error) {
      console.error('Error fetching incomes', error);
      // Handle unauthorized or other errors here
      if (error.response && error.response.status === 401) {
        // Redirect to login or handle accordingly
        console.log('User not authenticated');
      }
    }
  };
  
  const fetchExpenses = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/expenses', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setExpenses(response.data);
    } catch (error) {
      console.error('Error fetching expenses', error);
      // Handle unauthorized or other errors here
      if (error.response && error.response.status === 401) {
        // Redirect to login or handle accordingly
        console.log('User not authenticated');
      }
    }
  };
  
  const handleIncomeSubmit = async (item) => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:3001/api/incomes', item, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setIncomes([...incomes, response.data]);
      fetchIncomes();
    } catch (error) {
      console.error('Error creating incomes', error);
    } finally {
      setLoading(false);
    }
  };

  const handleExpenseSubmit = async (item) => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:3001/api/expenses', item, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setExpenses([...expenses, response.data]);
      fetchExpenses();
    } catch (error) {
      console.error('Error creating expenses', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInDelete = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`http://localhost:3001/api/incomes/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      // After successful deletion, fetch the updated list of expenses
      fetchIncomes();
    } catch (error) {
      console.error('Error deleting income', error);
    }finally{
      setLoading(false);
    }
  };

  const handleExDelete = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`http://localhost:3001/api/expenses/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      // After successful deletion, fetch the updated list of expenses
      fetchExpenses();
    } catch (error) {
      console.error('Error deleting expense', error);
    }finally{
      setLoading(false);
    }
  };

  useEffect(function(){
       function AddTransaction(){
       setTransactions(() => [...incomes, ...expenses]);
   }
   AddTransaction();
  },[incomes, expenses]);


  const totalIncome = incomes.reduce((acc, cur) => Number(cur.amount) + acc, 0);
  const totalExpense = expenses.reduce((acc, cur) => Number(cur.amount) + acc, 0);
  const balance = totalIncome - totalExpense;
  const isEmpty = incomes.length === 0 && expenses.length === 0;

   
  return <DataContext.Provider value={{
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
   isEmpty
   }}>
      {children}
  </DataContext.Provider>
}

function useData(){
  const context = useContext(DataContext);
  if (context === undefined) throw new Error("DataContext is used outside the CitiesProvider");

  return context;
}

export {DataProvider, useData}