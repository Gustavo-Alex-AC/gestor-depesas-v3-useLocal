import style from "./RecentAddItem.module.css"

function RecentAddItem({transaction, getIcon}){

    function formatDate(dateString) {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(dateString).toLocaleDateString('pt-PT', options);
      }

    return <div>
            <div className={style.item}>
                <p>{getIcon(transaction.category)} {transaction.category}</p>
                <p>{formatDate(transaction.date)}</p>
                <p>{transaction.amount}</p>
            </div>
            </div>
}

export default RecentAddItem;