import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from "./Graph.module.css";
import {faDollarSign, faMoneyBillAlt, faBriefcase, faChartLine, faHouseUser, faGift, faHamburger, faCar, faHome, faHospital, faGraduationCap, faGamepad, faLightbulb, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const categoryIconsEx = {
  'Alimentação': faHamburger,
  'Transporte': faCar,
  'Moradia': faHome,
  'Saúde': faHospital,
  'Educação': faGraduationCap,
  'Lazer': faGamepad,
  'Serviços Públicos': faLightbulb,
  'Outras Despesas': faQuestionCircle,
};

const categoryIconsIn = {
  'Salário': faMoneyBillAlt,
  'Freelance': faBriefcase,
  'Investimentos': faChartLine,
  'Aluguel': faHouseUser,
  'Bônus': faGift,
  'Presentes': faGift,
  'Outras Receitas': faDollarSign,
};

const convertAmountsToNumber = (data) => {
  return data.map(item => ({
    ...item,
    amount: Number(item.amount),
  }));
};

const DoughnutChart = ({ data, colors, filter }) => {
  const categoryIcons = filter === "income" ? categoryIconsIn : categoryIconsEx;

  // Convert amounts to numbers
  const processedData = convertAmountsToNumber(data);

  return (
    <div className={style.chartContainer}>
      {filter === "income" ? <h2>Receitas por categorias</h2> : <h2>Despesas por categorias</h2>}

      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={processedData}
            dataKey="amount"
            nameKey="category"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {processedData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            layout="horizontal"
            align="center"
            verticalAlign="top"
            iconSize={14}
            iconType="circle"
            formatter={(value) => (
              <span style={{ marginRight: 10 }}>
                <FontAwesomeIcon icon={categoryIcons[value]} size="lg" />
                {value}
              </span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DoughnutChart;
