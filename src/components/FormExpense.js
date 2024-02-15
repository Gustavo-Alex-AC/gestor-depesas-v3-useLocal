import style from "./Form.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useData } from "../contexts/DataContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function FormExpense() {
  const { onExSubmit, onDelay } = useData();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [reference, setReference] = useState("");

  // const getCurrentDate = () => {
  //   const currentDate = new Date();
  //   const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  //   const day = String(currentDate.getDate()).padStart(2, "0");
  //   const year = currentDate.getFullYear();
  //   return `${year}-${month}-${day}`;
  // };

  function handleSubmit(e) {
    e.preventDefault();

    //const currentDate = getCurrentDate();
    const id = crypto.randomUUID();

    const transaction = {
      id,
      title,
      amount,
      date,
      category,
      reference,
    };

    onExSubmit(transaction);
    onDelay();

    setTitle("");
    setAmount("");
    setDate("");
    setCategory("");
    setReference("");
  }

  return (
    <form
      className={`${style.formContainer} ${style.mainBar}`}
      onSubmit={handleSubmit}
    >
      <div className={style.formGroup}>
        <input
          type="text"
          placeholder="Titulo da despesa"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className={style.formGroup}>
        <input
          type="number"
          placeholder="Valor da despesa"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          required
        />
      </div>

      <div className={style.formGroup}>
        <DatePicker
          selected={date}
          onChange={(date) => setDate(date)}
          placeholderText="Coloque a data"
        />
      </div>

      <div className={style.formGroup}>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Categoria</option>
          <option value="Alimentação">Alimentação</option>
          <option value="Transporte">Transporte</option>
          <option value="Moradia">Moradia</option>
          <option value="Saúde">Saúde</option>
          <option value="Educação">Educação</option>
          <option value="Lazer">Lazer</option>
          <option value="Serviços Públicos">Serviços Públicos</option>
          <option value="Outras despesas">Outras despesas</option>
        </select>
      </div>

      <div className={style.formGroup}>
        <input
          type="text"
          placeholder="Coloque uma referencia"
          style={{ height: "80px" }} // Adjust the height as neededvalue={reference}
          value={reference}
          onChange={(e) => setReference(e.target.value)}
          required
        />
      </div>

      <div className={style.formGroup}>
        <button type="submit" className={style.buttonEx}>
          <FontAwesomeIcon
            icon={faPlus}
            size="lg"
            className={style.btnMargin}
          />
          adicionar Despesa
        </button>
      </div>
    </form>
  );
}

export default FormExpense;

/* <div className={style.formGroup}>
<input
  type="text"
  placeholder="Coloque a data"
  pattern="\d{2}-\d{2}-\d{4}"
  title="Por favor use o formato DD-MM-YYYY" 
  value={date}
  onChange={(e) => setDate(e.target.value)}
/>
</div> */
