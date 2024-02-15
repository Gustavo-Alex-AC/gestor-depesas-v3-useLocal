import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>
        Pagina não foi encontrada(404). Brevemente será superado esse error 😢
      </h1>
      <button onClick={navigate(-1)}>Voltar</button>
    </div>
  );
}
