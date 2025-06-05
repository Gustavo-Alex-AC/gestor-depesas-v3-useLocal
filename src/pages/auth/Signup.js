import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import style from "./AuthForm.module.css";

function SignUp() {
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Conta criada com sucesso. Faça login.");
        navigate("/login");
      } else {
        alert(data.message || "Erro ao criar conta");
      }
    } catch (err) {
      console.error(err);
      alert("Erro ao conectar ao servidor.");
    }
  }

  return (
    <div className={style.authContainer}>
      <form onSubmit={handleSubmit} className={style.authForm}>
        <h2>Crie sua conta</h2>
        <div className={style.formGroup}>
          <input
            type="text"
            name="name"
            placeholder="Nome completo"
            value={form.name}
            onChange={handleChange}
            required
          />
          {/* <input
            type="text"
            name="username"
            placeholder="Nome de usuário"
            value={form.username}
            onChange={handleChange}
            required
          /> */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Palavra-passe"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        <button className={style.authButton} type="submit">
          Registrar
        </button>
        <p>
          Já tem conta? <Link to="/login">Entrar</Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
