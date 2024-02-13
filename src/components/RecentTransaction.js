import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './RecentAddItem.module.css'
import {
  faMoneyBillAlt,
  faBriefcase,
  faChartLine,
  faHouseUser,
  faGift,
  faDollarSign,
  faHamburger,
  faCar,
  faHome,
  faHospital,
  faGraduationCap,
  faGamepad,
  faLightbulb,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';
import RecentAddItem from './RecentAddItem';

const TransactionList = ({ transactions }) => {
  const [recentTransactions, setRecentTransactions] = useState([]);

  useEffect(() => {
    // Sort transactions by date in descending order
    const sortedTransactions = transactions.slice().sort((a, b) => new Date(b.date) - new Date(a.date));

    // Take the most recent 5 transactions
    const recent = sortedTransactions.slice(0, 5);

    setRecentTransactions(recent);
  }, [transactions]);

  const getIcon = (category) => {
    const iconMap = {
      'Salário': faMoneyBillAlt,
      'Freelance': faBriefcase,
      'Investimentos': faChartLine,
      'Aluguel': faHouseUser,
      'Bônus': faGift,
      'Presentes': faGift,
      'Outras Receitas': faDollarSign,
      'Alimentação': faHamburger,
      'Transporte': faCar,
      'Moradia': faHome,
      'Saúde': faHospital,
      'Educação': faGraduationCap,
      'Lazer': faGamepad,
      'Serviços Públicos': faLightbulb,
      'Outras despesas': faQuestionCircle,
    };

    const icon = iconMap[category];
    if (icon) {
      return <FontAwesomeIcon icon={icon} size="lg" />;
    }
    return null;
  };

  return (
    <div className={style.container}>
        <h2>Transações recentes</h2>

            <div className={style.headers}>
                <h3>Categoria</h3>
                <h3>Data</h3>
                <h3>Valor</h3>
            </div>

        {recentTransactions.map((transaction) => <RecentAddItem transaction={transaction} getIcon={getIcon} key={transaction.id}/>)}
    </div>
  );
};

export default TransactionList;

       