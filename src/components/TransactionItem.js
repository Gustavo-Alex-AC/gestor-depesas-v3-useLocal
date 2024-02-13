import style from "./TransactionItem.module.css";
import { FaTrash } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faDollarSign, faCalendarAlt, faComment, faMoneyBillAlt, faBriefcase, faChartLine, faHouseUser,faGift, faHamburger
  ,faCar
  ,faHome
  ,faHospital
  ,faGraduationCap
  ,faGamepad
  ,faLightbulb, faQuestionCircle} from '@fortawesome/free-solid-svg-icons';

const iconMapping = {
  // Income categories
  'Salário': faMoneyBillAlt,
  'Freelance': faBriefcase,
  'Investimentos': faChartLine,
  'Aluguel': faHouseUser,
  'Bônus': faGift,
  'Presentes': faGift,
  'Outras Receitas': faDollarSign,

  // Expense categories
  'Alimentação': faHamburger,
  'Transporte': faCar,
  'Moradia': faHome,
  'Saúde': faHospital,
  'Educação': faGraduationCap,
  'Lazer': faGamepad,
  'Serviços Públicos': faLightbulb,
  'Outras despesas': faQuestionCircle,
};

const getIcon = (category, isIncome) => {
  const icon = iconMapping[category];
  return icon ? <FontAwesomeIcon icon={icon} size="lg" /> : null;
};

const TransactionItem = ({ data, onDelete, dataFilter }) => {
  const color = dataFilter === "income" ? 'green' : 'red';

  function formatDate(dateString) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('pt-PT', options);
  }

  return (
    <div className={style.item}>
      <div className={style.detailsContainer}>
        <div className={style.icon}>{getIcon(data.category, dataFilter === "income")}</div>
        <div>
          <div className={style.categoryContainer}>
            <FontAwesomeIcon icon={faCircle} color={color} size="sm" />
            <p>{data.category}</p>
          </div>
          <div className={style.datails}>
            <div className={style.detailsItem}><FontAwesomeIcon icon={faDollarSign}  size="lg" />  <p>{data.amount}</p></div>
            <div className={style.detailsItem}> <FontAwesomeIcon icon={faCalendarAlt}  size="lg" /> <p>{formatDate(data.date)}</p></div>
            <div className={style.detailsItem}><FontAwesomeIcon icon={faComment}  size="lg" />  <p>{data.reference}</p></div>
          </div>
        </div>
      </div>
      <button className={style.button} onClick={() => onDelete(data.id)}>
        <FaTrash size="2rem"/>
      </button>
    </div>
  );
};

export default TransactionItem;
