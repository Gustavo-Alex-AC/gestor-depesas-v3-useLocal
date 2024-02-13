import React, { useEffect, useState } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import style from "./Graph.module.css";

const ExpenseChart = ({ incomes, expenses }) => {
  const [combinedData, setCombinedData] = useState([]);

  function formatDate(dateString) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('pt-PT', options);
  }

  useEffect(() => {
    const aggregateData = (data, type) => {
      const aggregated = {};
      data.forEach((item) => {
        const date = formatDate(item.date);
        if (aggregated[date]) {
          aggregated[date][type] += Number(item.amount);
        } else {
          aggregated[date] = { date, [type]: Number(item.amount)};
        }
      });
      return Object.values(aggregated);
    };

    const incomeData = aggregateData(incomes, 'income');
    const expenseData = aggregateData(expenses, 'expense');

    const combinedData = incomeData.map((incomeItem) => {
      const matchingExpense = expenseData.find((expenseItem) => expenseItem.date === incomeItem.date);
      return {
        date: incomeItem.date,
        income: Number(incomeItem.income),
        expense: matchingExpense ? matchingExpense.expense : 0,
      };
    });

    setCombinedData(combinedData);
  }, [incomes, expenses]);

  return (
    <div className={style.chartContainer}>
      <h2>Receita vs Despesa</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={combinedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tick={{ fontSize: '1.4rem' }} />
          <YAxis  tick={{ fontSize: '1.4rem' }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="income" name="Receita" stroke="green" strokeWidth={3} />
          <Line type="monotone" dataKey="expense" name="Despesa" stroke="red" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseChart;
