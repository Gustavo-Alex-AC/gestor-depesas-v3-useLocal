import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import style from "./AuthForm.module.css";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/dashboard");
      } else {
        alert(data.message || "Erro ao fazer login");
      }
    } catch (err) {
      console.error(err);
      alert("Erro ao conectar ao servidor.");
    }
  }

  return (
    <div className={style.authContainer}>
      <form onSubmit={handleSubmit} className={style.authForm}>
        <h2>Entrar</h2>
        <div className={style.formGroup}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={style.formGroup}>
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
          Entrar
        </button>
        <p>
          Não tem conta? <Link to="/signup">Criar conta</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
