// FormIncome.jsx
import style from "./Form.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useData } from "../contexts/DataContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function FormIncome() {
  const { onInSubmit, onDelay } = useData();

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

    // Generate the current date
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

    onInSubmit(transaction);
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
          id="title"
          name="title"
          placeholder="Titulo da receita"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className={style.formGroup}>
        <input
          type="number"
          id="amount"
          name="amount"
          placeholder="Valor da receita"
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
          id="category"
          name="category"
          required
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Categoria</option>
          <option value="Salário">Salário</option>
          <option value="Freelance">Freelance</option>
          <option value="Investimentos">Investimentos</option>
          <option value="Aluguel">Aluguel</option>
          <option value="Bônus">Bônus</option>
          <option value="Presentes">Presentes</option>
          <option value="Outras Receitas">Outras Receitas</option>
        </select>
      </div>

      <div className={style.formGroup}>
        <input
          type="text"
          id="reference"
          name="reference"
          placeholder="Coloque uma referencia"
          style={{ height: "80px" }} // Adjust the height as needed
          value={reference}
          onChange={(e) => setReference(e.target.value)}
          required
        />
      </div>

      <div className={style.formGroup}>
        <button type="submit" className={style.buttonIn}>
          <FontAwesomeIcon
            icon={faPlus}
            size="lg"
            className={style.btnMargin}
          />
          adicionar Receita
        </button>
      </div>
    </form>
  );
}

export default FormIncome;

/* <div className={style.formGroup}>
      <input
        type="text"
        id="dateInput"
        placeholder="Coloque a data"
        pattern="\d{2}-\d{2}-\d{4}"
        // title="Please use the format YYYY-MM-DD"
        title="Por favor use o formato DD-MM-YYYY"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      </div> */
